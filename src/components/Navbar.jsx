import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
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

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-xs md:text-sm font-medium uppercase tracking-widest text-gray-600">
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

        {/* Resume Button (Opens in New Tab) */}
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
    </motion.nav>
  );
};






