import { NextRequest, NextResponse } from "next/server"
import { Poll, CreatePollRequest } from "@/types"

// Mock data - replace with database calls
let mockPolls: Poll[] = [
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
  }
]

export async function GET() {
  try {
    // TODO: Implement actual database query
    // This returns mock data for now
    
    return NextResponse.json(mockPolls)
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch polls" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: CreatePollRequest = await request.json()
    const { title, description, options, expiresAt } = body

    // TODO: Implement actual poll creation logic
    // This is just a placeholder that creates mock data
    
    if (!title || !options || options.length < 2) {
      return NextResponse.json(
        { error: "Title and at least 2 options are required" },
        { status: 400 }
      )
    }

    const newPoll: Poll = {
      id: Date.now().toString(),
      title,
      description,
      options: options.map((text, index) => ({
        id: `${Date.now()}-${index}`,
        text,
        votes: 0
      })),
      createdBy: "current-user", // TODO: Get from auth context
      createdAt: new Date(),
      expiresAt: expiresAt ? new Date(expiresAt) : undefined,
      isActive: true,
      totalVotes: 0
    }

    mockPolls.push(newPoll)

    return NextResponse.json(newPoll, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create poll" },
      { status: 500 }
    )
  }
}
