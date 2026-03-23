"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { CheckCircle2, Award, Users, Rocket } from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "5+", icon: <Award size={20} /> },
  { label: "Projects Completed", value: "10+", icon: <Rocket size={20} /> },
  { label: "Users Served", value: "20+", icon: <Users size={20} /> },
];

const expertise = [
  { label: "FullStack Development", description: "End-to-end web solutions" },
  { label: "Mobile Applications", description: "iOS & Android development" },
  { label: "Cloud Solutions", description: "AWS & Docker optimization" },
  { label: "FinTech Applications", description: "Secure financial systems" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="FullStack Developer"
            subtitle="About Me"
            className="text-center mb-12"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-center"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Passionate <span className="text-primary italic">FullStack</span> Developer <br />
              Creating Digital Excellence
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              <p>
                A highly motivated Software Engineer with over 5 years of experience in React.js, Next.js, Laravel,
                Vue.js, and Cloud Solutions, specializing in building scalable, high-performance web applications.
              </p>
              <p>
                Proven track record of delivering end-to-end solutions—from responsive UIs to robust
                backend APIs and optimized databases. Currently contributing to teams at Circuit Pointe and Carbonetrix.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
              {expertise.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all group border border-slate-100"
                >
                  <div className="bg-white p-3 rounded-xl shadow-sm group-hover:text-primary transition-colors">
                    <CheckCircle2 size={24} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-base">{item.label}</p>
                    <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-12 mt-16 border-t border-slate-100 pt-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center group cursor-default">
                  <p className="text-4xl font-black text-slate-900 group-hover:text-primary transition-colors">
                    {stat.value}
                  </p>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mt-3">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
