
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FileUploader from '@/components/FileUploader';

interface UploadData {
  fileName: string;
  password?: string;
  maxViews: number;
  expiryHours: number;
  shareUrl: string;
}

const Upload = () => {
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadData, setUploadData] = useState<UploadData | null>(null);

  const handleUploadComplete = (data: UploadData) => {
    setUploadData(data);
    setUploadComplete(true);
  };

  // If upload is complete, redirect to success page
  if (uploadComplete && uploadData) {
    // In a real app, you'd use React Router's navigate function
    // But for this demo we'll simulate navigation to a success page
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <div className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="w-full max-w-2xl">
            <div className="mb-6">
              <Link to="/upload" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80" onClick={() => setUploadComplete(false)}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Upload
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
                    <p className="font-medium">{uploadData.fileName}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Share Link</p>
                    <div className="flex items-center bg-muted rounded-md overflow-hidden">
                      <div className="px-3 py-2 flex-1 text-sm truncate">
                        {uploadData.shareUrl}
                      </div>
                      
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(uploadData.shareUrl);
                          
                          // Show toast for copied
                          const toast = document.createElement('div');
                          toast.className = 'fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-md shadow-md';
                          toast.textContent = 'Link copied to clipboard';
                          document.body.appendChild(toast);
                          
                          setTimeout(() => {
                            document.body.removeChild(toast);
                          }, 3000);
                        }}
                        className="bg-primary text-white px-4 py-2 hover:bg-primary/90"
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Password Protected</p>
                      <p className="font-medium">{uploadData.password ? 'Yes' : 'No'}</p>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Max Views</p>
                      <p className="font-medium">{uploadData.maxViews}</p>
                    </div>
                    
                    <div className="space-y-1 col-span-2">
                      <p className="text-sm text-gray-500">Expiry Time</p>
                      <p className="font-medium">
                        {uploadData.expiryHours} {uploadData.expiryHours === 1 ? 'hour' : 'hours'} from now
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Upload Your File</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Securely share your documents with customizable protection options.
            </p>
          </div>
          
          <FileUploader onUploadComplete={handleUploadComplete} />
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Upload;
