import { motion } from "framer-motion";

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1594902844359-61094a8f2b8f?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1563939363359-cc97bd9f0389?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1557524692-ef185e0fbfc3?q=80&w=1600&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-6 py-12">
      <div className="flex items-end justify-between mb-4">
        <h3 className="text-2xl font-bold text-white">Gallery</h3>
        <p className="text-sm text-violet-200/80">Hover to gently zoom</p>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="relative group overflow-hidden rounded-2xl ring-1 ring-white/10"
          >
            <img src={src} alt={`Jacaranda ${i + 1}`} className="w-full h-56 object-cover transition duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
