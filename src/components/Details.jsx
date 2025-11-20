import { motion } from "framer-motion";

function DetailItem({ label, value, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: 0.03 * i }}
      className="grid grid-cols-3 gap-3 py-3 border-b border-white/10 last:border-0"
    >
      <div className="col-span-1 text-sm font-medium text-violet-200/90">{label}</div>
      <div className="col-span-2 text-sm text-white/90">{value}</div>
    </motion.div>
  );
}

function Details() {
  const rows = [
    { label: "Common Name", value: "Jacaranda, Blue Jacaranda, Purple Trumpet Tree" },
    { label: "Scientific Name", value: <span className="italic">Jacaranda mimosifolia</span> },
    { label: "Family", value: "Bignoniaceae" },
    { label: "Origin", value: "South America (native to northwestern Argentina and southern Bolivia)" },
    { label: "Habit", value: "Deciduous to semi-evergreen tree, fast-growing, reaching 10–15 m (33–50 ft)" },
    { label: "Leaves", value: "Bipinnate, fern-like foliage; bright green, 30–50 cm long" },
    { label: "Flowers", value: "Showy, tubular, lavender to violet-blue in large panicles, typically in late spring to early summer" },
    { label: "Fruit", value: "Woody, flattened, round capsules containing numerous winged seeds" },
    { label: "Hardiness", value: "USDA zones 9–11; sensitive to hard frost" },
    { label: "Light", value: "Full sun for best flowering" },
    { label: "Soil", value: "Well-drained, moderately fertile soils; tolerates a range of soil types" },
    { label: "Water", value: "Moderate; drought-tolerant once established" },
    { label: "Uses", value: "Street and ornamental tree, shade, seasonal color displays" },
    { label: "Notable", value: "Iconic purple 'carpet' of fallen blooms; attracts pollinators; can be messy when in bloom" },
    // Extra details requested
    { label: "Bloom Season", value: "Late spring to early summer; timing varies by climate" },
    { label: "Growth Rate", value: "Fast when young; benefits from formative pruning" },
    { label: "Propagation", value: "Seed most common; semi-hardwood cuttings possible" },
    { label: "Pests & Diseases", value: "Generally resilient; watch for aphids and root rot in poor drainage" },
    { label: "Landscape Tips", value: "Allow space for canopy; avoid planting near pools due to flower drop" },
  ];

  return (
    <section id="details" className="mx-auto max-w-4xl px-6 py-12">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-violet-400/20 rounded-2xl p-6 shadow-xl">
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-1">Botanical Details</h3>
          <p className="text-sm text-violet-200/80">Comprehensive information about the Jacaranda tree</p>
        </div>

        {rows.map((row, i) => (
          <DetailItem key={i} i={i} label={row.label} value={row.value} />
        ))}
      </div>
    </section>
  );
}

export default Details;
