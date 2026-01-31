import { motion } from "framer-motion";
import { FaLightbulb, FaGem, FaHandsHelping, FaMapMarkerAlt } from "react-icons/fa";

export default function AboutUs() {
  const features = [
    {
      icon: <FaLightbulb className="w-12 h-12 text-[#C89B3C] transition-transform duration-500 hover:scale-110 hover:text-[#FFD166]" />,
      title: "Innovative Architecture",
      desc: "Each home reflects a unique vision of modern living, blending aesthetic beauty with practical functionality. One-of-a-kind designs tailored for lasting appeal."
    },
    {
      icon: <FaHandsHelping className="w-12 h-12 text-[#C89B3C] transition-transform duration-500 hover:scale-110 hover:text-[#FFD166]" />,
      title: "Client-Focused Excellence",
      desc: "Homeowners are at the center of our design process, ensuring comfort, style, and functionality meet your expectations."
    },
    {
      icon: <FaGem className="w-12 h-12 text-[#C89B3C] transition-transform duration-500 hover:scale-110 hover:text-[#FFD166]" />,
      title: "Premium Craftsmanship",
      desc: "From foundations to finishing touches, we use premium materials and expert craftsmanship for homes that last generations."
    },
    {
      icon: <FaMapMarkerAlt className="w-12 h-12 text-[#C89B3C] transition-transform duration-500 hover:scale-110 hover:text-[#FFD166]" />,
      title: "Prime Locations",
      desc: "We select only the most sought-after UK locations offering accessibility, prestige, and serenity for your family."
    },
  ];

  return (
    <section id="about" className="relative bg-[#111111] text-[#FFFFFF] py-28 px-6 md:px-16 overflow-hidden">

      {/* Floating abstract shapes */}
      <div className="absolute mt-10 top-0 left-1/4 w-60 h-60 bg-[#C89B3C]/10 transform -rotate-12 rounded-tr-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute top-32 right-0 w-80 h-80 bg-[#C89B3C]/10 transform rotate-45 rounded-bl-3xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#C89B3C]/10 transform -rotate-6 rounded-br-2xl z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-20 w-40 h-40 bg-[#C89B3C]/10 transform rotate-12 rounded-tl-2xl z-0 animate-pulse-slow"></div>

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-24 relative z-10"
      >
        <p className="uppercase text-sm tracking-[0.25em] text-[#CFCFCF]">About Us</p>
        <h2 className="text-3xl md:text-5xl font-heading mt-2">
          We Build <span className="text-[#C89B3C]">Dream Homes</span> That Inspire
        </h2>
        <p className="mt-4 text-[#CFCFCF] text-base md:text-lg leading-relaxed">
          Horgan Homes combines visionary architecture with meticulous craftsmanship to create living spaces that are elegant, functional, and lasting.  
          Every residence is a testament to innovation, quality, and thoughtful design — perfect for families seeking modern comfort in prime UK locations.
        </p>
      </motion.div>

      {/* FEATURE CARDS */}
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 relative z-10">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: i * 0.2 }}
            className="relative bg-[#1C1C1C] border border-[#C89B3C]/20 rounded-3xl p-8 md:p-10 shadow-2xl hover:scale-105 hover:shadow-[#C89B3C]/40 transition-transform cursor-pointer"
          >
            {/* Decorative mini shapes inside card */}
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#C89B3C]/10 transform rotate-45 rounded-tr-3xl z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-[#C89B3C]/10 transform -rotate-12 rounded-bl-2xl z-0"></div>

            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div>{f.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#C89B3C]">{f.title}</h3>
              <p className="text-[#CFCFCF] text-base md:text-lg leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
