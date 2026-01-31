import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import OverlayMenu from "./OverlayMenu";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Home section observer (show navbar on home)
  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => homeSection && observer.unobserve(homeSection);
  }, []);

  // Scroll hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible || menuOpen) {
        setVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-2 left-1/2 -translate-x-1/2 z-50
          transition-transform duration-300
          ${visible ? "translate-y-0" : "-translate-y-32"}`}
      >
        {/* Capsule-style navbar */}
        <div
          className="
            flex items-center justify-between
            w-[90vw] max-w-7xl
            h-[64px] px-5
            rounded-full
            backdrop-blur-md
            bg-[#111111]/80 border border-[#C89B3C]/20
            shadow-2xl
          "
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-r from-[#C89B3C] to-[#D4A44A] flex items-center justify-center text-black font-bold text-lg">
              HH
            </div>
            <span className="text-white font-serif text-xl md:text-2xl font-bold tracking-wide">
              Horgan Homes
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-12 font-medium">
            <a href="#home" className="text-white hover:text-[#C89B3C] transition">
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#C89B3C] transition">
              About
            </a>
            <a href="#contact" className="text-white hover:text-[#C89B3C] transition">
              Contact
            </a>
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden lg:flex items-center
              px-6 h-[36px]
              text-sm rounded-full
              bg-[#C89B3C]
              text-black shadow-md
              hover:opacity-90 transition"
          >
            Reach Out
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden text-white text-2xl hover:text-[#C89B3C] transition"
            aria-label="Open Menu"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Overlay Menu */}
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
