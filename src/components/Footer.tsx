import { Brain, Github, Mail, ExternalLink, Shield, FileText, Users } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-medical-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-medical-gradient p-2 rounded-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AlzFinders</h3>
                <p className="text-sm text-gray-400">AI Alzheimer's Detection</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Revolutionary neural network technology for early Alzheimer's detection, 
              enabling better patient outcomes through advanced AI analysis.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/BryceFuller/Alz-Finders" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-medical-gray-800 p-2 rounded-lg hover:bg-medical-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:research@alzfinders.ai"
                className="bg-medical-gray-800 p-2 rounded-lg hover:bg-medical-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Technology</h4>
            <ul className="space-y-3">
              <li>
                <a href="#technology" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Neural Networks
                </a>
              </li>
              <li>
                <a href="#accuracy" className="text-gray-300 hover:text-white transition-colors">
                  Validation Results
                </a>
              </li>
              <li>
                <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
                  Interactive Demo
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  API Documentation
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Research</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Published Papers
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Clinical Trials
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Datasets
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Collaboration
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Compliance</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  HIPAA Compliance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <FileText className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FDA Validation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-medical-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 AlzFinders Research Team. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm flex items-center space-x-6">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-medical-success" />
                FDA Breakthrough Device
              </span>
              <span>98.5% Clinical Accuracy</span>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-gray-500 text-center">
            This AI diagnostic tool is for research and clinical decision support only. 
            Not intended for direct patient diagnosis without physician oversight.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;