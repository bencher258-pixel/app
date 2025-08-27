import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Shield, AlertTriangle, TrendingUp, Users, DollarSign, Globe, RefreshCw, Terminal, Skull, CheckCircle } from 'lucide-react';

const GameResult = ({ isHacked, choices, onRestart, stats }) => {
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Terminal Header */}
      <div className="bg-black/80 border border-green-500/30 rounded p-4 font-mono">
        <div className="flex items-center gap-2 text-green-400">
          <Terminal className="h-5 w-5" />
          <span className="text-green-600">root@secverse:</span>
          <span className="text-blue-400">/results</span>
          <span className="text-green-400">$ ./analyze_session.sh --final-report</span>
        </div>
      </div>

      {/* Result Header */}
      <div className="text-center space-y-6">
        {isHacked ? (
          <div className="space-y-6">
            <div className="bg-red-900/20 border-2 border-red-500 rounded-lg p-8">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-red-500/20 rounded-full border-4 border-red-500 animate-pulse">
                  <Skull className="h-20 w-20 text-red-400" />
                </div>
              </div>
              <div className="font-mono space-y-4">
                <h2 className="text-5xl font-bold text-red-400 animate-pulse">
                  [COMPROMISED]
                </h2>
                <div className="text-red-300 space-y-2">
                  <p>$ echo "SECURITY BREACH DETECTED"</p>
                  <p>$ status: IDENTITY_STOLEN</p>
                  <p>$ data_integrity: CORRUPTED</p>
                  <p className="text-red-400">$ financial_status: AT_RISK</p>
                </div>
                <div className="bg-black/60 border border-red-500/30 rounded p-4 mt-6">
                  <p className="text-red-200 text-lg">
                    Your digital identity has been harvested. Personal and financial data 
                    transmitted to malicious actors. Recovery protocol required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-green-900/20 border-2 border-green-500 rounded-lg p-8">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-green-500/20 rounded-full border-4 border-green-500 animate-pulse">
                  <Shield className="h-20 w-20 text-green-400" />
                </div>
              </div>
              <div className="font-mono space-y-4">
                <h2 className="text-5xl font-bold text-green-400 animate-pulse">
                  [SECURED]
                </h2>
                <div className="text-green-300 space-y-2">
                  <p>$ echo "THREAT NEUTRALIZED"</p>
                  <p>$ status: PROTECTED</p>
                  <p>$ data_integrity: INTACT</p>
                  <p className="text-green-400">$ security_level: ENHANCED</p>
                </div>
                <div className="bg-black/60 border border-green-500/30 rounded p-4 mt-6">
                  <p className="text-green-200 text-lg">
                    Excellent security awareness! You successfully identified and neutralized 
                    the phishing attack. Your vigilance prevented data compromise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Choices Review */}
      <Card className="bg-slate-800/30 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Your Journey</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {choices.map((choice, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-slate-700/30 rounded-lg">
              <div className={`p-2 rounded-full ${
                choice.type === 'dangerous' ? 'bg-red-500/20' : 'bg-emerald-500/20'
              }`}>
                {choice.type === 'dangerous' ? (
                  <AlertTriangle className="h-5 w-5 text-red-400" />
                ) : (
                  <Shield className="h-5 w-5 text-emerald-400" />
                )}
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Step {index + 1}</p>
                <p className="text-slate-400 text-sm">{choice.description}</p>
              </div>
              <Badge 
                variant="outline" 
                className={choice.type === 'dangerous' ? 'text-red-400 border-red-400' : 'text-emerald-400 border-emerald-400'}
              >
                {choice.type === 'dangerous' ? 'Risky' : 'Safe'}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Statistics */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-white text-center">
          Real Cybersecurity Statistics
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-400 mb-2">
                {stats.phishingIncrease}
              </div>
              <p className="text-slate-400 text-sm">
                Increase in phishing attacks (2024)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/30">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-orange-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {stats.victimPercentage}
              </div>
              <p className="text-slate-400 text-sm">
                Of people fall for phishing emails
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-500/10 to-red-500/10 border-yellow-500/30">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {stats.averageLoss}
              </div>
              <p className="text-slate-400 text-sm">
                Average financial loss per victim
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/30">
            <CardContent className="p-6 text-center">
              <Globe className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {stats.dailyAttacks}
              </div>
              <p className="text-slate-400 text-sm">
                Phishing attacks per day globally
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <Card className="bg-slate-800/30 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Did You Know?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-3">How to Stay Safe:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Always verify sender's email address</li>
                  <li>• Check for HTTPS and legitimate URLs</li>
                  <li>• Never provide sensitive info via email</li>
                  <li>• Be suspicious of urgent requests</li>
                  <li>• Use multi-factor authentication</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-orange-400 mb-3">Common Red Flags:</h4>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>• Generic greetings ("Dear User")</li>
                  <li>• Spelling and grammar errors</li>
                  <li>• Suspicious links and attachments</li>
                  <li>• Requests for immediate action</li>
                  <li>• Too-good-to-be-true offers</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Restart Button */}
      <div className="text-center">
        <Button 
          size="lg"
          onClick={onRestart}
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-3"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          Try Another Scenario
        </Button>
      </div>
    </div>
  );
};

export default GameResult;