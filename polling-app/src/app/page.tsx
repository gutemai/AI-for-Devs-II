import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Create and Vote on
          <span className="text-blue-600 block">Amazing Polls</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Build engaging polls, gather community feedback, and make data-driven decisions with our modern polling platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/polls">View Polls</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/polls/create">Create Poll</Link>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Choose PollApp?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-lg">📊</span>
                </div>
                Easy to Use
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create polls in seconds with our intuitive interface. No technical knowledge required.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">🔒</span>
                </div>
                Secure Voting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built-in security features ensure fair and accurate voting results for your community.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-lg">📱</span>
                </div>
                Real-time Results
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                See live results as votes come in. Perfect for live events and quick decision making.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of users who are already creating engaging polls and gathering valuable feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/auth/signup">Sign Up Free</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/polls">Browse Polls</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
