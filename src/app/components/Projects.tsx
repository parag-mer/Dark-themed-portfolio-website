import { motion } from "motion/react";
import { ExternalLink, Github, Star, Play } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";
import { siteConfig } from "../../config/site";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my best work, focusing on performance, accessibility, and exceptional user experience.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="space-y-40">
          {siteConfig.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-16 lg:gap-24 items-center`}
            >
              {/* Project Image/Mockup */}
              <div className="flex-1 w-full flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-0 group-hover:opacity-100"></div>
                  <PhoneMockup imageUrl={project.image} delay={0.2} />
                </div>
              </div>

              {/* Project Info */}
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  {project.featured && (
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                      <Star size={14} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-xs font-bold text-yellow-500 uppercase tracking-wider">Featured Project</span>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
                        {project.subtitle}
                      </p>
                      {project.status && (
                        <span className="text-green-400 text-sm font-medium flex items-center gap-1.5 animate-pulse">
                          {project.status}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-lg text-gray-400 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 group/item">
                      <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mt-0.5 shrink-0 group-hover/item:border-blue-400 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.5)]"></div>
                      </div>
                      <span className="text-sm text-gray-300 leading-snug group-hover/item:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-medium text-gray-300 hover:bg-white/10 hover:border-blue-400/30 hover:text-blue-300 transition-all cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.links && <div className="flex flex-wrap gap-4 pt-6">
                  {/* <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-white text-black rounded-xl font-bold hover:bg-gray-200 transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] active:scale-95"
                  >
                    View Case Study
                    <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a> */}
                  {project.links.playStore && (
                    <a
                      href={project.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2 group shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] active:scale-95"
                    >
                      <Play size={20} className="fill-white" />
                      Play Store
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-white/5 border border-gray-600 rounded-xl font-bold text-gray-300 hover:bg-white/10 hover:border-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group active:scale-95"
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                  )}
                </div>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
