
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, FileText } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b w-full py-4 px-4 md:px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-gray-900">SnapShare</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/#features" className="text-gray-700 hover:text-primary transition-colors">
            Features
          </Link>
          <Link to="/#about" className="text-gray-700 hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/#contact" className="text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
          <div className="flex space-x-2">
            <Button variant="outline" asChild>
              <Link to="/auth?mode=signin">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/auth?mode=signup">Sign Up</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="p-2 text-gray-600 hover:text-primary"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 space-y-2 bg-white border-t animate-fade-in">
          <Link to="/" 
            className="block py-2 text-gray-700 hover:text-primary transition-colors"
            onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/#features" 
            className="block py-2 text-gray-700 hover:text-primary transition-colors"
            onClick={toggleMenu}>
            Features
          </Link>
          <Link to="/#about" 
            className="block py-2 text-gray-700 hover:text-primary transition-colors"
            onClick={toggleMenu}>
            About
          </Link>
          <Link to="/#contact" 
            className="block py-2 text-gray-700 hover:text-primary transition-colors"
            onClick={toggleMenu}>
            Contact
          </Link>
          <div className="flex flex-col space-y-2 pt-2">
            <Button variant="outline" asChild>
              <Link to="/auth?mode=signin" onClick={toggleMenu}>Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/auth?mode=signup" onClick={toggleMenu}>Sign Up</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
