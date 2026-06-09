import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "FinTrack",
    category: "Research-Driven UX Case Study",
    description:
      "Designed a personal finance platform that helps users track expenses, manage budgets, and build better financial habits through research-driven UX decisions.",
    image: "/fintrack.jpg",
    size: "medium",
    featured: true,
    link: "https://www.figma.com/design/3njLTece96VUIfPaEGqRWb/Untitled?node-id=8-894&t=OYmimISsYw1qCUHx-1",
  },

  {
    id: 2,
    title: "Aura",
    category: "AI-Powered Skincare Experience",
    description:
      "An intelligent skincare application that analyzes skin health, provides personalized routines, and recommends products using AI-powered insights.",
    image: "/aura.png",
    size: "small",
    featured: true,
    link: "https://www.figma.com/design/fe4l1J60iBgAZekwn7NEBz/prototype?node-id=0-1&t=BwniJk48BhyW6Pii-1",
  },

  {
    id: 3,
    title: "SkinFlirts",
    category: "Dermatology Consultation Platform",
    description:
      "A healthcare experience enabling users to discover dermatologists, schedule appointments, chat with specialists, and manage skincare journeys.",
    image: "/skinFlirts.png",
    size: "large",
    featured: false,
    link: "https://www.figma.com/design/sn6V5QZGnc5OYNuLo1qSF8/Untitled?node-id=0-1&t=8ziNksIunl6FlKX8-1",
  },

  {
    id: 4,
    title: "E-Commerce",
    category: "Modern Shopping Experience",
    description:
      "A conversion-focused shopping platform designed to simplify product discovery, cart management, and secure checkout experiences.",
    image: "/Ecommerce.png",
    size: "large",
    featured: false,
    link: "https://www.figma.com/design/a7PjuyzeVHAZix6jYsLgDQ/Untitled?node-id=0-1&t=gWTBA6tvetfcvLgC-1",
  },

  {
    id: 5,
    title: "Academic Edge",
    category: "Student Analytics Dashboard",
    description:
      "A data-driven educational dashboard that helps students track performance, manage coursework, and monitor learning progress.",
    image: "/dashboard.png",
    size: "small",
    featured: false,
    link: "https://www.figma.com/design/MaznUuTwfOnUBMCnldfWRq/Untitled?node-id=0-1&t=yQnPRVLhP96LKZBO-1",
  },

  {
    id: 6,
    title: "Cappuccino",
    category: "Coffee Ordering Mobile App",
    description:
      "A modern coffee ordering experience focused on product customization, seamless checkout, and delightful mobile interactions.",
    image: "/cappuccino.png",
    size: "small",
    featured: false,
    link: "https://www.figma.com/design/zNk8ZVrhsOuj4YsbaxHA2d/cappuccino?node-id=0-1&t=KLqmzbVSqmMQf8rj-1",
  },
];

export const ProjectGrid = () => {
  return (
    <section id="work" className="px-6 md:px-12 py-32">
      {/* SECTION HEADING */}
      <div className="mb-24">
        <p className="text-xs uppercase tracking-[0.4em] text-neutral-500 mb-4">
          Selected Work
        </p>

        <h2 className="text-5xl md:text-7xl font-serif italic tracking-tight">
          Featured Projects
        </h2>
      </div>

      {/* PROJECT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 1,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group cursor-pointer ${
                project.size === "large" ? "md:row-span-2" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:h-full bg-neutral-100 rounded-sm">
                {/* FEATURED BADGE */}
                {project.featured && (
                  <div className="absolute top-5 left-5 z-20">
                    <div className="bg-white/90 backdrop-blur-md border border-neutral-200 px-4 py-2 rounded-full">
                      <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-700">
                        Featured Project
                      </span>
                    </div>
                  </div>
                )}

                {/* PROJECT IMAGE */}
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-[filter] duration-1000"
                />

                {/* SUBTLE HOVER OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-700" />
              </div>

              {/* CONTENT */}
              <div className="mt-8">
                <h3 className="text-4xl md:text-5xl font-serif italic tracking-tight leading-none">
                  {project.title}
                </h3>

                <p className="text-[11px] text-neutral-500 uppercase tracking-[0.35em] mt-3 font-semibold">
                  {project.category}
                </p>

                <p className="mt-5 text-[15px] leading-relaxed text-neutral-600 max-w-lg">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  );
};
