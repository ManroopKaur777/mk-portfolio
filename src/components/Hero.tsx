import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, Code, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const titles = [
  "Mobile App Developer",
  "UI/UX Designer",
  "Flutter Developer",
  "Problem Solver",
  "Public Speaker"
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-gray-50">
      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
        animate={{ x: mousePosition.x * 0.02, y: mousePosition.y * 0.02, scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
        animate={{ x: mousePosition.x * -0.015, y: mousePosition.y * -0.015, scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"
        animate={{ x: mousePosition.x * 0.01, y: mousePosition.y * 0.01, scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      {/* Main container: 2:1 ratio */}
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10">
        {/* Left: Text content (2 parts) */}
        <motion.div
          className="flex-[2] text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-blue-50 rounded-full border border-blue-100"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600">Welcome to my portfolio</span>
          </motion.div>

          {/* Name */}
          <motion.h1 className="mb-4 text-4xl md:text-5xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Manroop Kaur
            </span>
          </motion.h1>

          {/* Animated title */}
          <div className="h-16 mb-6 flex items-center justify-center md:justify-start">
            <motion.h2
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 flex items-center gap-2 text-lg md:text-xl"
            >
              <Code className="w-6 h-6 text-blue-600" />
              {titles[titleIndex]}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p className="text-gray-600 max-w-xl mb-8 ">
            Passionate software developer combining hands-on mobile app development and UI/UX
            design with award-winning public speaking skills. Experienced in building user-friendly
            solutions with Flutter and Firebase, and a proven communicator recognized in
            national-level parliamentary debates. Eager to apply both technical and communication
            skills to build and present amazing digital solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex gap-4 flex-wrap mb-8">
            <Button variant="default" asChild className="group">
              <a href="#contact">
                Get in Touch
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/Manroop Kaur Resume 2025.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div className="flex gap-6">
            {[
              { Icon: Github, href: "https://github.com/ManroopKaur777" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/manroop-kaur-777mk" },
              { Icon: Mail, href: "mailto:manroopkaur2204@gmail.com" }
            ].map(({ Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg transition-all"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image (1 part) */}
        <motion.div
          className="flex-[1] flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/public/pp.jpeg"
            alt="Manroop Kaur"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-8 border-white shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
