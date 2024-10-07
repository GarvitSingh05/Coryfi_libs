"use client"
import React, { useState, useEffect,useRef } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { LetterCard } from "./LetterCard"
import { Hero } from "./Hero"

export const HeroParallax: React.FC = () => {

interface Product {
    title: string
    link: string
    thumbnail: string
  }
  const sentence2="the everything u need in one place  "
  const sentence1="we present you  Coryfi"
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start start", "end start"],
    })
  
    const springConfig = { stiffness: 300, damping: 30, bounce: 100 }
  
    const translateX = useSpring(
      useTransform(scrollYProgress, [0, 1], [0, 1000]), // Moves from 500 to 0 (center)
      springConfig
    )
    const translateXReverse = useSpring(
      useTransform(scrollYProgress, [0, 1], [0,100]), // Moves from -500 to 0 (center from the opposite side)
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
        className="h-[200vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      >
        <Hero />
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
        >
          <motion.div className="flex flex-row mb-20">
            {sentence1.toUpperCase().split('').map((letter, index) => (
              <LetterCard
                key={index}
                letter={letter}
                translate={translateX}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-20">
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
    )
  }
  