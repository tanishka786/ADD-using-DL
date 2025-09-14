import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-medical-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-medical-gradient p-2 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-medical-primary">AlzFinders</h1>
              <p className="text-xs text-medical-gray-600">AI Alzheimer's Detection</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#technology" className="text-medical-gray-700 hover:text-medical-primary transition-colors">
              Technology
            </a>
            <a href="#accuracy" className="text-medical-gray-700 hover:text-medical-primary transition-colors">
              Accuracy
            </a>
            <a href="#research" className="text-medical-gray-700 hover:text-medical-primary transition-colors">
              Research
            </a>
            <a href="#demo" className="text-medical-gray-700 hover:text-medical-primary transition-colors">
              Demo
            </a>
            <Button variant="default" className="bg-medical-primary hover:bg-blue-700">
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-medical-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-medical-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-medical-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#technology" className="text-medical-gray-700 hover:text-medical-primary transition-colors">
                Technology
              </a>
              <a href="#accuracy" className="text-medical-gray-700 hover:text-medical-primary transition-colors">
                Accuracy
              </a>
              <a href="#research" className="text-medical-gray-700 hover:text-medical-primary transition-colors">
                Research
              </a>
              <a href="#demo" className="text-medical-gray-700 hover:text-medical-primary transition-colors">
                Demo
              </a>
              <Button variant="default" className="bg-medical-primary hover:bg-blue-700 w-fit">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;