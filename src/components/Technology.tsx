import { Brain, Cpu, Database, Microscope, Target, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Technology = () => {
  const technologies = [
    {
      icon: Brain,
      title: "Deep Neural Networks",
      description: "Advanced convolutional neural networks trained on 50,000+ medical images to identify subtle patterns invisible to human eyes.",
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10"
    },
    {
      icon: Microscope,
      title: "Multi-Modal Analysis",
      description: "Simultaneous processing of MRI, PET, and clinical data for comprehensive diagnosis with unprecedented accuracy.",
      color: "text-medical-secondary",
      bgColor: "bg-medical-secondary/10"
    },
    {
      icon: Target,
      title: "Early Detection",
      description: "Identifies biomarkers and structural changes up to 10 years before clinical symptoms manifest.",
      color: "text-medical-accent",
      bgColor: "bg-medical-accent/10"
    },
    {
      icon: Cpu,
      title: "Real-Time Processing",
      description: "GPU-accelerated inference delivers results in under 30 seconds, enabling rapid clinical decision-making.",
      color: "text-medical-success",
      bgColor: "bg-medical-success/10"
    },
    {
      icon: Database,
      title: "Continuous Learning",
      description: "Self-improving algorithms that adapt and enhance accuracy with every new case processed.",
      color: "text-medical-warning",
      bgColor: "bg-medical-warning/10"
    },
    {
      icon: Zap,
      title: "Cloud Integration",
      description: "Seamless integration with existing PACS systems and hospital workflows for effortless deployment.",
      color: "text-medical-primary",
      bgColor: "bg-medical-primary/10"
    }
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-medical-accent/10 text-medical-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Cpu className="w-4 h-4 mr-2" />
            Advanced Technology
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-gray-900 mb-6">
            How Our AI Works
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Our breakthrough neural network architecture combines multiple AI techniques 
            to achieve unparalleled accuracy in Alzheimer's detection.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Card key={index} className="medical-card group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${tech.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`w-6 h-6 ${tech.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-medical-gray-900">
                    {tech.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-medical-gray-600 text-base leading-relaxed">
                    {tech.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Neural Network Visualization */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-medical-primary/5 via-medical-secondary/5 to-medical-accent/5 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-medical-gray-900 mb-6">
                  Neural Network Architecture
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-medical-gray-900 mb-2">Image Preprocessing</h4>
                      <p className="text-medical-gray-600">Standardization and enhancement of MRI/PET scan quality</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-medical-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-medical-gray-900 mb-2">Feature Extraction</h4>
                      <p className="text-medical-gray-600">Deep learning identifies 1000+ biomarkers and patterns</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-medical-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-medical-gray-900 mb-2">Risk Assessment</h4>
                      <p className="text-medical-gray-600">Multi-layer analysis produces probability scores and staging</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Visual Representation */}
              <div className="relative">
                <div className="neural-gradient rounded-xl p-8 h-64 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Brain className="w-16 h-16 mx-auto mb-4 brain-pulse" />
                    <h4 className="text-xl font-bold mb-2">AI Processing</h4>
                    <p className="text-sm opacity-90">Real-time neural analysis</p>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-3">
                  <Database className="w-6 h-6 text-medical-primary" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-3">
                  <Target className="w-6 h-6 text-medical-success" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;