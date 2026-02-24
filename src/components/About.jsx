import React from 'react';
import { FadeIn } from './FadeIn';

export const About = () => {
  return (
    <section id="about" className="px-6 md:px-12 py-40 bg-ink text-bg overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <FadeIn direction="none">
          <span className="text-xs uppercase tracking-[0.4em] font-bold opacity-40">
            About Me
          </span>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h2 className="mt-12 font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight">
            Design is the silent <br />
            <span className="italic text-muted">ambassador</span> of <br />
            your brand.
          </h2>
        </FadeIn>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-20 text-xl leading-relaxed font-light">
          <FadeIn delay={0.4}>
            <p className="opacity-70">
              With nearly a decade of experience navigating the intersection of technology and creativity, I've developed a signature style that prioritizes clarity, emotion, and purpose. Every pixel is a choice, every interaction a conversation.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="opacity-70">
              I partner with visionary brands to translate complex ideas into intuitive visual languages. My work isn't just about aesthetics; it's about building meaningful connections in an increasingly noisy digital world.
            </p>
          </FadeIn>
        </div>
        
        <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          {[
            { label: "Experience", value: "06 Months" },
            { label: "Global Projects", value: "20+" },
            { label: "Design Awards", value: "02" },
            { label: "Happy Clients", value: "05+" }
          ].map((stat, i) => (
            <FadeIn key={i} delay={0.6 + (i * 0.1)} direction="up">
              <div className="group cursor-default">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-30 mb-4 group-hover:opacity-60 transition-opacity">{stat.label}</p>
                <p className="text-4xl font-serif italic group-hover:translate-x-2 transition-transform duration-500">{stat.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
