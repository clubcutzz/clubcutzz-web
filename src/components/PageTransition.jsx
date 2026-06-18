import { motion } from "framer-motion"

function PageTransition() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.h1
        className="text-4xl font-black tracking-[0.35em] text-white md:text-6xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -8] }}
        transition={{
          duration: 1.4,
          times: [0, 0.25, 0.75, 1],
          ease: "easeInOut",
        }}
      >
        CLUBCUTZZ
      </motion.h1>
    </motion.div>
  )
}

export default PageTransition