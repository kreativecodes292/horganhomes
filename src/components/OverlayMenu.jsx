import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OverlayMenu({ isOpen, onClose }) {
  const [showExp, setShowExp] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: "rgba(28,28,30,0.95)" }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-[#F5F5F5] text-3xl hover:text-[#F59E0B] transition"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center w-full max-w-md px-6">
            {/* NORMAL LINKS */}
            {["Home", "About", "Skills"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-2xl text-[#F5F5F5] font-semibold hover:text-[#F59E0B] transition"
                >
                  {item}
                </a>
              </motion.li>
            ))}

            {/* SERVICES DROPDOWN */}
            <motion.li
              className="relative"
              onMouseEnter={() => !isMobile && setShowExp(true)}
              onMouseLeave={() => !isMobile && setShowExp(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <span
                onClick={() => isMobile && setShowExp(!showExp)}
                className="text-2xl text-[#F5F5F5] font-semibold cursor-pointer hover:text-[#F59E0B] transition"
              >
                Services
              </span>

              <AnimatePresence>
                {showExp && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className={`
                      absolute
                      mt-2
                      left-0 w-full
                      lg:left-1/2 lg:-translate-x-1/2 lg:w-auto
                      bg-[#111827] border border-[#F59E0B]
                      rounded-lg px-6 py-4 space-y-3
                      shadow-2xl z-50
                    `}
                  >
                    <li>
                      <Link to="/web-development" onClick={onClose}>
                        <span className="text-[#F5F5F5] hover:text-[#F59E0B] transition whitespace-nowrap">
                          WEB DEVELOPMENT
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/graphic-design" onClick={onClose}>
                        <span className="text-[#F5F5F5] hover:text-[#F59E0B] transition whitespace-nowrap">
                          GRAPHIC DESIGNING
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/socialmedia-management" onClick={onClose}>
                        <span className="text-[#F5F5F5] hover:text-[#F59E0B] transition whitespace-nowrap">
                          SOCIAL MEDIA MANAGEMENT
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/seo-optimization" onClick={onClose}>
                        <span className="text-[#F5F5F5] hover:text-[#F59E0B] transition whitespace-nowrap">
                          SEO OPTIMIZATION
                        </span>
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>

            {/* LAST LINKS */}
            {["Testimonial", "Contact"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={onClose}
                  className="text-2xl text-[#F5F5F5] font-semibold hover:text-[#F59E0B] transition"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
