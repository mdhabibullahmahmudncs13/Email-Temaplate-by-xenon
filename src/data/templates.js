export const emailTemplates = {
  welcome: {
    id: 'welcome',
    name: 'Welcome/Onboarding',
    category: 'Onboarding',
    subject: '🎉 Welcome to [Company Name] - Let\'s Get Started!',
    headerText: 'Welcome to Our Community!',
    subheaderText: 'We\'re excited to have you on board',
    bodyContent: `Thank you for joining [Company Name]! We're thrilled to welcome you to our growing community of innovators and achievers.

Your journey starts here. We've prepared everything you need to get the most out of your experience with us.

**What's Next?**
• Complete your profile in just 2 minutes
• Explore our powerful features and tools
• Join our vibrant community discussions
• Access your personalized dashboard
• Download our mobile app for on-the-go access

Our dedicated support team is standing by to help you succeed. Don't hesitate to reach out if you have any questions!`,
    ctaText: 'Complete Setup',
    ctaLink: 'https://example.com/setup',
    secondaryCtaText: 'Explore Features',
    secondaryCtaLink: 'https://example.com/features',
    footerCompany: '[Company Name]',
    footerAddress: '123 Innovation Drive, Tech City, TC 12345',
    showHeader: true,
    showCta: true,
    showSecondaryCta: true,
    showWatermark: false,
    watermarkText: 'Powered by EmailGen',
    watermarkPosition: 'bottom-right',
    watermarkStyle: 'subtle',
    headerStyle: 'gradient',
    layout: 'modern'
  },
  
  
  newsletter: {
    id: 'newsletter',
    name: 'Newsletter',
    category: 'Content',
    subject: '📰 [Company Name] Insider - [Month] Edition',
    headerText: 'The Monthly Insider',
    subheaderText: 'Your dose of industry insights and company updates',
    bodyContent: `Hello [First Name],

Welcome to this month's edition of our newsletter, packed with valuable insights, exciting updates, and exclusive content just for you.

**🚀 This Month's Highlights**
• **New Feature Launch**: Revolutionary AI-powered analytics dashboard
• **Industry Report**: 2024 trends that will shape your business
• **Customer Spotlight**: How TechCorp increased efficiency by 300%
• **Upcoming Events**: Join our exclusive webinar series
• **Team Updates**: Meet our new VP of Innovation

**💡 Featured Article**
"The Future of Digital Transformation" - A deep dive into emerging technologies and their impact on modern businesses.

**📊 By the Numbers**
• 50,000+ active users this month
• 99.9% uptime maintained
• 24/7 customer support responses

Stay ahead of the curve with insights from our expert team.`,
    ctaText: 'Read Full Newsletter',
    ctaLink: 'https://example.com/newsletter',
    secondaryCtaText: 'Join Webinar',
    secondaryCtaLink: 'https://example.com/webinar',
    footerCompany: '[Company Name]',
    footerAddress: '123 Innovation Drive, Tech City, TC 12345',
    showHeader: true,
    showCta: true,
    showSecondaryCta: true,
    showWatermark: false,
    watermarkText: 'Powered by EmailGen',
    watermarkPosition: 'bottom-right',
    watermarkStyle: 'subtle',
    headerStyle: 'clean',
    layout: 'newsletter'
  },

  promotional: {
    id: 'promotional',
    name: 'Promotional/Marketing',
    category: 'Marketing',
    subject: '🔥 FLASH SALE: 50% OFF Everything - Limited Time!',
    headerText: 'Exclusive Flash Sale',
    subheaderText: 'Save big on all premium plans - 48 hours only!',
    bodyContent: `🎯 **ATTENTION [First Name]!**

This is it - our biggest sale of the year is happening RIGHT NOW! For the next 48 hours only, you can save 50% on everything in our store.

**🎁 What's Included:**
• ✅ 50% OFF all premium plans and services
• ✅ FREE priority onboarding (worth $500)
• ✅ Exclusive access to beta features
• ✅ 24/7 VIP customer support
• ✅ 90-day money-back guarantee
• ✅ FREE migration from your current provider

**⏰ Limited Time Offer**
This incredible deal expires in 48 hours. Don't miss out on the opportunity to transform your business at half the price.

**💰 Your Savings:**
• Premium Plan: ~~$99/month~~ → **$49.50/month**
• Enterprise Plan: ~~$299/month~~ → **$149.50/month**
• Custom Solutions: Up to 50% off

Over 10,000 businesses have already upgraded. Join them today!`,
    ctaText: 'Claim 50% Discount Now',
    ctaLink: 'https://example.com/flash-sale',
    secondaryCtaText: 'View All Plans',
    secondaryCtaLink: 'https://example.com/pricing',
    footerCompany: '[Company Name]',
    footerAddress: '123 Innovation Drive, Tech City, TC 12345',
    showHeader: true,
    showCta: true,
    showSecondaryCta: true,
    showWatermark: false,
    watermarkText: 'Powered by EmailGen',
    watermarkPosition: 'bottom-right',
    watermarkStyle: 'subtle',
    headerStyle: 'bold',
    layout: 'promotional'
  },

  event: {
    id: 'event',
    name: 'Event Invitation',
    category: 'Events',
    subject: '🎪 You\'re Invited: [Event Name] - Reserve Your Spot!',
    headerText: 'Exclusive Invitation',
    subheaderText: 'Join industry leaders for an unforgettable experience',
    bodyContent: `Dear [First Name],

You're cordially invited to our most anticipated event of the year! Join us for an exclusive gathering where innovation meets inspiration.

**📅 Event Details:**
• **Date:** [Event Date]
• **Time:** [Event Time] (with networking reception)
• **Location:** [Event Location]
• **Format:** Hybrid (In-person + Virtual attendance)
• **Dress Code:** Business casual

**🌟 What to Expect:**
• Keynote presentations from industry pioneers
• Interactive workshops and breakout sessions
• Networking opportunities with 500+ professionals
• Product demonstrations and live Q&A
• Complimentary refreshments and lunch
• Exclusive swag bag for attendees

**🎤 Featured Speakers:**
• Sarah Johnson, CEO of TechInnovate
• Dr. Michael Chen, AI Research Director
• Lisa Rodriguez, Digital Transformation Expert

**🎁 Special Perks for Attendees:**
• Free 3-month trial of our premium service
• Exclusive access to event recordings
• Priority booking for future events
• Networking app access

Limited seats available - secure your spot today!`,
    ctaText: 'Reserve My Spot',
    ctaLink: 'https://example.com/event-registration',
    secondaryCtaText: 'View Agenda',
    secondaryCtaLink: 'https://example.com/event-agenda',
    footerCompany: '[Company Name]',
    footerAddress: '123 Innovation Drive, Tech City, TC 12345',
    showHeader: true,
    showCta: true,
    showSecondaryCta: true,
    showWatermark: false,
    watermarkText: 'Powered by EmailGen',
    watermarkPosition: 'bottom-right',
    watermarkStyle: 'subtle',
    headerStyle: 'elegant',
    layout: 'event'
  },

  thankyou: {
    id: 'thankyou',
    name: 'Thank You',
    category: 'Appreciation',
    subject: '💙 Thank You, [First Name] - You\'re Amazing!',
    headerText: 'Thank You!',
    subheaderText: 'Your trust and support mean the world to us',
    bodyContent: `Dear [First Name],

We wanted to take a moment to express our heartfelt gratitude for choosing [Company Name] and for being such an incredible part of our community.

**🙏 Why We're Grateful:**
Your continued trust in our services motivates our entire team to push boundaries and deliver exceptional value every single day. Customers like you are the reason we love what we do.

**🎁 As Our Way of Saying Thanks:**
• **Priority Support:** Skip the queue with VIP customer service
• **Early Access:** Be first to try new features and updates
• **Exclusive Offers:** Special discounts on premium services
• **Community Access:** Join our private customer success group
• **Personal Account Manager:** Dedicated support for your success

**📈 Your Impact:**
Since joining us, you've:
• Saved an average of 15 hours per week
• Increased productivity by 40%
• Joined a community of 50,000+ successful professionals

**🚀 What's Coming Next:**
We're working on exciting new features based on your feedback:
• Advanced analytics dashboard (launching next month)
• Mobile app improvements
• Integration with 20+ new platforms
• AI-powered recommendations

Your success is our success, and we're committed to supporting you every step of the way.`,
    ctaText: 'Explore VIP Benefits',
    ctaLink: 'https://example.com/vip-benefits',
    secondaryCtaText: 'Share Feedback',
    secondaryCtaLink: 'https://example.com/feedback',
    footerCompany: '[Company Name]',
    footerAddress: '123 Innovation Drive, Tech City, TC 12345',
    showHeader: true,
    showCta: true,
    showSecondaryCta: true,
    showWatermark: false,
    watermarkText: 'Powered by EmailGen',
    watermarkPosition: 'bottom-right',
    watermarkStyle: 'subtle',
    headerStyle: 'warm',
    layout: 'appreciation'
  },

  password: {
    id: 'password',
    name: 'Password Reset',
    category: 'Transactional',
    subject: '🔐 Password Reset Request - [Company Name]',
    headerText: 'Password Reset',
    subheaderText: 'Secure your account with a new password',
    bodyContent: `Hello [First Name],

We received a request to reset the password for your [Company Name] account associated with this email address.

**🔒 Security First**
If you made this request, simply click the button below to create a new password. This secure link will expire in 24 hours for your protection.

**⚠️ Important Security Information:**
• This link can only be used once
• It expires in 24 hours for your security
• Never share this link with anyone
• We will never ask for your password via email

**🚫 Didn't Request This?**
If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged, and your account stays secure.

**🛡️ Account Security Tips:**
• Use a unique, strong password
• Enable two-factor authentication
• Regularly update your password
• Never share your login credentials

If you continue to receive these emails or have security concerns, please contact our support team immediately.`,
    ctaText: 'Reset My Password',
    ctaLink: 'https://example.com/reset-password',
    secondaryCtaText: 'Contact Support',
    secondaryCtaLink: 'https://example.com/support',
    footerCompany: '[Company Name]',
    footerAddress: '123 Innovation Drive, Tech City, TC 12345',
    showHeader: true,
    showCta: true,
    showSecondaryCta: true,
    showWatermark: false,
    watermarkText: 'Powered by EmailGen',
    watermarkPosition: 'bottom-right',
    watermarkStyle: 'subtle',
    headerStyle: 'secure',
    layout: 'transactional'
  },

  followup: {
    id: 'followup',
    name: 'Follow-up',
    category: 'Communication',
    subject: '🤝 Following Up: Next Steps for [Company Name]',
    headerText: 'Let\'s Move Forward Together',
    subheaderText: 'Your success is our priority - here\'s what comes next',
    bodyContent: `Hi [First Name],

Thank you for the engaging conversation we had earlier. It was great learning more about your goals and how [Company Name] can help you achieve them.

**📋 Recap of Our Discussion:**
• Your current challenges with [specific challenge]
• Goals to achieve [specific goal] by [timeframe]
• Interest in our [specific solution/service]
• Budget considerations and timeline preferences

**🎯 Proposed Next Steps:**
Based on our conversation, here's what I recommend:

**1. Custom Proposal Review** (This Week)
We've prepared a tailored proposal addressing your specific needs, including pricing options and implementation timeline.

**2. Technical Demo** (Next Week)
Schedule a 30-minute demo with our technical team to see exactly how our solution works with your current setup.

**3. Stakeholder Meeting** (Following Week)
If you'd like, we can present to your team and answer any questions they might have.

**📊 What You Can Expect:**
• 30% improvement in efficiency within the first month
• ROI typically seen within 90 days
• Dedicated support throughout implementation
• Training for your entire team

**🎁 Special Offer:**
As discussed, we're extending our early adopter discount of 25% off your first year if you decide to move forward by [date].

I'm here to answer any questions and make this process as smooth as possible for you.`,
    ctaText: 'Schedule Next Meeting',
    ctaLink: 'https://example.com/schedule',
    secondaryCtaText: 'Review Proposal',
    secondaryCtaLink: 'https://example.com/proposal',
    footerCompany: '[Company Name]',
    footerAddress: '123 Innovation Drive, Tech City, TC 12345',
    showHeader: true,
    showCta: true,
    showSecondaryCta: true,
    showWatermark: false,
    watermarkText: 'Powered by EmailGen',
    watermarkPosition: 'bottom-right',
    watermarkStyle: 'subtle',
    headerStyle: 'professional',
    layout: 'business'
  },

  announcement: {
    id: 'announcement',
    name: 'Announcement',
    category: 'News',
    subject: '🚀 Big News from [Company Name] - You\'ll Want to See This!',
    headerText: 'Exciting Announcement',
    subheaderText: 'We\'re thrilled to share some game-changing news with you',
    bodyContent: `Dear [First Name],

We have some incredible news that we couldn't wait to share with you! Today marks a significant milestone in our journey, and you're among the first to know.

**🎉 What's New:**

**🚀 Product Launch:** We're officially launching our revolutionary new platform that will transform how you work. After 18 months of development and testing with select customers, we're ready to change the game.

**🤝 Strategic Partnership:** We've partnered with industry leader [Partner Name] to bring you even more value and expanded capabilities.

**🏆 Recognition:** We've been named "Innovation Company of the Year" by [Industry Publication], thanks to customers like you who believe in our vision.

**📈 Milestone Achievement:** We've reached 100,000 active users worldwide! This incredible growth is a testament to our amazing community.

**🔮 What This Means for You:**
• Access to cutting-edge features at no additional cost
• Enhanced performance and reliability
• Expanded integration capabilities
• Priority access to beta features
• Exclusive training and resources

**📅 Important Dates:**
• **January 25**: New features go live
• **February 1**: Enhanced mobile app release
• **February 15**: Exclusive customer webinar
• **March 1**: Advanced analytics dashboard launch

**🎁 Celebration Bonus:**
To celebrate, we're giving all existing customers a complimentary upgrade to our premium features for the next 3 months!

This is just the beginning. We have even more exciting developments planned for 2024, and we can't wait to share this journey with you.`,
    ctaText: 'Explore New Features',
    ctaLink: 'https://example.com/new-features',
    secondaryCtaText: 'Join Celebration Webinar',
    secondaryCtaLink: 'https://example.com/webinar',
    footerCompany: '[Company Name]',
    footerAddress: '123 Innovation Drive, Tech City, TC 12345',
    showHeader: true,
    showCta: true,
    showSecondaryCta: true,
    showWatermark: false,
    watermarkText: 'Powered by EmailGen',
    watermarkPosition: 'bottom-right',
    watermarkStyle: 'subtle',
    headerStyle: 'celebration',
    layout: 'announcement'
  }
};