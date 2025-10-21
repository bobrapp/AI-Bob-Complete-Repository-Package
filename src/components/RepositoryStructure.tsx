import React, { useState } from 'react';
import { FolderIcon, FileIcon, ChevronRightIcon, ChevronDownIcon } from 'lucide-react';
export function RepositoryStructure() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['root']));
  const toggleFolder = (path: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(path)) {
        next.delete(path);
      } else {
        next.add(path);
      }
      return next;
    });
  };
  const structure = [{
    name: 'docs/',
    path: 'docs',
    type: 'folder',
    description: '📚 Complete Documentation Suite',
    children: [{
      name: 'PRD.md',
      type: 'file',
      description: 'Product Requirements Document'
    }, {
      name: 'PRD-FAQ.md',
      type: 'file',
      description: '33 Frequently Asked Questions'
    }, {
      name: 'MRD.md',
      type: 'file',
      description: 'Market Requirements Document'
    }, {
      name: 'architecture/',
      type: 'folder',
      description: 'System & database architecture'
    }, {
      name: 'deployment/',
      type: 'folder',
      description: 'AWS, GCP, Azure deployment guides'
    }]
  }, {
    name: 'infrastructure/',
    path: 'infrastructure',
    type: 'folder',
    description: '🏗️ Infrastructure as Code',
    children: [{
      name: 'terraform/aws/',
      type: 'folder',
      description: 'AWS deployment (500+ lines)'
    }, {
      name: 'terraform/gcp/',
      type: 'folder',
      description: 'GCP deployment (450+ lines)'
    }, {
      name: 'terraform/azure/',
      type: 'folder',
      description: 'Azure deployment (480+ lines)'
    }, {
      name: 'kubernetes/',
      type: 'folder',
      description: 'K8s manifests & configs'
    }]
  }, {
    name: 'scripts/',
    path: 'scripts',
    type: 'folder',
    description: '🔧 Deployment & Maintenance Scripts',
    children: [{
      name: 'aws/',
      type: 'folder',
      description: '15 AWS deployment scripts'
    }, {
      name: 'gcp/',
      type: 'folder',
      description: '16 GCP deployment scripts'
    }, {
      name: 'azure/',
      type: 'folder',
      description: '16 Azure deployment scripts'
    }]
  }, {
    name: 'apps/',
    path: 'apps',
    type: 'folder',
    description: '🖥️ Application Code',
    children: [{
      name: 'web/',
      type: 'folder',
      description: 'React Dashboard (400+ lines)'
    }, {
      name: 'cli/',
      type: 'folder',
      description: 'Command-line interface'
    }, {
      name: 'mobile/',
      type: 'folder',
      description: 'React Native app'
    }]
  }, {
    name: 'packages/',
    path: 'packages',
    type: 'folder',
    description: '📦 Microservices',
    children: [{
      name: 'api-gateway/',
      type: 'folder',
      description: 'API Gateway Service'
    }, {
      name: 'orchestration/',
      type: 'folder',
      description: 'Multi-agent coordinator'
    }, {
      name: 'compliance-agent/',
      type: 'folder',
      description: 'GDPR & security checks'
    }, {
      name: 'dora-agent/',
      type: 'folder',
      description: 'Performance metrics'
    }, {
      name: 'coding-agent/',
      type: 'folder',
      description: 'Code generation & review'
    }]
  }, {
    name: 'custom-gpt/',
    path: 'custom-gpt',
    type: 'folder',
    description: '🤖 Custom GPT Configuration',
    children: [{
      name: 'system-prompt.md',
      type: 'file',
      description: 'Complete system prompt'
    }, {
      name: 'api-actions.json',
      type: 'file',
      description: 'API action definitions'
    }, {
      name: 'testing-prompts.md',
      type: 'file',
      description: 'Test scenarios'
    }]
  }];
  return <div className="mb-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        📦 Repository Structure
      </h2>
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6">
          {structure.map(item => {
          const isExpanded = expandedFolders.has(item.path);
          return <div key={item.name} className="mb-4 last:mb-0">
                <button onClick={() => toggleFolder(item.path)} className="w-full flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors text-left">
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    {isExpanded ? <ChevronDownIcon className="w-4 h-4 text-slate-400" /> : <ChevronRightIcon className="w-4 h-4 text-slate-400" />}
                    <FolderIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <span className="font-mono text-sm font-semibold text-slate-900">
                        {item.name}
                      </span>
                      <span className="text-sm text-slate-500">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </button>
                {isExpanded && item.children && <div className="ml-9 mt-2 space-y-1">
                    {item.children.map(child => <div key={child.name} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-50">
                        {child.type === 'folder' ? <FolderIcon className="w-4 h-4 text-slate-400 flex-shrink-0" /> : <FileIcon className="w-4 h-4 text-slate-400 flex-shrink-0" />}
                        <span className="font-mono text-sm text-slate-700">
                          {child.name}
                        </span>
                        <span className="text-xs text-slate-500">
                          {child.description}
                        </span>
                      </div>)}
                  </div>}
              </div>;
        })}
        </div>
      </div>
    </div>;
}