import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Globe, Lock, AlertTriangle, Eye, EyeOff, CreditCard, Calendar, User, Terminal, Shield, Wifi } from 'lucide-react';

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
      description: 'Submitted personal and financial information to suspicious website',
      data: formData
    });
  };

  const handleSuspiciousDetection = () => {
    onChoice({
      type: 'safe',
      step: currentStep,
      description: 'Detected suspicious website characteristics and aborted session'
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Terminal Header */}
      <div className="mb-6 bg-black/80 border border-green-500/30 rounded p-4 font-mono">
        <div className="flex items-center gap-2 text-green-400">
          <Terminal className="h-5 w-5" />
          <span className="text-green-600">root@secverse:</span>
          <span className="text-blue-400">/browser</span>
          <span className="text-green-400">$ ./launch_browser.sh --url=suspicious</span>
        </div>
        <div className="mt-2 text-red-400 text-sm animate-pulse">
          [WARNING] Entering potentially hostile web environment...
        </div>
      </div>

      {/* Browser Simulation Window */}
      <Card className="bg-black/40 border-red-500/30">
        {/* Browser Header */}
        <div className="bg-black/80 px-4 py-3 rounded-t-lg border-b border-red-500/30">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-400 font-mono text-sm ml-2">[BROWSER EMULATION MODE]</span>
          </div>
          
          {/* Address Bar */}
          <div className="flex items-center gap-2 bg-red-900/20 border border-red-500/40 rounded px-3 py-2">
            <AlertTriangle className="h-4 w-4 text-red-400 animate-pulse" />
            <span className="text-red-400 text-sm font-mono">INSECURE</span>
            <div className="flex-1 bg-black/60 border border-red-500/30 rounded px-3 py-1 text-sm text-red-300 font-mono">
              http://inae-youth-conclave2025.org/register
            </div>
            <Badge variant="outline" className="text-red-400 border-red-400 text-xs font-mono animate-pulse">
              THREAT_DETECTED
            </Badge>
          </div>

          {/* Security Warnings */}
          <div className="mt-3 flex gap-2 text-xs font-mono">
            <Badge className="bg-red-900/40 text-red-300 border-red-500">NO SSL</Badge>
            <Badge className="bg-yellow-900/40 text-yellow-300 border-yellow-500">SUSPICIOUS DOMAIN</Badge>
            <Badge className="bg-red-900/40 text-red-300 border-red-500">UNVERIFIED</Badge>
          </div>
        </div>

        <CardContent className="p-0">
          {currentPage === 'landing' && (
            <div className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20">
              {/* Fake Website Content */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center animate-pulse">
                    <span className="text-white font-bold text-lg font-mono">IN</span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-orange-300 font-mono">INAE Youth Conclave 2025</h1>
                    <p className="text-red-400 text-sm font-mono">[SYSTEM] Automated Registration Portal</p>
                  </div>
                </div>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded p-6">
                  <h2 className="text-2xl font-bold text-red-300 mb-4 font-mono animate-pulse">
                    [ALERT] REGISTRATION_STATUS: SELECTED
                  </h2>
                  <div className="font-mono text-green-300 mb-4">
                    <p>$ echo "Congratulations! Authentication verified."</p>
                    <p>$ timer --countdown 23:47:32</p>
                    <p className="text-red-400 animate-pulse">> WARNING: Session expires soon!</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">
                    <div className="space-y-2">
                      <p className="text-green-400">✓ access_granted: premium_tier</p>
                      <p className="text-green-400">✓ bonus_unlocked: industry_network</p>
                      <p className="text-green-400">✓ certificate_type: verified_inae</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-green-400">✓ workshop_access: unlimited</p>
                      <p className="text-green-400">✓ mentor_sessions: exclusive</p>
                      <p className="text-green-400">✓ career_boost: guaranteed</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/60 border border-green-500/30 rounded p-6">
                  <h3 className="text-xl font-mono text-green-400 mb-4">
                    [INPUT_REQUIRED] Complete Authentication
                  </h3>
                  <div className="font-mono text-green-300 mb-4">
                    <p>$ ./process_registration.sh --fee=99 --currency=INR</p>
                    <p className="text-yellow-400">Processing fee required for verification</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      className="bg-red-900/40 border-2 border-red-500 text-red-300 hover:bg-red-900/60 h-12 font-mono"
                      onClick={() => setCurrentPage('registration')}
                    >
                      PROCEED TO REGISTER
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="border-2 border-green-500 text-green-400 hover:bg-green-900/20 font-mono"
                      onClick={handleSuspiciousDetection}
                    >
                      ABORT - SUSPICIOUS
                    </Button>
                  </div>
                </div>

                {/* Security Red Flags for Awareness */}
                <div className="bg-black/60 border border-yellow-500/30 rounded p-4">
                  <h4 className="text-yellow-400 font-mono mb-2">[SECURITY_SCAN] Anomalies Detected:</h4>
                  <div className="text-xs text-yellow-300 font-mono space-y-1">
                    <p>⚠ domain_mismatch: inae-youth.org != inae.ac.in</p>
                    <p>⚠ ssl_status: false (connection not encrypted)</p>
                    <p>⚠ payment_request: suspicious (free event charging fee)</p>
                    <p>⚠ urgency_tactics: high pressure countdown detected</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentPage === 'registration' && (
            <div className="p-8 bg-gradient-to-br from-red-900/20 to-black">
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-6 font-mono">
                  <h2 className="text-2xl font-bold text-red-300 mb-2">
                    [SYSTEM] Data Collection Interface
                  </h2>
                  <p className="text-yellow-400">$ ./harvest_credentials.sh --target=student</p>
                </div>

                <div className="space-y-6">
                  {/* Personal Information */}
                  <Card className="bg-black/60 border-red-500/30">
                    <CardHeader>
                      <CardTitle className="text-red-300 font-mono flex items-center gap-2">
                        <User className="h-5 w-5" />
                        [STAGE_1] Personal Data Extraction
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input
                        placeholder="$ input --field=full_name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="bg-black border-red-500/50 text-green-400 font-mono"
                      />
                      <Input
                        type="email"
                        placeholder="$ input --field=email_address"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-black border-red-500/50 text-green-400 font-mono"
                      />
                      <Input
                        placeholder="$ input --field=phone_number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-black border-red-500/50 text-green-400 font-mono"
                      />
                      <Input
                        placeholder="$ input --field=institution"
                        value={formData.college}
                        onChange={(e) => handleInputChange('college', e.target.value)}
                        className="bg-black border-red-500/50 text-green-400 font-mono"
                      />
                    </CardContent>
                  </Card>

                  {/* Payment Information */}
                  <Card className="bg-black/60 border-red-500/30">
                    <CardHeader>
                      <CardTitle className="text-red-300 font-mono flex items-center gap-2">
                        <CreditCard className="h-5 w-5" />
                        [STAGE_2] Financial Credential Harvesting
                        <Badge className="bg-red-500 text-white ml-2 font-mono">CRITICAL_DATA</Badge>
                      </CardTitle>
                      <p className="text-yellow-400 text-sm font-mono">
                        $ payment_processor --amount=99 --capture=all_details
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Input
                        placeholder="$ input --field=cardholder_name"
                        value={formData.cardHolder}
                        onChange={(e) => handleInputChange('cardHolder', e.target.value)}
                        className="bg-black border-red-500/50 text-green-400 font-mono"
                      />
                      <Input
                        placeholder="$ input --field=card_number --format=xxxx-xxxx-xxxx-xxxx"
                        value={formData.cardNumber}
                        onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                        className="bg-black border-red-500/50 text-green-400 font-mono"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="$ input --field=expiry --format=MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          className="bg-black border-red-500/50 text-green-400 font-mono"
                        />
                        <div className="relative">
                          <Input
                            type={showCVV ? "text" : "password"}
                            placeholder="$ input --field=security_code"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            className="bg-black border-red-500/50 text-green-400 font-mono pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowCVV(!showCVV)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400 hover:text-red-300"
                          >
                            {showCVV ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="bg-red-900/20 border border-red-500/40 rounded p-4">
                    <div className="text-red-400 font-mono text-sm mb-4">
                      <p>[MALWARE] Keylogger active - capturing all inputs</p>
                      <p>[NETWORK] Data transmission to: suspicious-server.onion</p>
                      <p>[STATUS] Identity theft protocol: READY</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="flex-1 bg-red-900/60 border-2 border-red-500 text-red-300 hover:bg-red-900/80 h-12 font-mono"
                      onClick={handleFormSubmit}
                    >
                      ./submit --execute-payment --harvest-data
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="border-2 border-green-500 text-green-400 hover:bg-green-900/20 font-mono"
                      onClick={handleSuspiciousDetection}
                    >
                      ./exit --abort-session
                    </Button>
                  </div>

                  <div className="text-xs text-green-500 text-center font-mono">
                    <p className="animate-pulse">🔒 [FAKE] Your data is "secure" and "encrypted"</p>
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