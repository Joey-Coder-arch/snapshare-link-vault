
import { useState } from 'react';
import { Upload, Clock, Lock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface FileUploaderProps {
  onUploadComplete: (data: { 
    fileName: string;
    password?: string;
    maxViews: number;
    expiryHours: number;
    shareUrl: string;
  }) => void;
}

const FileUploader = ({ onUploadComplete }: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isPasswordProtected, setIsPasswordProtected] = useState(false);
  const [password, setPassword] = useState('');
  const [maxViews, setMaxViews] = useState(10);
  const [expiryHours, setExpiryHours] = useState(1);
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulating upload process
    setTimeout(() => {
      setIsUploading(false);
      
      // Generate a fake URL (in a real app this would come from the server)
      const randomId = Math.random().toString(36).substring(2, 10);
      const shareUrl = `https://snapshare.com/d/${randomId}`;
      
      onUploadComplete({
        fileName: file.name,
        password: isPasswordProtected ? password : undefined,
        maxViews,
        expiryHours,
        shareUrl
      });
    }, 1500);
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto card-shadow">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* File upload area */}
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center ${
              dragActive ? 'border-primary bg-primary/5' : 'border-gray-300'
            } transition-colors`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="file-upload"
              className="hidden"
              onChange={handleFileChange}
            />
            <label 
              htmlFor="file-upload" 
              className="flex flex-col items-center cursor-pointer"
            >
              <Upload 
                className={`h-12 w-12 mb-4 ${file ? 'text-primary' : 'text-gray-400'}`} 
              />
              
              {file ? (
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-900">{file.name}</p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Click or drag to change file
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-lg font-medium text-gray-900">
                    Drag and drop your file here
                  </p>
                  <p className="text-sm text-gray-500">
                    or click to browse files
                  </p>
                </div>
              )}
            </label>
          </div>

          {/* Security options */}
          <div className="space-y-4 pt-4 border-t">
            <h3 className="text-lg font-medium">Security Options</h3>
            
            {/* Password protection */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Lock className="h-4 w-4 text-gray-500" />
                <Label htmlFor="password-protection" className="font-medium">
                  Password Protection
                </Label>
              </div>
              <Switch
                id="password-protection"
                checked={isPasswordProtected}
                onCheckedChange={setIsPasswordProtected}
              />
            </div>
            
            {isPasswordProtected && (
              <div className="pl-6">
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="max-w-xs"
                />
              </div>
            )}
            
            {/* Max views slider */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Label htmlFor="max-views" className="font-medium">
                  Max Views: {maxViews}
                </Label>
              </div>
              <div className="pl-0 pr-6 py-2">
                <Slider
                  id="max-views"
                  min={1}
                  max={50}
                  step={1}
                  defaultValue={[10]}
                  value={[maxViews]}
                  onValueChange={(values) => setMaxViews(values[0])}
                />
              </div>
            </div>
            
            {/* Expiry time slider */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <Label htmlFor="expiry-hours" className="font-medium">
                  Expires after: {expiryHours} {expiryHours === 1 ? 'hour' : 'hours'}
                </Label>
              </div>
              <div className="pl-0 pr-6 py-2">
                <Slider
                  id="expiry-hours"
                  min={1}
                  max={72}
                  step={1}
                  defaultValue={[1]}
                  value={[expiryHours]}
                  onValueChange={(values) => setExpiryHours(values[0])}
                />
              </div>
            </div>
          </div>

          {/* Upload button */}
          <Button 
            onClick={handleUpload} 
            disabled={!file || isUploading}
            className="w-full"
            size="lg"
          >
            {isUploading ? 'Uploading...' : 'Upload File'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FileUploader;
