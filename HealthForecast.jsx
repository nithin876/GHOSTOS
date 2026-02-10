export default function HealthForecast() {
  return (
    <div className="bg-slate-900 p-4 rounded-xl border border-slate-700">
      <h2 className="text-lg">OS Health Forecast</h2>
      <ul className="text-slate-300 text-sm mt-2">
        <li>⚠ Starvation Risk: Medium</li>
        <li>⚠ Deadlock Probability: High</li>
        <li>⚠ Memory Thrashing: Low</li>
      </ul>
    </div>
  );
}
