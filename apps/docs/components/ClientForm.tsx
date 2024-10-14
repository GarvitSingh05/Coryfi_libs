"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { HammerAnimation } from './HeroAnimation'
import { Button } from "../@/components/ui/button"
import { Input } from "../@/components/ui/input"
import { Label } from "../@/components/ui/label"
import { Footer } from './Footer'
import axios from "axios"
import { CheckCircle, XCircle } from 'lucide-react'

function ClientForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [registered, setRegistered] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    try {
      
      const response = await axios.post(process.env.NEXT_PUBLIC_REGISTER_URL || "", {
        name,
        email
      })
      console.log("here is the url",process.env.NEXT_PUBLIC_REGISTER_URL)
      if (response.status === 200) {
        setRegistered(true)
        setName("")
        setEmail("")
      } else {
        throw new Error("Registration failed")
      }
    } catch (error) {
      console.error("Registration failed:", error)
      setError("Registration failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-start text-white p-4"
      > 
        <div className="flex flex-col justify-center items-center space-y-10 mb-20">
          <HammerAnimation />
          <h2 className="text-4xl font-bold mb-2 text-center">We're Building Something Amazing!</h2>
          <p className="text-xl mb-4 text-center">Pre-register now and get early access to exclusive features!</p>
          <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name" className="sr-only">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={registered}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={registered}
              />
            </div>
            <motion.div
              animate={registered ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.5 }}
            >
              <Button 
                type="submit" 
                className={`w-full ${
                  registered 
                    ? 'bg-gradient-to-r from-white to-blue-500 hover:from-slate-300 hover:to-blue-600 text-white shadow-lg' 
                    : error
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-white text-blue-600 hover:bg-blue-100'
                } transition-all duration-300 ease-in-out transform hover:scale-105`}
                disabled={isSubmitting || registered}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : registered ? (
                  <span className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Registered
                  </span>
                ) : error ? (
                  <span className="flex items-center justify-center">
                    <XCircle className="mr-2 h-5 w-5" />
                    Registration Failed
                  </span>
                ) : (
                  'Pre-register Now'
                )}
              </Button>
            </motion.div>
          </form>
          {error && (
            <p className="text-red-500 mt-2">{error}</p>
          )}
          <div className="m-10">
            <Button variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              Sign up with Google
            </Button>
          </div>
        </div>
        <div>
          <div>

          </div>
          <Footer />
        </div>
      </motion.section>
    </div>
  )
}

export default ClientForm