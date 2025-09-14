import { ArrowRight, Brain, Zap, Shield, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/medical-ai-hero.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-medical-gray-50 via-white to-medical-primary-light/20 py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-medical-accent/10 text-medical-accent px-3 py-1 rounded-full text-sm font-medium">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Diagnosis
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-medical-gray-900 leading-tight">
                Early Alzheimer's
                <span className="text-medical-primary block">
                  Detection with AI
                </span>
              </h1>
              
              <p className="text-xl text-medical-gray-600 leading-relaxed">
                Advanced neural networks analyze MRI and PET scans to detect Alzheimer's disease 
                up to 10 years before symptoms appear, enabling early intervention and better outcomes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-primary">98.5%</div>
                <div className="text-sm text-medical-gray-600">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-secondary">10 years</div>
                <div className="text-sm text-medical-gray-600">Early Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-medical-accent">5,000+</div>
                <div className="text-sm text-medical-gray-600">Scans Analyzed</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-medical-primary hover:bg-blue-700 text-white px-8 py-3"
              >
                Try Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white px-8 py-3"
              >
                View Research
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-medical-gray-600">
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-medical-success" />
                HIPAA Compliant
              </div>
              <div className="flex items-center">
                <BarChart3 className="w-4 h-4 mr-2 text-medical-success" />
                FDA Validated
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="AI-powered Alzheimer's detection visualization"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              {/* Floating AI Brain Icon */}
              <div className="absolute -top-6 -left-6 bg-medical-gradient p-4 rounded-xl shadow-lg brain-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
              {/* Neural Flow Animation */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="w-12 h-12 neural-gradient rounded-lg neural-flow flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            
            {/* Background Elements */}
            <div className="absolute inset-0 bg-medical-gradient opacity-10 rounded-2xl transform rotate-3 scale-105"></div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat"></div>
      </div>
    </section>
  );
};

export default Hero;