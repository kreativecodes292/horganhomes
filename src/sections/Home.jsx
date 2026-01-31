import { motion } from "framer-motion";

export default function Home() {
  return (
    <section id="home" className="min-h-screen bg-[#111111] pt-28 px-6 md:px-16 overflow-hidden relative">

      {/* DECORATIVE SHAPES */}
      <div className="absolute top-1/3 right-0 w-24 h-48 md:w-36 md:h-72 bg-[#C89B3C]/10 rotate-12 rounded-xl z-0"></div>
      <div className="absolute top-12 left-0 w-20 h-20 md:w-28 md:h-28 bg-[#C89B3C]/15 rotate-12 rounded-br-3xl z-0"></div>

      {/* HERO GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.25em] text-sm text-[#CFCFCF] mb-4">
            Horgan Homes
          </p>

          <h1 className="font-heading text-3xl md:text-5xl leading-tight text-white">
            Homes shaped by
            <br />
            <span className="text-[#C89B3C]">architecture & care</span>
          </h1>

          <p className="mt-6 text-[#CFCFCF] max-w-lg leading-relaxed text-sm md:text-base">
            We create thoughtfully crafted homes that balance modern architecture, comfort, and lasting value — designed for how people truly live. Every home is a blend of elegance, functionality, and timeless design.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 bg-[#C89B3C] text-black rounded-lg text-sm font-medium transition-transform transform hover:scale-105 hover:opacity-90">
              View Developments
            </button>

            <button className="px-7 py-3 border border-[#C89B3C] rounded-lg text-sm font-medium text-white hover:bg-[#C89B3C] hover:text-black transition-transform transform hover:scale-105">
              Our Approach
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="w-full h-[280px] md:h-[350px] rounded-xl overflow-hidden shadow-2xl relative">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=crop&h=350&w=550"
              alt="Luxury Home"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent"></div>
          </div>

          {/* FLOATING CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute -bottom-8 -right-6 bg-[#1C1C1C] p-4 rounded-xl shadow-lg w-52 border border-[#C89B3C]/30"
          >
            <h3 className="font-heading text-lg text-[#C89B3C]">
              Built to Last
            </h3>
            <p className="text-xs text-[#CFCFCF] mt-1">
              Premium materials & timeless design.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* STATS BAR */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-6xl mx-auto mt-20 border-t border-[#C89B3C]/20 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10"
      >
        {[
          ["30+", "Years of Experience"],
          ["500+", "Homes Delivered"],
          ["Awarded", "Design Excellence"],
          ["UK", "Prime Locations"],
        ].map(([num, label], i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * i, duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading text-white">{num}</h2>
            <p className="text-sm md:text-base text-[#CFCFCF] mt-1 flex items-center justify-center gap-1">
              {label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
