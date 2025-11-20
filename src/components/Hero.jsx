import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none bg-[radial-gradient(circle_at_20%_10%,_rgba(167,139,250,0.6),transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(99,102,241,0.5),transparent_30%),radial-gradient(circle_at_50%_80%,_rgba(56,189,248,0.4),transparent_35%)]"></div>

      <div className="mx-auto max-w-6xl px-6 pt-8 pb-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            The Purple Canopy Wonder
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg text-violet-100/90 mb-6"
          >
            Celebrate the breathtaking beauty of the Jacaranda tree — famous for its vibrant lavender blooms that paint entire streets purple in late spring.
          </motion.p>
          <motion.a
            href="#details"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-violet-500 hover:bg-violet-400 text-white font-medium px-5 py-3 rounded-xl shadow-[0_8px_30px_rgba(139,92,246,0.45)] transition"
          >
            Explore Details
          </motion.a>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1543632656-9d6f47b3068c?q=80&w=1600&auto=format&fit=crop"
              alt="Jacaranda blossoms"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
