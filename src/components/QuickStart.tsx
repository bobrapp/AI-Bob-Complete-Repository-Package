import React from 'react';
import { DownloadIcon, PackageIcon, PlayIcon, CheckCircleIcon } from 'lucide-react';
export function QuickStart() {
  const stats = [{
    label: 'Total Files',
    value: '88+',
    icon: PackageIcon
  }, {
    label: 'Lines of Code',
    value: '8,000+',
    icon: CheckCircleIcon
  }, {
    label: 'Deployment Scripts',
    value: '47',
    icon: PlayIcon
  }, {
    label: 'Documentation',
    value: '15K words',
    icon: DownloadIcon
  }];
  return <div className="mb-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white mb-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              🎁 Download & Setup Instructions
            </h2>
            <p className="text-blue-100 text-lg">
              Complete repository structure with all documentation, code, and
              deployment packages
            </p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-sm font-semibold">v1.0.0</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(stat => {
          const Icon = stat.icon;
          return <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Icon className="w-6 h-6 mb-2 text-blue-200" />
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-blue-100">{stat.label}</div>
              </div>;
        })}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Method 1: Clone from GitHub
          </h3>
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-100 overflow-x-auto">
            <div className="text-green-400"># Clone the repository</div>
            <div>git clone https://github.com/ai-bob/ai-bob.git</div>
            <div>cd ai-bob</div>
            <div className="mt-3 text-green-400"># Install dependencies</div>
            <div>npm install</div>
            <div className="mt-3 text-green-400"># Setup environment</div>
            <div>cp .env.example .env</div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Method 2: Download ZIP
          </h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-semibold">1</span>
              </div>
              <div>
                <p className="text-slate-700">
                  Download the complete ZIP package from releases
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-semibold">2</span>
              </div>
              <div>
                <p className="text-slate-700">
                  Extract:{' '}
                  <code className="bg-slate-100 px-2 py-1 rounded text-sm">
                    unzip ai-bob-v1.0.0.zip
                  </code>
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-semibold">3</span>
              </div>
              <div>
                <p className="text-slate-700">
                  Navigate:{' '}
                  <code className="bg-slate-100 px-2 py-1 rounded text-sm">
                    cd ai-bob
                  </code>
                </p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <DownloadIcon className="w-4 h-4" />
            <span>Download ZIP Package</span>
          </button>
        </div>
      </div>
    </div>;
}