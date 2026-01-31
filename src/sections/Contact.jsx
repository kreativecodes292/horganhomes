import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#111111] text-white py-20 px-4 sm:px-6 md:px-16 overflow-hidden"
    >
      {/* Floating abstract shapes */}
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 bg-[#C89B3C]/10 rounded-full rotate-[25deg] z-0 animate-pulse-slow"></div>
      <div className="absolute top-16 sm:top-20 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-[#C89B3C]/10 rounded-[30%] rotate-12 z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-16 w-28 h-28 sm:w-36 sm:h-36 bg-[#C89B3C]/10 rounded-[50%_20%] -rotate-6 z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#C89B3C]/10 rounded-[20%_50%] rotate-45 z-0 animate-pulse-slow"></div>

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center mb-16 relative z-10"
      >
        <p className="uppercase text-xs sm:text-sm tracking-[0.25em] text-[#CFCFCF]">Contact</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading mt-2">
          Get in <span className="text-[#C89B3C]">Touch With Us</span>
        </h2>
        <p className="mt-4 text-[#CFCFCF] text-sm sm:text-base md:text-lg leading-relaxed">
          Have questions or want to schedule a visit? Reach out to us and our team will ensure your journey to a dream home is smooth and enjoyable.
        </p>
      </motion.div>

      {/* CONTACT GRID */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 relative z-10">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 md:w-1/2"
        >
          {/* Phone */}
          <div className="flex items-start gap-4 bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#C89B3C]/20 hover:scale-105 transition-transform cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#C89B3C] text-[#111111] rounded-xl text-lg sm:text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-semibold text-[#C89B3C] text-sm sm:text-lg">Phone</h4>
              <p className="text-[#CFCFCF] mt-1 text-sm sm:text-base">01384 410810</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#C89B3C]/20 hover:scale-105 transition-transform cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#C89B3C] text-[#111111] rounded-xl text-lg sm:text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold text-[#C89B3C] text-sm sm:text-lg">Email</h4>
              <p className="text-[#CFCFCF] mt-1 text-sm sm:text-base">SALES@HORGANHOMES.CO.UK</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 bg-[#1C1C1C] rounded-2xl p-4 sm:p-6 shadow-lg border border-[#C89B3C]/20 hover:scale-105 transition-transform cursor-pointer">
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#C89B3C] text-[#111111] rounded-xl text-lg sm:text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold text-[#C89B3C] text-sm sm:text-lg">Address</h4>
              <p className="text-[#CFCFCF] mt-1 text-sm sm:text-base">
                HORGAN HOMES & DEVELOPMENTS LTD, SUITE 2, ASH HOUSE, LYDIATE BUSINESS PARK, HALESOWEN ROAD, LYDIATE ASH, BROMSGROVE, B61 0QL
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-4 sm:gap-6 md:w-1/2 bg-[#1C1C1C] rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-[#C89B3C]/20"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 sm:p-4 border border-[#C89B3C]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C89B3C] bg-[#111111] text-white text-sm sm:text-base"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 sm:p-4 border border-[#C89B3C]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C89B3C] bg-[#111111] text-white text-sm sm:text-base"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 sm:p-4 border border-[#C89B3C]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C89B3C] bg-[#111111] text-white text-sm sm:text-base"
          ></textarea>
          <button
            type="submit"
            className="px-4 sm:px-6 py-2 sm:py-3 w-fit bg-[#C89B3C] text-black rounded-xl font-semibold hover:opacity-90 transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
