import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { useState } from "react";

const projects = [
  {
    title: "Cropora: AI-Powered Farm Management Application",
    description: "Developed a robust, modular Android application in Kotlin to provide Indian farmers with real-time, AI-driven advisory services. Implemented an AI Diagnosis feature using image recognition to identify pests and diseases, paired with an intelligent chat for instant solutions. Integrated modules for real-time market prices, government subsidy information, and proactive weather alerts.",
    image: "/Cropora.jpeg",
    tags: ["Kotlin", "Android", "AI", "Image Recognition"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1tElhCdGGJ16ixKZaavk_VLcsKuJRCgsQ/view?usp=drivesdk",
    featured: true
  },
  {
    title: "Digital Nerds: E-Learning App",
    description: "Designed and developed a cross-platform mobile app using Flutter and Firebase to centralize IT-related study resources. Built secure user authentication, system-level PDF viewing, and a course search functionality. Implemented an integrated quiz module with real-time feedback.",
    image: "/Digital Nerds.png",
    tags: ["Flutter", "Firebase", "Cross-Platform", "UI/UX"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1Izdl8FVzXEZFd2ocfXTT2YP-EM2IF_f1/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: true
  },
  {
    title: "Portfolio App",
    description: "A personal portfolio app to showcase my projects, skills, and resume. Built to demonstrate UI and navigation skills.",
    image: "/Portfolio.jpg",
    tags: ["Flutter", "Portfolio"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1oiX-J98U3KLlN17FOstsXb0pxQF_tKf3/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  },
  {
    title: "Dice Roll Game App",
    description: "A simple and fun mobile game that simulates rolling dice. An exercise in random number generation and UI state management.",
    image: "dice.png",
    tags: ["Flutter", "Game"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1fil0OLwwx8PPHrweUkkUyRyixhF2Sav5/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  },
  {
    title: "Xylophone Instrument App",
    description: "A virtual xylophone app that plays different musical notes. Explores audio playback integration in mobile development.",
    image: "xylo.png",
    tags: ["Flutter", "Audio"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1J9Md8FW07pSxPJHgEbuAs_W_klJBuEOp/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  },
  {
    title: "Quizzler App",
    description: "A quiz application that tests user knowledge with a series of questions. Features a score tracker and progress bar.",
    image: "quiz.png",
    tags: ["Flutter", "Quiz"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1rh5L2suy4LD2mCz7Htq2Jsk9m92bnLzS/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  },
  {
    title: "BMI Calculator App",
    description: "A health app that calculates Body Mass Index based on user's height and weight. Features a gesture-controlled UI.",
    image: "bmi.png",
    tags: ["Flutter", "Health"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/13jYoUfnTndpNLdG8zkE-v-QZ8Z4jh71m/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  },
  {
    title: "Clima App",
    description: "A weather application that fetches and displays live weather data based on user's current location or a searched city.",
    image: "clima.png",
    tags: ["Flutter", "API", "Weather"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1hs60TyuKp9niGOP48eLwRzDXzPoUYEeT/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  },
  {
    title: "FlashChat App",
    description: "A real-time chat application using Firebase Cloud Firestore and Authentication. Features secure login and live-updating messages.",
    image: "flash.png",
    tags: ["Flutter", "Firebase", "Chat"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1tceZ0UAKOeeYYPGb5xbPeGe1-VLIYbA8/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  },
  {
    title: "Bitcoin Ticker App",
    description: "A cryptocurrency price tracker that shows the latest Bitcoin prices in various currencies by using a third-party API.",
    image: "bit.png",
    tags: ["Flutter", "API", "Crypto"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1yVSZxQLssm7qac-dcmJUxINAsDgZbvS9/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  },
  {
    title: "Todoey App",
    description: "A task management app for tracking daily to-do items. Explores local state management and data persistence.",
    image: "todoey.png",
    tags: ["Flutter", "State Management"],
    category: "mobile",
    demoUrl: "https://drive.google.com/file/d/1BU0tD0OvdSZ6ZWk5pXvis0Ouk1ekjZP9/view?usp=drivesdk",
    githubUrl: "#",
    stars: 0,
    featured: false
  }
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filterProjects = (category: string) => {
    if (category === "all") return projects;
    if (category === "featured") return projects.filter(p => p.featured);
    return projects.filter(p => p.category === category);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-4">Featured Projects</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Explore my portfolio of projects across web development, mobile apps, AI/ML, and DevOps
          </p>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>

            </TabsList>

            {["all", "featured","mobile"].map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filterProjects(category).map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Card className="overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-all duration-300">
                        <div className="relative h-48 overflow-hidden bg-gray-100">
                          <motion.div
                            animate={{
                              scale: hoveredIndex === index ? 1.1 : 1
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-full h-full"
                          >
                            <ImageWithFallback
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          {project.featured && (
                            <div className="absolute top-3 right-3 bg-yellow-500 text-white px-3 py-1 rounded-full flex items-center gap-1">
                              <Star className="w-3 h-3 fill-white" />
                              <span className="text-xs">Featured</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="mb-2 group-hover:text-blue-600 transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                          
                          <div className="flex items-center gap-2 text-gray-500 mb-4">
                            <Github className="w-4 h-4" />
                            <span className="text-sm">{project.stars} stars</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-2">
                        <Button variant="default" size="sm" className="w-full" asChild>
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Watch Demo
                          </a>
                        </Button>
                      </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
