import { motion } from "framer-motion";

function FloatingBlob({ delay = 0, x = 0, y = 0, size = 300, color = "#8b5cf6" }) {
  return (
    <motion.div
      initial={{ opacity: 0.15, x, y, scale: 0.9 }}
      animate={{
        opacity: [0.15, 0.35, 0.2],
        x: [x, x + 20, x - 20, x],
        y: [y, y - 30, y + 10, y],
        scale: [0.9, 1.03, 0.97, 0.9],
      }}
      transition={{ duration: 18, delay, repeat: Infinity, ease: "easeInOut" }}
      className="absolute rounded-full blur-3xl"
      style={{ width: size, height: size, background: `radial-gradient(circle, ${color}40, transparent 60%)` }}
    />
  );
}

export default function Wallpaper() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle starry dots */}
      <div className="absolute inset-0 bg-[radial-gradient(1px_1px_at_20px_20px,rgba(255,255,255,0.06),transparent_2px)] [background-size:24px_24px]" />

      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-950 to-slate-950" />

      {/* Floating luminous blobs in jacaranda hues */}
      <FloatingBlob delay={0} x={-120} y={-80} size={380} color="#8b5cf6" />
      <FloatingBlob delay={3} x={220} y={-20} size={300} color="#6366f1" />
      <FloatingBlob delay={6} x={-40} y={260} size={420} color="#60a5fa" />
      <FloatingBlob delay={9} x={280} y={360} size={360} color="#a78bfa" />
    </div>
  );
}
