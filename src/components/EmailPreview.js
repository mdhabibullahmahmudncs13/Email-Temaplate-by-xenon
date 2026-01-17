import React from 'react';

const EmailPreview = ({ template, customizations, primaryColor }) => {
  const {
    subject,
    headerText,
    subheaderText,
    bodyContent,
    ctaText,
    ctaLink,
    secondaryCtaText,
    secondaryCtaLink,
    footerCompany,
    footerAddress,
    showHeader,
    showCta,
    showSecondaryCta,
    showWatermark,
    watermarkText,
    watermarkPosition,
    watermarkStyle,
    headerStyle
    // layout - available but not currently used in preview
  } = { ...template, ...customizations };

  const logoUrl = customizations.logoUrl || 'https://via.placeholder.com/200x60/3b82f6/ffffff?text=LOGO';

  // Header style variations
  const getHeaderStyle = () => {
    const baseStyle = {
      padding: '40px 20px',
      textAlign: 'center',
      color: '#ffffff'
    };

    switch (headerStyle) {
      case 'gradient':
        return {
          ...baseStyle,
          background: `linear-gradient(135deg, ${primaryColor} 0%, ${adjustColor(primaryColor, -20)} 100%)`,
          position: 'relative',
          overflow: 'hidden'
        };
      case 'bold':
        return {
          ...baseStyle,
          backgroundColor: primaryColor,
          borderBottom: `5px solid ${adjustColor(primaryColor, -30)}`
        };
      case 'elegant':
        return {
          ...baseStyle,
          backgroundColor: '#1a1a1a',
          backgroundImage: `linear-gradient(45deg, ${primaryColor}22 25%, transparent 25%), linear-gradient(-45deg, ${primaryColor}22 25%, transparent 25%)`,
          backgroundSize: '20px 20px'
        };
      case 'warm':
        return {
          ...baseStyle,
          background: `radial-gradient(circle at center, ${primaryColor} 0%, ${adjustColor(primaryColor, -15)} 70%)`,
        };
      case 'secure':
        return {
          ...baseStyle,
          backgroundColor: '#2d3748',
          borderTop: `4px solid ${primaryColor}`
        };
      case 'professional':
        return {
          ...baseStyle,
          backgroundColor: primaryColor,
          borderRadius: '0 0 20px 20px'
        };
      case 'celebration':
        return {
          ...baseStyle,
          background: `linear-gradient(45deg, ${primaryColor}, #ff6b6b, #4ecdc4, ${primaryColor})`,
          backgroundSize: '400% 400%',
          animation: 'gradient 3s ease infinite'
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: primaryColor
        };
    }
  };

  // Utility function to adjust color brightness
  const adjustColor = (color, amount) => {
    const usePound = color[0] === '#';
    const col = usePound ? color.slice(1) : color;
    const num = parseInt(col, 16);
    let r = (num >> 16) + amount;
    let g = ((num >> 8) & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;
    r = r > 255 ? 255 : r < 0 ? 0 : r;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    b = b > 255 ? 255 : b < 0 ? 0 : b;
    return (usePound ? '#' : '') + ((r << 16) | (g << 8) | b).toString(16).padStart(6, '0');
  };

  // Get watermark styles based on position and style
  const getWatermarkStyles = () => {
    const baseStyles = {
      position: 'absolute',
      fontSize: '11px',
      fontWeight: '400',
      zIndex: '10',
      pointerEvents: 'none',
      userSelect: 'none'
    };

    const positions = {
      'top-left': { top: '10px', left: '10px' },
      'top-right': { top: '10px', right: '10px' },
      'bottom-left': { bottom: '10px', left: '10px' },
      'bottom-right': { bottom: '10px', right: '10px' },
      'center': { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
    };

    const styles = {
      'subtle': { 
        color: 'rgba(0,0,0,0.3)', 
        backgroundColor: 'rgba(255,255,255,0.8)',
        padding: '4px 8px',
        borderRadius: '4px',
        backdropFilter: 'blur(2px)'
      },
      'bold': { 
        color: primaryColor, 
        backgroundColor: 'rgba(255,255,255,0.95)',
        padding: '6px 12px',
        borderRadius: '6px',
        fontWeight: '600',
        border: `1px solid ${primaryColor}20`
      },
      'minimal': { 
        color: 'rgba(0,0,0,0.4)',
        backgroundColor: 'transparent'
      },
      'branded': { 
        color: '#ffffff', 
        backgroundColor: primaryColor,
        padding: '4px 10px',
        borderRadius: '12px',
        fontSize: '10px',
        fontWeight: '500'
      }
    };

    return {
      ...baseStyles,
      ...positions[watermarkPosition || 'bottom-right'],
      ...styles[watermarkStyle || 'subtle']
    };
  };

  // Generate inline CSS for email compatibility
  const generateEmailHTML = () => {
    const headerStyleCSS = getHeaderStyle();
    const headerStyleString = Object.entries(headerStyleCSS)
      .map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`)
      .join('; ');

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; line-height: 1.6; }
        .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
        .header { ${headerStyleString} }
        .header img { max-width: 200px; height: auto; margin-bottom: 20px; }
        .header h1 { color: #ffffff; margin: 0 0 10px 0; font-size: 32px; font-weight: 700; letter-spacing: -0.5px; }
        .header p { color: rgba(255,255,255,0.9); margin: 0; font-size: 18px; font-weight: 300; }
        .content { padding: 50px 40px; }
        .content h2 { color: #1a202c; font-size: 24px; font-weight: 600; margin: 0 0 20px 0; }
        .content p { color: #4a5568; line-height: 1.7; margin: 0 0 20px 0; font-size: 16px; }
        .content strong { color: #2d3748; font-weight: 600; }
        .content ul { margin: 20px 0; padding-left: 0; }
        .content li { color: #4a5568; margin: 8px 0; padding-left: 20px; position: relative; list-style: none; }
        .content li:before { content: "✓"; color: ${primaryColor}; font-weight: bold; position: absolute; left: 0; }
        .cta-container { text-align: center; margin: 40px 0; }
        .cta-button { display: inline-block; background-color: ${primaryColor}; color: #ffffff; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; margin: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: all 0.3s ease; }
        .cta-button:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.2); }
        .secondary-cta { background-color: transparent; color: ${primaryColor}; border: 2px solid ${primaryColor}; }
        .secondary-cta:hover { background-color: ${primaryColor}; color: #ffffff; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px; margin: 30px 0; }
        .stat-item { text-align: center; padding: 20px; background-color: #f7fafc; border-radius: 8px; }
        .stat-number { font-size: 24px; font-weight: 700; color: ${primaryColor}; }
        .stat-label { font-size: 14px; color: #718096; margin-top: 5px; }
        .footer { background-color: #1a202c; padding: 40px 30px; text-align: center; }
        .footer p { color: #a0aec0; margin: 8px 0; font-size: 14px; }
        .footer strong { color: #ffffff; }
        .social-links { margin: 25px 0; }
        .social-links a { display: inline-block; margin: 0 12px; color: ${primaryColor}; text-decoration: none; font-weight: 500; }
        .divider { height: 1px; background: linear-gradient(to right, transparent, ${primaryColor}, transparent); margin: 30px 0; }
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: 0 !important; }
            .header, .content, .footer { padding: 30px 20px !important; }
            .header h1 { font-size: 28px !important; }
            .cta-button { display: block !important; margin: 10px 0 !important; }
            .stats-grid { grid-template-columns: 1fr !important; }
        }
    </style>
</head>
<body>
    <div class="email-container">
        ${showHeader ? `
        <div class="header">
            <img src="${logoUrl}" alt="Company Logo" />
            <h1>${headerText}</h1>
            ${subheaderText ? `<p>${subheaderText}</p>` : ''}
        </div>
        ` : ''}
        
        <div class="content">
            ${bodyContent.split('\n').map(paragraph => {
              if (!paragraph.trim()) return '';
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return `<h2>${paragraph.replace(/\*\*/g, '')}</h2>`;
              }
              return `<p>${paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/•/g, '&bull;')}</p>`;
            }).join('')}
            
            <div class="divider"></div>
            
            ${(showCta || showSecondaryCta) ? `
            <div class="cta-container">
                ${showCta ? `<a href="${ctaLink}" class="cta-button">${ctaText}</a>` : ''}
                ${showSecondaryCta ? `<a href="${secondaryCtaLink}" class="cta-button secondary-cta">${secondaryCtaText}</a>` : ''}
            </div>
            ` : ''}
        </div>
        
        <div class="footer">
            <p><strong>${footerCompany}</strong></p>
            <p>${footerAddress}</p>
            <div class="social-links">
                <a href="#facebook">Facebook</a>
                <a href="#twitter">Twitter</a>
                <a href="#linkedin">LinkedIn</a>
                <a href="#instagram">Instagram</a>
            </div>
            <p style="font-size: 12px; color: #718096; margin-top: 20px;">
                You received this email because you subscribed to our newsletter.
                <a href="#unsubscribe" style="color: ${primaryColor};">Unsubscribe</a> | 
                <a href="#preferences" style="color: ${primaryColor};">Update Preferences</a>
            </p>
        </div>
        
        ${showWatermark ? `
        <div style="position: relative;">
            <div style="position: absolute; ${Object.entries({
              'top-left': 'top: 10px; left: 10px;',
              'top-right': 'top: 10px; right: 10px;',
              'bottom-left': 'bottom: 10px; left: 10px;',
              'bottom-right': 'bottom: 10px; right: 10px;',
              'center': 'top: 50%; left: 50%; transform: translate(-50%, -50%);'
            })[watermarkPosition || 'bottom-right']} ${Object.entries({
              'subtle': 'color: rgba(0,0,0,0.3); background-color: rgba(255,255,255,0.8); padding: 4px 8px; border-radius: 4px;',
              'bold': `color: ${primaryColor}; background-color: rgba(255,255,255,0.95); padding: 6px 12px; border-radius: 6px; font-weight: 600; border: 1px solid ${primaryColor}20;`,
              'minimal': 'color: rgba(0,0,0,0.4); background-color: transparent;',
              'branded': `color: #ffffff; background-color: ${primaryColor}; padding: 4px 10px; border-radius: 12px; font-size: 10px; font-weight: 500;`
            })[watermarkStyle || 'subtle']} font-size: 11px; z-index: 10; pointer-events: none; user-select: none;">
                ${watermarkText || 'Powered by EmailGen'}
            </div>
        </div>
        ` : ''}
    </div>
</body>
</html>`;
  };

  return (
    <div className="bg-gray-100 p-4 h-full overflow-auto scrollbar-thin">
      <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Email Header */}
        {showHeader && (
          <div style={getHeaderStyle()}>
            <img 
              src={logoUrl} 
              alt="Company Logo" 
              className="mx-auto mb-6 max-w-48 h-auto"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/200x60/3b82f6/ffffff?text=LOGO';
              }}
            />
            <h1 className="text-4xl font-bold mb-3 tracking-tight">{headerText}</h1>
            {subheaderText && (
              <p className="text-lg font-light opacity-90">{subheaderText}</p>
            )}
          </div>
        )}
        
        {/* Email Content */}
        <div className="px-12 py-16">
          {bodyContent.split('\n').map((paragraph, index) => {
            if (!paragraph.trim()) return null;
            
            // Handle headers (text between **)
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-6 mt-8">
                  {paragraph.replace(/\*\*/g, '')}
                </h2>
              );
            }
            
            return (
              <p key={index} className="text-gray-700 leading-relaxed mb-5 text-base">
                {paragraph.split('**').map((part, i) => 
                  i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
                )}
              </p>
            );
          })}
          
          {/* Divider */}
          <div 
            className="h-px my-8 bg-gradient-to-r from-transparent via-current to-transparent opacity-20"
            style={{ color: primaryColor }}
          ></div>
          
          {/* CTA Buttons */}
          {(showCta || showSecondaryCta) && (
            <div className="text-center my-12 space-y-4">
              {showCta && (
                <a
                  href={ctaLink || '#'}
                  className="inline-block px-8 py-4 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 mx-2"
                  style={{ backgroundColor: primaryColor }}
                >
                  {ctaText}
                </a>
              )}
              {showSecondaryCta && (
                <a
                  href={secondaryCtaLink || '#'}
                  className="inline-block px-8 py-4 font-semibold rounded-lg border-2 hover:bg-opacity-10 transition-all duration-200 mx-2"
                  style={{ 
                    borderColor: primaryColor, 
                    color: primaryColor,
                    backgroundColor: 'transparent'
                  }}
                >
                  {secondaryCtaText}
                </a>
              )}
            </div>
          )}
        </div>
        
        {/* Email Footer */}
        <div className="bg-gray-900 px-12 py-12 text-center text-white">
          <p className="font-semibold text-lg mb-2">{footerCompany}</p>
          <p className="text-gray-300 text-sm mb-8">{footerAddress}</p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-8">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a
                key={social}
                href={`#${social.toLowerCase()}`}
                className="text-sm font-medium hover:underline transition-colors"
                style={{ color: primaryColor }}
              >
                {social}
              </a>
            ))}
          </div>
          
          <p className="text-xs text-gray-400 leading-relaxed">
            You received this email because you subscribed to our newsletter.{' '}
            <a href="#unsubscribe" className="hover:underline" style={{ color: primaryColor }}>
              Unsubscribe
            </a>
            {' | '}
            <a href="#preferences" className="hover:underline" style={{ color: primaryColor }}>
              Update Preferences
            </a>
          </p>
        </div>
        
        {/* Watermark */}
        {showWatermark && (
          <div className="relative">
            <div 
              className="absolute text-xs pointer-events-none select-none"
              style={getWatermarkStyles()}
            >
              {watermarkText || 'Powered by EmailGen'}
            </div>
          </div>
        )}
      </div>
      
      {/* Hidden HTML for copying */}
      <textarea
        id="email-html"
        className="sr-only"
        value={generateEmailHTML()}
        readOnly
      />
    </div>
  );
};

export default EmailPreview;