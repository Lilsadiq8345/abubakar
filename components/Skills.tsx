"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Code2, Monitor, Server, Cloud, Smartphone, Paintbrush } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="text-primary" size={24} />,
    skills: [
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "PHP", level: 80 },
    ],
  },
  {
    title: "Frontend Development",
    icon: <Monitor className="text-blue-400" size={24} />,
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend & DevOps",
    icon: <Server className="text-indigo-400" size={24} />,
    skills: [
      { name: "Node.js / NestJS", level: 85 },
      { name: "Laravel", level: 90 },
      { name: "Django", level: 80 },
      { name: "AWS/Docker", level: 75 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <SectionHeader title="Skills & Technologies" subtitle="Technical Expertise" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-primary/5 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                      <span className="text-xs font-bold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
