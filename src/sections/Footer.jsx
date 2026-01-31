import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] text-[#CFCFCF] py-16 px-6 md:px-16 overflow-hidden">
      
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-[#C89B3C]/10 rounded-full animate-pulse-slow z-0"></div>
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-[#C89B3C]/10 rounded-full animate-pulse-slow z-0"></div>

      {/* Footer main content */}
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* About */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#C89B3C]">Horgan Homes</h3>
          <p className="text-[#CFCFCF] text-sm md:text-base leading-relaxed">
            Creating modern, luxurious, and sustainable homes with care, quality, and vision — making your dream home a reality.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <a className="p-3 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] hover:bg-[#C89B3C] hover:text-[#111111] transition"><FaFacebookF /></a>
            <a className="p-3 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] hover:bg-[#C89B3C] hover:text-[#111111] transition"><FaInstagram /></a>
            <a className="p-3 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] hover:bg-[#C89B3C] hover:text-[#111111] transition"><FaLinkedinIn /></a>
            <a className="p-3 rounded-full bg-[#C89B3C]/20 text-[#C89B3C] hover:bg-[#C89B3C] hover:text-[#111111] transition"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#C89B3C]">Quick Links</h3>
          <a href="#home" className="hover:text-[#FFD166] transition">Home</a>
          <a href="#about" className="hover:text-[#FFD166] transition">About Us</a>
          <a href="#services" className="hover:text-[#FFD166] transition">Services</a>
          <a href="#contact" className="hover:text-[#FFD166] transition">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#C89B3C]">Contact</h3>
          <p><span className="font-semibold">Phone:</span> +44 123 456 7890</p>
          <p><span className="font-semibold">Email:</span> info@horganhomes.co.uk</p>
          <p><span className="font-semibold">Address:</span> 12 King’s Road, London, UK</p>
        </div>
      </div>

      {/* Bottom Credit */}
      <div className="mt-12 border-t border-[#C89B3C]/20 pt-6 text-center text-sm text-[#6B7280]">
        &copy; {new Date().getFullYear()} Horgan Homes. Design by <span className="text-[#C89B3C] font-semibold">Webblixo Tech Solutions</span>.
      </div>
    </footer>
  );
}
