
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { AlertTriangle, Home } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <div className="bg-destructive/10 p-4 rounded-full">
              <AlertTriangle className="h-12 w-12 text-destructive" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Oops! Page not found
            </h2>
            
            <p className="text-gray-600 mb-8">
              The link you followed may be broken, expired,
              or the page may have been removed.
            </p>
            
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link to="/" className="inline-flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
