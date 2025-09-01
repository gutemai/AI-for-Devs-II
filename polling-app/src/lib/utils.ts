import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date)
}

export function calculatePercentage(votes: number, total: number): number {
  if (total === 0) return 0
  return Math.round((votes / total) * 100)
}

export function generateId(): string {
  return Math.random().toString(36).substr(2, 9)
}
