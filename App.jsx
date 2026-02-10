import ProcessUniverse from "./components/ProcessUniverse";
import SchedulerPanel from "./components/SchedulerPanel";
import DeadlockGraph from "./components/DeadlockGraph";
import MemoryTimeline from "./components/MemoryTimeline";
import HealthForecast from "./components/HealthForecast";

export default function App() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-cyan-400">GhostOS</h1>
      <p className="text-slate-400">Visual Operating System Intelligence</p>

      <ProcessUniverse />
      <SchedulerPanel />
      <DeadlockGraph />
      <MemoryTimeline />
      <HealthForecast />
    </div>
  );
}
