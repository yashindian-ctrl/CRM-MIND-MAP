import { ReactFlowProvider } from 'reactflow';
import MindMap from './components/MindMap';
import { crmData } from './data/crmData';

function App() {
  return (
    <ReactFlowProvider>
      <div className="w-full h-screen">
        <MindMap data={crmData} />
      </div>
    </ReactFlowProvider>
  );
}

export default App;
