import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { siteConfig } from "../../config/site";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-purple-600 to-transparent md:-translate-x-1/2 opacity-30"></div>

          <div className="space-y-12 md:space-y-24">
            {siteConfig.experience.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Desktop timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 md:-translate-x-1/2 z-20 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

                <div className="flex-1 w-full md:w-1/2 pl-12 md:pl-0">
                  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group ${
                    index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Briefcase size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                        <p className="text-lg font-medium text-blue-400">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 bg-white/5 w-fit px-3 py-1 rounded-full border border-white/5">
                      <Calendar size={14} />
                      {exp.period}
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start gap-3 group/item">
                          <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5 shrink-0 group-hover/item:border-blue-400 transition-colors">
                            <div className="w-1 h-1 rounded-full bg-blue-400"></div>
                          </div>
                          <span className="text-gray-400 group-hover/item:text-gray-300 transition-colors">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
