import React from 'react';
import { GithubIcon, BookOpenIcon, RocketIcon, LifeBuoyIcon } from 'lucide-react';
interface DocumentationHeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}
export function DocumentationHeader({
  activeSection,
  setActiveSection
}: DocumentationHeaderProps) {
  const navItems = [{
    id: 'overview',
    label: 'Overview',
    icon: BookOpenIcon
  }, {
    id: 'files',
    label: 'File Checklist',
    icon: GithubIcon
  }, {
    id: 'deployment',
    label: 'Deployment',
    icon: RocketIcon
  }, {
    id: 'support',
    label: 'Support',
    icon: LifeBuoyIcon
  }];
  return <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">AI-Bob</h1>
              <p className="text-xs text-slate-500">
                Complete GitHub Repository Package
              </p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-1">
            {navItems.map(item => {
            const Icon = item.icon;
            return <button key={item.id} onClick={() => setActiveSection(item.id)} className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${activeSection === item.id ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}>
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>;
          })}
          </nav>
          <a href="https://github.com/ai-bob/ai-bob" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
            <GithubIcon className="w-4 h-4" />
            <span className="text-sm font-medium">View on GitHub</span>
          </a>
        </div>
      </div>
    </header>;
}