import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { NodeType, Lifecycle } from '../data/crmData';
import { getIcon } from '../utils/iconMap';

export interface CustomNodeData {
  label: string;
  hasChildren: boolean;
  isExpanded: boolean;
  type?: NodeType;
  lifecycle?: Lifecycle;
  icon?: string;
  owner?: string;
  isGoldenPath?: boolean;
  onToggle: () => void;
}

const getLifecycleColors = (lifecycle?: Lifecycle, isGoldenPath?: boolean) => {
  if (isGoldenPath) {
    return {
      headerBg: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      bg: 'bg-gray-850',
      border: 'border-yellow-400',
      text: 'text-yellow-300',
      tagBg: 'bg-yellow-500/20 border-yellow-400',
      tagText: 'text-yellow-200',
      glow: 'shadow-lg shadow-yellow-500/20',
    };
  }

  const lifecycleMap: Record<Lifecycle, { headerBg: string; bg: string; border: string; text: string; tagBg: string; tagText: string; glow: string }> = {
    'top-funnel': {
      headerBg: 'bg-gradient-to-r from-orange-500 to-yellow-500',
      bg: 'bg-gray-850',
      border: 'border-orange-400/50',
      text: 'text-orange-300',
      tagBg: 'bg-orange-500/20 border-orange-400',
      tagText: 'text-orange-200',
      glow: 'shadow-lg shadow-orange-500/10',
    },
    'mid-funnel': {
      headerBg: 'bg-gradient-to-r from-green-500 to-emerald-500',
      bg: 'bg-gray-850',
      border: 'border-green-400/50',
      text: 'text-green-300',
      tagBg: 'bg-green-500/20 border-green-400',
      tagText: 'text-green-200',
      glow: 'shadow-lg shadow-green-500/10',
    },
    'post-sales': {
      headerBg: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      bg: 'bg-gray-850',
      border: 'border-blue-400/50',
      text: 'text-blue-300',
      tagBg: 'bg-blue-500/20 border-blue-400',
      tagText: 'text-blue-200',
      glow: 'shadow-lg shadow-blue-500/10',
    },
    operations: {
      headerBg: 'bg-gradient-to-r from-gray-600 to-gray-700',
      bg: 'bg-gray-850',
      border: 'border-gray-500/50',
      text: 'text-gray-300',
      tagBg: 'bg-gray-500/20 border-gray-500',
      tagText: 'text-gray-300',
      glow: 'shadow-lg shadow-gray-500/10',
    },
    value: {
      headerBg: 'bg-gradient-to-r from-teal-500 to-emerald-600',
      bg: 'bg-gray-850',
      border: 'border-teal-400/50',
      text: 'text-teal-300',
      tagBg: 'bg-teal-500/20 border-teal-400',
      tagText: 'text-teal-200',
      glow: 'shadow-lg shadow-teal-500/10',
    },
  };

  return lifecycleMap[lifecycle || 'operations'];
};

const CustomNode = ({ data }: NodeProps<CustomNodeData>) => {
  const colors = getLifecycleColors(data.lifecycle, data.isGoldenPath);
  const IconComponent = getIcon(data.icon);

  return (
    <div
      className={`
        relative w-56 rounded-lg overflow-hidden border
        transition-all duration-200 ease-in-out
        ${colors.bg} ${colors.border}
        ${colors.glow}
        hover:shadow-2xl hover:scale-105
        flex flex-col
      `}
    >
      <Handle
        type="target"
        position={Position.Left}
        className={`!w-3 !h-3 ${colors.text.replace('text-', 'bg-')} !border-2 !border-gray-900`}
      />

      <div className={`${colors.headerBg} px-4 py-3 flex items-center justify-between`}>
        <div
          className={`flex items-center gap-2 flex-1 ${data.hasChildren ? 'cursor-pointer' : ''}`}
          onClick={data.hasChildren ? data.onToggle : undefined}
        >
          {data.hasChildren && (
            <div className="flex-shrink-0 text-white">
              {data.isExpanded ? (
                <ChevronDown size={18} />
              ) : (
                <ChevronRight size={18} />
              )}
            </div>
          )}
          <IconComponent size={20} className="text-white flex-shrink-0" />
        </div>
      </div>

      <div className="px-4 py-3 flex-1 flex flex-col justify-center gap-2">
        <h3 className="text-sm font-semibold text-gray-100 leading-snug line-clamp-2">
          {data.label}
        </h3>
      </div>

      {data.owner && (
        <div className={`px-4 py-2 border-t ${colors.border}`}>
          <span className={`text-xs px-2 py-1 rounded-full border ${colors.tagBg} ${colors.tagText} inline-block`}>
            {data.owner}
          </span>
        </div>
      )}

      <Handle
        type="source"
        position={Position.Right}
        className={`!w-3 !h-3 ${colors.text.replace('text-', 'bg-')} !border-2 !border-gray-900`}
      />
    </div>
  );
};

export default memo(CustomNode);
