"use client";

import React from "react";
import Header from "../components/ui/Header";
import { HeroParallax } from "../components/HeroParallax";
import ClientForm from "../components/ClientForm";
import Hero from "../components/Hero";

export default function ModernHomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="fixed inset-0 z-[-1] bg-gradient-to-r from-purple-300 via-blue-300 to-blue-400 animate-gradient-x"></div>

      <Header />

      <div className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* HeroParallax appears only on medium and large screens */}
          <section className="hidden md:block my-5 md:my-16">
            <HeroParallax />
          </section>

          {/* Hero appears only on small screens */}
          <section className="block md:hidden my-8 sm:my-12 md:my-16">
            <Hero />
          </section>

          <section className="my-8 sm:my-12 md:my-16">
            <ClientForm />
          </section>
        </div>
      </div>
    </div>
  );
}