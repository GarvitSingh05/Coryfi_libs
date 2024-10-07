import { motion } from "framer-motion"
export const HammerAnimation = () => {
    return (
      <motion.div
        className="w-24 h-24 mb-8"
        initial={{ rotate: -45 }}
        animate={{ rotate: 0 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 12l-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 010-3L12 9" />
          <path d="M17.64 15L22 10.64" />
          <path d="M20.91 11.7l-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 00-3.94-1.64H9l.92.82A6.18 6.18 0 0112 8.4v1.56l2 2h2.47l2.26 1.91" />
        </svg>
      </motion.div>
    )
  }