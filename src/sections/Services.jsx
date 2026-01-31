import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Custom Home Design",
      desc: "Tailored architectural plans that reflect your lifestyle and aesthetic preferences, ensuring each home is unique."
    },
    {
      title: "Interior Planning",
      desc: "Thoughtfully curated interiors that balance comfort, functionality, and timeless style for every room."
    },
    {
      title: "Sustainable Building",
      desc: "Eco-friendly materials and energy-efficient solutions to create homes that are good for you and the planet."
    },
    {
      title: "Property Consultation",
      desc: "Expert guidance on selecting prime locations and planning investments for long-term value."
    },
  ];

  return (
    <section id="services" className="relative bg-[#111111] text-[#FFFFFF] py-28 px-6 md:px-16 overflow-hidden">
      
      {/* Floating abstract shapes */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-[#C89B3C]/10 rounded-full animate-pulse-slow z-0"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#C89B3C]/10 rounded-full animate-pulse-slow z-0"></div>

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-24 relative z-10"
      >
        <p className="uppercase text-sm tracking-[0.25em] text-[#CFCFCF]">Services</p>
        <h2 className="text-3xl md:text-5xl font-heading mt-2">
          Exceptional <span className="text-[#C89B3C]">Services</span> for Your Dream Home
        </h2>
        <p className="mt-4 text-[#CFCFCF] text-base md:text-lg leading-relaxed">
          From design to execution, Horgan Homes provides a comprehensive suite of services that ensure your home is beautiful, functional, and built to last.
        </p>
      </motion.div>

      {/* TIMELINE / SERVICES LIST */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Vertical line */}
        <div className="absolute top-0 left-4 md:left-1/2 w-1 h-full bg-[#C89B3C]/40 -translate-x-1/2"></div>

        <div className="flex flex-col gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 relative`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-2 md:top-0 w-4 h-4 rounded-full bg-[#C89B3C] z-10 shadow-lg"></div>

              {/* Text content */}
              <div className={`md:max-w-md ${i % 2 === 0 ? "md:ml-8 text-left" : "md:mr-8 md:ml-auto text-left md:text-right"}`}>
                <h3 className="text-xl md:text-2xl font-semibold text-[#C89B3C]">{service.title}</h3>
                <p className="text-[#CFCFCF] text-base md:text-lg mt-2 leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
