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

      {/* Session Analysis */}
      <Card className="bg-black/40 border-green-500/30">
        <CardHeader>
          <CardTitle className="text-green-400 font-mono">
            [SESSION_LOG] Decision Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {choices.map((choice, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-black/60 border rounded-lg border-green-500/20">
              <div className={`p-3 rounded-full border-2 ${
                choice.type === 'dangerous' 
                  ? 'bg-red-500/20 border-red-500' 
                  : 'bg-green-500/20 border-green-500'
              }`}>
                {choice.type === 'dangerous' ? (
                  <AlertTriangle className="h-6 w-6 text-red-400" />
                ) : (
                  <CheckCircle className="h-6 w-6 text-green-400" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-mono text-green-300">
                  <p className="font-bold">STEP_{index + 1}_ANALYSIS</p>
                  <p className="text-green-400 text-sm">$ {choice.description}</p>
                </div>
              </div>
              <Badge 
                variant="outline" 
                className={`font-mono ${
                  choice.type === 'dangerous' 
                    ? 'text-red-400 border-red-400' 
                    : 'text-green-400 border-green-400'
                }`}
              >
                {choice.type === 'dangerous' ? 'VULNERABLE' : 'PROTECTED'}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Real Cybersecurity Statistics */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-3xl font-mono font-bold text-green-400 mb-2">
            [GLOBAL_THREAT_INTEL] Real Statistics
          </h3>
          <p className="text-green-300 font-mono">$ fetch --source=cybersecurity_reports --year=2024</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-red-900/20 to-red-700/10 border-red-500/40 hover:border-red-400 transition-colors">
            <CardContent className="p-6 text-center">
              <TrendingUp className="h-10 w-10 text-red-400 mx-auto mb-4 animate-pulse" />
              <div className="text-4xl font-mono font-bold text-red-400 mb-2">
                {stats.phishingIncrease}
              </div>
              <p className="text-red-300 text-sm font-mono">
                phishing_attacks.increase(2024)
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-900/20 to-yellow-700/10 border-orange-500/40 hover:border-orange-400 transition-colors">
            <CardContent className="p-6 text-center">
              <Users className="h-10 w-10 text-orange-400 mx-auto mb-4 animate-pulse" />
              <div className="text-4xl font-mono font-bold text-orange-400 mb-2">
                {stats.victimPercentage}
              </div>
              <p className="text-orange-300 text-sm font-mono">
                users.fall_for_phishing()
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-yellow-900/20 to-red-700/10 border-yellow-500/40 hover:border-yellow-400 transition-colors">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-10 w-10 text-yellow-400 mx-auto mb-4 animate-pulse" />
              <div className="text-4xl font-mono font-bold text-yellow-400 mb-2">
                {stats.averageLoss}
              </div>
              <p className="text-yellow-300 text-sm font-mono">
                avg_financial_loss.victim()
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-900/20 to-purple-700/10 border-blue-500/40 hover:border-blue-400 transition-colors">
            <CardContent className="p-6 text-center">
              <Globe className="h-10 w-10 text-blue-400 mx-auto mb-4 animate-pulse" />
              <div className="text-4xl font-mono font-bold text-blue-400 mb-2">
                {stats.dailyAttacks}
              </div>
              <p className="text-blue-300 text-sm font-mono">
                attacks_per_day.global()
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Security Knowledge Base */}
        <Card className="bg-black/40 border-green-500/30">
          <CardHeader>
            <CardTitle className="text-green-400 font-mono">
              [KNOWLEDGE_BASE] Cybersecurity Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-mono font-bold text-green-400 mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  defense_protocols.txt:
                </h4>
                <div className="space-y-2 text-green-300 text-sm font-mono bg-black/60 p-4 rounded border border-green-500/20">
                  <p>• verify_sender_identity(email.from)</p>
                  <p>• check_ssl_certificate(url)</p>
                  <p>• never_share_credentials(untrusted_sites)</p>
                  <p>• enable_2fa(all_accounts)</p>
                  <p>• update_security_software()</p>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-mono font-bold text-red-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  threat_indicators.log:
                </h4>
                <div className="space-y-2 text-red-300 text-sm font-mono bg-black/60 p-4 rounded border border-red-500/20">
                  <p>• generic_greetings("Dear User")</p>
                  <p>• urgency_tactics(time_pressure)</p>
                  <p>• suspicious_domains(!legitimate)</p>
                  <p>• credential_harvesting(forms)</p>
                  <p>• too_good_to_be_true(offers)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Restart Terminal */}
      <div className="text-center space-y-4">
        <div className="bg-black/80 border border-green-500/30 rounded p-4 font-mono max-w-md mx-auto">
          <p className="text-green-400 mb-2">$ session_complete</p>
          <p className="text-green-600 text-sm">Ready for new training scenario?</p>
        </div>
        
        <Button 
          size="lg"
          onClick={onRestart}
          className="bg-black border-2 border-green-500 text-green-400 hover:bg-green-500/10 hover:text-green-300 font-mono px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
        >
          <RefreshCw className="h-5 w-5 mr-2" />
          ./restart_training.sh --new-scenario
        </Button>
      </div>
    </div>
  );
};

export default GameResult;