import { Upload, FileImage, Brain, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const Demo = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-medical-primary/10 text-medical-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Brain className="w-4 h-4 mr-2" />
            Interactive Demo
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-medical-gray-900 mb-6">
            Try Our AI Analysis
          </h2>
          <p className="text-xl text-medical-gray-600 max-w-3xl mx-auto">
            Experience our Alzheimer's detection technology with sample MRI and PET scans, 
            or upload your own medical images for analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Upload Demo */}
          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="text-2xl text-medical-gray-900 flex items-center">
                <Upload className="w-6 h-6 mr-3 text-medical-primary" />
                Upload Medical Scan
              </CardTitle>
              <CardDescription className="text-base">
                Upload MRI or PET scan images for AI analysis (DICOM, PNG, JPG supported)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-medical-gray-300 rounded-xl p-8 text-center hover:border-medical-primary transition-colors cursor-pointer group">
                <div className="w-16 h-16 mx-auto bg-medical-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-medical-primary/20 transition-colors">
                  <FileImage className="w-8 h-8 text-medical-primary" />
                </div>
                <h3 className="text-lg font-semibold text-medical-gray-900 mb-2">
                  Drag & drop your scan here
                </h3>
                <p className="text-medical-gray-600 mb-4">or use the options below</p>
                <div className="flex gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    className="border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white"
                    onClick={() => {
                      const input = document.createElement('input');
                      input.type = 'file';
                      input.accept = '.dcm,.png,.jpg,.jpeg';
                      input.multiple = true;
                      input.onchange = (e) => handleFileSelect((e.target as HTMLInputElement).files);
                      input.click();
                    }}
                  >
                    Select Files
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-medical-secondary text-medical-secondary hover:bg-medical-secondary hover:text-white"
                    onClick={() => {
                      const input = document.createElement('input');
                      input.type = 'file';
                      input.accept = 'image/*';
                      input.capture = 'environment';
                      input.onchange = (e) => handleFileSelect((e.target as HTMLInputElement).files);
                      input.click();
                    }}
                  >
                    Take Photo
                  </Button>
                </div>
              </div>

              {/* Selected Files Preview */}
              {selectedFiles.length > 0 && (
                <div className="bg-medical-gray-50 rounded-lg p-4 border border-medical-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-medical-gray-900">
                      {selectedFiles.length} file{selectedFiles.length > 1 ? 's' : ''} selected
                    </h4>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedFiles([])}
                      className="text-medical-gray-600 hover:text-medical-gray-900"
                    >
                      Clear
                    </Button>
                  </div>
                  <div className="grid grid-cols-1 gap-2 max-h-32 overflow-y-auto">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded border">
                        <FileImage className="w-4 h-4 text-medical-primary" />
                        <span className="text-sm text-medical-gray-700 truncate flex-1">{file.name}</span>
                        <span className="text-xs text-medical-gray-500">{(file.size / 1024 / 1024).toFixed(1)} MB</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Privacy Notice */}
              <div className="bg-medical-gray-50 rounded-lg p-4 border border-medical-gray-200">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-medical-success mt-0.5" />
                  <div className="text-sm">
                    <p className="font-semibold text-medical-gray-900 mb-1">Privacy Protected</p>
                    <p className="text-medical-gray-600">
                      All uploads are encrypted and automatically deleted after analysis. 
                      HIPAA compliant processing.
                    </p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-medical-primary hover:bg-blue-700 text-white py-3">
                Analyze Scan
                <Brain className="w-5 h-5 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Sample Results */}
          <Card className="medical-card">
            <CardHeader>
              <CardTitle className="text-2xl text-medical-gray-900 flex items-center">
                <Brain className="w-6 h-6 mr-3 text-medical-secondary" />
                Sample Analysis Results
              </CardTitle>
              <CardDescription className="text-base">
                Example output from our AI analysis of a 68-year-old patient
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Risk Assessment */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-medical-gray-900">Alzheimer's Risk Assessment</h4>
                  <span className="text-2xl font-bold text-medical-warning">Medium Risk</span>
                </div>
                
                <div className="w-full bg-medical-gray-200 rounded-full h-3">
                  <div className="bg-gradient-to-r from-medical-success via-medical-warning to-red-500 h-3 rounded-full w-3/5"></div>
                </div>
                
                <div className="text-sm text-medical-gray-600">
                  Confidence: <span className="font-semibold">94.7%</span>
                </div>
              </div>

              {/* Key Findings */}
              <div className="space-y-3">
                <h4 className="font-semibold text-medical-gray-900">Key Findings</h4>
                
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-4 h-4 text-medical-warning" />
                  <span className="text-sm text-medical-gray-700">Mild hippocampal atrophy detected</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <AlertCircle className="w-4 h-4 text-medical-warning" />
                  <span className="text-sm text-medical-gray-700">Amyloid beta accumulation patterns</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-medical-success" />
                  <span className="text-sm text-medical-gray-700">Normal cortical thickness</span>
                </div>
              </div>

              {/* Biomarkers */}
              <div className="space-y-3">
                <h4 className="font-semibold text-medical-gray-900">Biomarker Analysis</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-medical-gray-600">Tau protein:</span>
                    <span className="font-semibold text-medical-warning ml-2">Elevated</span>
                  </div>
                  <div>
                    <span className="text-medical-gray-600">Amyloid β:</span>
                    <span className="font-semibold text-medical-warning ml-2">Positive</span>
                  </div>
                  <div>
                    <span className="text-medical-gray-600">APOE4:</span>
                    <span className="font-semibold text-medical-success ml-2">Negative</span>
                  </div>
                  <div>
                    <span className="text-medical-gray-600">CSF ratio:</span>
                    <span className="font-semibold text-medical-gray-700 ml-2">0.67</span>
                  </div>
                </div>
              </div>

              {/* Processing Time */}
              <div className="bg-medical-gray-50 rounded-lg p-3 border border-medical-gray-200">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-medical-primary" />
                  <span className="text-sm font-semibold text-medical-gray-900">
                    Analysis completed in 23.7 seconds
                  </span>
                </div>
              </div>

              <Button variant="outline" className="w-full border-medical-secondary text-medical-secondary hover:bg-medical-secondary hover:text-white">
                View Detailed Report
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Sample Scans */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-medical-gray-900 mb-4">
              Try Sample Scans
            </h3>
            <p className="text-medical-gray-600">
              Test our AI with these anonymized medical scans from our validation dataset
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="medical-card cursor-pointer group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-medical-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-medical-gray-900 mb-2">Normal Brain (67F)</h4>
                <p className="text-sm text-medical-gray-600 mb-4">Healthy control scan for comparison</p>
                <Button variant="outline" size="sm" className="border-medical-success text-medical-success hover:bg-medical-success hover:text-white">
                  Analyze Sample
                </Button>
              </CardContent>
            </Card>

            <Card className="medical-card cursor-pointer group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-medical-warning to-red-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-medical-gray-900 mb-2">Early AD (72M)</h4>
                <p className="text-sm text-medical-gray-600 mb-4">Mild cognitive impairment stage</p>
                <Button variant="outline" size="sm" className="border-medical-warning text-medical-warning hover:bg-medical-warning hover:text-white">
                  Analyze Sample
                </Button>
              </CardContent>
            </Card>

            <Card className="medical-card cursor-pointer group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-medical-gray-900 mb-2">Moderate AD (78F)</h4>
                <p className="text-sm text-medical-gray-600 mb-4">Advanced pathological changes</p>
                <Button variant="outline" size="sm" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                  Analyze Sample
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;