import { Button } from "@/components/ui/button"

export function Privacy() {
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
            <a href="/about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
          </nav>
          <Button variant="outline" className="text-foreground border-foreground/20 hover:bg-primary hover:text-primary-foreground hover:border-primary">
            Sign In
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Privacy Policy
          </h1>
          <p className="text-lg text-foreground/70 mb-8 text-center max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-foreground/60 text-center">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="space-y-12">
              
              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    We collect information you provide directly to us, such as when you create an account, 
                    participate in learning activities, or contact us for support.
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Types of Information:</h3>
                    <ul className="space-y-2">
                      <li>• Account information (email, username, profile details)</li>
                      <li>• Learning progress and quiz responses</li>
                      <li>• Community contributions and interactions</li>
                      <li>• Technical information (device type, browser, IP address)</li>
                      <li>• Blockchain wallet addresses for stamp verification</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    We use the information we collect to provide, maintain, and improve our services, 
                    personalize your learning experience, and communicate with you.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-3">Service Provision:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Deliver personalized learning content</li>
                        <li>• Track learning progress and achievements</li>
                        <li>• Enable community features and interactions</li>
                        <li>• Process blockchain stamp verification</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-3">Improvement & Communication:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Analyze usage patterns to improve features</li>
                        <li>• Send important service updates</li>
                        <li>• Provide customer support</li>
                        <li>• Ensure platform security and integrity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blockchain & Data Transparency */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Blockchain & Data Transparency</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    LearnStamp uses blockchain technology to verify learning achievements. This means certain 
                    information becomes part of a public, immutable record.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Blockchain Data:</h3>
                    <ul className="space-y-2">
                      <li>• Learning stamps and achievements are recorded on the U2U blockchain</li>
                      <li>• Wallet addresses and transaction hashes are publicly visible</li>
                      <li>• Personal information is never stored on the blockchain</li>
                      <li>• You control which achievements to make public</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    We do not sell, trade, or rent your personal information to third parties. We may share 
                    information only in specific circumstances outlined below.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">With Your Consent</h3>
                      <p className="text-sm">When you explicitly agree to share information with third parties or make your learning achievements public.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Service Providers</h3>
                      <p className="text-sm">With trusted partners who help us operate our platform, subject to strict confidentiality agreements.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Legal Requirements</h3>
                      <p className="text-sm">When required by law or to protect our rights, users, or the public from harm.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Encryption</h3>
                      <p className="text-sm">Data encrypted in transit and at rest</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Access Control</h3>
                      <p className="text-sm">Strict access controls and authentication</p>
                    </div>
                    <div className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">Regular Audits</h3>
                      <p className="text-sm">Continuous security monitoring and updates</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    You have certain rights regarding your personal information. Contact us to exercise these rights.
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Access & Portability</h3>
                        <p className="text-sm">Request a copy of your personal data</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Correction</h3>
                        <p className="text-sm">Update or correct inaccurate information</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Deletion</h3>
                        <p className="text-sm">Request deletion of your personal data</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Opt-out</h3>
                        <p className="text-sm">Unsubscribe from marketing communications</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                    <p className="font-medium text-foreground mb-2">LearnStamp Privacy Team</p>
                    <p>Email: privacy@learnstamp.xyz</p>
                    <p>Response time: Within 48 hours</p>
                  </div>
                </div>
              </div>

            </div>
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
              <a href="/privacy" className="text-foreground hover:text-foreground transition-colors font-medium">Privacy</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
              <a href="https://x.com/learnstamp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}