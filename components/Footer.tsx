"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <Link href="/" className="text-xl font-black text-white">
              Abubakar<span className="text-primary">Abdulrazak</span>
            </Link>
            <p className="text-slate-400 text-sm mt-2 font-medium">
              &copy; {new Date().getFullYear()} Abubakar Abdulrazak. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {[
              { icon: <Twitter size={20} />, href: "https://twitter.com/lilsadiq2000" },
              { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/abubakarabdulrazak/" },
              { icon: <Github size={20} />, href: "https://github.com/Lilsadiq8345/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Social Link"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-slate-400 text-sm font-semibold hover:text-white transition-colors">
            <Link href="#home">Back to top</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
