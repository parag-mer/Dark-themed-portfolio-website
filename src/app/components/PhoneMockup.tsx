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
      <div className="relative w-[280px] h-[560px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-800 rounded-b-2xl z-10"></div>
        <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
          <img
            src={imageUrl}
            alt="App screenshot"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}
