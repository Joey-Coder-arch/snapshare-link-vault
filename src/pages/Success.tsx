
import { useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Copy, UploadCloud } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const fileName = searchParams.get('fileName') || 'Unknown file';
  const shareUrl = searchParams.get('shareUrl') || 'https://snapshare.com/d/sample';
  const maxViews = searchParams.get('maxViews') || '10';
  const expiryHours = searchParams.get('expiryHours') || '1';
  
  // If there's no fileName provided, redirect to the upload page
  useEffect(() => {
    if (!searchParams.has('fileName')) {
      navigate('/upload');
    }
  }, [searchParams, navigate]);
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    
    toast({
      title: "Link copied!",
      description: "Share URL has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-2xl mx-auto animate-fade-in">
          <div className="mb-6">
            <Link to="/upload" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Upload
            </Link>
          </div>
          
          <Card className="card-shadow">
            <CardContent className="p-0">
              <div className="p-8 bg-gradient-to-br from-primary to-secondary">
                <div className="mx-auto w-16 h-16 bg-white rounded-full flex items-center justify-center">
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
                    className="text-primary h-8 w-8"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                
                <h2 className="mt-6 text-2xl font-bold text-white text-center">Upload Successful</h2>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">File Name</p>
                    <p className="font-medium">{fileName}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Share Link</p>
                    <div className="flex items-center bg-muted rounded-md overflow-hidden">
                      <div className="px-3 py-2 flex-1 text-sm truncate">
                        {shareUrl}
                      </div>
                      
                      <button 
                        onClick={handleCopyLink}
                        className="bg-primary text-white px-4 py-2 hover:bg-primary/90 flex items-center"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Max Views</p>
                      <p className="font-medium">{maxViews}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Expires In</p>
                      <p className="font-medium">
                        {expiryHours} {parseInt(expiryHours) === 1 ? 'hour' : 'hours'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center pt-4">
                    <Button asChild>
                      <Link to="/upload" className="inline-flex items-center">
                        <UploadCloud className="mr-2 h-4 w-4" />
                        Upload Another File
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Success;
