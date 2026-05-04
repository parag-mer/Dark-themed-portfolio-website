import { motion } from "motion/react";

interface PhoneMockupProps {
  imageUrl: string;
  delay?: number;
}

export function PhoneMockup({ imageUrl, delay = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative"
    >
      <motion.div
        whileHover={{ rotateY: -15, rotateX: 5, rotateZ: -8, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        style={{ perspective: 1000 }}
        className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-8 border-gray-800 transform-gpu group"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-20"></div>
        <div className="absolute top-2 right-8 w-2 h-2 rounded-full bg-gray-800 z-20"></div>
        
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={imageUrl}
            alt="App screenshot"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        </div>

        {/* Glossy reflection */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 via-transparent to-transparent rounded-[2.5rem] pointer-events-none z-20 opacity-30 group-hover:opacity-50 transition-opacity"></div>
        
        {/* Glow effect on hover */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      </motion.div>
    </motion.div>
  );
}
