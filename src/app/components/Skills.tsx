import { motion } from "motion/react";
import { siteConfig } from "../../config/site";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical toolkit for building high-quality mobile and web applications.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {siteConfig.skills.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group relative ${category.highlight ? 'lg:scale-110 z-10' : ''}`}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${category.color} rounded-[2rem] blur opacity-10 group-hover:opacity-40 transition duration-500`}></div>
                <div className={`relative bg-gray-900/50 backdrop-blur-xl border ${category.highlight ? 'border-blue-500/50' : 'border-white/5'} rounded-[2rem] p-8 h-full hover:border-white/10 transition-all duration-500 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]`}>
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-15 transition-all group-hover:scale-110 duration-700">
                    <Icon size={80} />
                  </div>

                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-blue-400 transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium text-gray-300 border border-white/5 group-hover:border-blue-500/30 group-hover:text-white transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
