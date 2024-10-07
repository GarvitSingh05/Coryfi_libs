"use client"

import React from "react"
import { motion, MotionValue } from "framer-motion"

interface LetterCardProps {
    letter: string
    translate: MotionValue<number>
  }
  
export const LetterCard: React.FC<LetterCardProps> = ({ letter, translate }) => {
    return (
      <motion.div
        style={{ x: translate }}
        whileHover={{ y: -20, scale: 1.05 }}
        className="group relative w-10 h-10 overflow-hidden rounded-xl flex items-center justify-center"
      >
        <motion.span
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {letter}
        </motion.span>
        <motion.div 
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    )
  }
  