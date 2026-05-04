import { motion } from "motion/react";
import { Award } from "lucide-react";
import { siteConfig } from "../../config/site";

export function About() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.08] transition-all duration-500 group">
                <div className="space-y-6">
                  <p className="text-xl text-gray-200 leading-relaxed font-light">
                    {siteConfig.about.bio}
                  </p>
                  <ul className="space-y-3">
                    {siteConfig.about.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/[0.08] transition-all duration-500">
                <h3 className="text-2xl font-semibold mb-6 text-gray-100 flex items-center gap-3">
                  <Award className="text-blue-400" />
                  Certifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {siteConfig.about.certifications.map((cert) => (
                    <div 
                      key={cert.name}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-400/30 transition-all group"
                    >
                      <div className={`w-2 h-2 rounded-full ${cert.color === 'blue' ? 'bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]' : 'bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.5)]'}`}></div>
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{cert.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative h-full bg-gray-900 rounded-3xl border border-white/10 p-8 flex flex-col justify-center items-center text-center space-y-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="text-5xl font-bold text-white mb-2">3+</div>
                <div className="text-blue-400 font-medium uppercase tracking-widest text-sm">Years Experience</div>
                <p className="text-gray-500 text-sm">Focusing on high-performance React Native apps</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
