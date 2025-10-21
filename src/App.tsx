import React, { useState } from 'react';
import { DocumentationHeader } from './components/DocumentationHeader';
import { QuickStart } from './components/QuickStart';
import { RepositoryStructure } from './components/RepositoryStructure';
import { FileChecklist } from './components/FileChecklist';
import { DeploymentGuide } from './components/DeploymentGuide';
import { SupportSection } from './components/SupportSection';
export function App() {
  const [activeSection, setActiveSection] = useState('overview');
  return <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <DocumentationHeader activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeSection === 'overview' && <>
            <QuickStart />
            <RepositoryStructure />
          </>}
        {activeSection === 'files' && <FileChecklist />}
        {activeSection === 'deployment' && <DeploymentGuide />}
        {activeSection === 'support' && <SupportSection />}
      </main>
    </div>;
}