"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export default function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
      delay: delay,
      onComplete: () => setDone(true),
    });
    return controls.stop;
  }, [count, text.length, delay]);

  return (
    <span className="relative">
      <motion.span>{displayText}</motion.span>
      {!done && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[2px] h-[1em] bg-accent ml-1 align-middle"
        />
      )}
    </span>
  );
}
