import { BarChart3, TrendingUp, CheckCircle, Award, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Accuracy = () => {
  const metrics = [
    {
      value: "98.5%",
      label: "Overall Accuracy",
      description: "Across 10,000+ validated cases",
      icon: BarChart3,
      color: "text-medical-primary"
    },
    {
      value: "97.2%",
      label: "Sensitivity",
      description: "Early-stage detection rate",
      icon: TrendingUp,
      color: "text-medical-secondary"
    },
    {
      value: "99.1%",
      label: "Specificity",
      description: "Avoiding false positives",
      icon: CheckCircle,
      color: "text-medical-success"
    },
    {
      value: "95.8%",
      label: "Pre-clinical Detection",
      description: "10 years before symptoms",
      icon: Clock,
      color: "text-medical-accent"
    }
  ];

  const validationResults = [
    {
      institution: "Mayo Clinic",
      cases: "2,847",
      accuracy: "98.7%",
      specialty: "Neurology Department"
    },
    {
      institution: "Johns Hopkins",
      cases: "3,192",
      accuracy: "98.3%",
      specialty: "Radiology Institute"
    },
    {
      institution: "Cleveland Clinic",
      cases: "2,456",
      accuracy: "98.9%",
      specialty: "Neurological Institute"
    },
    {
      institution: "Stanford Medicine",
      cases: "1,889",
      accuracy: "98.1%",
      specialty: "AI Lab"
    }
  ];

  return (
    <section id="accuracy" className="py-20 bg-gradient-to-br from-medical-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-medical-success/10 text-medical-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Validated Results
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-gray-900 mb-6">
            Clinical Accuracy
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Our AI has been rigorously tested across leading medical institutions, 
            consistently achieving superior accuracy in Alzheimer's detection.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card key={index} className="medical-card text-center group hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-medical-primary/10 to-medical-secondary/10 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <CardTitle className="text-3xl font-bold text-medical-gray-900 mb-1">
                    {metric.value}
                  </CardTitle>
                  <CardDescription className="font-semibold text-medical-gray-700 text-base">
                    {metric.label}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-medical-gray-600">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Validation Results */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-medical-gray-900 mb-6">
              Multi-Center Validation
            </h3>
            <p className="text-lg text-medical-gray-600 mb-8 leading-relaxed">
              Our neural network has been independently validated across top medical centers, 
              processing over 10,000 cases with consistently high accuracy rates.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-medical-success/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-medical-success" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-gray-900">10,000+ Cases</h4>
                  <p className="text-medical-gray-600">Diverse patient population across 4 major institutions</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-medical-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-medical-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-gray-900">FDA Breakthrough Status</h4>
                  <p className="text-medical-gray-600">Designated as breakthrough device for expedited review</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-medical-secondary/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-medical-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-medical-gray-900">Peer Reviewed</h4>
                  <p className="text-medical-gray-600">Published in Nature Medicine and NEJM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Institution Results */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-medical-gray-900 mb-6">Validation Results</h4>
            {validationResults.map((result, index) => (
              <Card key={index} className="medical-card">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h5 className="font-bold text-medical-gray-900 text-lg">{result.institution}</h5>
                      <p className="text-medical-gray-600 text-sm">{result.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-medical-primary">{result.accuracy}</div>
                      <div className="text-sm text-medical-gray-600">{result.cases} cases</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-medical-gray-200 rounded-full h-2">
                    <div 
                      className="bg-medical-gradient h-2 rounded-full transition-all duration-1000" 
                      style={{ width: result.accuracy }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accuracy;