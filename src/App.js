import React, { useState } from 'react';
import { Mail, Palette, Download } from 'lucide-react';
import TemplateSelector from './components/TemplateSelector';
import CustomizationPanel from './components/CustomizationPanel';
import EmailPreview from './components/EmailPreview';
import ExportPanel from './components/ExportPanel';
import FeatureShowcase from './components/FeatureShowcase';


function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [customizations, setCustomizations] = useState({});
  const [primaryColor, setPrimaryColor] = useState('#3b82f6');
  const [activeTab, setActiveTab] = useState('templates');

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setCustomizations({});
    setActiveTab('customize');
  };

  const handleReset = () => {
    setCustomizations({});
    setPrimaryColor('#3b82f6');
  };

  const tabs = [
    { id: 'templates', label: 'Templates', icon: Mail },
    { id: 'customize', label: 'Customize', icon: Palette },
    { id: 'export', label: 'Export', icon: Download }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">
                Email Template Generator
              </h1>
            </div>
            <div className="text-sm text-gray-500">
              Professional email templates for your business
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-8rem)]">
          
          {/* Left Panel - Controls */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  const isDisabled = tab.id !== 'templates' && !selectedTemplate;
                  
                  return (
                    <button
                      key={tab.id}
                      onClick={() => !isDisabled && setActiveTab(tab.id)}
                      disabled={isDisabled}
                      className={`flex items-center space-x-2 py-4 border-b-2 font-medium text-sm transition-colors ${
                        isActive
                          ? 'border-blue-500 text-blue-600'
                          : isDisabled
                          ? 'border-transparent text-gray-400 cursor-not-allowed'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-auto scrollbar-thin p-6">
              {activeTab === 'templates' && (
                <TemplateSelector
                  selectedTemplate={selectedTemplate}
                  onTemplateSelect={handleTemplateSelect}
                />
              )}
              
              {activeTab === 'customize' && (
                <CustomizationPanel
                  template={selectedTemplate}
                  customizations={customizations}
                  onCustomizationChange={setCustomizations}
                  onReset={handleReset}
                  primaryColor={primaryColor}
                  onColorChange={setPrimaryColor}
                />
              )}
              
              {activeTab === 'export' && (
                <ExportPanel
                  template={selectedTemplate}
                  customizations={customizations}
                  primaryColor={primaryColor}
                />
              )}
            </div>
          </div>

          {/* Right Panel - Preview */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 flex flex-col">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-semibold text-gray-900">Live Preview</h2>
              <p className="text-sm text-gray-600 mt-1">
                {selectedTemplate 
                  ? `Preview of ${selectedTemplate.name} template`
                  : 'Select a template to see the preview'
                }
              </p>
            </div>
            
            <div className="flex-1 overflow-hidden">
              {selectedTemplate ? (
                <EmailPreview
                  template={selectedTemplate}
                  customizations={customizations}
                  primaryColor={primaryColor}
                />
              ) : (
                <div className="p-8 h-full overflow-auto scrollbar-thin">
                  <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                      <Mail className="w-20 h-20 mx-auto mb-6 text-blue-500" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Professional Email Template Generator
                      </h3>
                      <p className="text-lg text-gray-600 mb-8">
                        Create stunning, responsive email templates with advanced customization options
                      </p>
                    </div>
                    
                    <FeatureShowcase />
                    
                    <div className="mt-8 text-center">
                      <p className="text-gray-600 mb-4">
                        Ready to get started? Choose a template from the left panel to begin creating your email.
                      </p>
                      <div className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium">
                        <Mail className="w-5 h-5" />
                        <span>Select a Template to Begin</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;