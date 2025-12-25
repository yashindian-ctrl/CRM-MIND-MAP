import { useState, useEffect } from 'react';
import { ChevronRight, ChevronDown, Crown, Target, Lock, Zap, Mail, DollarSign, Calendar, Grid3x3, Users, TrendingUp, CreditCard, History, CheckSquare, Clock, BarChart3, Share2, Users2, Receipt, Palette, Repeat, BookOpen, FileText, Shield, CheckCircle, LifeBuoy, Inbox, Link, Eye, BarChart2, MinusCircle, PieChart, Settings, Timer, Layers, Code, GitBranch, Brain, Activity, Gauge, Monitor, HelpCircle, Bell, Heart, Gift, Wrench, Sliders, Headphones, PlayCircle, Truck, Handshake, Rocket, ShieldCheck, File, ZapOff, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

// Types
type NodeType = 'root' | 'category' | 'module' | 'feature' | 'problem' | 'metric' | 'service' | 'value';
type Lifecycle = 'top-funnel' | 'mid-funnel' | 'post-sales' | 'operations' | 'value';

interface TreeNode {
  id: string;
  label: string;
  type?: NodeType;
  lifecycle?: Lifecycle;
  icon?: string;
  owner?: string;
  isGoldenPath?: boolean;
  children?: TreeNode[];
}

// Icon Map
const iconMap: Record<string, any> = {
  crown: Crown, target: Target, lock: Lock, zap: Zap, mail: Mail, dollar: DollarSign, calendar: Calendar, grid: Grid3x3, users: Users, 'trend-up': TrendingUp, card: CreditCard, history: History, tasks: CheckSquare, clock: Clock, 'bar-chart': BarChart3, share: Share2, 'users-alt': Users2, receipt: Receipt, palette: Palette, repeat: Repeat, 'credit-card': CreditCard, book: BookOpen, 'file-text': FileText, shield: Shield, 'check-circle': CheckCircle, 'life-buoy': LifeBuoy, inbox: Inbox, link: Link, eye: Eye, 'bar-chart-2': BarChart2, 'minus-circle': MinusCircle, 'pie-chart': PieChart, settings: Settings, timer: Timer, layers: Layers, code: Code, 'git-branch': GitBranch, brain: Brain, activity: Activity, gauge: Gauge, monitor: Monitor, 'help-circle': HelpCircle, bell: Bell, heart: Heart, gift: Gift, wrench: Wrench, sliders: Sliders, headphones: Headphones, 'play-circle': PlayCircle, truck: Truck, handshake: Handshake, 'dollar-sign': DollarSign, rocket: Rocket, 'shield-check': ShieldCheck, file: File, 'book-open': BookOpen, 'trending-up': TrendingUp, flow: Code,
};

const getIcon = (iconName?: string) => {
  if (!iconName) return Grid3x3;
  return iconMap[iconName] || Grid3x3;
};

// Lifecycle Colors
const getLifecycleColors = (lifecycle?: Lifecycle, isGoldenPath?: boolean) => {
  if (isGoldenPath) {
    return {
      headerBg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      bg: 'bg-gray-800',
      border: 'border-yellow-400',
      text: 'text-yellow-300',
      tagBg: 'bg-yellow-500/20 border-yellow-400',
      tagText: 'text-yellow-200',
      glow: 'shadow-lg shadow-yellow-500/20',
      lineColor: '#FCD34D',
    };
  }

  const lifecycleMap: Record<Lifecycle, any> = {
    'top-funnel': {
      headerBg: 'bg-gradient-to-r from-orange-500 to-yellow-500',
      bg: 'bg-gray-800',
      border: 'border-orange-400/50',
      text: 'text-orange-300',
      tagBg: 'bg-orange-500/20 border-orange-400',
      tagText: 'text-orange-200',
      glow: 'shadow-lg shadow-orange-500/10',
      lineColor: '#FB923C',
    },
    'mid-funnel': {
      headerBg: 'bg-gradient-to-r from-green-500 to-emerald-500',
      bg: 'bg-gray-800',
      border: 'border-green-400/50',
      text: 'text-green-300',
      tagBg: 'bg-green-500/20 border-green-400',
      tagText: 'text-green-200',
      glow: 'shadow-lg shadow-green-500/10',
      lineColor: '#4ADE80',
    },
    'post-sales': {
      headerBg: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      bg: 'bg-gray-800',
      border: 'border-blue-400/50',
      text: 'text-blue-300',
      tagBg: 'bg-blue-500/20 border-blue-400',
      tagText: 'text-blue-200',
      glow: 'shadow-lg shadow-blue-500/10',
      lineColor: '#60A5FA',
    },
    operations: {
      headerBg: 'bg-gradient-to-r from-gray-600 to-gray-700',
      bg: 'bg-gray-800',
      border: 'border-gray-500/50',
      text: 'text-gray-300',
      tagBg: 'bg-gray-500/20 border-gray-500',
      tagText: 'text-gray-300',
      glow: 'shadow-lg shadow-gray-500/10',
      lineColor: '#6B7280',
    },
    value: {
      headerBg: 'bg-gradient-to-r from-teal-500 to-emerald-600',
      bg: 'bg-gray-800',
      border: 'border-teal-400/50',
      text: 'text-teal-300',
      tagBg: 'bg-teal-500/20 border-teal-400',
      tagText: 'text-teal-200',
      glow: 'shadow-lg shadow-teal-500/10',
      lineColor: '#14B8A6',
    },
  };

  return lifecycleMap[lifecycle || 'operations'];
};

// Node Component
const Node = ({ node, level, isMobile, collapsed, onToggle }: any) => {
  const colors = getLifecycleColors(node.lifecycle, node.isGoldenPath);
  const IconComponent = getIcon(node.icon);
  const hasChildren = node.children && node.children.length > 0;
  const isCollapsed = collapsed[node.id];

  return (
    <div className="flex flex-col items-start">
      <div
        className={`
          relative rounded-lg overflow-hidden border
          transition-all duration-200 ease-in-out
          ${colors.bg} ${colors.border}
          ${colors.glow}
          hover:shadow-2xl
          flex flex-col
          ${isMobile ? 'w-40' : 'w-56'}
          ${node.isGoldenPath ? 'ring-2 ring-yellow-400/50' : ''}
        `}
      >
        <div className={`${colors.headerBg} px-3 py-2 flex items-center justify-between`}>
          <div
            className={`flex items-center gap-2 flex-1 ${hasChildren ? 'cursor-pointer' : ''}`}
            onClick={hasChildren ? () => onToggle(node.id) : undefined}
          >
            {hasChildren && (
              <div className="flex-shrink-0 text-white">
                {isCollapsed ? (
                  <ChevronRight size={isMobile ? 16 : 18} />
                ) : (
                  <ChevronDown size={isMobile ? 16 : 18} />
                )}
              </div>
            )}
            <IconComponent size={isMobile ? 18 : 20} className="text-white flex-shrink-0" />
          </div>
        </div>

        <div className={`px-3 py-2 flex-1 flex flex-col justify-center gap-2`}>
          <h3 className={`font-semibold text-gray-100 leading-snug ${isMobile ? 'text-xs' : 'text-sm'}`}>
            {node.label}
          </h3>
        </div>

        {node.owner && (
          <div className={`px-3 py-1.5 border-t ${colors.border}`}>
            <span className={`px-2 py-0.5 rounded-full border ${colors.tagBg} ${colors.tagText} inline-block ${isMobile ? 'text-[10px]' : 'text-xs'}`}>
              {node.owner}
            </span>
          </div>
        )}
      </div>

      {hasChildren && !isCollapsed && (
        <div className={`${isMobile ? 'ml-4 mt-2' : 'ml-8 mt-4'} space-y-3 border-l-2 ${node.isGoldenPath ? 'border-yellow-400' : 'border-gray-600'} pl-4`}>
          {node.children.map((child: TreeNode) => (
            <Node
              key={child.id}
              node={child}
              level={level + 1}
              isMobile={isMobile}
              collapsed={collapsed}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Legend Component
const Legend = ({ isMobile }: { isMobile: boolean }) => {
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    setIsCollapsed(isMobile);
  }, [isMobile]);

  if (isCollapsed) {
    return (
      <button
        onClick={() => setIsCollapsed(false)}
        className="bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-700 p-3 text-gray-300 text-sm font-semibold hover:bg-gray-800"
      >
        Show Legend
      </button>
    );
  }

  return (
    <div className={`bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-700 p-4 ${isMobile ? 'max-w-full' : 'max-w-sm'}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-gray-300 font-semibold text-sm">Legend</h3>
        {isMobile && (
          <button onClick={() => setIsCollapsed(true)} className="text-gray-400 text-xs hover:text-gray-200">
            Close
          </button>
        )}
      </div>

      <div className="space-y-3">
        <div className="text-xs">
          <div className="font-semibold text-gray-200 mb-2">Lifecycle Stages</div>
          <div className="space-y-2 ml-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              <span className="text-gray-300 text-xs">Top of Funnel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <span className="text-gray-300 text-xs">Mid-Funnel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-gray-300 text-xs">Post-Sales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-r from-gray-600 to-gray-700"></div>
              <span className="text-gray-300 text-xs">Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-r from-teal-500 to-emerald-600"></div>
              <span className="text-gray-300 text-xs">Strategic Value</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-3">
          <div className="font-semibold text-gray-200 mb-2 text-xs">Special Indicators</div>
          <div className="space-y-2 ml-2">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse"></div>
              <span className="text-gray-300 text-xs">Golden Path (Ideal Journey)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// CRM Data
const crmData: TreeNode = {
  id: 'crm_root',
  type: 'root',
  lifecycle: 'value',
  label: 'Krispire CRM',
  icon: 'crown',
  owner: 'Krispire',
  children: [
    {
      id: 'crm_problems',
      type: 'category',
      lifecycle: 'top-funnel',
      label: 'What This CRM Solves',
      icon: 'target',
      owner: 'Sales',
      children: [
        { id: 'problem_silos', type: 'problem', lifecycle: 'top-funnel', label: 'Information silos', icon: 'lock', owner: 'Ops' },
        { id: 'problem_opportunities', type: 'problem', lifecycle: 'top-funnel', label: 'Missed opportunities', icon: 'zap', owner: 'Sales', isGoldenPath: true },
        { id: 'problem_followups', type: 'problem', lifecycle: 'top-funnel', label: 'Manual follow-ups', icon: 'mail', owner: 'Sales' },
        { id: 'problem_billing', type: 'problem', lifecycle: 'operations', label: 'Billing chaos', icon: 'dollar', owner: 'Finance' },
        { id: 'problem_delays', type: 'problem', lifecycle: 'mid-funnel', label: 'Project delays', icon: 'calendar', owner: 'PM' },
      ],
    },
    {
      id: 'crm_capabilities',
      type: 'category',
      lifecycle: 'mid-funnel',
      label: 'Core Capabilities',
      icon: 'grid',
      owner: 'Product',
      children: [
        {
          id: 'lead_client_mgmt',
          type: 'module',
          lifecycle: 'top-funnel',
          label: 'Lead & Client Management',
          icon: 'users',
          owner: 'Sales',
          isGoldenPath: true,
          children: [
            { id: 'capture_leads', type: 'feature', lifecycle: 'top-funnel', label: 'Capture leads', icon: 'inbox', owner: 'Marketing', isGoldenPath: true },
            { id: 'sales_pipeline', type: 'feature', lifecycle: 'mid-funnel', label: 'Sales pipeline tracking', icon: 'trend-up', owner: 'Sales', isGoldenPath: true },
            { id: 'client_profiles', type: 'feature', lifecycle: 'mid-funnel', label: 'Structured client profiles', icon: 'card', owner: 'Sales' },
            { id: 'interaction_history', type: 'feature', lifecycle: 'mid-funnel', label: 'Interaction history', icon: 'history', owner: 'Sales' },
          ],
        },
        {
          id: 'project_task_mgmt',
          type: 'module',
          lifecycle: 'mid-funnel',
          label: 'Project & Task Management',
          icon: 'tasks',
          owner: 'PM',
          children: [
            { id: 'delegate_tasks', type: 'feature', lifecycle: 'operations', label: 'Delegate assignments', icon: 'share', owner: 'PM' },
            { id: 'set_deadlines', type: 'feature', lifecycle: 'operations', label: 'Set deadlines', icon: 'clock', owner: 'PM' },
            { id: 'realtime_progress', type: 'feature', lifecycle: 'operations', label: 'Real-time progress', icon: 'bar-chart', owner: 'PM' },
            { id: 'team_collab', type: 'feature', lifecycle: 'operations', label: 'Team collaboration', icon: 'users', owner: 'Team' },
          ],
        },
        {
          id: 'invoicing_payments',
          type: 'module',
          lifecycle: 'post-sales',
          label: 'Invoicing & Payments',
          icon: 'receipt',
          owner: 'Finance',
          isGoldenPath: true,
          children: [
            { id: 'branded_templates', type: 'feature', lifecycle: 'post-sales', label: 'Branded templates', icon: 'palette', owner: 'Brand', isGoldenPath: true },
            { id: 'recurring_billing', type: 'feature', lifecycle: 'post-sales', label: 'Automated recurring billing', icon: 'repeat', owner: 'Finance', isGoldenPath: true },
            { id: 'payment_gateways', type: 'feature', lifecycle: 'post-sales', label: 'Online payment gateways', icon: 'credit-card', owner: 'Finance', isGoldenPath: true },
            { id: 'financial_records', type: 'feature', lifecycle: 'post-sales', label: 'Financial records', icon: 'book', owner: 'Finance' },
          ],
        },
        {
          id: 'proposals_contracts',
          type: 'module',
          lifecycle: 'mid-funnel',
          label: 'Proposals & Contracts',
          icon: 'file-text',
          owner: 'Legal',
          children: [
            { id: 'proposal_templates', type: 'feature', lifecycle: 'mid-funnel', label: 'Proposal templates', icon: 'file', owner: 'Sales' },
            { id: 'contract_mgmt', type: 'feature', lifecycle: 'mid-funnel', label: 'Contract management', icon: 'shield', owner: 'Legal' },
            { id: 'e_approvals', type: 'feature', lifecycle: 'mid-funnel', label: 'Electronic approvals', icon: 'check-circle', owner: 'Legal' },
          ],
        },
        {
          id: 'ticketing_support',
          type: 'module',
          lifecycle: 'post-sales',
          label: 'Ticketing & Support',
          icon: 'life-buoy',
          owner: 'Support',
          isGoldenPath: true,
          children: [
            { id: 'built_in_tickets', type: 'feature', lifecycle: 'post-sales', label: 'Built-in tickets', icon: 'inbox', owner: 'Support', isGoldenPath: true },
            { id: 'e2e_tracking', type: 'feature', lifecycle: 'post-sales', label: 'End-to-end tracking', icon: 'link', owner: 'Support', isGoldenPath: true },
            { id: 'customer_context', type: 'feature', lifecycle: 'post-sales', label: 'Full customer context', icon: 'eye', owner: 'Support', isGoldenPath: true },
          ],
        },
        {
          id: 'financial_tracking',
          type: 'module',
          lifecycle: 'operations',
          label: 'Financial Tracking',
          icon: 'bar-chart-2',
          owner: 'Finance',
          children: [
            { id: 'expense_logging', type: 'feature', lifecycle: 'operations', label: 'Log business expenses', icon: 'minus-circle', owner: 'Finance' },
            { id: 'pl_statements', type: 'feature', lifecycle: 'operations', label: 'Profit & loss statements', icon: 'trending-up', owner: 'Finance' },
            { id: 'profit_analysis', type: 'feature', lifecycle: 'operations', label: 'Analyze profitability', icon: 'pie-chart', owner: 'Finance' },
          ],
        },
      ],
    },
    {
      id: 'crm_operations',
      type: 'category',
      lifecycle: 'operations',
      label: 'Operations & Customisation',
      icon: 'settings',
      owner: 'Ops',
      children: [
        {
          id: 'automation',
          type: 'module',
          lifecycle: 'operations',
          label: 'Automation',
          icon: 'zap',
          owner: 'Engineering',
          children: [
            { id: 'task_scheduling', type: 'feature', lifecycle: 'operations', label: 'Repetitive task scheduling', icon: 'timer', owner: 'Ops' },
            { id: 'if_then_workflows', type: 'feature', lifecycle: 'operations', label: 'Smart if-then workflows', icon: 'flow', owner: 'Engineering' },
          ],
        },
        {
          id: 'customisation',
          type: 'module',
          lifecycle: 'operations',
          label: 'Customisation',
          icon: 'sliders',
          owner: 'Engineering',
          children: [
            { id: 'custom_fields', type: 'feature', lifecycle: 'operations', label: 'Custom fields', icon: 'layers', owner: 'Engineering' },
            { id: 'api_webhooks', type: 'feature', lifecycle: 'operations', label: 'API access & webhooks', icon: 'code', owner: 'Engineering' },
            { id: 'integrations', type: 'feature', lifecycle: 'operations', label: 'Popular integrations', icon: 'git-branch', owner: 'Product' },
          ],
        },
        {
          id: 'staff_management',
          type: 'module',
          lifecycle: 'operations',
          label: 'Staff Management',
          icon: 'lock',
          owner: 'HR',
          children: [
            { id: 'role_permissions', type: 'feature', lifecycle: 'operations', label: 'Role-based permissions', icon: 'shield', owner: 'Security' },
            { id: 'secure_data', type: 'feature', lifecycle: 'operations', label: 'Secure sensitive data', icon: 'lock', owner: 'Security' },
          ],
        },
      ],
    },
    {
      id: 'crm_analytics',
      type: 'category',
      lifecycle: 'value',
      label: 'Analytics & Insights',
      icon: 'brain',
      owner: 'Analytics',
      children: [
        { id: 'sales_performance', type: 'metric', lifecycle: 'value', label: 'Sales performance', icon: 'trending-up', owner: 'Sales' },
        { id: 'customer_activity', type: 'metric', lifecycle: 'value', label: 'Customer activity', icon: 'activity', owner: 'Support' },
        { id: 'project_tracking', type: 'metric', lifecycle: 'value', label: 'Project progress tracking', icon: 'gauge', owner: 'PM' },
        { id: 'financial_analytics', type: 'metric', lifecycle: 'value', label: 'Financial analytics', icon: 'pie-chart', owner: 'Finance' },
      ],
    },
    {
      id: 'customer_dashboard',
      type: 'category',
      lifecycle: 'post-sales',
      label: 'Customer Dashboard',
      icon: 'monitor',
      owner: 'Support',
      isGoldenPath: true,
      children: [
        { id: 'invoice_mgmt', type: 'feature', lifecycle: 'post-sales', label: 'Invoice management', icon: 'file', owner: 'Finance', isGoldenPath: true },
        { id: 'contract_access', type: 'feature', lifecycle: 'post-sales', label: 'Contract access', icon: 'file-text', owner: 'Legal', isGoldenPath: true },
        { id: 'support_portal', type: 'feature', lifecycle: 'post-sales', label: 'Support portal', icon: 'help-circle', owner: 'Support', isGoldenPath: true },
        { id: 'project_updates', type: 'feature', lifecycle: 'post-sales', label: 'Project updates', icon: 'bell', owner: 'PM', isGoldenPath: true },
      ],
    },
    {
      id: 'krispire_engagement',
      type: 'category',
      lifecycle: 'value',
      label: 'Krispire Engagement',
      icon: 'heart',
      owner: 'Success',
      children: [
        {
          id: 'deliverables',
          type: 'module',
          lifecycle: 'value',
          label: 'Deliverables',
          icon: 'gift',
          owner: 'Success',
          children: [
            { id: 'crm_setup', type: 'service', lifecycle: 'value', label: 'CRM setup', icon: 'wrench', owner: 'Engineering' },
            { id: 'custom_config', type: 'service', lifecycle: 'value', label: 'Custom configuration', icon: 'sliders', owner: 'Engineering' },
            { id: 'onboarding', type: 'service', lifecycle: 'value', label: 'Onboarding & training', icon: 'book-open', owner: 'Success' },
          ],
        },
        {
          id: 'support_model',
          type: 'module',
          lifecycle: 'value',
          label: 'Support Model',
          icon: 'headphones',
          owner: 'Success',
          children: [
            { id: 'free_demo', type: 'service', lifecycle: 'value', label: '15-day free demo', icon: 'play-circle', owner: 'Sales' },
            { id: 'servicing', type: 'service', lifecycle: 'value', label: '3+1 months servicing', icon: 'truck', owner: 'Success' },
          ],
        },
        {
          id: 'why_partner',
          type: 'module',
          lifecycle: 'value',
          label: 'Why Partner',
          icon: 'handshake',
          owner: 'Success',
          children: [
            { id: 'offshore_efficiency', type: 'value', lifecycle: 'value', label: 'Offshore cost efficiency', icon: 'dollar-sign', owner: 'Finance' },
            { id: 'faster_execution', type: 'value', lifecycle: 'value', label: 'Faster execution', icon: 'rocket', owner: 'Product' },
            { id: 'lower_risk', type: 'value', lifecycle: 'value', label: 'Lower operational risk', icon: 'shield-check', owner: 'Ops' },
          ],
        },
      ],
    },
  ],
};

// Main App
export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = (nodeId: string) => {
    setCollapsed(prev => ({
      ...prev,
      [nodeId]: !prev[nodeId]
    }));
  };

  return (
    <div className="w-full min-h-screen bg-[#0B0F14] overflow-auto">
      <div className="p-4 md:p-8 min-w-max">
        <Node
          node={crmData}
          level={0}
          isMobile={isMobile}
          collapsed={collapsed}
          onToggle={handleToggle}
        />
      </div>

      <div className={`fixed ${isMobile ? 'bottom-4 left-4 right-4' : 'bottom-4 left-4'} z-10`}>
        <Legend isMobile={isMobile} />
      </div>
    </div>
  );
}