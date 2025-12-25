import { useCallback, useEffect, useMemo, useState } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  ConnectionLineType,
  useReactFlow,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode, { CustomNodeData } from './CustomNode';
import Legend from './Legend';
import { TreeNode } from '../data/crmData';
import { getLayoutedElements } from '../utils/layoutUtils';

interface MindMapProps {
  data: TreeNode;
}

const nodeTypes = {
  custom: CustomNode,
};

const MindMap = ({ data }: MindMapProps) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(new Set());
  const { fitView } = useReactFlow();

  const buildNodesAndEdges = useCallback(
    (treeNode: TreeNode, parentId?: string): { nodes: Node[]; edges: Edge[] } => {
      const nodes: Node[] = [];
      const edges: Edge[] = [];

      const isCollapsed = collapsedNodes.has(treeNode.id);
      const hasChildren = Boolean(treeNode.children && treeNode.children.length > 0);

      nodes.push({
        id: treeNode.id,
        type: 'custom',
        position: { x: 0, y: 0 },
        data: {
          label: treeNode.label,
          hasChildren,
          isExpanded: !isCollapsed,
          type: treeNode.type,
          lifecycle: treeNode.lifecycle,
          icon: treeNode.icon,
          owner: treeNode.owner,
          isGoldenPath: treeNode.isGoldenPath,
          onToggle: () => {
            setCollapsedNodes((prev) => {
              const newSet = new Set(prev);
              if (newSet.has(treeNode.id)) {
                newSet.delete(treeNode.id);
              } else {
                newSet.add(treeNode.id);
              }
              return newSet;
            });
          },
        } as CustomNodeData,
      });

      if (parentId) {
        const isGoldenPathEdge = treeNode.isGoldenPath;
        edges.push({
          id: `${parentId}-${treeNode.id}`,
          source: parentId,
          target: treeNode.id,
          type: ConnectionLineType.SmoothStep,
          animated: isGoldenPathEdge,
          style: {
            stroke: isGoldenPathEdge ? '#FCD34D' : '#4B5563',
            strokeWidth: isGoldenPathEdge ? 3 : 2,
            filter: isGoldenPathEdge ? 'drop-shadow(0 0 8px #FCD34D)' : 'none',
          },
          strokeDasharray: isGoldenPathEdge ? '0' : '0',
        });
      }

      if (treeNode.children && !isCollapsed) {
        treeNode.children.forEach((child) => {
          const childResult = buildNodesAndEdges(child, treeNode.id);
          nodes.push(...childResult.nodes);
          edges.push(...childResult.edges);
        });
      }

      return { nodes, edges };
    },
    [collapsedNodes]
  );

  useEffect(() => {
    const { nodes: generatedNodes, edges: generatedEdges } = buildNodesAndEdges(data);
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      generatedNodes,
      generatedEdges,
      'LR'
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);

    setTimeout(() => {
      fitView({ padding: 0.2, duration: 300 });
    }, 50);
  }, [data, buildNodesAndEdges, setNodes, setEdges, fitView]);

  return (
    <div className="w-full h-screen bg-[#0B0F14] relative">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        minZoom={0.2}
        maxZoom={2}
        defaultEdgeOptions={{
          type: ConnectionLineType.SmoothStep,
          animated: false,
        }}
        proOptions={{ hideAttribution: true }}
      >
        <Background
          variant={BackgroundVariant.Dots}
          gap={20}
          size={1}
          color="#1F2937"
        />
        <Controls
          className="!bg-gray-800 !border-gray-700 [&>button]:!bg-gray-800 [&>button]:!border-gray-700 [&>button]:!text-gray-300 [&>button:hover]:!bg-gray-700"
        />
        <Legend />
      </ReactFlow>
    </div>
  );
};

export default MindMap;
