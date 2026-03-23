"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeader({
  title,
  subtitle,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "text-sm font-bold uppercase tracking-[0.2em] mb-3",
            light ? "text-blue-200" : "text-primary"
          )}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-3xl md:text-5xl font-extrabold relative inline-block pb-4",
          light ? "text-white" : "text-slate-900"
        )}
      >
        {title}
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full" />
      </motion.h2>
    </div>
  );
}
