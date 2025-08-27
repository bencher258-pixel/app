import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, Shield, AlertTriangle, CheckCircle, XCircle, Globe, CreditCard, Lock, Eye, EyeOff } from 'lucide-react';
import { mockGameData } from '../data/mockData';
import MailInterface from './MailInterface';
import BrowserInterface from './BrowserInterface';
import GameResult from './GameResult';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-emerald-400" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              SecVerse
            </h1>
            <Badge variant="outline" className="text-emerald-400 border-emerald-400">
              Cybersecurity Training
            </Badge>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {gameState === 'start' && (
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Welcome to SecVerse
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Enter the digital world where your cybersecurity skills will be tested. 
                Navigate through real-world phishing scenarios and learn to protect yourself.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="bg-slate-800/50 border-slate-700 hover:border-emerald-500 transition-colors">
                <CardHeader>
                  <Mail className="h-8 w-8 text-emerald-400 mx-auto" />
                  <CardTitle className="text-emerald-400">Email Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">
                    Learn to identify phishing emails and malicious attachments
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-cyan-500 transition-colors">
                <CardHeader>
                  <Globe className="h-8 w-8 text-cyan-400 mx-auto" />
                  <CardTitle className="text-cyan-400">Web Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">
                    Navigate suspicious websites and avoid malicious links
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-colors">
                <CardHeader>
                  <Lock className="h-8 w-8 text-blue-400 mx-auto" />
                  <CardTitle className="text-blue-400">Data Protection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-400 text-sm">
                    Protect your personal information and financial data
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                onClick={startGame}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-emerald-500/25"
              >
                Start Security Challenge
              </Button>
              <p className="text-sm text-slate-400">
                Your journey as a cybersecurity student begins now
              </p>
            </div>
          </div>
        )}

        {/* Mail Notification */}
        {showNotification && gameState === 'start' && (
          <div className="fixed top-4 right-4 bg-slate-800 border border-emerald-500 rounded-lg p-4 shadow-lg animate-pulse">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">New email received!</span>
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