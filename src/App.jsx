/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative overflow-x-hidden"
      >
        <Navbar />
        <Hero />
        <ProjectGrid />
        <About />
        <Footer />
        
        {/* Custom Cursor or other decorative elements could go here */}
        <div className="fixed bottom-8 right-8 z-50">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full bg-ink text-bg flex items-center justify-center shadow-xl"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </motion.button>
        </div>
      </motion.main>
    </AnimatePresence>
  );
}
