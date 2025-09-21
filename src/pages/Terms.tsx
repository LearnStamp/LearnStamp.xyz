import { Button } from "@/components/ui/button"

export function Terms() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-foreground/70 mb-8 text-center max-w-2xl mx-auto">
            Please read these terms carefully before using LearnStamp. By using our service, you agree to these terms.
          </p>
          <p className="text-sm text-foreground/60 text-center">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none">
            
            <div className="space-y-12">
              
              {/* Acceptance of Terms */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    By accessing or using LearnStamp ("the Service"), you agree to be bound by these Terms of Service 
                    ("Terms"). If you disagree with any part of these terms, you may not access the Service.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Key Points:</h3>
                    <ul className="space-y-2">
                      <li>• These terms constitute a legally binding agreement</li>
                      <li>• You must be at least 13 years old to use the Service</li>
                      <li>• We may update these terms from time to time</li>
                      <li>• Continued use after changes constitutes acceptance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Description of Service */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    LearnStamp is an interactive learning platform that enhances video education through timestamp-based 
                    quizzes, community collaboration, and blockchain-verified achievements.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-3">Core Features:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Interactive video learning with micro-quizzes</li>
                        <li>• Community-driven content creation and curation</li>
                        <li>• Blockchain-verified learning achievements</li>
                        <li>• Progress tracking and analytics</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-3">Service Availability:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Service provided "as is" and "as available"</li>
                        <li>• We may modify or discontinue features</li>
                        <li>• Maintenance and updates may cause downtime</li>
                        <li>• No guarantee of uninterrupted access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Accounts */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. User Accounts</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    To access certain features, you must create an account. You are responsible for maintaining 
                    the security of your account and all activities that occur under your account.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Account Security</h3>
                      <p className="text-sm">You must provide accurate information and keep your login credentials secure. Notify us immediately of any unauthorized access.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Account Responsibility</h3>
                      <p className="text-sm">You are responsible for all activities under your account, including content you create or share through the Service.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Account Termination</h3>
                      <p className="text-sm">We may suspend or terminate accounts that violate these terms or for any other reason at our discretion.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* User Content and Conduct */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. User Content and Conduct</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    You may contribute content to the Service, including questions, answers, and comments. 
                    You retain ownership of your content but grant us certain rights to use it.
                  </p>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Prohibited Content:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm">
                        <li>• Illegal, harmful, or offensive content</li>
                        <li>• Spam or misleading information</li>
                        <li>• Copyright or trademark infringement</li>
                        <li>• Personal attacks or harassment</li>
                      </ul>
                      <ul className="space-y-2 text-sm">
                        <li>• Malicious code or security threats</li>
                        <li>• Commercial solicitation without permission</li>
                        <li>• Impersonation of others</li>
                        <li>• Content that violates privacy rights</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Blockchain and Digital Assets */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Blockchain and Digital Assets</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    LearnStamp uses blockchain technology to create verifiable learning stamps. These digital assets 
                    are subject to additional terms and considerations.
                  </p>
                  <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">Important Considerations:</h3>
                    <ul className="space-y-2">
                      <li>• Blockchain transactions are irreversible</li>
                      <li>• You are responsible for your wallet security</li>
                      <li>• Network fees may apply for blockchain transactions</li>
                      <li>• We do not control the underlying blockchain network</li>
                      <li>• Digital stamps have no monetary value unless otherwise stated</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    The Service and its original content, features, and functionality are owned by LearnStamp 
                    and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-3">Our Rights:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• LearnStamp platform and technology</li>
                        <li>• Trademarks, logos, and branding</li>
                        <li>• Proprietary algorithms and features</li>
                        <li>• Service design and user interface</li>
                      </ul>
                    </div>
                    <div className="bg-muted/30 p-6 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-3">Your Rights:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Content you create and contribute</li>
                        <li>• Your learning achievements and stamps</li>
                        <li>• Personal data and account information</li>
                        <li>• Limited license to use the Service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimers and Limitations */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Disclaimers and Limitations</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    The Service is provided "as is" without warranties of any kind. We disclaim all warranties, 
                    express or implied, including but not limited to merchantability and fitness for a particular purpose.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-3">⚠️ Important Limitations:</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• We do not guarantee the accuracy of user-generated content</li>
                      <li>• Learning outcomes may vary and are not guaranteed</li>
                      <li>• Blockchain transactions carry inherent risks</li>
                      <li>• We are not liable for third-party content or services</li>
                      <li>• Maximum liability limited to amount paid for the Service</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Termination */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Termination</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    Either party may terminate this agreement at any time. Upon termination, your right to use 
                    the Service will cease immediately, but certain provisions will survive termination.
                  </p>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">User Termination</h3>
                      <p className="text-sm">You may delete your account at any time through your account settings or by contacting us.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Our Termination Rights</h3>
                      <p className="text-sm">We may suspend or terminate accounts for violations of these terms, illegal activity, or at our discretion.</p>
                    </div>
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">Effect of Termination</h3>
                      <p className="text-sm">Blockchain stamps remain on the network, but access to the Service and associated features will be revoked.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
                <div className="space-y-4 text-foreground/70">
                  <p>
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                    <p className="font-medium text-foreground mb-2">LearnStamp Legal Team</p>
                    <p>Email: legal@learnstamp.xyz</p>
                    <p>Response time: Within 5 business days</p>
                    <p className="text-sm mt-4">
                      These terms are governed by the laws of [Jurisdiction] and any disputes will be resolved 
                      through binding arbitration.
                    </p>
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
              <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="/terms" className="text-foreground hover:text-foreground transition-colors font-medium">Terms</a>
              <a href="https://x.com/learnstamp" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">X</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}