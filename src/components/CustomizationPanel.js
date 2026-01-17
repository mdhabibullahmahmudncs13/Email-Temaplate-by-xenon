import React from 'react';
import { RotateCcw, Eye, EyeOff, Palette, Type, Image, Link, Settings, FileText } from 'lucide-react';

const CustomizationPanel = ({ 
  template, 
  customizations, 
  onCustomizationChange, 
  onReset,
  primaryColor,
  onColorChange 
}) => {
  if (!template) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500">
        <div className="text-center">
          <Settings className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <p>Select a template to start customizing</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (field, value) => {
    onCustomizationChange({ ...customizations, [field]: value });
  };

  const handleToggle = (field) => {
    onCustomizationChange({ ...customizations, [field]: !customizations[field] });
  };

  const colorPresets = [
    '#3b82f6', '#ef4444', '#10b981', '#f59e0b', 
    '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16'
  ];

  const headerStyles = [
    { value: 'gradient', label: 'Gradient', description: 'Modern gradient background' },
    { value: 'bold', label: 'Bold', description: 'Strong solid color with border' },
    { value: 'elegant', label: 'Elegant', description: 'Dark theme with pattern' },
    { value: 'warm', label: 'Warm', description: 'Radial gradient effect' },
    { value: 'secure', label: 'Secure', description: 'Professional dark theme' },
    { value: 'professional', label: 'Professional', description: 'Clean business style' },
    { value: 'celebration', label: 'Celebration', description: 'Animated rainbow gradient' },
    { value: 'clean', label: 'Clean', description: 'Simple and minimal' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Customize Template</h3>
          <p className="text-sm text-gray-600 mt-1">
            Personalize your {template.name.toLowerCase()} email
          </p>
        </div>
        <button
          onClick={onReset}
          className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
      </div>

      {/* Brand Colors Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Palette className="w-5 h-5 text-gray-600" />
          <label className="text-sm font-medium text-gray-700">Brand Colors</label>
        </div>
        
        {/* Color Presets */}
        <div className="grid grid-cols-8 gap-2">
          {colorPresets.map((color) => (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`w-8 h-8 rounded-lg border-2 transition-all ${
                primaryColor === color ? 'border-gray-400 scale-110' : 'border-gray-200 hover:border-gray-300'
              }`}
              style={{ backgroundColor: color }}
              title={color}
            />
          ))}
        </div>
        
        {/* Custom Color Picker */}
        <div className="flex items-center space-x-3">
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="w-12 h-10 rounded-lg border border-gray-300 cursor-pointer"
          />
          <input
            type="text"
            value={primaryColor}
            onChange={(e) => onColorChange(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            placeholder="#3b82f6"
          />
        </div>
      </div>

      {/* Header Style Section */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <Image className="w-5 h-5 text-gray-600" />
          <label className="text-sm font-medium text-gray-700">Header Style</label>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {headerStyles.map((style) => (
            <button
              key={style.value}
              onClick={() => handleInputChange('headerStyle', style.value)}
              className={`p-3 text-left border-2 rounded-lg transition-all ${
                (customizations.headerStyle || template.headerStyle) === style.value
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium text-sm text-gray-900">{style.label}</div>
              <div className="text-xs text-gray-600 mt-1">{style.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Type className="w-5 h-5 text-gray-600" />
          <label className="text-sm font-medium text-gray-700">Content</label>
        </div>

        {/* Subject Line */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Subject Line</label>
          <input
            type="text"
            value={customizations.subject || template.subject}
            onChange={(e) => handleInputChange('subject', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>

        {/* Header Text */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Header Text</label>
            <button
              onClick={() => handleToggle('showHeader')}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800"
            >
              {customizations.showHeader !== false ? (
                <Eye className="w-4 h-4" />
              ) : (
                <EyeOff className="w-4 h-4" />
              )}
              <span>{customizations.showHeader !== false ? 'Visible' : 'Hidden'}</span>
            </button>
          </div>
          <input
            type="text"
            value={customizations.headerText || template.headerText}
            onChange={(e) => handleInputChange('headerText', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            disabled={customizations.showHeader === false}
          />
        </div>

        {/* Subheader Text */}
        {template.subheaderText && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Subheader Text</label>
            <input
              type="text"
              value={customizations.subheaderText || template.subheaderText}
              onChange={(e) => handleInputChange('subheaderText', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={customizations.showHeader === false}
            />
          </div>
        )}

        {/* Logo URL */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Company Logo URL</label>
          <input
            type="url"
            value={customizations.logoUrl || ''}
            onChange={(e) => handleInputChange('logoUrl', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            placeholder="https://example.com/logo.png"
          />
        </div>

        {/* Body Content */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Main Content</label>
          <textarea
            value={customizations.bodyContent || template.bodyContent}
            onChange={(e) => handleInputChange('bodyContent', e.target.value)}
            rows={10}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
            placeholder="Enter your email content here..."
          />
          <p className="text-xs text-gray-500">
            Use **text** for bold formatting and • for bullet points
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <Link className="w-5 h-5 text-gray-600" />
          <label className="text-sm font-medium text-gray-700">Call-to-Action Buttons</label>
        </div>
        
        {/* Primary CTA */}
        <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <label className="block text-sm font-medium text-gray-700">Primary Button</label>
            <button
              onClick={() => handleToggle('showCta')}
              className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800"
            >
              {customizations.showCta !== false ? (
                <Eye className="w-4 h-4" />
              ) : (
                <EyeOff className="w-4 h-4" />
              )}
              <span>{customizations.showCta !== false ? 'Visible' : 'Hidden'}</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={customizations.ctaText || template.ctaText}
              onChange={(e) => handleInputChange('ctaText', e.target.value)}
              placeholder="Button Text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={customizations.showCta === false}
            />
            <input
              type="url"
              value={customizations.ctaLink || template.ctaLink}
              onChange={(e) => handleInputChange('ctaLink', e.target.value)}
              placeholder="Button Link"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              disabled={customizations.showCta === false}
            />
          </div>
        </div>

        {/* Secondary CTA */}
        {template.secondaryCtaText && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">Secondary Button</label>
              <button
                onClick={() => handleToggle('showSecondaryCta')}
                className="flex items-center space-x-2 text-sm text-gray-600 hover:text-gray-800"
              >
                {customizations.showSecondaryCta !== false ? (
                  <Eye className="w-4 h-4" />
                ) : (
                  <EyeOff className="w-4 h-4" />
                )}
                <span>{customizations.showSecondaryCta !== false ? 'Visible' : 'Hidden'}</span>
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              <input
                type="text"
                value={customizations.secondaryCtaText || template.secondaryCtaText}
                onChange={(e) => handleInputChange('secondaryCtaText', e.target.value)}
                placeholder="Secondary Button Text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={customizations.showSecondaryCta === false}
              />
              <input
                type="url"
                value={customizations.secondaryCtaLink || template.secondaryCtaLink}
                onChange={(e) => handleInputChange('secondaryCtaLink', e.target.value)}
                placeholder="Secondary Button Link"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                disabled={customizations.showSecondaryCta === false}
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer Information */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">Footer Information</label>
        <div className="space-y-3">
          <input
            type="text"
            value={customizations.footerCompany || template.footerCompany}
            onChange={(e) => handleInputChange('footerCompany', e.target.value)}
            placeholder="Company Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <input
            type="text"
            value={customizations.footerAddress || template.footerAddress}
            onChange={(e) => handleInputChange('footerAddress', e.target.value)}
            placeholder="Company Address"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
        </div>
      </div>

      {/* Watermark Section */}
      <div className="space-y-6">
        <div className="flex items-center space-x-2">
          <FileText className="w-5 h-5 text-gray-600" />
          <label className="text-sm font-medium text-gray-700">Watermark</label>
        </div>

        {/* Watermark Toggle */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <label className="block text-sm font-medium text-gray-700">Show Watermark</label>
            <p className="text-xs text-gray-500 mt-1">Add a subtle branding watermark to your email</p>
          </div>
          <button
            onClick={() => handleToggle('showWatermark')}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              customizations.showWatermark ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                customizations.showWatermark ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Watermark Options */}
        {customizations.showWatermark && (
          <div className="space-y-4">
            {/* Watermark Text */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Watermark Text</label>
              <input
                type="text"
                value={customizations.watermarkText || template.watermarkText}
                onChange={(e) => handleInputChange('watermarkText', e.target.value)}
                placeholder="Powered by EmailGen"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Watermark Position */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Position</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: 'top-left', label: 'Top Left' },
                  { value: 'top-right', label: 'Top Right' },
                  { value: 'center', label: 'Center' },
                  { value: 'bottom-left', label: 'Bottom Left' },
                  { value: 'bottom-right', label: 'Bottom Right' }
                ].map((position) => (
                  <button
                    key={position.value}
                    onClick={() => handleInputChange('watermarkPosition', position.value)}
                    className={`p-2 text-xs border-2 rounded-lg transition-all ${
                      (customizations.watermarkPosition || template.watermarkPosition) === position.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {position.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Watermark Style */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Style</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'subtle', label: 'Subtle', description: 'Light background with transparency' },
                  { value: 'bold', label: 'Bold', description: 'Prominent with brand color' },
                  { value: 'minimal', label: 'Minimal', description: 'Text only, no background' },
                  { value: 'branded', label: 'Branded', description: 'Brand color background' }
                ].map((style) => (
                  <button
                    key={style.value}
                    onClick={() => handleInputChange('watermarkStyle', style.value)}
                    className={`p-3 text-left border-2 rounded-lg transition-all ${
                      (customizations.watermarkStyle || template.watermarkStyle) === style.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-medium text-sm text-gray-900">{style.label}</div>
                    <div className="text-xs text-gray-600 mt-1">{style.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Watermark Preview */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border">
              <div className="text-xs text-gray-600 mb-2">Preview:</div>
              <div className="relative h-16 bg-white rounded border overflow-hidden">
                <div 
                  className="absolute text-xs pointer-events-none select-none"
                  style={{
                    ...(customizations.watermarkPosition === 'top-left' && { top: '4px', left: '4px' }),
                    ...(customizations.watermarkPosition === 'top-right' && { top: '4px', right: '4px' }),
                    ...(customizations.watermarkPosition === 'bottom-left' && { bottom: '4px', left: '4px' }),
                    ...(customizations.watermarkPosition === 'center' && { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }),
                    ...(!customizations.watermarkPosition || customizations.watermarkPosition === 'bottom-right') && { bottom: '4px', right: '4px' },
                    
                    ...(customizations.watermarkStyle === 'subtle' && { 
                      color: 'rgba(0,0,0,0.3)', 
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      padding: '2px 4px',
                      borderRadius: '2px'
                    }),
                    ...(customizations.watermarkStyle === 'bold' && { 
                      color: primaryColor, 
                      backgroundColor: 'rgba(255,255,255,0.95)',
                      padding: '3px 6px',
                      borderRadius: '3px',
                      fontWeight: '600',
                      border: `1px solid ${primaryColor}20`
                    }),
                    ...(customizations.watermarkStyle === 'minimal' && { 
                      color: 'rgba(0,0,0,0.4)'
                    }),
                    ...(customizations.watermarkStyle === 'branded' && { 
                      color: '#ffffff', 
                      backgroundColor: primaryColor,
                      padding: '2px 5px',
                      borderRadius: '6px',
                      fontSize: '10px',
                      fontWeight: '500'
                    }),
                    ...(!customizations.watermarkStyle && { 
                      color: 'rgba(0,0,0,0.3)', 
                      backgroundColor: 'rgba(255,255,255,0.8)',
                      padding: '2px 4px',
                      borderRadius: '2px'
                    })
                  }}
                >
                  {customizations.watermarkText || template.watermarkText || 'Powered by EmailGen'}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomizationPanel;