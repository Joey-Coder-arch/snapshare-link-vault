
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Download as DownloadIcon, File, Clock, Eye } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import PasswordPrompt from '@/components/PasswordPrompt';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Download = () => {
  const [searchParams] = useSearchParams();
  const fileId = searchParams.get('id') || 'sample-file-123';
  
  const [isPasswordProtected, setIsPasswordProtected] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [fileData] = useState({
    fileName: 'Important_Document.pdf',
    viewsRemaining: 3,
    expiryTimeString: '6 hours',
    fileSize: '2.4 MB',
  });

  const handleAuthenticate = async (password: string): Promise<boolean> => {
    // Simulate authentication process
    return new Promise((resolve) => {
      setTimeout(() => {
        if (password === '123456') {
          setIsAuthenticated(true);
          resolve(true);
        } else {
          resolve(false);
        }
      }, 1000);
    });
  };

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      
      toast({
        title: "Download started",
        description: "Your file is being downloaded.",
      });
      
      // In a real app, this would initiate a file download
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-lg animate-fade-in">
          <div className="mb-6">
            <Link to="/" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
          
          {isPasswordProtected && !isAuthenticated ? (
            <PasswordPrompt 
              fileName={fileData.fileName} 
              onAuthenticate={handleAuthenticate} 
            />
          ) : (
            <Card className="card-shadow">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center">
                      <File className="h-10 w-10 text-primary" />
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-2">{fileData.fileName}</h2>
                    
                    <p className="text-gray-500 mb-4">
                      Size: {fileData.fileSize}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-b py-4">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center mb-2 text-secondary">
                        <Eye className="h-5 w-5 mr-2" />
                        <span className="font-medium">Views</span>
                      </div>
                      <p>{fileData.viewsRemaining} remaining</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="flex items-center mb-2 text-secondary">
                        <Clock className="h-5 w-5 mr-2" />
                        <span className="font-medium">Expires</span>
                      </div>
                      <p>in {fileData.expiryTimeString}</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleDownload} 
                    disabled={isDownloading} 
                    size="lg"
                    className="w-full h-14 text-lg"
                  >
                    <DownloadIcon className="mr-2 h-5 w-5" />
                    {isDownloading ? 'Downloading...' : 'Download File'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Download;
