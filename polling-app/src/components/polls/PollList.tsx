"use client"

import { Poll } from "@/types"
import { PollCard } from "./PollCard"

interface PollListProps {
  polls: Poll[]
  onVote?: (pollId: string, optionId: string) => void
  showResults?: boolean
}

export function PollList({ polls, onVote, showResults = false }: PollListProps) {
  const handleVote = (pollId: string, optionId: string) => {
    if (onVote) {
      onVote(pollId, optionId)
    }
  }

  if (polls.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground">
          No polls found
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          Create the first poll to get started!
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {polls.map((poll) => (
        <PollCard
          key={poll.id}
          poll={poll}
          onVote={(optionId) => handleVote(poll.id, optionId)}
          showResults={showResults}
        />
      ))}
    </div>
  )
}
