"use client"
import React, { useState, useEffect,useRef } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { Button } from "../@/components/ui/button"
import { Input } from "../@/components/ui/input"
import { Label } from "../@/components/ui/label"
export const Hero = () => {
    return (
      <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
        <motion.h1 
          className="text-4xl md:text-7xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img className="w-1/4" src="logo.png" alt="Coryfi Logo"/>
        </motion.h1>
        <motion.p 
          className="max-w-2xl text-2xl md:text-3xl mb-8 font-semibold font-sans text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A Networking Platform for Everyone
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="flex bg-blue-500 hover:bg-purple-700 text-white w-1/5 px-1 py-3 rounded-md text-xl font-sans transition-colors duration-200">
            Try Now
          </Button>
        </motion.div>
      </div>
    )
  }