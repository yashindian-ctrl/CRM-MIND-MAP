export type NodeType = 'root' | 'category' | 'module' | 'feature' | 'problem' | 'metric' | 'service' | 'value';

export interface TreeNode {
  id: string;
  label: string;
  type?: NodeType;
  children?: TreeNode[];
}

export const crmData: TreeNode = {
  id: 'crm_root',
  type: 'root',
  label: 'Customer Relationship Management (CRM) Software',
  children: [
    {
      id: 'crm_problems',
      type: 'category',
      label: 'What This CRM Solves',
      children: [
        { id: 'problem_silos', type: 'problem', label: 'Information silos' },
        { id: 'problem_opportunities', type: 'problem', label: 'Missed opportunities' },
        { id: 'problem_followups', type: 'problem', label: 'Manual follow-ups' },
        { id: 'problem_billing', type: 'problem', label: 'Billing chaos' },
        { id: 'problem_delays', type: 'problem', label: 'Project delays' },
      ],
    },

    {
      id: 'crm_capabilities',
      type: 'category',
      label: 'Core Capabilities',
      children: [
        {
          id: 'lead_client_mgmt',
          type: 'module',
          label: 'Lead & Client Management',
          children: [
            { id: 'capture_leads', type: 'feature', label: 'Capture leads' },
            { id: 'sales_pipeline', type: 'feature', label: 'Sales pipeline tracking' },
            { id: 'client_profiles', type: 'feature', label: 'Structured client profiles' },
            { id: 'interaction_history', type: 'feature', label: 'Interaction history' },
          ],
        },
        {
          id: 'project_task_mgmt',
          type: 'module',
          label: 'Project & Task Management',
          children: [
            { id: 'delegate_tasks', type: 'feature', label: 'Delegate assignments' },
            { id: 'set_deadlines', type: 'feature', label: 'Set deadlines' },
            { id: 'realtime_progress', type: 'feature', label: 'Real-time progress' },
            { id: 'team_collab', type: 'feature', label: 'Team collaboration' },
          ],
        },
        {
          id: 'invoicing_payments',
          type: 'module',
          label: 'Invoicing & Payments',
          children: [
            { id: 'branded_templates', type: 'feature', label: 'Branded templates' },
            { id: 'recurring_billing', type: 'feature', label: 'Automated recurring billing' },
            { id: 'payment_gateways', type: 'feature', label: 'Online payment gateways' },
            { id: 'financial_records', type: 'feature', label: 'Financial records' },
          ],
        },
        {
          id: 'proposals_contracts',
          type: 'module',
          label: 'Proposals & Contracts',
          children: [
            { id: 'proposal_templates', type: 'feature', label: 'Proposal templates' },
            { id: 'contract_mgmt', type: 'feature', label: 'Contract management' },
            { id: 'e_approvals', type: 'feature', label: 'Electronic approvals' },
          ],
        },
        {
          id: 'ticketing_support',
          type: 'module',
          label: 'Ticketing & Support',
          children: [
            { id: 'built_in_tickets', type: 'feature', label: 'Built-in tickets' },
            { id: 'e2e_tracking', type: 'feature', label: 'End-to-end tracking' },
            { id: 'customer_context', type: 'feature', label: 'Full customer context' },
          ],
        },
        {
          id: 'financial_tracking',
          type: 'module',
          label: 'Financial Tracking',
          children: [
            { id: 'expense_logging', type: 'feature', label: 'Log business expenses' },
            { id: 'pl_statements', type: 'feature', label: 'Profit & loss statements' },
            { id: 'profit_analysis', type: 'feature', label: 'Analyze profitability' },
          ],
        },
      ],
    },

    {
      id: 'crm_operations',
      type: 'category',
      label: 'Operations & Customisation',
      children: [
        {
          id: 'automation',
          type: 'module',
          label: 'Automation',
          children: [
            { id: 'task_scheduling', type: 'feature', label: 'Repetitive task scheduling' },
            { id: 'if_then_workflows', type: 'feature', label: 'Smart if-then workflows' },
          ],
        },
        {
          id: 'customisation',
          type: 'module',
          label: 'Customisation',
          children: [
            { id: 'custom_fields', type: 'feature', label: 'Custom fields' },
            { id: 'api_webhooks', type: 'feature', label: 'API access & webhooks' },
            { id: 'integrations', type: 'feature', label: 'Popular integrations' },
          ],
        },
        {
          id: 'staff_management',
          type: 'module',
          label: 'Staff Management',
          children: [
            { id: 'role_permissions', type: 'feature', label: 'Role-based permissions' },
            { id: 'secure_data', type: 'feature', label: 'Secure sensitive data' },
          ],
        },
      ],
    },

    {
      id: 'crm_analytics',
      type: 'category',
      label: 'Analytics & Insights',
      children: [
        { id: 'sales_performance', type: 'metric', label: 'Sales performance' },
        { id: 'customer_activity', type: 'metric', label: 'Customer activity' },
        { id: 'project_tracking', type: 'metric', label: 'Project progress tracking' },
        { id: 'financial_analytics', type: 'metric', label: 'Financial analytics' },
      ],
    },

    {
      id: 'customer_dashboard',
      type: 'category',
      label: 'Customer Dashboard',
      children: [
        { id: 'invoice_mgmt', type: 'feature', label: 'Invoice management' },
        { id: 'contract_access', type: 'feature', label: 'Contract access' },
        { id: 'support_portal', type: 'feature', label: 'Support portal' },
        { id: 'project_updates', type: 'feature', label: 'Project updates' },
      ],
    },

    {
      id: 'krispire_engagement',
      type: 'category',
      label: 'Krispire Engagement',
      children: [
        {
          id: 'deliverables',
          type: 'module',
          label: 'Deliverables',
          children: [
            { id: 'crm_setup', type: 'service', label: 'CRM setup' },
            { id: 'custom_config', type: 'service', label: 'Custom configuration' },
            { id: 'onboarding', type: 'service', label: 'Onboarding & training' },
          ],
        },
        {
          id: 'support_model',
          type: 'module',
          label: 'Support Model',
          children: [
            { id: 'free_demo', type: 'service', label: '15-day free demo' },
            { id: 'servicing', type: 'service', label: '3+1 months servicing' },
          ],
        },
        {
          id: 'why_partner',
          type: 'module',
          label: 'Why Partner',
          children: [
            { id: 'offshore_efficiency', type: 'value', label: 'Offshore cost efficiency' },
            { id: 'faster_execution', type: 'value', label: 'Faster execution' },
            { id: 'lower_risk', type: 'value', label: 'Lower operational risk' },
          ],
        },
      ],
    },
  ],
};
