import React, { useState } from 'react';
import { CloudIcon, ServerIcon, DatabaseIcon } from 'lucide-react';
export function DeploymentGuide() {
  const [selectedProvider, setSelectedProvider] = useState<'aws' | 'gcp' | 'azure'>('aws');
  const providers = {
    aws: {
      name: 'Amazon Web Services',
      icon: '☁️',
      scripts: 15,
      code: `cd infrastructure/terraform/aws
source .env.aws
./scripts/aws/01-create-backend.sh
terraform init
terraform plan -out=tfplan
terraform apply tfplan
./scripts/aws/04-deploy-infrastructure.sh`,
      steps: ['Prerequisites check', 'Create Terraform backend', 'Deploy infrastructure', 'Wait for resources', 'Configure kubectl', 'Create K8s secrets', 'Initialize database', 'Build Docker images', 'Deploy applications', 'Install ALB controller', 'Verify deployment', 'Install monitoring']
    },
    gcp: {
      name: 'Google Cloud Platform',
      icon: '🌐',
      scripts: 16,
      code: `cd infrastructure/terraform/gcp
source .env.gcp
./scripts/gcp/00-setup-gcp.sh
./scripts/gcp/02-create-backend.sh
terraform init
terraform apply`,
      steps: ['Setup GCP project', 'Enable required APIs', 'Create Terraform backend', 'Plan infrastructure', 'Deploy infrastructure', 'Wait for resources', 'Configure kubectl', 'Setup workload identity', 'Create K8s secrets', 'Initialize database', 'Build Docker images', 'Deploy applications', 'Install ingress controller', 'Install cert-manager', 'Create ingress', 'Verify deployment']
    },
    azure: {
      name: 'Microsoft Azure',
      icon: '☁️',
      scripts: 16,
      code: `cd infrastructure/terraform/azure
source .env.azure
./scripts/azure/00-setup-azure.sh
./scripts/azure/02-create-backend.sh
terraform init
terraform apply`,
      steps: ['Setup Azure subscription', 'Register providers', 'Create Terraform backend', 'Plan infrastructure', 'Deploy infrastructure', 'Wait for resources', 'Configure kubectl', 'Setup Key Vault', 'Create secret provider', 'Create ConfigMap', 'Initialize database', 'Build Docker images', 'Deploy applications', 'Install ingress controller', 'Install cert-manager', 'Create ingress', 'Verify deployment']
    }
  };
  const provider = providers[selectedProvider];
  return <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          🚀 Deployment Guide
        </h2>
        <p className="text-slate-600">
          Choose your cloud provider and follow the automated deployment steps
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {(Object.keys(providers) as Array<keyof typeof providers>).map(key => {
        const p = providers[key];
        return <button key={key} onClick={() => setSelectedProvider(key)} className={`p-6 rounded-xl border-2 transition-all ${selectedProvider === key ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'}`}>
                <div className="text-4xl mb-3">{p.icon}</div>
                <h3 className="font-semibold text-slate-900 mb-1">{p.name}</h3>
                <p className="text-sm text-slate-600">
                  {p.scripts} deployment scripts
                </p>
              </button>;
      })}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
            <ServerIcon className="w-5 h-5 text-blue-500" />
            <span>Quick Start Commands</span>
          </h3>
          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm text-slate-100 overflow-x-auto">
            <pre className="whitespace-pre-wrap">{provider.code}</pre>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Deployment time:</strong> 45-60 minutes from start to
              production
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center space-x-2">
            <DatabaseIcon className="w-5 h-5 text-green-500" />
            <span>Deployment Steps</span>
          </h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {provider.steps.map((step, index) => <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-50">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-xs font-semibold">
                    {index + 1}
                  </span>
                </div>
                <span className="text-sm text-slate-700">{step}</span>
              </div>)}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">
          ✅ Pre-Deployment Checklist
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          {['GitHub account (if cloning)', 'Git installed locally', 'Text editor or IDE (VSCode recommended)', 'Docker Desktop installed', 'Node.js 18+ installed', 'Cloud provider account (AWS/GCP/Azure)', 'API keys ready (Anthropic, OpenAI, GitHub)', 'Domain name (for production deployment)'].map((item, index) => <label key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
              <span className="text-sm text-slate-700">{item}</span>
            </label>)}
        </div>
      </div>
    </div>;
}