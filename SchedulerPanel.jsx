import { roundRobin } from "../engine/scheduler";

const processes = [
  { pid: 1, burst: 5 },
  { pid: 2, burst: 3 },
  { pid: 3, burst: 6 }
];

export default function SchedulerPanel() {
  const log = roundRobin(
    JSON.parse(JSON.stringify(processes))
  );

  return (
    <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
      <h2 className="text-lg mb-2">CPU Scheduler (Round Robin)</h2>
      {log.map((l, i) => (
        <div key={i} className="text-sm text-slate-300">
          PID {l.pid} → {l.duration} units
        </div>
      ))}
    </div>
  );
}
