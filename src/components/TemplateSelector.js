import React from 'react';
import { emailTemplates } from '../data/templates';
import { Mail, Users, Megaphone, Calendar, Heart, Shield, MessageCircle, Zap } from 'lucide-react';

const TemplateSelector = ({ selectedTemplate, onTemplateSelect }) => {
  const templateCategories = {
    'Onboarding': { 
      templates: ['welcome'], 
      icon: Users,
      color: 'bg-blue-100 text-blue-600',
      description: 'Welcome new users and customers'
    },
    'Content': { 
      templates: ['newsletter'], 
      icon: Mail,
      color: 'bg-purple-100 text-purple-600',
      description: 'Regular content and updates'
    },
    'Marketing': { 
      templates: ['promotional'], 
      icon: Megaphone,
      color: 'bg-red-100 text-red-600',
      description: 'Sales and promotional campaigns'
    },
    'Events': { 
      templates: ['event'], 
      icon: Calendar,
      color: 'bg-green-100 text-green-600',
      description: 'Event invitations and announcements'
    },
    'Appreciation': { 
      templates: ['thankyou'], 
      icon: Heart,
      color: 'bg-pink-100 text-pink-600',
      description: 'Customer appreciation and gratitude'
    },
    'Transactional': { 
      templates: ['password'], 
      icon: Shield,
      color: 'bg-gray-100 text-gray-600',
      description: 'System and security notifications'
    },
    'Communication': { 
      templates: ['followup'], 
      icon: MessageCircle,
      color: 'bg-indigo-100 text-indigo-600',
      description: 'Business follow-ups and conversations'
    },
    'News': { 
      templates: ['announcement'], 
      icon: Zap,
      color: 'bg-yellow-100 text-yellow-600',
      description: 'Company news and announcements'
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Templates</h3>
        <p className="text-sm text-gray-600">
          Choose from our professionally designed email templates, each optimized for different purposes and audiences.
        </p>
      </div>

      {Object.entries(templateCategories).map(([category, categoryInfo]) => {
        const Icon = categoryInfo.icon;
        
        return (
          <div key={category} className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${categoryInfo.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-medium text-gray-900">{category}</h4>
                <p className="text-sm text-gray-600">{categoryInfo.description}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {categoryInfo.templates.map(templateId => {
                const template = emailTemplates[templateId];
                const isSelected = selectedTemplate?.id === templateId;
                
                return (
                  <button
                    key={templateId}
                    onClick={() => onTemplateSelect(template)}
                    className={`w-full text-left p-5 rounded-xl border-2 transition-all duration-200 group ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 shadow-lg scale-[1.02]'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h5 className="font-semibold text-gray-900 text-lg">{template.name}</h5>
                          {isSelected && (
                            <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0 animate-pulse"></div>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                          {template.subject}
                        </p>
                        
                        {/* Template Preview Tags */}
                        <div className="flex flex-wrap gap-2">
                          {template.showHeader && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              Header
                            </span>
                          )}
                          {template.showCta && (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              CTA Button
                            </span>
                          )}
                          {template.secondaryCtaText && (
                            <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                              Secondary CTA
                            </span>
                          )}
                          {template.headerStyle && (
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full capitalize">
                              {template.headerStyle} Style
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* Visual indicator */}
                      <div className={`ml-4 transition-transform duration-200 ${
                        isSelected ? 'scale-110' : 'group-hover:scale-105'
                      }`}>
                        <div className={`w-12 h-8 rounded border-2 ${
                          isSelected ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-white'
                        } flex items-center justify-center`}>
                          <Mail className={`w-4 h-4 ${
                            isSelected ? 'text-blue-600' : 'text-gray-400'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Template Stats */}
      <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
        <h4 className="font-medium text-gray-900 mb-2">Template Features</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-gray-700">Mobile Responsive</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">Email Client Compatible</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-gray-700">Fully Customizable</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">Professional Design</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;