'use client'

import React, { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { LetterCard } from "./LetterCard"
import Hero from "./Hero"

export const HeroParallax: React.FC = () => {
  const sentence2 = "everything u need in one place  "
  const sentence1 = "we present you  Coryfi"
  
  const ref = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  
  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }
  
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -100]),
    springConfig
  )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 300]),
    springConfig
  )
  
  return (
    <div
      ref={ref}
      className="min-h-[200vh] w-full py-5 overflow-hidden antialiased relative flex flex-col items-center justify-start [perspective:1000px] [transform-style:preserve-3d]"
      style={{
        maxWidth: '100vw',
        margin: '0 auto',
      }}
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <Hero />
        </div>
        
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="w-full overflow-visible"
        >
          <motion.div 
            className="flex flex-row mb-20 justify-center" // Increased bottom margin
            style={{ width: 'max-content', margin: '0 auto' }}
          >
            {sentence1.toUpperCase().split('').map((letter, index) => (
              <LetterCard
                key={index}
                letter={letter}
                translate={translateX}
                
              />
            ))}
          </motion.div>
          <motion.div 
            className="flex flex-row mb-10 justify-center"
            style={{ width: 'max-content', margin: '0 auto' }}
          >
            {sentence2.toUpperCase().split('').map((letter, index) => (
              <LetterCard
                key={index}
                letter={letter}
                translate={translateXReverse}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}