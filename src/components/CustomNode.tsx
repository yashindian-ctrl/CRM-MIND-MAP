import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { ChevronRight, ChevronDown } from 'lucide-react';
import type { NodeType } from '../data/crmData';

export interface CustomNodeData {
  label: string;
  hasChildren: boolean;
  isExpanded: boolean;
  type?: NodeType;
  onToggle: () => void;
}

const getNodeColors = (type?: NodeType) => {
  const colors: Record<NodeType, { bg: string; border: string; text: string; handle: string }> = {
    root: {
      bg: 'bg-gradient-to-br from-blue-600 to-blue-700',
      border: 'border-blue-500',
      text: 'text-white text-base font-semibold',
      handle: 'bg-blue-500',
    },
    category: {
      bg: 'bg-gradient-to-br from-teal-600 to-teal-700',
      border: 'border-teal-500',
      text: 'text-white font-semibold',
      handle: 'bg-teal-500',
    },
    module: {
      bg: 'bg-gradient-to-br from-cyan-600 to-cyan-700',
      border: 'border-cyan-500',
      text: 'text-white font-medium',
      handle: 'bg-cyan-500',
    },
    feature: {
      bg: 'bg-gray-700',
      border: 'border-gray-600',
      text: 'text-gray-100 text-sm',
      handle: 'bg-green-500',
    },
    problem: {
      bg: 'bg-gradient-to-br from-rose-700 to-rose-800',
      border: 'border-rose-600',
      text: 'text-gray-100 text-sm',
      handle: 'bg-rose-500',
    },
    metric: {
      bg: 'bg-gradient-to-br from-amber-700 to-amber-800',
      border: 'border-amber-600',
      text: 'text-white text-sm font-medium',
      handle: 'bg-amber-500',
    },
    service: {
      bg: 'bg-gradient-to-br from-violet-700 to-violet-800',
      border: 'border-violet-600',
      text: 'text-gray-100 text-sm',
      handle: 'bg-violet-500',
    },
    value: {
      bg: 'bg-gradient-to-br from-emerald-700 to-emerald-800',
      border: 'border-emerald-600',
      text: 'text-white text-sm font-medium',
      handle: 'bg-emerald-500',
    },
  };

  return colors[type || 'feature'];
};

const CustomNode = ({ data }: NodeProps<CustomNodeData>) => {
  const colors = getNodeColors(data.type);

  return (
    <div
      className={`
        relative px-4 py-3 rounded-lg shadow-lg border
        transition-all duration-200 ease-in-out
        ${colors.bg} ${colors.border}
        min-w-[220px] max-w-[220px]
        hover:shadow-xl
      `}
    >
      <Handle
        type="target"
        position={Position.Left}
        className={`!w-2 !h-2 ${colors.handle} !border-2 !border-gray-900`}
      />

      <div
        className={`flex items-center gap-2 ${
          data.hasChildren ? 'cursor-pointer' : ''
        }`}
        onClick={data.hasChildren ? data.onToggle : undefined}
      >
        {data.hasChildren && (
          <div className="flex-shrink-0 text-gray-200">
            {data.isExpanded ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </div>
        )}
        <div className={`${colors.text}`}>
          {data.label}
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        className={`!w-2 !h-2 ${colors.handle} !border-2 !border-gray-900`}
      />
    </div>
  );
};

export default memo(CustomNode);
