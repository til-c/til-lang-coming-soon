"use client";
import { motion } from "framer-motion";

export function PulsingLoader({
  size = 64, // overall width in px
  dotRadius = 6, // circle radius
  color = "currentColor",
}) {
  // positions for the three dots within the 80×24 viewBox
  const cx = [20, 40, 60];
  const delays = [0, 0.2, 0.4];

  return (
    <svg
      width={size}
      height={(size * 24) / 80}
      viewBox="0 0 80 24"
      role="img"
      aria-label="Loading"
      className="mx-auto"
    >
      {cx.map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={12}
          r={dotRadius}
          fill={color}
          // For SVG scale, set transform origin explicitly
          style={{ transformOrigin: "center", transformBox: "fill-box" as any }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delays[i],
          }}
        />
      ))}
    </svg>
  );
}
