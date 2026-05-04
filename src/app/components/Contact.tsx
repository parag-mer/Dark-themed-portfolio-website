import { motion } from "motion/react";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "paragmer2001@gmail.com",
      href: "mailto:paragmer2001@gmail.com",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/parag-mer",
      href: "https://github.com/parag-mer",
      color: "from-gray-500 to-gray-700",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/parag-mer-2b1852213",
      href: "https://linkedin.com/in/parag-mer-2b1852213",
      color: "from-blue-600 to-blue-800",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jamnagar, Gujarat, India",
      href: null,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's discuss your next mobile app project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 h-full"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} bg-opacity-20 flex items-center justify-center mb-4`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg mb-2 text-gray-200">{link.label}</h3>
                <p className="text-gray-400 break-words">{link.value}</p>
              </motion.div>
            );

            return link.href ? (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={link.label}>{content}</div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:paragmer2001@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
