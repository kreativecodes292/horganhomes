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
    <section
      id="services"
      className="relative bg-[#111111] text-white py-24 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#C89B3C]/10 rounded-full animate-pulse-slow z-0"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#C89B3C]/10 rounded-full animate-pulse-slow z-0"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-20 relative z-10"
      >
        <p className="uppercase text-xs tracking-[0.25em] text-[#CFCFCF]">
          Services
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mt-2">
          Exceptional <span className="text-[#C89B3C]">Services</span> for Your Dream Home
        </h2>
        <p className="mt-4 text-[#CFCFCF] text-sm sm:text-base md:text-lg leading-relaxed">
          From design to execution, Horgan Homes provides a comprehensive suite of services that ensure your home is beautiful, functional, and built to last.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Vertical line */}
        <div className="absolute top-0 left-2 sm:left-4 md:left-1/2 w-[2px] h-full bg-[#C89B3C]/40 md:-translate-x-1/2"></div>

        <div className="flex flex-col gap-14">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative pl-8 sm:pl-12 md:pl-0"
            >
              {/* Dot */}
              <div className="absolute left-1 sm:left-2 md:left-1/2 top-2 w-3 h-3 rounded-full bg-[#C89B3C] shadow-lg md:-translate-x-1/2"></div>

              {/* Content */}
              <div
                className={`max-w-full md:max-w-md ${
                  i % 2 === 0
                    ? "md:ml-8 md:text-left"
                    : "md:mr-8 md:ml-auto md:text-right"
                }`}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#C89B3C]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[#CFCFCF] text-sm sm:text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
