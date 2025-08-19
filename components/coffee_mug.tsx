"use client";
import { motion } from "framer-motion";

export function CoffeeMug() {
  return (
    <div className="flex items-center justify-center mb-8">
      <svg width="80" height="80" viewBox="0 0 100 100" className="text-black">
        {/* Mug */}
        <path
          d="M15 35h60v35c0 8.284-6.716 15-15 15H30c-8.284 0-15-6.716-15-15V35z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Handle */}
        <path
          d="M75 45h8c5.523 0 10 4.477 10 10s-4.477 10-10 10h-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Rim */}
        <line
          x1="25"
          y1="35"
          x2="65"
          y2="35"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Steam animation */}
        <g className="opacity-60">
          <motion.path
            d="M35 25c0-3 2-5 2-8s-2-5 2-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M45 25c0-3 2-5 2-8s-2-5 2-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{
              opacity: [0.8, 0.3, 0.8],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.path
            d="M55 25c0-3 2-5 2-8s-2-5 2-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            animate={{
              opacity: [0.5, 0.9, 0.5],
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </g>
      </svg>
    </div>
  );
}
