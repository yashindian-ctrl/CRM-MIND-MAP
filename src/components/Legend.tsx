import { ZapOff, Zap, TrendingUp, BarChart2, CheckCircle, GitBranch } from 'lucide-react';

const Legend = () => {
  return (
    <div className="absolute bottom-4 left-4 bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-700 p-4 max-w-sm">
      <h3 className="text-gray-300 font-semibold text-sm mb-3">Legend</h3>

      <div className="space-y-3">
        <div className="text-xs">
          <div className="font-semibold text-gray-200 mb-2">Lifecycle Stages</div>
          <div className="space-y-2 ml-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              <span className="text-gray-300">Top of Funnel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <span className="text-gray-300">Mid-Funnel</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <span className="text-gray-300">Post-Sales</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-r from-gray-600 to-gray-700"></div>
              <span className="text-gray-300">Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-r from-teal-500 to-emerald-600"></div>
              <span className="text-gray-300">Strategic Value</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-3">
          <div className="font-semibold text-gray-200 mb-2 text-xs">Special Indicators</div>
          <div className="space-y-2 ml-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-r from-yellow-500 to-orange-500 animate-pulse"></div>
              <span className="text-gray-300">Golden Path (Ideal Journey)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-gray-400">
                <ZapOff size={14} />
                <span className="text-xs">Manual</span>
              </div>
              <span className="text-gray-400 text-xs">|</span>
              <div className="flex items-center gap-1 text-yellow-300">
                <Zap size={14} />
                <span className="text-xs">Automated</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-3">
          <div className="font-semibold text-gray-200 mb-2 text-xs">Card Elements</div>
          <div className="space-y-2 ml-2 text-xs text-gray-400">
            <div className="flex gap-2">
              <span className="w-4">•</span>
              <span><strong>Header:</strong> Icon & expand/collapse</span>
            </div>
            <div className="flex gap-2">
              <span className="w-4">•</span>
              <span><strong>Title:</strong> Feature or capability name</span>
            </div>
            <div className="flex gap-2">
              <span className="w-4">•</span>
              <span><strong>Tag:</strong> Responsible team/owner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legend;
