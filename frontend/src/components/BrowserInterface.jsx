import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Globe, Lock, AlertTriangle, Eye, EyeOff, CreditCard, Calendar, User } from 'lucide-react';

const BrowserInterface = ({ onChoice, currentStep }) => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolder: ''
  });
  const [showCVV, setShowCVV] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFormSubmit = () => {
    onChoice({
      type: 'dangerous',
      step: currentStep,
      description: 'Submitted personal and financial information',
      data: formData
    });
  };

  const handleSuspiciousDetection = () => {
    onChoice({
      type: 'safe',
      step: currentStep,
      description: 'Detected suspicious website and refused to enter information'
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-emerald-400 mb-2">Browser Simulation</h2>
        <p className="text-slate-400">You clicked the link and are now on the registration website.</p>
      </div>

      {/* Browser Window */}
      <Card className="bg-slate-800/30 border-slate-700">
        {/* Browser Header */}
        <div className="bg-slate-900 px-4 py-3 rounded-t-lg border-b border-slate-700">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          
          {/* Address Bar */}
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-3 py-2">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-red-400 text-sm">Not Secure</span>
            <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-sm text-slate-300">
              http://inae-youth-conclave2025.org/register
            </div>
            <Badge variant="outline" className="text-red-400 border-red-400 text-xs">
              Suspicious
            </Badge>
          </div>
        </div>

        <CardContent className="p-0">
          {currentPage === 'landing' && (
            <div className="p-8">
              {/* Fake INAE Website */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">IN</span>
                  </div>
                  <h1 className="text-3xl font-bold text-white">INAE Youth Conclave 2025</h1>
                </div>
                <p className="text-slate-400">Indian National Academy of Engineering</p>
              </div>

              <div className="max-w-2xl mx-auto space-y-6">
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-orange-400 mb-4">🎉 Congratulations!</h2>
                  <p className="text-slate-300 mb-4">
                    You have been selected for the INAE Youth Conclave 2025. Complete your registration 
                    within <span className="text-red-400 font-bold">23:47:32</span> to secure your spot!
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <p className="text-emerald-400">✓ FREE Registration (₹5,000 Value)</p>
                      <p className="text-emerald-400">✓ Industry Expert Sessions</p>
                      <p className="text-emerald-400">✓ Networking Opportunities</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-emerald-400">✓ Certificate from INAE</p>
                      <p className="text-emerald-400">✓ Exclusive Workshops</p>
                      <p className="text-emerald-400">✓ Career Guidance Sessions</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-700/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Registration</h3>
                  <p className="text-slate-400 mb-6">
                    To complete your registration, we need some basic information and a small processing fee of ₹99.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-12"
                      onClick={() => setCurrentPage('registration')}
                    >
                      Complete Registration Now
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="border-slate-500 text-slate-400 hover:bg-slate-700"
                      onClick={handleSuspiciousDetection}
                    >
                      This looks suspicious...
                    </Button>
                  </div>
                </div>

                {/* Red Flags for Security-Aware Users */}
                <div className="text-xs text-slate-500 space-y-1">
                  <p>⚠️ Notice: URL doesn't match official INAE domain</p>
                  <p>⚠️ Notice: No HTTPS encryption</p>
                  <p>⚠️ Notice: Asking for payment for "free" registration</p>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'registration' && (
            <div className="p-8">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Complete Your Registration
                </h2>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <Card className="bg-slate-700/30 border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                      <Input
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                      <Input
                        placeholder="College/University Name"
                        value={formData.college}
                        onChange={(e) => handleInputChange('college', e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                    </CardContent>
                  </Card>

                  {/* Payment Information */}
                  <Card className="bg-slate-700/30 border-slate-600">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        Payment Information
                        <Badge className="bg-red-500 text-white ml-2">Processing Fee: ₹99</Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input
                        placeholder="Cardholder Name"
                        value={formData.cardHolder}
                        onChange={(e) => handleInputChange('cardHolder', e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                      <Input
                        placeholder="Card Number (1234 5678 9012 3456)"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="bg-slate-800 border-slate-600 text-white"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          className="bg-slate-800 border-slate-600 text-white"
                        />
                        <div className="relative">
                          <Input
                            type={showCVV ? "text" : "password"}
                            placeholder="CVV"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            className="bg-slate-800 border-slate-600 text-white pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCVV(!showCVV)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                          >
                            {showCVV ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex gap-4">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-12"
                      onClick={handleFormSubmit}
                    >
                      Submit Registration & Pay ₹99
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="border-slate-500 text-slate-400 hover:bg-slate-700"
                      onClick={handleSuspiciousDetection}
                    >
                      Cancel
                    </Button>
                  </div>

                  <div className="text-xs text-slate-500 text-center">
                    <p>🔒 Your information is secure and encrypted</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BrowserInterface;