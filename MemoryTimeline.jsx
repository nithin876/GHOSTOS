import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: 1, used: 40 },
  { time: 2, used: 60 },
  { time: 3, used: 85 },
  { time: 4, used: 70 }
];

export default function MemoryTimeline() {
  return (
    <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
      <h2 className="text-lg mb-2">Memory Usage</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <Tooltip />
          <Line dataKey="used" stroke="#22d3ee" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
