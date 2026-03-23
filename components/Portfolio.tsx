"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Github, ExternalLink, LucideIcon } from "lucide-react";
import Image from "next/image";

const filters = ["All", "FinTech", "Web Apps", "Mobile"];

const projects = [
  {
    title: "Electronic Laboratory Logbook",
    category: "FinTech",
    image: "/img/portfolio1.png",
    description: "Cloud-based platform for digital laboratory logbooks with real-time analytics.",
    tech: ["React.js", "Node.js", "PostgreSQL"],
    github: "https://github.com/Lilsadiq8345/Electronic-Laboratory-Logbook-Manage-System",
  },
  {
    title: "QR2Tech Platform",
    category: "Web Apps",
    image: "/img/qr.png",
    description: "High-performance web application with complex financial API integrations.",
    tech: ["React.js", "MongoDB", "AWS"],
    github: "https://github.com/Lilsadiq8345/",
  },
  {
    title: "Rem-Farms Management",
    category: "Web Apps",
    image: "/img/rem.png",
    description: "Comprehensive farm management platform with real-time resource tracking.",
    tech: ["Next.js", "NestJS", "WebSocket"],
    github: "https://github.com/Lilsadiq8345/",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter
  );

  return (
    <section id="portfolio" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader title="Portfolio Highlights" subtitle="Featured Work" />

        <div className="flex justify-center flex-wrap gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeFilter === filter
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-slate-600 hover:bg-slate-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-all"
                      >
                        <Github size={20} />
                      </a>
                      <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-primary transition-all">
                        <ExternalLink size={20} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
