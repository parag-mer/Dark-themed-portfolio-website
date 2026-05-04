import { motion } from "motion/react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { siteConfig } from "../../config/site";

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: "from-red-500 to-orange-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.location,
      href: null,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 w-full h-96 bg-blue-600/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to start a new project or just want to say hi? My inbox is always open.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                        <p className="text-lg font-semibold text-white break-all">{item.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href} className="block group">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            {/* Social Links in Contact */}
            <div className="pt-8">
              <h4 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6">Social Profiles</h4>
              <div className="flex flex-wrap gap-4">
                {siteConfig.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-blue-400/50 transition-all group"
                    >
                      <Icon size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{social.name}</span>
                      <ArrowUpRight size={14} className="text-gray-600 group-hover:text-blue-400 transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Call to Action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gray-900 border border-white/10 rounded-[2.5rem] p-10 md:p-12 text-center">
              <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Send size={40} className="text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{siteConfig.contact.cta}</h3>
              <p className="text-gray-400 mb-2 text-lg">
                I'm currently available for freelance work and full-time opportunities.
              </p>
              <p className="text-green-400 text-sm font-medium mb-10 animate-pulse">
                {siteConfig.contact.urgency}
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1 transform active:scale-95"
              >
                Start a Conversation
                <Send size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
