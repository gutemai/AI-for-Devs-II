"use client"

import { Poll } from "@/types"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDate, calculatePercentage } from "@/lib/utils"

interface PollCardProps {
  poll: Poll
  onVote?: (optionId: string) => void
  showResults?: boolean
}

export function PollCard({ poll, onVote, showResults = false }: PollCardProps) {
  const handleVote = (optionId: string) => {
    if (onVote) {
      onVote(optionId)
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">{poll.title}</CardTitle>
        {poll.description && (
          <CardDescription>{poll.description}</CardDescription>
        )}
        <div className="text-sm text-muted-foreground">
          Created {formatDate(poll.createdAt)}
          {poll.expiresAt && ` • Expires ${formatDate(poll.expiresAt)}`}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {poll.options.map((option) => (
            <div key={option.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{option.text}</span>
                {showResults && (
                  <span className="text-sm text-muted-foreground">
                    {option.votes} votes ({calculatePercentage(option.votes, poll.totalVotes)}%)
                  </span>
                )}
              </div>
              {showResults && (
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${calculatePercentage(option.votes, poll.totalVotes)}%`
                    }}
                  />
                </div>
              )}
              {!showResults && poll.isActive && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleVote(option.id)}
                  className="w-full"
                >
                  Vote
                </Button>
              )}
            </div>
          ))}
        </div>
        
        {showResults && (
          <div className="pt-4 border-t">
            <div className="text-sm text-muted-foreground">
              Total votes: {poll.totalVotes}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
