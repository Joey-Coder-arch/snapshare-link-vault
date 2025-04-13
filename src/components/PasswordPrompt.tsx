
import { useState } from 'react';
import { Lock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface PasswordPromptProps {
  fileName: string;
  onAuthenticate: (password: string) => Promise<boolean>;
}

const PasswordPrompt = ({ fileName, onAuthenticate }: PasswordPromptProps) => {
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!password.trim()) {
      setError('Please enter the password');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      const isAuthenticated = await onAuthenticate(password);
      
      if (!isAuthenticated) {
        setError('Incorrect password. Please try again.');
        toast({
          title: "Authentication Failed",
          description: "The password you entered is incorrect.",
          variant: "destructive",
        });
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      toast({
        title: "Authentication Error",
        description: "There was a problem verifying the password.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto card-shadow">
      <CardHeader className="text-center">
        <div className="mx-auto bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
          <Lock className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>Password Protected</CardTitle>
        <CardDescription>
          This file requires a password to access
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="file-name">File</Label>
            <Input 
              id="file-name" 
              value={fileName} 
              disabled 
              className="bg-muted"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter the file password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Verifying...' : 'Access File'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PasswordPrompt;
