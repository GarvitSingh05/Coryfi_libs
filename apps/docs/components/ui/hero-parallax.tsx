"use client"

import React, { useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import Link from "next/link"
import { Moon, Sun, ChevronDown } from "lucide-react"
import { Button } from "docs/@/components/ui/button"
import { Switch } from "docs/@/components/ui/switch"

interface Product {
  title: string
  link: string
  thumbnail: string
}

export default function ModernHomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Simulating product data fetch
    const fetchedProducts = Array(15).fill(null).map((_, i) => ({
      title: `Product ${i + 1}`,
      link: `#product-${i + 1}`,
      thumbnail: `/placeholder.svg?height=600&width=600&text=Product+${i + 1}`
    }))
    setProducts(fetchedProducts)
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroParallax products={products} />
    </div>
  )
}

const Header = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: (value: boolean) => void }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DevStudio</h1>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline">Contact Us</Button>
        </div>
      </div>
    </header>
  )
}

const HeroParallax = ({ products }: { products: Product[] }) => {
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
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
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
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
        {[products.slice(0, 5), products.slice(5, 10), products.slice(10, 15)].map((row, i) => (
          <motion.div
            key={i}
            className={`flex ${i % 2 === 0 ? 'flex-row-reverse space-x-reverse' : 'flex-row'} space-x-20 mb-20`}
          >
            {row.map((product) => (
              <ProductCard
                key={product.title}
                product={product}
                translate={i % 2 === 0 ? translateX : translateXReverse}
              />
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const Hero = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-7xl font-bold text-gray-900 dark:text-white mb-8">
        The Ultimate <br /> Development Studio
      </h1>
      <p className="max-w-2xl text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
        We build beautiful products with the latest technologies and frameworks.
        Our team of passionate developers and designers love to create amazing experiences.
      </p>
      <Button size="lg" className="text-lg">
        Explore Our Work
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
  )
}

const ProductCard = ({
  product,
  translate,
}: {
  product: Product
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20, scale: 1.05 }}
      className="group relative h-96 w-72 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800"
    >
      <Link href={product.link} className="block h-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
        <div className="absolute bottom-4 left-4 right-4">
          <h2 className="text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {product.title}
          </h2>
          <p className="text-sm text-gray-300 mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Explore this amazing project
          </p>
        </div>
      </Link>
    </motion.div>
  )
}