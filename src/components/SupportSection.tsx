import React from 'react';
import { MailIcon, MessageCircleIcon, GithubIcon, TwitterIcon, BookOpenIcon, UsersIcon } from 'lucide-react';
export function SupportSection() {
  const supportChannels = [{
    icon: BookOpenIcon,
    title: 'Documentation',
    description: 'Comprehensive guides and API reference',
    links: [{
      label: 'Main Docs',
      url: '/docs'
    }, {
      label: 'API Reference',
      url: '/docs/api/API.md'
    }, {
      label: 'Troubleshooting',
      url: '/docs/guides/troubleshooting.md'
    }]
  }, {
    icon: GithubIcon,
    title: 'GitHub',
    description: 'Report bugs and request features',
    links: [{
      label: 'Issues',
      url: 'https://github.com/ai-bob/ai-bob/issues'
    }, {
      label: 'Discussions',
      url: 'https://github.com/ai-bob/ai-bob/discussions'
    }, {
      label: 'Pull Requests',
      url: 'https://github.com/ai-bob/ai-bob/pulls'
    }]
  }, {
    icon: MessageCircleIcon,
    title: 'Community',
    description: 'Join our community channels',
    links: [{
      label: 'Discord',
      url: 'https://discord.gg/aibob'
    }, {
      label: 'Twitter',
      url: 'https://twitter.com/aibob_dev'
    }]
  }, {
    icon: MailIcon,
    title: 'Commercial Support',
    description: 'Professional support for teams',
    links: [{
      label: 'support@aibob.ai',
      url: 'mailto:support@aibob.ai'
    }, {
      label: 'enterprise@aibob.ai',
      url: 'mailto:enterprise@aibob.ai'
    }]
  }];
  return <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          🆘 Support & Community
        </h2>
        <p className="text-slate-600">
          Get help, connect with the community, and access resources
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {supportChannels.map(channel => {
        const Icon = channel.icon;
        return <div key={channel.title} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">
                    {channel.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {channel.description}
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {channel.links.map(link => <a key={link.label} href={link.url} className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    {link.label}
                  </a>)}
              </div>
            </div>;
      })}
      </div>
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 text-white">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">🎉 You are Ready!</h3>
            <p className="text-green-100 text-lg">
              Everything you need to deploy and use AI-Bob
            </p>
          </div>
          <div className="text-6xl">🚀</div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">✅ Understand AI-Bob</h4>
            <p className="text-sm text-green-100">
              Complete documentation and architecture guides
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">✅ Deploy AI-Bob</h4>
            <p className="text-sm text-green-100">
              Infrastructure as code + 47 automation scripts
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">✅ Use AI-Bob</h4>
            <p className="text-sm text-green-100">
              Dashboard, CLI, and mobile applications
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <h4 className="font-semibold mb-2">✅ Extend AI-Bob</h4>
            <p className="text-sm text-green-100">
              Architecture docs and microservices code
            </p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-green-400/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-100">Total work packaged:</p>
              <p className="text-xl font-bold">
                ~20 hours of architecture & implementation
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-green-100">Deployment time:</p>
              <p className="text-xl font-bold">45-60 minutes</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          📝 License
        </h3>
        <p className="text-slate-600 mb-2">
          MIT License - See LICENSE file for details
        </p>
        <p className="text-sm text-slate-500">
          Free to use, modify, and distribute. Commercial support available for
          enterprise teams.
        </p>
      </div>
    </div>;
}