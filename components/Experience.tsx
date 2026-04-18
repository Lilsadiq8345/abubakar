"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experiences = [
  {
    date: "September 2025 - Present",
    role: "Full Stack Developer",
    company: "Circuit Pointe - Nigeria (Remote)",
    description: [
      "Led development of high-performance web app using React.js, Node.js, and MongoDB",
      "Integrated third-party financial APIs for real-time transaction syncing with 99.8% uptime",
      "Optimised PostgreSQL queries, reducing report generation time from 8s to 1.2s",
      "Deployed containerised microservices on AWS ECS, cutting cloud costs by 25%",
    ],
  },
  {
    date: "March 2025 - Present",
    role: "Full Stack Developer",
    company: "Carbonetrix - UK (Remote)",
    description: [
      "Developed real-time carbon management platform using Next.js, Node.js, and PostgreSQL",
      "Built RESTful APIs integrating data from 15+ sources, improving processing speed by 40%",
      "Implemented JWT authentication and RBAC for secure financial-grade data",
      "Reduced feature deployment time by 30% via CI/CD pipelines",
    ],
  },
  {
    date: "April 2024 - February 2025",
    role: "Full-stack Developer",
    company: "QR2TECH - London Area, United Kingdom (Remote)",
    description: [
      "Led development of high-performance web app using React.js, Node.js, and MongoDB",
      "Executed end-to-end development of scalable microservices",
    ],
  },
  {
    date: "January 2023 - April 2024",
    role: "Full-stack Developer",
    company: "Purenettechnologies - Kaduna, Nigeria (Hybrid)",
    description: [
      "Built secure web applications with React.js + Node.js, implementing PCI-compliant payment forms",
      "Developed real-time dashboards with WebSocket integrations",
    ],
  },
  {
    date: "Oct 2021 - Dec 2022",
    role: "Junior Frontend Developer",
    company: "Purenettechnologies - Kaduna, Nigeria (On-site)",
    description: [
      "Developed responsive user interfaces using HTML, CSS, and JavaScript",
      "Collaborated with design and backend teams to implement pixel-perfect UI components",
      "Optimised web performance and cross-browser compatibility across multiple projects",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader title="Professional Journey" subtitle="Work Experience" />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.company + idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex items-center justify-between gap-12 flex-col md:flex-row ${idx % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-lg -translate-x-1/2 z-10 hidden md:block" />

                <div className="flex-1 w-full">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-primary/20 transition-colors group">
                    <span className="inline-block px-4 py-1.5 bg-white text-primary rounded-full text-xs font-bold shadow-sm mb-4">
                      {exp.date}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-semibold text-slate-600 mb-6">{exp.company}</h4>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
