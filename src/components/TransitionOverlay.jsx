import { motion } from "framer-motion"

function TransitionOverlay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="text-4xl font-black tracking-[0.4em] text-white"
      >
        CLUBCUTZZ
      </motion.h1>
    </motion.div>
  )
}

export default TransitionOverlay