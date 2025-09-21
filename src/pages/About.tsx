import { Button } from "@/components/ui/button"

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="LearnStamp" className="h-8" />
            <span className="text-xl font-bold text-foreground">LearnStamp</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-foreground/70 hover:text-foreground transition-colors">Home</a>
            <a href="/features" className="text-foreground/70 hover:text-foreground transition-colors">Features</a>
            <a href="/about" className="text-foreground hover:text-foreground transition-colors font-medium">About</a>
          </nav>
          <Button variant="outline" className="text-foreground border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">LearnStamp</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Revolutionizing video education through interactive learning, community collaboration, and blockchain verification
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                We believe that learning should be interactive, engaging, and verifiable. Traditional video education often leaves learners passive, 
                watching content without truly engaging with the material. LearnStamp changes that by making every moment of learning interactive.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                Our platform transforms passive video watching into active learning experiences through precisely timed micro-quizzes, 
                community-driven content refinement, and blockchain-verified achievements that prove your knowledge.
              </p>
            </div>
            <div className="bg-primary/10 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Interactive Learning</h3>
                    <p className="text-foreground/70 text-sm">Micro-quizzes at key moments ensure active engagement</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Community-Driven</h3>
                    <p className="text-foreground/70 text-sm">Learners collaborate to create the best educational content</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Blockchain Verified</h3>
                    <p className="text-foreground/70 text-sm">Immutable proof of learning achievements on U2U blockchain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Built by Learners, for Learners</h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Our team consists of educators, developers, and blockchain enthusiasts who are passionate about 
            transforming how people learn and verify their knowledge in the digital age.
          </p>
          <div className="flex justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Our Community
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
              <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
              <a href="https://x.com/learnstamp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}