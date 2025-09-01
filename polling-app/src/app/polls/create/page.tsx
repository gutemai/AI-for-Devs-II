import { CreatePollForm } from "@/components/polls/CreatePollForm"

export default function CreatePollPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create New Poll</h1>
          <p className="text-gray-600 mt-2">
            Create engaging polls for your community to vote on
          </p>
        </div>
        
        <CreatePollForm />
      </div>
    </div>
  )
}
