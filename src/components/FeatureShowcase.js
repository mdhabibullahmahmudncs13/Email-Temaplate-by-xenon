import React from 'react';
import { Sparkles, Palette, Smartphone, Code, Zap, Shield, FileText, Eye } from 'lucide-react';

const FeatureShowcase = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Enhanced Templates',
      description: 'Rich, engaging content with emojis, better formatting, and professional copy',
      color: 'text-purple-600'
    },
    {
      icon: Palette,
      title: 'Advanced Styling',
      description: '8 unique header styles including gradients, patterns, and animations',
      color: 'text-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Responsive designs that look perfect on all devices and email clients',
      color: 'text-green-600'
    },
    {
      icon: Code,
      title: 'Clean HTML Export',
      description: 'Production-ready HTML with inline CSS for maximum compatibility',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: 'Dual CTAs',
      description: 'Primary and secondary call-to-action buttons for better conversion',
      color: 'text-red-600'
    },
    {
      icon: Shield,
      title: 'Email Client Safe',
      description: 'Tested across Gmail, Outlook, Apple Mail, and mobile clients',
      color: 'text-indigo-600'
    },
    {
      icon: FileText,
      title: 'Custom Watermarks',
      description: 'Add subtle branding watermarks with multiple styles and positions',
      color: 'text-teal-600'
    },
    {
      icon: Eye,
      title: 'Live Preview',
      description: 'Real-time preview with instant updates as you customize',
      color: 'text-pink-600'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 p-8 rounded-2xl border border-blue-200">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          ✨ Enhanced Email Templates
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our upgraded templates feature richer content, advanced styling options, and professional designs 
          that convert better and look amazing across all email clients.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg bg-gray-50`}>
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          <span>All templates now include enhanced content and styling options</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;