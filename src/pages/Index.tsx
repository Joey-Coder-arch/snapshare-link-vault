
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Eye, Clock, Link as LinkIcon, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero section */}
      <section className="hero-pattern w-full py-20 md:py-28 flex items-center">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-heading">
              Share Your Documents Securely and Easily
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              SnapShare is the simplest way to securely share your files with anyone. 
              Set passwords, view limits, and expiry times to keep your documents safe.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-base">
                <Link to="/upload">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/auth?mode=signin" className="flex items-center gap-2">
                  Sign In <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              SnapShare offers everything you need to share files securely and efficiently
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <Card className="card-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Lock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Password Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure your documents with optional password protection to ensure only 
                  authorized recipients can access your files.
                </CardDescription>
              </CardContent>
            </Card>
            
            {/* Feature 2 */}
            <Card className="card-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>View Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set maximum view counts to control how many times your file can be accessed, 
                  providing an additional layer of security.
                </CardDescription>
              </CardContent>
            </Card>
            
            {/* Feature 3 */}
            <Card className="card-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Expiry Times</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Define how long your shared links remain active. Files automatically become 
                  inaccessible after the expiry time, ensuring temporary access.
                </CardDescription>
              </CardContent>
            </Card>
            
            {/* Feature 4 */}
            <Card className="card-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <LinkIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Shareable Links</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Generate easy-to-share links for your files that can be sent via email, 
                  messaging apps, or any communication platform.
                </CardDescription>
              </CardContent>
            </Card>
            
            {/* Feature 5 */}
            <Card className="card-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Advanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Rest easy knowing your files are protected with state-of-the-art 
                  encryption and security measures throughout the sharing process.
                </CardDescription>
              </CardContent>
            </Card>
            
            {/* Feature 6 */}
            <Card className="card-shadow">
              <CardHeader className="pb-2">
                <div className="mb-2 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m15 9-6 6"></path>
                    <path d="m9 9 6 6"></path>
                  </svg>
                </div>
                <CardTitle>No Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Share files instantly without requiring recipients to create accounts 
                  or download special software to access your files.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to start sharing securely?
          </h2>
          
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Join thousands of users who trust SnapShare for their secure file sharing needs.
          </p>
          
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link to="/upload">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About SnapShare</h2>
            
            <p className="text-xl text-gray-700 mb-8">
              SnapShare was created with a simple mission: to make file sharing both secure and 
              accessible for everyone. Our platform combines enterprise-level security with an 
              intuitive user experience.
            </p>
            
            <p className="text-lg text-gray-600">
              Whether you're sharing sensitive business documents, personal files, or just sending 
              large attachments that won't fit in an email, SnapShare provides the tools you need 
              to ensure your data remains protected and controlled.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Have questions or need assistance? Our team is here to help you 
              get the most out of SnapShare.
            </p>
            
            <Button asChild size="lg" className="text-base">
              <a href="mailto:support@snapshare.com">Contact Support</a>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
