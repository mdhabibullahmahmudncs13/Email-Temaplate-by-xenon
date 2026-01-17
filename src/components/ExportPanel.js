import React, { useState } from 'react';
import { Copy, Download, Code, Eye, Check } from 'lucide-react';

const ExportPanel = ({ template, customizations, primaryColor }) => {
  const [showRawHTML, setShowRawHTML] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  if (!template) {
    return null;
  }

  const generateEmailHTML = () => {
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
    } = { ...template, ...customizations };

    const logoUrl = customizations.logoUrl || 'https://via.placeholder.com/200x60/3b82f6/ffffff?text=LOGO';

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
      return (usePound ? '#' : '') + (((r << 16) | (g << 8)) | b).toString(16).padStart(6, '0');
    };

    // Header style variations
    const getHeaderStyleCSS = () => {
      const baseStyle = 'padding: 40px 20px; text-align: center; color: #ffffff;';
      
      switch (headerStyle) {
        case 'gradient':
          return `${baseStyle} background: linear-gradient(135deg, ${primaryColor} 0%, ${adjustColor(primaryColor, -20)} 100%); position: relative; overflow: hidden;`;
        case 'bold':
          return `${baseStyle} background-color: ${primaryColor}; border-bottom: 5px solid ${adjustColor(primaryColor, -30)};`;
        case 'elegant':
          return `${baseStyle} background-color: #1a1a1a; background-image: linear-gradient(45deg, ${primaryColor}22 25%, transparent 25%), linear-gradient(-45deg, ${primaryColor}22 25%, transparent 25%); background-size: 20px 20px;`;
        case 'warm':
          return `${baseStyle} background: radial-gradient(circle at center, ${primaryColor} 0%, ${adjustColor(primaryColor, -15)} 70%);`;
        case 'secure':
          return `${baseStyle} background-color: #2d3748; border-top: 4px solid ${primaryColor};`;
        case 'professional':
          return `${baseStyle} background-color: ${primaryColor}; border-radius: 0 0 20px 20px;`;
        case 'celebration':
          return `${baseStyle} background: linear-gradient(45deg, ${primaryColor}, #ff6b6b, #4ecdc4, ${primaryColor}); background-size: 400% 400%; animation: gradient 3s ease infinite;`;
        default:
          return `${baseStyle} background-color: ${primaryColor};`;
      }
    };

    return `<!DOCTYPE html>
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
        .header { ${getHeaderStyleCSS()} }
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
        .divider { height: 1px; background: linear-gradient(to right, transparent, ${primaryColor}, transparent); margin: 30px 0; }
        .footer { background-color: #1a202c; padding: 40px 30px; text-align: center; }
        .footer p { color: #a0aec0; margin: 8px 0; font-size: 14px; }
        .footer strong { color: #ffffff; }
        .social-links { margin: 25px 0; }
        .social-links a { display: inline-block; margin: 0 12px; color: ${primaryColor}; text-decoration: none; font-weight: 500; }
        @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; margin: 0 !important; }
            .header, .content, .footer { padding: 30px 20px !important; }
            .header h1 { font-size: 28px !important; }
            .cta-button { display: block !important; margin: 10px 0 !important; }
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

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateEmailHTML());
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const downloadHTML = () => {
    const htmlContent = generateEmailHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `email-template-${template.id}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="border-t border-gray-200 pt-6 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Export Options</h3>
      
      {/* Export Buttons */}
      <div className="grid grid-cols-1 gap-3">
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {copySuccess ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span>Copy HTML to Clipboard</span>
            </>
          )}
        </button>
        
        <button
          onClick={downloadHTML}
          className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span>Download HTML File</span>
        </button>
        
        <button
          onClick={() => setShowRawHTML(!showRawHTML)}
          className="flex items-center justify-center space-x-2 w-full px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          {showRawHTML ? <Eye className="w-4 h-4" /> : <Code className="w-4 h-4" />}
          <span>{showRawHTML ? 'Hide' : 'Show'} Raw HTML</span>
        </button>
      </div>

      {/* Raw HTML Display */}
      {showRawHTML && (
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Raw HTML Code
          </label>
          <textarea
            value={generateEmailHTML()}
            readOnly
            rows={12}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm font-mono resize-none scrollbar-thin"
          />
        </div>
      )}

      {/* Usage Instructions */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="text-sm font-medium text-blue-900 mb-2">Usage Instructions</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Copy the HTML code and paste it into your email marketing platform</li>
          <li>• Download the HTML file to use with your email service provider</li>
          <li>• The template uses inline CSS for maximum email client compatibility</li>
          <li>• Watermarks are included if enabled in customization settings</li>
          <li>• Test your email across different email clients before sending</li>
        </ul>
      </div>
    </div>
  );
};

export default ExportPanel;