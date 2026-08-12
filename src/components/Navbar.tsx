import { useState } from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Demo', href: '#demo' },
  { name: 'Architecture', href: '#architecture' },
  { name: 'Setup', href: '#setup' },
  { name: 'Download', href: '#download' },
  { name: 'FAQ', href: '#faq' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 w-full px-5 sm:px-8 py-4 sm:py-5 flex row justify-between items-center bg-transparent backdrop-blur-xs"
      >
        {/* Logo (left) */}
        <a href="#" className="flex flex-row items-center gap-3 group">
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-black font-heading font-bold"
          >
            CP Companion
          </span>
        </a>

        {/* Desktop Nav Links (center, hidden below md) */}
        <nav className="hidden md:flex flex-row items-center text-[21px] text-black font-body">
          {NAV_LINKS.map((link, index) => (
            <span key={link.name}>
              <a
                href={link.href}
                className="hover:opacity-60 transition-opacity font-medium"
              >
                {link.name}
              </a>
              {index < NAV_LINKS.length - 1 && ',\u00A0'}
            </span>
          ))}
        </nav>

        {/* Desktop CTA (right, hidden below md) */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2 text-base text-black font-medium underline underline-offset-2 hover:opacity-60 transition-opacity"
          >
            <Download className="w-4 h-4" />
            <span>Download Free</span>
          </a>
        </div>

        {/* Mobile Hamburger (visible below md) */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 rounded focus:outline-none z-50 cursor-pointer"
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 transform origin-center ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 transform origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
          />
        </button>
      </motion.header>

      {/* Mobile Overlay (z-index: 39) */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-39 md:hidden flex flex-col justify-center px-8 gap-6 transition-opacity duration-300 ${isMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-[28px] font-medium text-black hover:opacity-60 transition-opacity"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#download"
          onClick={() => setIsMenuOpen(false)}
          className="text-[28px] font-medium text-black underline underline-offset-2 hover:opacity-60 transition-opacity flex items-center gap-2"
        >
          <Download className="w-6 h-6" />
          <span>Download App</span>
        </a>
      </div>
    </>
  );
}
