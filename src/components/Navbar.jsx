import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 bg-white/70 backdrop-blur-md"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="text-lg md:text-xl font-semibold tracking-tight"
      >
        <a href="/" className="text-rose-400">
          Saumya.
        </a>
      </motion.div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8 text-xs md:text-sm font-medium uppercase tracking-widest text-gray-600">
        {["Work", "About", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2 }}
            className="relative group hover:text-black transition-colors duration-300"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}

        <motion.a
          href="/Saumya_Manglani_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="px-4 py-2 border border-rose-400 text-rose-400 rounded-md hover:bg-rose-400 hover:text-white transition-all duration-300"
        >
          View Resume
        </motion.a>
      </div>

      {/* Hamburger Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1">
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md px-6 py-6 flex flex-col gap-6 text-sm font-medium uppercase tracking-widest text-gray-700 md:hidden shadow-lg"
          >
            {["Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="border-b pb-2"
              >
                {item}
              </a>
            ))}

            <a
              href="/Saumya_Manglani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 border border-rose-400 text-rose-400 rounded-md text-center"
            >
              View Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};