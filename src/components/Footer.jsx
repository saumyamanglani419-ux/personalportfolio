import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Footer = () => {
  return (
  <footer
    id="contact"
    className="px-6 md:px-12 py-40 border-t border-border bg-bg relative overflow-hidden"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
      
      {/* Left Section */}
      <div>
        <FadeIn direction="left">
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
            Let's create <br />
            something <br />
            <span className="italic text-rose-300">
              extraordinary
            </span>.
          </h2>
        </FadeIn>

        <FadeIn delay={0.3} direction="up">
          <motion.a
            href="mailto:design.manglani@gmail.com"
            whileHover={{ x: 10 }}
            className="inline-flex items-center gap-4 mt-20 text-xl md:text-4xl font-light border-b-2 border-ink pb-4 group transition-all"
          >
            design.manglani@gmail.com
            <motion.div
              whileHover={{ rotate: 45 }}
              className="transition-transform"
            >
              <ArrowUpRight className="w-12 h-12" />
            </motion.div>
          </motion.a>
        </FadeIn>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-between">
        <div className="grid grid-cols-2 gap-20">
          
          {/* Social Links */}
          <FadeIn delay={0.4} direction="up">
            <div className="flex flex-col gap-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted font-bold">
                Social
              </span>

              <div className="flex flex-col gap-4 text-xl font-light">
                {[
                  {
                    name: "Instagram",
                    link: "https://www.instagram.com/ui_uxofficial_saumya?igsh=MXhicDZodDlub3lsMg%3D%3D&utm_source=qr"
                  },
                  {
                    name: "LinkedIn",
                    link: "https://www.linkedin.com/in/saumya-manglani-613296302/"
                  },
                  {
                    name: "Dribbble",
                    link: "https://dribbble.com/saumya-manglani"
                  }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-muted transition-colors w-fit relative group"
                  >
                    {social.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-muted transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Navigation */}
          <FadeIn delay={0.5} direction="up">
            <div className="flex flex-col gap-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-muted font-bold">
                Navigation
              </span>

              <div className="flex flex-col gap-4 text-xl font-light">
                {["Work", "About", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-muted transition-colors w-fit relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-muted transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Footer */}
        <FadeIn delay={0.7} direction="none">
          <div className="mt-32 flex flex-col md:flex-row justify-between items-start md:items-end text-[10px] uppercase tracking-[0.3em] text-muted/60 font-bold gap-4">
            <p>© 2026 SAUMYA MANGLANI</p>
            <p>DESIGNED WITH PASSION IN INDIA</p>
            <p>ALL RIGHTS RESERVED</p>
          </div>
        </FadeIn>
      </div>
    </div>

    {/* Background Decoration */}
    <div className="absolute bottom-0 right-0 opacity-[0.02] font-serif text-[20vw] italic leading-none translate-y-1/2 translate-x-1/4 pointer-events-none select-none">
      Studio
    </div>
  </footer>
);
};
