import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#111111] text-white py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* Floating abstract shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#C89B3C]/10 rounded-full rotate-[25deg] z-0 animate-pulse-slow"></div>
      <div className="absolute top-20 right-0 w-48 h-48 bg-[#C89B3C]/10 rounded-[30%] rotate-12 z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-20 w-36 h-36 bg-[#C89B3C]/10 rounded-[50%_20%] -rotate-6 z-0 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#C89B3C]/10 rounded-[20%_50%] rotate-45 z-0 animate-pulse-slow"></div>

      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center mb-20 relative z-10"
      >
        <p className="uppercase text-sm md:text-md tracking-[0.25em] text-[#CFCFCF]">
          Contact
        </p>
        <h2 className="text-3xl md:text-5xl font-heading mt-2">
          Get in <span className="text-[#C89B3C]">Touch With Us</span>
        </h2>
        <p className="mt-4 text-[#CFCFCF] text-base md:text-lg leading-relaxed">
          Have questions or want to schedule a visit? Reach out to us and our team will ensure your journey to a dream home is smooth and enjoyable.
        </p>
      </motion.div>

      {/* CONTACT GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          {/* Phone */}
          <div className="flex items-start gap-4 bg-[#1C1C1C] rounded-2xl p-6 shadow-lg border border-[#C89B3C]/20 hover:scale-105 transition-transform cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center bg-[#C89B3C] text-[#111111] rounded-xl text-xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="font-semibold text-[#C89B3C] text-lg">Phone</h4>
              <p className="text-[#CFCFCF] mt-1">01384 410810</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 bg-[#1C1C1C] rounded-2xl p-6 shadow-lg border border-[#C89B3C]/20 hover:scale-105 transition-transform cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center bg-[#C89B3C] text-[#111111] rounded-xl text-xl">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="font-semibold text-[#C89B3C] text-lg">Email</h4>
              <p className="text-[#CFCFCF] mt-1">SALES@HORGANHOMES.CO.UK</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 bg-[#1C1C1C] rounded-2xl p-6 shadow-lg border border-[#C89B3C]/20 hover:scale-105 transition-transform cursor-pointer">
            <div className="w-12 h-12 flex items-center justify-center bg-[#C89B3C] text-[#111111] rounded-xl text-xl">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="font-semibold text-[#C89B3C] text-lg">Address</h4>
              <p className="text-[#CFCFCF] mt-1">
                HORGAN HOMES & DEVELOPMENTS LTD, SUITE 2, ASH HOUSE, LYDIATE BUSINESS PARK, HALESOWEN ROAD, LYDIATE ASH, BROMSGROVE, B61 0QL
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6 bg-[#1C1C1C] rounded-3xl p-8 md:p-10 shadow-2xl border border-[#C89B3C]/20"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-[#C89B3C]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C89B3C] bg-[#111111] text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-[#C89B3C]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C89B3C] bg-[#111111] text-white"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 border border-[#C89B3C]/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C89B3C] bg-[#111111] text-white"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 w-fit bg-[#C89B3C] text-black rounded-xl font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
