import React from 'react'
import {motion } from 'framer-motion'
import { HammerAnimation } from './HeroAnimation'
import { Button } from "../@/components/ui/button"
import { Input } from "../@/components/ui/input"
import { Label } from "../@/components/ui/label"
import { Footer } from './Footer'

function ClientForm() {
  return (
    <div>
         <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-start text-white p-4" // Changed justify-center to justify-start
      > 
        <div className="flex flex-col justify-center items-center space-y-10 mb-20"> {/* Reduced the spacing */}
          <HammerAnimation />
          <h2 className="text-4xl font-bold mb-2 text-center">We're Building Something Amazing!</h2> {/* Reduced mb */}
          <p className="text-xl mb-4 text-center">Pre-register now and get early access to exclusive features!</p> {/* Reduced mb */}
          <form  className="w-full max-w-md space-y-4">
            <div>
              <Label htmlFor="name" className="sr-only">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20"
              />
            </div>
            <div>
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20"
              />
            </div>
            <Button type="submit" className="w-full bg-white text-blue-600 hover:bg-blue-100">
              Pre-register Now
            </Button>
          </form>
          <div className="m-10">
            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Sign up with Google
            </Button>
          </div>
        </div>
        <div>
          <Footer/>
        </div>
      </motion.section>
    </div>
  )
}

export default ClientForm