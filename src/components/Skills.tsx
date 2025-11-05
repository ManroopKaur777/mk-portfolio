import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Code2, Database, Globe, Smartphone, Brain, Cloud } from "lucide-react";
import { useState } from "react";
import { Progress } from "./ui/progress";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 100 },
      { name: "Dart", level: 100 },
      { name: "Kotlin", level: 88 },
      { name: "Firebase", level: 90 },
      { name: "Android Studio", level: 100 },
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Frontend & Web",
    icon: Globe,
    skills: [
      { name: "JavaScript", level: 100 },
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "UI/UX Design", level: 95 },
      { name: "CSS Flexbox", level: 100 },
      { name: "XML", level: 88 },
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Backend & Databases",
    icon: Database,
    skills: [
      { name: "Python", level: 100 },
      { name: "Java", level: 100 },
      { name: "SQL", level: 100 },
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Tools & Platforms",
    icon: Code2,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Visual Studio Code", level: 95 },
      { name: "Figma", level: 85 },
    ],
    color: "from-yellow-500 to-orange-500"
  },
  {
    title: "Core Languages",
    icon: Brain,
    skills: [
      { name: "C++", level: 100 },
      { name: "C", level: 100 },
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Professional Skills",
    icon: Cloud,
    skills: [
      { name: "Public Speaking", level: 100 },
      { name: "Problem Solving", level: 90 },
      { name: "Agile Collaboration", level: 85 },
      { name: "Time Management", level: 95 },
    ],
    color: "from-orange-500 to-red-500"
  }
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section id="skills" className="py-20 px-6 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-4">Skills & Technologies</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Proficiency levels across various technologies and frameworks
          </p>

          {/* Desktop view - Grid */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group">
                  <div className={`flex items-center gap-3 mb-6 p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="group-hover:text-blue-600 transition-colors">{category.title}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-700">{skill.name}</span>
                          <span className="text-xs text-gray-500">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile/Tablet view - Tabs */}
          <div className="lg:hidden">
            <div className="flex overflow-x-auto gap-2 mb-6 pb-2">
              {skillCategories.map((category, index) => (
                <button
                  key={category.title}
                  onClick={() => setSelectedCategory(index)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                    selectedCategory === index
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="space-y-4">
                  {skillCategories[selectedCategory].skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-700">{skill.name}</span>
                        <span className="text-xs text-gray-500">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
