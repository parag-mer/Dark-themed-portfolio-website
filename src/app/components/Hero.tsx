import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Download } from "lucide-react";
import { siteConfig } from "../../config/site";

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20 pb-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-transparent"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400/20 rounded-full blur-xl"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25, 0],
              y: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 border border-blue-400/30 rounded-full bg-blue-400/10 backdrop-blur-md"
          >
            <span className="text-sm font-medium text-blue-300">Available for freelance & full-time opportunities</span>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-8xl lg:text-9xl mb-6 pb-4 font-bold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% center", "200% center"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          >
            {siteConfig.name}
          </motion.h1>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {siteConfig.role}
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {siteConfig.about.bio}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transform hover:-translate-y-1 active:scale-95"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 active:scale-95"
            >
              Contact Me
            </button>
            <a
              href={siteConfig.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-1 active:scale-95 flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {siteConfig.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-blue-400/50 transition-all duration-300 group"
                >
                  <Icon size={20} className="group-hover:text-blue-400 transition-colors" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-400/50"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
