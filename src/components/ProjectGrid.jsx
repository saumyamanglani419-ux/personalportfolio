import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: "Coffee App UI",
    category: "Figma Design",
    image: "/coffeeui.webp",
    size: "medium"
  },
  {
    id: 2,
    title: "Dashboard Design",
    category: "Gravity Coding Website",
    image: "/Dashboard.webp",
    size: "small"
  },
  {
    id: 3,
    title: "Game Web UI",
    category: "Landing Page Design",
    image: "/game ui.jpg",
    size: "small"
  },
  {
    id: 4,
    title: "Portfolio Interface",
    category: "Web Design",
    image: "/portfolio ui.jpg",
    size: "large"
  }
];

export const ProjectGrid = () => {
  return (
    <section id="work" className="px-6 md:px-12 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={`group cursor-pointer ${project.size === 'large' ? 'md:row-span-2' : ''}`}
          >
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-full bg-neutral-100 rounded-sm">
              <motion.img
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500" />
            </div>
            <div className="mt-8 flex justify-between items-end">
              <div>
                <h3 className="text-3xl font-serif italic tracking-tight">{project.title}</h3>
                <p className="text-xs text-muted uppercase tracking-[0.2em] mt-2 font-bold">{project.category}</p>
              </div>
              <motion.div 
                className="h-px w-12 bg-ink origin-right"
                whileHover={{ scaleX: 2 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
