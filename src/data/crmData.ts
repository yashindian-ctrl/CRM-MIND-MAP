export type NodeType = 'root' | 'category' | 'module' | 'feature' | 'problem' | 'metric' | 'service' | 'value';
export type Lifecycle = 'top-funnel' | 'mid-funnel' | 'post-sales' | 'operations' | 'value';

export interface TreeNode {
  id: string;
  label: string;
  type?: NodeType;
  lifecycle?: Lifecycle;
  icon?: string;
  owner?: string;
  isGoldenPath?: boolean;
  children?: TreeNode[];
}

export const crmData: TreeNode = {
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
