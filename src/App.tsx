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
            <img src="/logo.png" alt="LearnStamp" className="h-16" />
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
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <img src="/logo.png" alt="LearnStamp" className="h-12" />
            <div className="flex items-center gap-4">
              <Button variant="ghost">About</Button>
              <Button variant="ghost">Features</Button>
              <Button variant="outline">Sign In</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                LearnStamp
              </h1>
              <p className="text-2xl md:text-3xl text-foreground font-medium">
                Proof-of-understanding for every video
              </p>
              <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Transform passive video watching into active learning with timestamped micro-quizzes. 
                Verify your understanding and earn blockchain-verified stamps at moments that matter most.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button size="lg" className="text-lg px-12 py-6 h-auto">
                Start Learning
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-12 py-6 h-auto"
                onClick={() => setShowDemo(true)}
              >
                Try Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              How LearnStamp Works
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Revolutionary learning technology that makes video education interactive, verifiable, and community-driven
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-6 rounded-lg bg-background border">
              <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">⏱️</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Timestamp-First Learning</h3>
              <p className="text-foreground/70">
                Micro-quizzes appear precisely where confusion typically happens, ensuring you grasp key concepts in real-time
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-background border">
              <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Community-Refined Quality</h3>
              <p className="text-foreground/70">
                Questions are proposed, edited, and ranked by learners like you, creating the highest quality educational content
              </p>
            </div>
            
            <div className="text-center space-y-4 p-6 rounded-lg bg-background border">
              <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-4xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">Verifiable Achievements</h3>
              <p className="text-foreground/70">
                Correct answers mint blockchain-verified stamps on U2U, providing immutable proof of your learning journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
              <div className="text-sm text-foreground/70 font-medium">Videos Enhanced</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-foreground/70 font-medium">Stamps Earned</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
              <div className="text-sm text-foreground/70 font-medium">Retention Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-foreground/70 font-medium">Learning Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Learning?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto font-medium">
            Join thousands of learners who are already earning verified stamps and building their knowledge with LearnStamp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-12 py-6 h-auto font-semibold">
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-12 py-6 h-auto border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
              onClick={() => setShowDemo(true)}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="LearnStamp" className="h-8" />
              <span className="text-sm text-foreground/70 font-medium">© 2024 LearnStamp. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-foreground/70 font-medium">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
