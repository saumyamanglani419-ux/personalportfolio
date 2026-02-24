import React from 'react';
import { motion } from 'motion/react';
import { FadeIn } from './FadeIn';
import soumyaImage from '../assets/SaumyaM.webp'; 


export const Hero = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative flex min-h-[95vh] flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
      <div className="relative z-10 w-full flex flex-col lg:flex-row lg:items-center justify-between gap-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          <motion.h1 
            variants={item}
            className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] tracking-tighter"
          >
            Creative <br />
            <motion.span 
              variants={item}
              className="italic text-rose-300"
            >
              Designer
            </motion.span> & <br />
            <motion.span variants={item}>Visualizer</motion.span>
          </motion.h1>

          <FadeIn delay={1} direction="up">
            <div className="mt-16 flex flex-col md:flex-row md:items-end justify-between gap-12">
              <p className="max-w-lg text-xl text-muted leading-relaxed font-light">
                Crafting digital experiences that bridge the gap between <span className="text-ink font-medium italic">design</span> and <span className="text-ink font-medium italic">technology</span>.
              </p>
              
              <div className="flex flex-col gap-3 text-sm uppercase tracking-[0.2em] font-semibold">
                <span className="text-muted/50">Based in</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Jabalpur, IN
                </span>
              </div>
            </div>
          </FadeIn>
        </motion.div>

        <FadeIn delay={0.6} direction="left" className="flex-1 lg:max-w-xl">
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              src="/SaumyaM.webp"
              alt="Creative Portrait"
              className="h-full w-[90%] object-cover brightness-90 hover:grayscale-0 transition-[filter] duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
      </div>

      {/* Decorative background element */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute -right-20 top-1/4 -z-10 font-serif text-[30vw] italic select-none pointer-events-none"
      >
        Saumya
      </motion.div>
    </section>
  );
};
