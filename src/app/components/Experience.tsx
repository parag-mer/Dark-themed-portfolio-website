import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Radixweb",
      period: "Aug 2023 – Present",
      responsibilities: [
        "Built scalable mobile apps using React Native",
        "Integrated APIs (Google Maps, Firebase)",
        "Improved performance and resolved production issues",
        "Used AI tools to enhance development speed",
      ],
    },
    {
      title: "Trainee Software Engineer",
      company: "Radixweb",
      period: "Feb 2023 – Jul 2023",
      responsibilities: [
        "Worked on multiple demos and frontend tasks",
        "Built strong foundation in React, TypeScript, and UI development",
        "Collaborated with senior developers on client projects",
      ],
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">
            My professional journey in software development
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20"
              >
                <div className="absolute left-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                  <Briefcase size={28} />
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-2xl mb-2 text-gray-100">{exp.title}</h3>
                    <p className="text-lg text-blue-400 mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.period}</p>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp) => (
                      <li key={resp} className="flex items-start gap-3 text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
