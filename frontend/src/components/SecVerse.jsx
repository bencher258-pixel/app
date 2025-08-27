import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Shield, AlertTriangle, CheckCircle, XCircle, Globe, CreditCard, Lock, Eye, EyeOff, Terminal, Code, Zap } from 'lucide-react';
import { mockGameData } from '../data/mockData';
import MailInterface from './MailInterface';
import BrowserInterface from './BrowserInterface';
import GameResult from './GameResult';
import CodeRain from './CodeRain';

const SecVerse = () => {
  const [gameState, setGameState] = useState('start'); // start, mail, browser, result
  const [currentStep, setCurrentStep] = useState(0);
  const [choices, setChoices] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [isHacked, setIsHacked] = useState(false);

  const startGame = () => {
    setShowNotification(true);
    setTimeout(() => {
      setGameState('mail');
    }, 2000);
  };

  const makeChoice = (choice) => {
    const newChoices = [...choices, choice];
    setChoices(newChoices);

    // Determine if user gets hacked based on choices
    const dangerousChoices = newChoices.filter(c => c.type === 'dangerous').length;
    
    if (currentStep >= 2) {
      setIsHacked(dangerousChoices >= 2);
      setGameState('result');
    } else {
      setCurrentStep(currentStep + 1);
      if (choice.nextState) {
        setGameState(choice.nextState);
      }
    }
  };

  const resetGame = () => {
    setGameState('start');
    setCurrentStep(0);
    setChoices([]);
    setShowNotification(false);
    setIsHacked(false);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 relative overflow-hidden">
      {/* Animated Code Rain Background */}
      <CodeRain />
      
      {/* Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent"></div>
      </div>

      {/* Terminal Header */}
      <div className="border-b border-green-500/30 bg-black/90 backdrop-blur-sm relative z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Terminal className="h-8 w-8 text-green-400 animate-pulse" />
            <h1 className="text-2xl font-mono font-bold text-green-400">
              [root@secverse:~]$ ./cybersecurity_training.sh
            </h1>
            <Badge variant="outline" className="text-green-400 border-green-400 font-mono animate-pulse">
              ACTIVE
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 relative z-20">
        {gameState === 'start' && (
          <div className="max-w-6xl mx-auto text-center space-y-8">
            {/* Terminal Welcome */}
            <div className="space-y-6">
              <div className="bg-black/80 border border-green-500/30 rounded p-6 font-mono text-left max-w-4xl mx-auto">
                <div className="text-green-400 mb-4">
                  <span className="text-red-400">[SYSTEM]</span> Initializing SecVerse Training Environment...
                </div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-green-400">></span> Loading cybersecurity modules... <span className="text-green-300">OK</span></div>
                  <div><span className="text-green-400">></span> Establishing secure connection... <span className="text-green-300">OK</span></div>
                  <div><span className="text-green-400">></span> Initializing threat simulation... <span className="text-green-300">OK</span></div>
                  <div><span className="text-green-400">></span> Ready for training session... <span className="text-green-300 animate-pulse">READY</span></div>
                </div>
              </div>

              <div className="text-center">
                <h2 className="text-5xl font-mono font-bold text-green-400 mb-4 tracking-wider animate-pulse">
                  S3CV3RS3
                </h2>
                <div className="text-xl text-green-300 max-w-3xl mx-auto font-mono">
                  <span className="text-red-400">[WARNING]</span> You are entering a simulated cyber environment.
                  <br />
                  Your security awareness will be tested against real-world threats.
                </div>
              </div>
            </div>

            {/* Hacker-style Feature Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="bg-black/60 border-green-500/30 hover:border-green-400 transition-all group backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="h-8 w-8 text-green-400 group-hover:animate-pulse" />
                    <Code className="h-4 w-4 text-green-600" />
                  </div>
                  <CardTitle className="text-green-400 font-mono">EMAIL.SECURITY</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-mono text-sm space-y-1">
                    <p className="text-green-300">$ analyze_phishing_threats</p>
                    <p className="text-green-600">> Detect malicious attachments</p>
                    <p className="text-green-600">> Identify social engineering</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-green-500/30 hover:border-green-400 transition-all group backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Globe className="h-8 w-8 text-green-400 group-hover:animate-pulse" />
                    <Zap className="h-4 w-4 text-green-600" />
                  </div>
                  <CardTitle className="text-green-400 font-mono">WEB.EXPLOITATION</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-mono text-sm space-y-1">
                    <p className="text-green-300">$ scan_suspicious_sites</p>
                    <p className="text-green-600">> Analyze malicious URLs</p>
                    <p className="text-green-600">> Detect fake certificates</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/60 border-green-500/30 hover:border-green-400 transition-all group backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Lock className="h-8 w-8 text-green-400 group-hover:animate-pulse" />
                    <Shield className="h-4 w-4 text-green-600" />
                  </div>
                  <CardTitle className="text-green-400 font-mono">DATA.PROTECTION</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="font-mono text-sm space-y-1">
                    <p className="text-green-300">$ secure_personal_data</p>
                    <p className="text-green-600">> Encrypt sensitive info</p>
                    <p className="text-green-600">> Prevent data breaches</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Terminal Command Interface */}
            <div className="space-y-6">
              <div className="bg-black/80 border border-green-500/30 rounded p-4 font-mono text-left max-w-2xl mx-auto">
                <div className="text-green-400 mb-2">
                  <span className="text-green-600">user@secverse:</span><span className="text-blue-400">~</span>$ 
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-green-300">Ready to begin training? [y/N]</span>
                  <span className="w-2 h-4 bg-green-400 animate-pulse"></span>
                </div>
              </div>

              <Button 
                size="lg" 
                onClick={startGame}
                className="bg-black border-2 border-green-500 text-green-400 hover:bg-green-500/10 hover:text-green-300 font-mono px-8 py-4 text-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20"
              >
                <Terminal className="mr-2 h-5 w-5" />
                ./start_mission.sh --level=intermediate
              </Button>
              
              <div className="text-sm text-green-600 font-mono">
                <span className="text-red-400">[INFO]</span> Type 'help' for available commands | 
                <span className="text-yellow-400"> Status: </span>
                <span className="animate-pulse">READY_FOR_DEPLOYMENT</span>
              </div>
            </div>
          </div>
        )}

        {/* Mail Notification with Terminal Style */}
        {showNotification && gameState === 'start' && (
          <div className="fixed top-4 right-4 bg-black/90 border border-green-400 rounded p-4 shadow-lg font-mono animate-pulse z-30">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-green-400 animate-bounce" />
              <div>
                <div className="text-green-400 font-bold">[ALERT] New message intercepted!</div>
                <div className="text-green-600 text-sm">mail.log: 1 new entry</div>
              </div>
            </div>
          </div>
        )}

        {gameState === 'mail' && (
          <MailInterface 
            onChoice={makeChoice} 
            currentStep={currentStep}
            gameData={mockGameData}
          />
        )}

        {gameState === 'browser' && (
          <BrowserInterface 
            onChoice={makeChoice} 
            currentStep={currentStep}
            gameData={mockGameData}
          />
        )}

        {gameState === 'result' && (
          <GameResult 
            isHacked={isHacked} 
            choices={choices}
            onRestart={resetGame}
            stats={mockGameData.statistics}
          />
        )}
      </div>
    </div>
  );
};

export default SecVerse;