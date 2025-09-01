export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export interface Poll {
  id: string;
  title: string;
  description?: string;
  options: PollOption[];
  createdBy: string;
  createdAt: Date;
  expiresAt?: Date;
  isActive: boolean;
  totalVotes: number;
}

export interface CreatePollRequest {
  title: string;
  description?: string;
  options: string[];
  expiresAt?: Date;
}

export interface VoteRequest {
  pollId: string;
  optionId: string;
}
