'use client'

import React from "react"
import { motion } from "framer-motion"
import { Button } from "../@/components/ui/button"

export default function Hero() {
  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <motion.div 
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img 
            className="mb-6 w-32 sm:w-40 md:w-48 lg:w-56 max-w-full"
            src="/logo.png" 
            alt="Coryfi Logo"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <motion.h1 
            className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontSize: 'clamp(1.875rem, 5vw, 3.75rem)' }}
          >
            A Networking Platform for Everyone
          </motion.h1>
          <motion.p 
            className="mb-6 max-w-xl text-base text-gray-600 sm:text-lg md:text-xl lg:max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
          >
            Connect, collaborate, and grow your network with Coryfi's innovative platform designed for professionals of all levels.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex justify-center"
          >
             <button onClick={()=>window.location.href="http://16.171.24.158:3000/feed"} className="flex justify-center bg-blue-500 hover:bg-blue-600 text-white w-full md:w-1/6  px-1 py-3 rounded-xl  text-lg  font-sans font-semibold transition-colors duration-200">
      Try Now
    </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Abstract background shapes */}
      <motion.div 
        className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-blue-300 opacity-20 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute right-1/4 bottom-1/4 h-24 w-24 rounded-full bg-purple-300 opacity-20 blur-3xl sm:h-32 sm:w-32 md:h-48 md:w-48"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
    </div>
  )
}