"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ChevronDown, ChevronUp, Menu } from 'lucide-react'
import Header from '../../components/ui/Header'

const tiers = [
  {
    name: "Free Tier",
    price: "0",
    features: [
      "Basic Access to The Entire Platform",
      "Unlocks All Generic Features",
      "Limited Access to Recognition Path Searches",
      "Recognition System Works at Minimal Potential",
      "Limited Access to Flash Networks",
      "Limited Access to Skill Swap, Skill Test and Endorsement System",
      "No profile boots",
      "Limited Access to Premium Visualization features",
    ],
    comingSoon: false,
  },
  {
    name: "Tier 1",
    price: "229",
    features: [
      "Unlocks Unlimited Single Recognition Path Searches",
      "Fully utilise collaborative evaluation",
      "2 Step Recognition System works at higher potential",
      "Unlocks Full Access to Flash Networks",
      "Unlocks Full Access Skill Swap feature with Advanced Skill Test and Endorsement System",
      "Profile boosts, post boosts included Engagement Boosts in Flash Events",
      "Full Access to all premium network visualization features",
      "Unlock basic AI Features and Support to enhance user experience",
    ],
    comingSoon: false,
  },
  {
    name: "Tier 2",
    price: "279",
    features: [
      "Everything in Tier 1",
      "Unlocks Modes Feature – Can select at max 3 out of 8 modes to create custom combinations",
      "Multiple Recognition Path Search Results at a much greater depth and accuracy",
      "Unlocks History of Approvals and Rejections from users to rank and compare recognition paths",
      "Stronger Profile and Post Boosts, Stronger engagement boosts in Flash Events",
      "Gain access to more premium AI based features",
      "Unlock Ad Revenue Sharing Mechanisms, Earn Side Income if your Post Engagement is High",
    ],
    comingSoon: true,
  },
  {
    name: "Tier 3",
    price: "399",
    features: [
      "Everything in Tier 2",
      "Unlocks Custom Themes, and Themes Marketplace",
      "Create and Sell your own custom themes",
      "Buy Platform Themes or Themes from other third-party creators",
      "Modes Feature Upgrade – Can select any number of modes out of 8 and create custom combinations",
      "Full Access to Unlimited Multiple Recognition Path Searches at the highest depth and accuracy possible",
      "Receive Highest Priority in the Collaborative Evaluation System",
      "Enhanced Approval/Rejection History",
      "Strongest profile and post boosts, Higher Rankings Globally",
      "Specially Dedicated Customer Support and Service",
      "Complementary Access to any one Coryfi Technologies SDK/API",
      "Early Access to Premium Features, Beta Versions of New Features",
    ],
    comingSoon: true,
  },
]

const comparisonFeatures = [
  "Access to Platform",
  "Recognition Path Searches",
  "Flash Networks",
  "Skill Swap & Endorsement",
  "Profile Boosts",
  "AI Features",
  "Custom Themes",
  "Revenue Sharing",
  "Priority Support",
]

export default function EnhancedPricingPage() {
  const [hoveredTier, setHoveredTier] = useState<number | null>(null)
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([])
  const [selectedTier, setSelectedTier] = useState<number | null>(null)
  const [gradientAngle, setGradientAngle] = useState(0)
  

  const toggleFeatures = (index: number) => {
    setExpandedFeatures(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGradientAngle((prev) => (prev + 1) % 360)
    }, 50)

    return () => clearInterval(intervalId)
  }, [])

  const getGradientStyle = () => {
    const color1 = `hsl(210, 100%, 95%)`
    const color2 = `hsl(220, 100%, 90%)`
    const color3 = `hsl(230, 100%, 95%)`
    const color4 = `hsl(240, 100%, 90%)`

    return {
      background: `
        linear-gradient(
          ${gradientAngle}deg,
          ${color1},
          ${color2},
          ${color3},
          ${color4}
        )
      `,
      backgroundSize: '400% 400%',
      animation: 'gradientAnimation 15s ease infinite',
    }
  }

  return (
    <div className="min-h-screen text-gray-800 relative overflow-hidden transition-all duration-1000 ease-in-out">
        <Header/>

      <main className="pt-16" style={getGradientStyle()}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1 
            className="text-5xl font-extrabold text-center mb-6 text-gray-800"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
              Our Subscription Tiers
          </motion.h1>
          <motion.p 
            className="text-xl text-center mb-16 text-gray-700"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Choose the plan that's right for you
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                className={`bg-white/50 backdrop-blur-lg rounded-lg overflow-hidden shadow-xl flex flex-col ${selectedTier === index ? 'ring-4 ring-blue-400' : ''}`}
                whileHover={{ scale: 1.05, zIndex: 1 }}
                onHoverStart={() => setHoveredTier(index)}
                onHoverEnd={() => setHoveredTier(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6 flex-grow relative">
                  {tier.comingSoon && (
                    <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                      Coming Soon
                    </div>
                  )}
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{tier.name}</h2>
                  <p className="text-4xl font-bold mb-6 text-gray-800">₹{tier.price}<span className="text-lg">/month</span></p>
                  <ul className="space-y-3">
                    {tier.features.slice(0, 4).map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <Check className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  {tier.features.length > 4 && (
                    <motion.button
                      className="mt-4 text-blue-600 hover:text-blue-800 transition-colors duration-200 flex items-center"
                      onClick={() => toggleFeatures(index)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {expandedFeatures.includes(index) ? (
                        <>
                          <ChevronUp className="h-5 w-5 mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="h-5 w-5 mr-1" />
                          Show More
                        </>
                      )}
                    </motion.button>
                  )}
                  <AnimatePresence>
                    {expandedFeatures.includes(index) && (
                      <motion.ul
                        className="space-y-3 mt-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {tier.features.slice(4).map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex + 4}
                            className="flex items-start"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: featureIndex * 0.1 }}
                          >
                            <Check className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
                <div className="p-6 bg-blue-100 mt-auto">
                  <motion.button
                    className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${selectedTier === index ? 'ring-2 ring-offset-2 ring-blue-400' : ''} ${tier.comingSoon ? 'opacity-50 cursor-not-allowed' : ''}`}
                    whileHover={tier.comingSoon ? {} : { y: -5 }}
                    whileTap={tier.comingSoon ? {} : { scale: 0.95 }}
                    onClick={() => !tier.comingSoon && setSelectedTier(index)}
                    disabled={tier.comingSoon}
                  >
                    {tier.comingSoon ? 'Coming Soon' : 'Choose Plan'}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Compare All Features</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-blue-200">
                    <th className="py-4 px-6 text-gray-800">Feature</th>
                    {tiers.map((tier) => (
                      <th key={tier.name} className="py-4 px-6 text-gray-800">
                        {tier.name}
                        {tier.comingSoon && (
                          <span className="ml-2 text-xs font-normal text-blue-500">(Coming Soon)</span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, index) => (
                    <motion.tr 
                      key={index} 
                      className="border-b border-blue-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <td className="py-4 px-6 text-gray-700">{feature}</td>
                      {tiers.map((tier, tierIndex) => (
                        <td key={`${tier.name}-${feature}`} className="py-4 px-6">
                          {tierIndex >= Math.floor(index / 3) ? (
                            <Check className="h-6 w-6 text-blue-600" />
                          ) : (
                            <X className="h-6 w-6 text-red-400" />
                          )}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </main>
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  )
}