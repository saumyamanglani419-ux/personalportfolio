import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* DESKTOP + MOBILE NAV */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl"
      >
        <div className="flex items-center justify-between px-6 md:px-8 py-4 rounded-full border border-black/5 bg-white/70 backdrop-blur-xl shadow-sm">

          {/* LOGO */}
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className="font-serif italic text-xl md:text-2xl tracking-tight"
          >
            S.M
          </motion.a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="relative text-sm uppercase tracking-[0.25em] text-neutral-500 hover:text-black transition-colors duration-300 group"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/ui ux.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-black  hover:bg-rose-300 hover:text-black text-white rounded-full text-xs uppercase tracking-[0.25em] hover:opacity-90 transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <div className="flex flex-col gap-1.5">
              <motion.span
                animate={
                  isOpen
                    ? { rotate: 45, y: 7 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-[2px] w-6 bg-black"
              />

              <motion.span
                animate={
                  isOpen
                    ? { opacity: 0 }
                    : { opacity: 1 }
                }
                className="block h-[2px] w-6 bg-black"
              />

              <motion.span
                animate={
                  isOpen
                    ? { rotate: -45, y: -7 }
                    : { rotate: 0, y: 0 }
                }
                className="block h-[2px] w-6 bg-black"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center"
          >
            <div className="flex flex-col items-center gap-10">

              {navLinks.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: index * 0.1,
                    },
                  }}
                  className="font-serif italic text-5xl tracking-tight"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.a
                href="/Saumya_Manglani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.4,
                  },
                }}
                className="mt-8 px-8 py-4 bg-black text-white rounded-full uppercase tracking-[0.25em] text-xs"
              >
                Resume
              </motion.a>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};