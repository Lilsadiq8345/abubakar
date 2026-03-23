"use client";

import React, { cloneElement } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Eye, Code2, Server, Globe, Cpu, Database, Cloud } from "lucide-react";
import Link from "next/link";
import Typewriter from "./Typewriter";

const techStack = [
  { name: "React.js", icon: <Code2 className="text-blue-400" /> },
  { name: "Laravel", icon: <Database className="text-red-500" /> },
  { name: "Vue.js", icon: <Globe className="text-green-500" /> },
  { name: "Node.js", icon: <Server className="text-green-600" /> },
  { name: "Python", icon: <Cpu className="text-yellow-500" /> },
  { name: "AWS", icon: <Cloud className="text-orange-400" /> },
];

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 pt-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white/60 font-bold tracking-[0.3em] uppercase mb-4 text-sm"
            >
              Hello, I'm
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative inline-block mb-8"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-30" />
              
              <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl overflow-hidden group">
                <div className="flex gap-1.5 mb-6 justify-center lg:justify-start">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                </div>

                <motion.h1
                  className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight"
                >
                  Abubakar<br />
                  <span className="text-white/90">Abdulrazak</span>
                </motion.h1>
                
                <div className="h-8 md:h-10 mt-2">
                  <div className="text-xl md:text-2xl font-bold flex items-center justify-center lg:justify-start gap-2">
                    <span className="text-white/40">FullStack</span>
                    <span className="text-accent underline decoration-accent/20 underline-offset-8">
                      <Typewriter text="Developer" delay={1.2} />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-base md:text-lg text-blue-100/60 mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0"
            >
              Building scalable, innovative web applications with modern technologies. 
              Specialising in React.js, Next.js, Laravel, Vue.js, and cloud solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <Link
                href="mailto:abubakarsa242@gmail.com"
                className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3.5 rounded-xl font-bold shadow-xl hover:scale-105 transition-all text-sm group"
              >
                <Mail size={16} className="group-hover:rotate-12 transition-transform" />
                Get In Touch
              </Link>
              <button
                onClick={() => handleScroll("#portfolio")}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/10 px-6 py-3.5 rounded-xl font-bold hover:bg-white/20 transition-all hover:scale-105 text-sm"
              >
                <Eye size={16} />
                View Work
              </button>
              <Link
                href="https://github.com/Lilsadiq8345/"
                target="_blank"
                className="flex items-center gap-2 bg-slate-900 border border-white/10 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-slate-800 transition-all hover:scale-105 text-sm shadow-xl"
              >
                <Github size={16} />
                GitHub
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex-1 w-full max-w-xl lg:max-w-md"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + idx * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:bg-white/15 transition-all group cursor-default shadow-xl"
                >
                  <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                    {cloneElement(tech.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <span className="text-white/60 font-bold text-xs tracking-wider">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
