
"use client"
import React from "react"
import Header from "../components/ui/Header"
import { HeroParallax } from "../components/HeroParallax"

import ClientForm from "../components/ClientForm"




export default function ModernHomePage() {




  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY
  //     const windowHeight = window.innerHeight
  //     const documentHeight = document.documentElement.scrollHeight

  //     if (scrollPosition + windowHeight >= documentHeight - 200) {
  //     }
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   // Handle form submission logic here
  // }

  return (
    <div>
      <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-purple-200 via-blue-500 to-blue-300 animate-gradient-x"></div>
      <Header />
      <HeroParallax/>
      

      <ClientForm/>
 
    </div>
  )
}



