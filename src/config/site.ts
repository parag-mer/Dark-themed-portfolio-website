import { Github, Linkedin, Mail, Smartphone, Code, Database, Wrench } from "lucide-react";
import WallspaceImg from "../assets/wallspaceUI.jpg";
import ZallowImg from "../assets/zallowMockUI.png";
import GrublrImg from "../assets/grublrMockUI.png";


export const siteConfig = {
  name: "Parag Mer",
  role: "React Native Developer",
  location: "Jamnagar, Gujarat, India",
  email: "paragmer2001@gmail.com",
  resume: 'https://drive.google.com/file/d/13qrhHM48wiN9BXmyhCxiUtrlbP3jSHCw/view?usp=sharing',
  about: {
    bio: "Mobile app developer with ~3 years of experience building scalable, high-performance applications using React Native and TypeScript.",
    highlights: [
      "3+ years building production-ready mobile apps",
      "Obsessed with performance optimization & fluid UI/UX",
      "Expert in clean, scalable React Native architecture",
    ],
    certifications: [
      { name: "Meta React Native Specialization", color: "blue" },
      { name: "Meta Frontend Developer", color: "purple" },
    ],
  },
  socials: [
    {
      name: "GitHub",
      href: "https://github.com/parag-mer",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/parag-mer-2b1852213",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:paragmer2001@gmail.com",
      icon: Mail,
    },
  ],
  projects: [
    {
      title: "WallSpace",
      subtitle: "Wallpaper App",
      status: "🚀 Deployed on Google Play (Closed Testing)",
      description: "High-performance wallpaper app with modern UI and smooth animations",
      features: [
        "Search, categories, favorites",
        "Full-screen preview and download",
        "Pexels API integration with caching",
        "Optimized performance using Redux Toolkit & React Query",
      ],
      tags: ["React Native", "TypeScript", "Redux Toolkit", "React Query"],
      featured: true,
      image: WallspaceImg,
      links: {
        github: "https://github.com/parag-mer/wallspace",
      },
    },
    {
      title: "Zallow",
      subtitle: "AI-Powered Travel Planner",
      // status: "🚀 Deployed on Google Play (Closed Testing)",
      description: "AI-powered travel itinerary planner with intelligent recommendations",
      features: [
        "Filter-based itinerary generation (budget, mood, duration)",
        "Editable itinerary system",
        "Smooth onboarding and authentication",
        "Clean and intuitive UI/UX",
      ],
      tags: ["React Native", "TypeScript", "Node.js", "PostgreSQL"],
      featured: false,
      image: ZallowImg,
    },
    {
      title: "Grublr",
      subtitle: "Food Ordering App",
      // status: "🚀 Deployed on Google Play (Closed Testing)",
      description: "Food ordering app with location-based restaurant discovery",
      features: [
        "Google Maps integration",
        "Restaurant listing with filters",
        "Favorites and ratings",
        "Performance improvements and UI fixes",
      ],
      tags: ["React Native", "TypeScript", "Google APIs", "Firebase"],
      featured: false,
      image: GrublrImg,
    },
  ],
  skills: [
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "TypeScript", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      highlight: true,
    },
    {
      title: "State Management",
      icon: Code,
      skills: ["Redux Toolkit", "React Query", "Context API"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js", "PostgreSQL", "Firebase"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Tools & APIs",
      icon: Wrench,
      skills: ["Google APIs", "Firebase", "Git", "REST APIs"],
      color: "from-orange-500 to-red-500",
    },
  ],
  experience: [
    {
      title: "Associate Software Engineer",
      company: "Radixweb",
      period: "Aug 2023 – Present",
      responsibilities: [
        "Built and optimized scalable React Native apps used in production",
        "Improved app launch time by ~25% through performance profiling",
        "Integrated complex Google Maps & Firebase features with 99.9% crash-free sessions",
        "Reduced development cycle time by 30% using AI-driven workflows",
      ],
    },
    {
      title: "Trainee Software Engineer",
      company: "Radixweb",
      period: "Feb 2023 – Jul 2023",
      responsibilities: [
        "Developed and delivered 5+ high-fidelity mobile app prototypes",
        "Mastered React, TypeScript, and modern UI architectures",
        "Contributed to core frontend components used in high-traffic client projects",
      ],
    },
  ],
  contact: {
    cta: "Let's build something impactful",
    urgency: "Currently open to freelance & full-time roles",
  },
  metadata: {
    title: "Parag Mer | React Native Developer Portfolio",
    description: "Professional portfolio of Parag Mer, a React Native developer specializing in high-performance mobile applications.",
    keywords: ["React Native", "TypeScript", "Mobile App Development", "Parag Mer", "Portfolio"],
  },
};
