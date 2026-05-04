import { motion } from "motion/react";
import { Code, Database, Wrench, Smartphone } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Smartphone,
      title: "Mobile",
      skills: ["React Native", "TypeScript", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Code,
      title: "State Management",
      skills: ["Redux Toolkit", "React Query", "Context API"],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Node.js", "Express.js", "PostgreSQL", "Firebase"],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Wrench,
      title: "Tools & APIs",
      skills: ["Google APIs", "Firebase", "Git", "REST APIs"],
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Technologies I work with to build amazing mobile experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center mb-4`}
                >
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl mb-4 text-gray-200">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-2 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/5"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
