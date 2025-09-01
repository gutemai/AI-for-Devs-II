"use client"

import { useState, useEffect } from "react"
import { Poll } from "@/types"
import { PollList } from "@/components/polls/PollList"
import { Button } from "@/components/ui/button"
import { generateId } from "@/lib/utils"

// Mock data for demonstration
const mockPolls: Poll[] = [
  {
    id: "1",
    title: "What's your favorite programming language?",
    description: "Choose the programming language you enjoy working with the most",
    options: [
      { id: "1-1", text: "JavaScript/TypeScript", votes: 45 },
      { id: "1-2", text: "Python", votes: 38 },
      { id: "1-3", text: "Java", votes: 22 },
      { id: "1-4", text: "C++", votes: 15 }
    ],
    createdBy: "user1",
    createdAt: new Date("2024-01-15"),
    isActive: true,
    totalVotes: 120
  },
  {
    id: "2",
    title: "Which framework should we use for the next project?",
    description: "Vote for your preferred frontend framework",
    options: [
      { id: "2-1", text: "React", votes: 28 },
      { id: "2-2", text: "Vue", votes: 18 },
      { id: "2-3", text: "Angular", votes: 12 },
      { id: "2-4", text: "Svelte", votes: 8 }
    ],
    createdBy: "user2",
    createdAt: new Date("2024-01-14"),
    isActive: true,
    totalVotes: 66
  }
]

export default function PollsPage() {
  const [polls, setPolls] = useState<Poll[]>([])
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setPolls(mockPolls)
      setIsLoading(false)
    }, 1000)
  }, [])

  const handleVote = (pollId: string, optionId: string) => {
    // TODO: Implement actual voting logic
    setPolls(prevPolls => 
      prevPolls.map(poll => {
        if (poll.id === pollId) {
          return {
            ...poll,
            options: poll.options.map(option => 
              option.id === optionId 
                ? { ...option, votes: option.votes + 1 }
                : option
            ),
            totalVotes: poll.totalVotes + 1
          }
        }
        return poll
      })
    )
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading polls...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Active Polls</h1>
          <p className="text-gray-600 mt-2">Vote on current polls or view results</p>
        </div>
        <div className="flex gap-4">
          <Button
            variant={showResults ? "default" : "outline"}
            onClick={() => setShowResults(!showResults)}
          >
            {showResults ? "Hide Results" : "Show Results"}
          </Button>
          <Button asChild>
            <a href="/polls/create">Create Poll</a>
          </Button>
        </div>
      </div>
      
      <PollList 
        polls={polls} 
        onVote={handleVote}
        showResults={showResults}
      />
    </div>
  )
}
