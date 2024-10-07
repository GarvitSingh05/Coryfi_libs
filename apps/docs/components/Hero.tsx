"use client"
import React from "react"
import { motion } from "framer-motion"
import { Button } from "../@/components/ui/button"

export const Hero = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-16 md:py-32 px-4 sm:px-6 lg:px-8 w-full left-0 top-0">
      <motion.h1 
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5" src="logo.png" alt="Coryfi Logo"/>
      </motion.h1>
      <motion.p 
        className="max-w-2xl text-xl sm:text-2xl md:text-3xl mb-8 font-semibold font-sans text-black"
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
        <Button size="lg" className="flex bg-blue-500 hover:bg-purple-700 text-white w-full  sm:w-3/5 md:w-2/5 lg:w-1/5 px-1 py-3 rounded-xl md:rounded-none text-lg sm:text-xl font-sans transition-colors duration-200">
          Try Now
        </Button>
      </motion.div>
    </div>
  )
}