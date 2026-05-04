import { motion } from "motion/react";
import { ExternalLink, Github, Star } from "lucide-react";
import { PhoneMockup } from "./PhoneMockup";

export function Projects() {
  const projects = [
    {
      title: "WallSpace",
      subtitle: "Wallpaper App",
      description: "High-performance wallpaper app with modern UI and smooth animations",
      features: [
        "Search, categories, favorites",
        "Full-screen preview and download",
        "Pexels API integration with caching",
        "Optimized performance using Redux Toolkit & React Query",
      ],
      tags: ["React Native", "TypeScript", "Redux Toolkit", "React Query"],
      featured: true,
      image: "https://images.unsplash.com/photo-1665661897184-e61ee20dec8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjB3YWxscGFwZXIlMjBkYXJrfGVufDF8fHx8MTc3Nzg4MDYyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Zallow",
      subtitle: "AI-Powered Travel Planner",
      description: "AI-powered travel itinerary planner with intelligent recommendations",
      features: [
        "Filter-based itinerary generation (budget, mood, duration)",
        "Editable itinerary system",
        "Smooth onboarding and authentication",
        "Clean and intuitive UI/UX",
      ],
      tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
      featured: false,
      image: "https://images.unsplash.com/photo-1761292630740-d821dc203975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc3ODgwNjI3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Grublr",
      subtitle: "Food Ordering App",
      description: "Food ordering app with location-based restaurant discovery",
      features: [
        "Google Maps integration",
        "Restaurant listing with filters",
        "Favorites and ratings",
        "Performance improvements and UI fixes",
      ],
      tags: ["React Native", "TypeScript", "Google APIs", "Firebase"],
      featured: false,
      image: "https://images.unsplash.com/photo-1651804805680-3565ef7807f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBkYXJrfGVufDF8fHx8MTc3Nzg4MDYyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg">
            Mobile applications built with modern technologies
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <PhoneMockup imageUrl={project.image} delay={0.2} />
              </div>

              <div className="flex-1 space-y-6">
                {project.featured && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="text-sm text-blue-300">Featured Project</span>
                  </div>
                )}

                <div>
                  <h3 className="text-3xl md:text-4xl mb-2 text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-xl text-blue-400 mb-4">{project.subtitle}</p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center gap-2">
                    <ExternalLink size={18} />
                    View Project
                  </button>
                  <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                    <Github size={18} />
                    GitHub
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
