import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, AlertTriangle, CheckCircle, Clock, Paperclip, Flag, Star, Terminal, Shield, Eye } from 'lucide-react';

const MailInterface = ({ onChoice, currentStep, gameData }) => {
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showEmailDetails, setShowEmailDetails] = useState(false);

  const emails = [
    {
      id: 1,
      sender: 'INAE Youth Conclave <noreply@inae-youth.org>',
      subject: '🎉 Congratulations! You\'ve been selected for INAE Youth Conclave 2025',
      time: '2 min ago',
      isPhishing: true,
      preview: 'Dear Student, We are excited to inform you that you have been selected...',
      threat_level: 'HIGH'
    },
    {
      id: 2,
      sender: 'University Admin <admin@university.edu>',
      subject: 'Course Registration Deadline Reminder',
      time: '1 hour ago',
      isPhishing: false,
      preview: 'This is a reminder that course registration deadline is approaching...',
      threat_level: 'CLEAN'
    },
    {
      id: 3,
      sender: 'Library Services <library@university.edu>',
      subject: 'Book Return Reminder',
      time: '3 hours ago',
      isPhishing: false,
      preview: 'You have books due for return. Please check your library account...',
      threat_level: 'CLEAN'
    }
  ];

  const phishingEmail = {
    sender: 'INAE Youth Conclave <noreply@inae-youth.org>',
    subject: '🎉 Congratulations! You\'ve been selected for INAE Youth Conclave 2025',
    body: `
[SYSTEM NOTIFICATION] - EXTERNAL EMAIL DETECTED

From: INAE Youth Conclave <noreply@inae-youth.org>
To: student@university.edu  
Time: 2024-12-27 14:32:15 UTC
Threat Level: >>> ANALYZING... <<<

==================================================

Dear Esteemed Student,

Congratulations! We are thrilled to inform you that you have been SPECIALLY SELECTED to participate in the prestigious INAE Youth Conclave 2025 - India's largest engineering and technology summit.

🏆 EXCLUSIVE BENEFITS:
- FREE registration (worth ₹5,000)
- Direct access to top industry leaders  
- Certificate from INAE (Indian National Academy of Engineering)
- Networking opportunities with 500+ participants
- Exclusive workshops and masterclasses

⚠️ URGENT: Only 24 hours left to confirm your participation!

To secure your spot immediately, please click the link below and complete your registration:

👉 CONFIRM PARTICIPATION NOW: 
>>> https://inae-youth-conclave2025.org/register <<<

WARNING: This is a time-sensitive offer. Failure to respond within 24 hours will result in your spot being given to someone else.

Best regards,
INAE Youth Conclave Team
Indian National Academy of Engineering

==================================================
[END TRANSMISSION]
    `,
    attachments: ['INAE_Brochure_2025.pdf', 'Participation_Guidelines.docx'],
    flags: ['EXTERNAL_SENDER', 'SUSPICIOUS_DOMAIN', 'URGENT_LANGUAGE', 'UNVERIFIED_SSL']
  };

  const handleEmailClick = (email) => {
    if (email.isPhishing) {
      setSelectedEmail(phishingEmail);
      setShowEmailDetails(true);
    }
  };

  const handleChoice = (choiceType, nextState = null) => {
    onChoice({
      type: choiceType,
      step: currentStep,
      description: choiceType === 'dangerous' ? 'Clicked suspicious link' : 'Verified email authenticity',
      nextState
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Terminal Header */}
      <div className="mb-6 bg-black/80 border border-green-500/30 rounded p-4 font-mono">
        <div className="flex items-center gap-2 text-green-400">
          <Terminal className="h-5 w-5" />
          <span className="text-green-600">root@secverse:</span>
          <span className="text-blue-400">/mail</span>
          <span className="text-green-400">$ ./analyze_inbox.sh</span>
        </div>
        <div className="mt-2 text-green-300 text-sm">
          [SCANNER] Email threat analysis in progress...
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Email List */}
        <div className="lg:col-span-1 space-y-3">
          <div className="bg-black/60 border border-green-500/30 rounded p-4">
            <h3 className="text-lg font-mono font-bold text-green-400 mb-4 flex items-center gap-2">
              <Mail className="h-5 w-5" />
              INBOX_STATUS [3]
            </h3>
            {emails.map((email) => (
              <Card 
                key={email.id}
                className={`bg-black/40 border transition-all cursor-pointer mb-3 ${
                  email.isPhishing 
                    ? 'border-red-500/50 hover:border-red-400' 
                    : 'border-green-500/30 hover:border-green-400'
                } ${selectedEmail && email.isPhishing ? 'border-red-400' : ''}`}
                onClick={() => handleEmailClick(email)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {email.isPhishing ? (
                        <AlertTriangle className="h-4 w-4 text-red-400 animate-pulse" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-green-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-mono text-green-300 truncate">
                          {email.sender.split('<')[0]}
                        </span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs font-mono ${
                            email.threat_level === 'HIGH' 
                              ? 'text-red-400 border-red-400' 
                              : 'text-green-400 border-green-400'
                          }`}
                        >
                          {email.threat_level}
                        </Badge>
                      </div>
                      <p className="text-sm text-green-200 font-medium mb-1 truncate">
                        {email.subject}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-green-600 truncate">
                          {email.preview}
                        </p>
                        <span className="text-xs text-green-500 font-mono">{email.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Email Details */}
        <div className="lg:col-span-2">
          {!showEmailDetails ? (
            <Card className="bg-black/40 border-green-500/30 h-96 flex items-center justify-center">
              <div className="text-center text-green-400 font-mono">
                <Eye className="h-12 w-12 mx-auto mb-4 animate-pulse" />
                <p>[WAITING] Select an email for analysis...</p>
                <div className="mt-2 text-green-600 text-sm">
                  $ tail -f /var/log/email.log
                </div>
              </div>
            </Card>
          ) : (
            <Card className="bg-black/40 border-red-500/30">
              {/* Terminal Email Header */}
              <CardHeader className="border-b border-red-500/30 bg-black/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono">
                    <AlertTriangle className="h-5 w-5 text-red-400 animate-pulse" />
                    <span className="text-red-400 font-bold">[THREAT DETECTED]</span>
                  </div>
                  <div className="flex gap-2">
                    {selectedEmail.flags.map((flag, index) => (
                      <Badge key={index} variant="outline" className="text-xs font-mono text-red-400 border-red-400">
                        {flag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 font-mono">
                  <h3 className="text-lg font-bold text-red-300">{selectedEmail.subject}</h3>
                  <p className="text-sm text-green-400">Analysis: {selectedEmail.sender}</p>
                  <div className="flex items-center gap-4 text-xs text-green-600">
                    <span>Recipient: student@university.edu</span>
                    <span>Timestamp: 2 minutes ago</span>
                    <span className="text-red-400 animate-pulse">SUSPICIOUS</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="bg-black/60 border border-green-500/30 rounded p-4 mb-6">
                  <div className="whitespace-pre-line text-green-300 text-sm leading-relaxed font-mono">
                    {selectedEmail.body}
                  </div>
                </div>

                {selectedEmail.attachments && (
                  <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded">
                    <h4 className="text-sm font-mono text-red-400 mb-3 flex items-center gap-2">
                      <Paperclip className="h-4 w-4" />
                      [ATTACHMENTS] Potential malware detected ({selectedEmail.attachments.length})
                    </h4>
                    <div className="space-y-2">
                      {selectedEmail.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-red-300 font-mono">
                          <div className="w-2 h-2 bg-red-500 rounded animate-pulse"></div>
                          {attachment} <span className="text-red-500">[QUARANTINED]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="bg-black/60 border border-green-500/30 rounded p-4">
                    <h4 className="text-lg font-mono text-green-400 mb-3">
                      [USER_INPUT_REQUIRED] Choose your action:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button 
                        className="bg-red-900/40 border-2 border-red-500 text-red-300 hover:bg-red-900/60 hover:text-red-200 h-auto p-4 text-left font-mono"
                        onClick={() => handleChoice('dangerous', 'browser')}
                      >
                        <div className="w-full">
                          <div className="font-bold text-sm">EXECUTE LINK</div>
                          <div className="text-xs opacity-90 mt-1 break-words">
                            Click suspicious registration link
                          </div>
                        </div>
                      </Button>
                      
                      <Button 
                        variant="outline"
                        className="border-2 border-green-500 text-green-400 hover:bg-green-900/20 hover:text-green-300 h-auto p-4 text-left font-mono"
                        onClick={() => handleChoice('safe')}
                      >
                        <div className="w-full">
                          <div className="font-bold text-sm">VERIFY SENDER</div>
                          <div className="text-xs opacity-90 mt-1 break-words">
                            Check email authenticity first
                          </div>
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default MailInterface;