"use client"

import React from "react"
import Header from "../components/ui/Header"
import { HeroParallax } from "../components/HeroParallax"
import ClientForm from "../components/ClientForm"
import { Hero } from "../components/Hero"

export default function ModernHomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-purple-200 via-blue-500 to-blue-300 animate-gradient-x"></div>
      
      <Header />
      
      <main className="flex-grow">

        <div>
          <Hero/>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

          <section className="hidden md:block my-8 md:my-16">
            <HeroParallax />
          </section>
          
          <section className="my-8 sm:my-12 md:my-16">
            <ClientForm />
          </section>
        </div>
      </main>
    </div>
  )
}