import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";

function App() {
  return (
    <div className="flex w-[1000px] h-[688px] min-h-[640px]">
      <LeftPanel />
      <RightPanel />
    </div>
  );
}

export default App;
