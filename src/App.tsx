import { useState } from "react"
import { Button } from "@/components/ui/button"
import { VideoDemo } from "@/components/VideoDemo"

function App() {
  const [showDemo, setShowDemo] = useState(false)

  if (showDemo) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">LearnStamp Demo</h1>
            <Button 
              variant="outline" 
              onClick={() => setShowDemo(false)}
            >
              ← Back to Home
            </Button>
          </div>
          <VideoDemo />
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-background text-foreground">
      <div className="max-w-2xl mx-auto text-center space-y-8 p-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            LearnStamp
          </h1>
          <p className="text-xl text-muted-foreground">
            Proof-of-understanding for every video
          </p>
          <p className="text-lg text-muted-foreground">
            Timestamped micro-quizzes at moments that matter. Learn together—and prove it.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Stamp your understanding
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8"
            onClick={() => setShowDemo(true)}
          >
            Try the demo
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="space-y-2">
            <h3 className="font-semibold">Timestamp-first</h3>
            <p className="text-sm text-muted-foreground">
              Micro-checks occur where confusion happens
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Crowd-refined clarity</h3>
            <p className="text-sm text-muted-foreground">
              Questions are proposed, edited, and ranked by the community
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold">Verifiable proof</h3>
            <p className="text-sm text-muted-foreground">
              Correct answers mint non-transferable stamps on U2U
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
