import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Mail, AlertTriangle, CheckCircle, Clock, Paperclip, Flag, Star } from 'lucide-react';

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
      preview: 'Dear Student, We are excited to inform you that you have been selected...'
    },
    {
      id: 2,
      sender: 'University Admin <admin@university.edu>',
      subject: 'Course Registration Deadline Reminder',
      time: '1 hour ago',
      isPhishing: false,
      preview: 'This is a reminder that course registration deadline is approaching...'
    },
    {
      id: 3,
      sender: 'Library Services <library@university.edu>',
      subject: 'Book Return Reminder',
      time: '3 hours ago',
      isPhishing: false,
      preview: 'You have books due for return. Please check your library account...'
    }
  ];

  const phishingEmail = {
    sender: 'INAE Youth Conclave <noreply@inae-youth.org>',
    subject: '🎉 Congratulations! You\'ve been selected for INAE Youth Conclave 2025',
    body: `
Dear Esteemed Student,

Congratulations! We are thrilled to inform you that you have been SPECIALLY SELECTED to participate in the prestigious INAE Youth Conclave 2025 - India's largest engineering and technology summit.

🏆 EXCLUSIVE BENEFITS:
- FREE registration (worth ₹5,000)
- Direct access to top industry leaders
- Certificate from INAE (Indian National Academy of Engineering)
- Networking opportunities with 500+ participants
- Exclusive workshops and masterclasses

⏰ URGENT: Only 24 hours left to confirm your participation!

To secure your spot immediately, please click the link below and complete your registration:

👉 CONFIRM PARTICIPATION NOW: https://inae-youth-conclave2025.org/register

Note: This is a time-sensitive offer. Failure to respond within 24 hours will result in your spot being given to someone else.

Best regards,
INAE Youth Conclave Team
Indian National Academy of Engineering

---
This is an automated email. Please do not reply to this email address.
    `,
    attachments: ['INAE_Brochure_2025.pdf', 'Participation_Guidelines.docx'],
    flags: ['Urgent', 'External Sender', 'Unverified Domain']
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
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-emerald-400 mb-2">Email Interface</h2>
        <p className="text-slate-400">You've received a new email. Check your inbox carefully.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Email List */}
        <div className="lg:col-span-1 space-y-3">
          <h3 className="text-lg font-semibold text-white mb-4">Inbox (3)</h3>
          {emails.map((email) => (
            <Card 
              key={email.id}
              className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 cursor-pointer transition-all ${
                email.isPhishing ? 'hover:border-orange-500' : ''
              } ${selectedEmail && email.isPhishing ? 'border-orange-500' : ''}`}
              onClick={() => handleEmailClick(email)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    {email.isPhishing ? (
                      <AlertTriangle className="h-4 w-4 text-orange-400" />
                    ) : (
                      <Mail className="h-4 w-4 text-slate-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-medium text-white truncate">
                        {email.sender.split('<')[0]}
                      </span>
                      <span className="text-xs text-slate-400">{email.time}</span>
                    </div>
                    <p className="text-sm text-slate-300 font-medium mb-1 truncate">
                      {email.subject}
                    </p>
                    <p className="text-xs text-slate-400 truncate">
                      {email.preview}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Email Details */}
        <div className="lg:col-span-2">
          {!showEmailDetails ? (
            <Card className="bg-slate-800/30 border-slate-700 h-96 flex items-center justify-center">
              <div className="text-center text-slate-400">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <p>Select an email to read its content</p>
              </div>
            </Card>
          ) : (
            <Card className="bg-slate-800/30 border-slate-700">
              <CardHeader className="border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-400" />
                    <span className="text-sm text-orange-400 font-medium">External Email</span>
                  </div>
                  <div className="flex gap-2">
                    {selectedEmail.flags.map((flag, index) => (
                      <Badge key={index} variant="outline" className="text-xs text-orange-400 border-orange-400">
                        {flag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">{selectedEmail.subject}</h3>
                  <p className="text-sm text-slate-400">From: {selectedEmail.sender}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span>To: student@university.edu</span>
                    <span>2 minutes ago</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="prose prose-invert max-w-none">
                  <div className="whitespace-pre-line text-slate-300 text-sm leading-relaxed">
                    {selectedEmail.body}
                  </div>
                </div>

                {selectedEmail.attachments && (
                  <div className="mt-6 p-4 bg-slate-700/30 rounded-lg">
                    <h4 className="text-sm font-medium text-white mb-3 flex items-center gap-2">
                      <Paperclip className="h-4 w-4" />
                      Attachments ({selectedEmail.attachments.length})
                    </h4>
                    <div className="space-y-2">
                      {selectedEmail.attachments.map((attachment, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-slate-400">
                          <div className="w-2 h-2 bg-slate-500 rounded"></div>
                          {attachment}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 space-y-4">
                  <h4 className="text-lg font-semibold text-white">What do you want to do?</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white h-auto p-4 text-left"
                      onClick={() => handleChoice('dangerous', 'browser')}
                    >
                      <div>
                        <div className="font-medium">Click the Registration Link</div>
                        <div className="text-sm opacity-90 mt-1">
                          This looks legitimate. Let me register quickly!
                        </div>
                      </div>
                    </Button>
                    
                    <Button 
                      variant="outline"
                      className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white h-auto p-4 text-left"
                      onClick={() => handleChoice('safe')}
                    >
                      <div>
                        <div className="font-medium">Verify the Email First</div>
                        <div className="text-sm opacity-90 mt-1">
                          Let me check if this email is legitimate before clicking
                        </div>
                      </div>
                    </Button>
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