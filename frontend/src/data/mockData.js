export const mockGameData = {
  // Real cybersecurity statistics (2024 data)
  statistics: {
    phishingIncrease: "67%",
    victimPercentage: "32%", 
    averageLoss: "$1,766",
    dailyAttacks: "3.4M"
  },

  // Email scenarios
  emailScenarios: [
    {
      id: 1,
      type: 'phishing',
      sender: 'INAE Youth Conclave <noreply@inae-youth.org>',
      subject: '🎉 Congratulations! You\'ve been selected for INAE Youth Conclave 2025',
      difficulty: 'medium',
      redFlags: [
        'External sender warning',
        'Urgent time pressure',
        'Too good to be true offer',
        'Suspicious domain',
        'Request for personal information'
      ]
    }
  ],

  // Browser scenarios  
  browserScenarios: [
    {
      id: 1,
      type: 'phishing_site',
      url: 'http://inae-youth-conclave2025.org/register',
      legitimateUrl: 'https://inae.ac.in',
      redFlags: [
        'No HTTPS encryption',
        'Suspicious domain name',
        'Requests payment for free event',
        'Poor website design',
        'Urgent countdown timer'
      ]
    }
  ],

  // Game progression
  gameFlow: [
    {
      stage: 'email',
      scenario: 'phishing_email',
      choices: [
        {
          id: 'click_link',
          text: 'Click the registration link',
          type: 'dangerous',
          points: -10,
          nextStage: 'browser'
        },
        {
          id: 'verify_first',
          text: 'Verify email authenticity',
          type: 'safe',
          points: 10,
          nextStage: 'result'
        }
      ]
    },
    {
      stage: 'browser',
      scenario: 'fake_website',
      choices: [
        {
          id: 'enter_details',
          text: 'Fill out registration form',
          type: 'dangerous',
          points: -20,
          nextStage: 'result'
        },
        {
          id: 'detect_suspicious',
          text: 'Recognize suspicious site',
          type: 'safe',
          points: 15,
          nextStage: 'result'
        }
      ]
    }
  ],

  // Educational content
  learningPoints: {
    phishing_indicators: [
      'Generic greetings instead of personalized messages',
      'Urgent language creating false sense of time pressure',
      'Requests for sensitive information via email',
      'Suspicious sender addresses with typos or wrong domains',
      'Links that don\'t match the claimed organization'
    ],
    
    website_security: [
      'Always check for HTTPS (padlock icon) on sensitive sites',
      'Verify the domain name matches the legitimate organization',
      'Be wary of sites asking for payment info for free events',
      'Look for professional design and proper spelling/grammar',
      'Never enter credit card details on unsecured sites'
    ],
    
    best_practices: [
      'Verify emails by contacting the organization directly',
      'Use bookmarks instead of clicking email links',
      'Enable two-factor authentication where possible',
      'Keep software and browsers updated',
      'Use reputable antivirus software'
    ]
  }
};

// Helper functions for game logic
export const calculateSecurityScore = (choices) => {
  const safeChoices = choices.filter(choice => choice.type === 'safe').length;
  const totalChoices = choices.length;
  return Math.round((safeChoices / totalChoices) * 100);
};

export const getSecurityRating = (score) => {
  if (score >= 80) return { rating: 'Excellent', color: 'emerald' };
  if (score >= 60) return { rating: 'Good', color: 'blue' };
  if (score >= 40) return { rating: 'Fair', color: 'yellow' };
  return { rating: 'Poor', color: 'red' };
};

export const getPersonalizedFeedback = (choices, isHacked) => {
  if (isHacked) {
    return {
      title: "Areas for Improvement",
      points: [
        "Be more skeptical of unsolicited emails, especially those claiming you've won something",
        "Always verify the sender's identity through official channels before clicking links",
        "Never enter personal or financial information on unsecured websites",
        "Take time to analyze emails for red flags before taking action",
        "When in doubt, consult with IT security professionals"
      ]
    };
  } else {
    return {
      title: "Great Security Awareness!",
      points: [
        "You successfully identified phishing indicators",
        "You practiced good verification habits",
        "You avoided sharing sensitive information with suspicious sources",
        "Keep up this level of vigilance in real-world scenarios",
        "Share your knowledge to help others stay safe online"
      ]
    };
  }
};