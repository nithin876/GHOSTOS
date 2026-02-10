import { motion } from "framer-motion";

const processes = [
  { pid: 1, cpu: 30, x: 20, y: 30 },
  { pid: 2, cpu: 60, x: 50, y: 50 },
  { pid: 3, cpu: 80, x: 70, y: 20 }
];

export default function ProcessUniverse() {
  return (
    <div className="bg-black rounded-xl h-64 relative overflow-hidden border border-slate-700">
      {processes.map(p => (
        <motion.div
          key={p.pid}
          animate={{ scale: 1 + p.cpu / 100 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          className="absolute rounded-full bg-cyan-400 opacity-70"
          style={{
            width: 40,
            height: 40,
            left: `${p.x}%`,
            top: `${p.y}%`
          }}
        />
      ))}
    </div>
  );
}
