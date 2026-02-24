import React from 'react';
import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-8 md:px-12 bg-bg/80 backdrop-blur-md"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="text-md md:text-xl font-medium tracking-tight"
      >
        <a href="/" className="text-rose-400">Saumya.</a>
      </motion.div>
      
      <div className="flex gap-8 text-xs md:text-sm font-medium uppercase tracking-widest text-muted">
        {['Work', 'About', 'Contact'].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            whileHover={{ y: -2, color: '#121212' }}
            className="hover:text-ink transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-ink transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};
