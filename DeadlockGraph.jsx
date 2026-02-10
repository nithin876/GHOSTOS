import { detectDeadlock } from "../engine/deadlock";

const graph = {
  P1: ["P2"],
  P2: ["P3"],
  P3: ["P1"]
};

export default function DeadlockGraph() {
  const isDeadlock = detectDeadlock(graph);

  return (
    <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
      <h2 className="text-lg">Deadlock Detector</h2>
      <p className={isDeadlock ? "text-red-400" : "text-green-400"}>
        {isDeadlock ? "⚠ Deadlock Detected" : "No Deadlock"}
      </p>
    </div>
  );
}
