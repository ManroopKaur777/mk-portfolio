import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Users, Award, Sparkles,Mic, Mic2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const activities = [
  {
    title: "National Youth Parliament (Third Prize, National Level)",
    organization: "16th National Youth Parliament Competition",
    date: "Feb 2024",
    description:
      "Achieved Third Prize at the national level, competing against teams from across the country.",
    images: [
      "/NYP/0.jpg",
      "/NYP/1.JPG",
      "/NYP/2.jpg",
      "/NYP/3.jpg",
      "/NYP/4.jpg",
      "/NYP/5.jpg"
    ],
    icon: Trophy,
    tags: ["National Level", "Public Speaking", "Parliamentary Debate"],
    color: "bg-yellow-500",
  },
  {
    title: '"DAV Best Parliamentarian" Award',
    organization: "16th National Youth Parliament",
    date: "Feb 2024",
    description:
      "Recognized as the 'Best Parliamentarian' for outstanding performance and debating skills during the competition.",
    images: [
      "/BestParlim/1.JPG",
      "/BestParlim/2.JPG",
      "/BestParlim/3.JPG"
    ],
    icon: Award,
    tags: ["Award", "Public Speaking", "Debate"],
    color: "bg-blue-500",
  },
  {
    title: "Haryana Yuva Sansad",
    organization: "Haryana Yuva Sansad",
    date: "Apr 2025",
    description:
      "Delivered a noteworthy performance in the Haryana Yuva Sansad (Youth Parliament).",
    images: [
      "/HYS/0.jpeg",
      "/HYS/1.jpg",
      "/HYS/2.png",
      "/HYS/3.png",
      "/HYS/4.jpg",
      "/HYS/5.JPG"
    ],
    icon: Users,
    tags: ["Public Speaking", "Youth Parliament"],
    color: "bg-green-500",
  },
  {
    title: "Award of Appreciation",
    organization: "17th National Youth Parliament (National Level)",
    date: "Oct 2025",
    description: "Received an Award of Appreciation for participation in the National Level event, sponsored by the Ministry of Parliamentary Affairs, Govt. of India.",
    images: ["/AoA/1.jpeg",
      "/AoA/2.png",
    ], 
    icon: Award,
    tags: ["National Level", "Award", "Youth Parliament", "Govt. of India"],
    color: "bg-blue-600"
  },
  {
    title: "37th North Zone Youth Festival - 'Anantnaad' (Debate)",
    organization: "Patiala, Punjabi University",
    date: "Jan 31 - Feb 4, 2024",
    description: "Participated as a debater representing Guru Nanak Dev University in the 37th Inter University North Zone Youth Festival, organized by Punjabi University, Patiala.",
    images: ["/PU/1.jpg",
      "/PU/3.jpg",
      "/PU/4.jpg"
    ],
    icon: Users,
    tags: ["Debate", "Participant", "University Level", "AIU"],
    color: "bg-yellow-500"
  },
  {
    title: "Merit Scholar Award - 22nd Position",
    organization: "DAV College / Guru Nanak Dev University",
    date: "May-June 2025",
    description: "Recognized for outstanding academic performance and securing a position on the Guru Nanak Dev University merit list for the May-June 2025 examinations.",
    images: ["/merit22/0.png",
      "/merit22/2.jpeg",
      "/merit22/3.jpeg"],
    icon: Award,
    tags: ["Academics", "Merit Award", "GNDU"],
    color: "bg-purple-500"
  },
  {
    title: "Aristotle Running Trophy - Overall Trophy ",
    organization: "KRM DAV College",
    date: "2024",
    description: "Secured Overall Trophy in the Annual Debate Competition for the Aristotle Running Trophy.",
    images: ["/aristole/0.png",
      "/aristole/2.jpg",
    ], // <-- Your certificate path
    icon: Award,
    tags: ["Debate", "Overall Trophy", "KRM DAV College"],
    color: "bg-red-500"
  },
{
    title: "Multiple Award Winner - 89th Prize Distribution Function",
    organization: "DAV College, Jalandhar",
    date: "April 2024",
    description: "Recognized for outstanding performance in both academics and extra-curricular activities. Awards included: 1st in Zonal & Inter-Zonal Debate, 'Best Parliamentarian' (16th National Youth Parliament), 'College Colour', 'Academic Excellence Award' (University Merit), and an 'Appreciation Award for EMA'.",
    images: ["/multiple/0.png",
      "/multiple/1.png",
      "/multiple/7.jpg"      
    ], 
    icon: Trophy,
    tags: ["Award", "Academics", "Debate", "Best Parliamentarian", "College Colour"],
    color: "bg-yellow-500"
  },
  {
    title: "Guest Speaker, Yuvvani Program",
    organization: "All India Radio, Jalandhar (FM 102.7 MHz)",
    date: "July 2024",
    description: "Invited to speak on the Yuvvani Program. It was a humbling and empowering experience to broadcast from the historic recording studio.",
    images: ["/AIR/1.png",
      "/AIR/1.jpg",
      "/AIR/2.jpg",
      "/AIR/3.jpg",
      "/AIR/5.jpg",
    ],
    icon: Mic2, // Or Sparkles, Award, etc.
    tags: ["Public Speaking", "All India Radio", "Yuvvani"],
    color: "bg-green-500"
  },
  {
    title: "IT Fest 2024 (Dual 3rd Position Winner)",
    organization: "PG Dept. of Computer Science, DAV College, Jalandhar",
    date: "Feb-Mar 2024",
    description: "Honored to secure 3rd position in two events: 'Net Savvy,' which tested research and digital literacy, and 'Logo Designing,' a challenge in creative visual storytelling.",
    images: [
      "/ITFEST2024/1.jpg",  
      "/ITFEST2024/2.jpg",
    ],
    icon: Award,
    tags: ["IT Fest", "3rd Place", "Net Savvy", "Logo Design", "Competition"],
    color: "bg-purple-500"
  },
  {
    title: "Multiple Award Winner - IT Fest 2023",
    organization: "Dept. of Computer Science, DAV College, Jalandhar",
    date: "2023",
    description: "Secured top positions across multiple competitions: 2nd in Logo Designing, 2nd in E-Waste Contest, and 3rd in Net Savvy. Also contributed to the E-Collage Contest and event coordination.",
    images: ["/ITFEST2023/1.jpg",
      "/ITFEST2023/2.jpg",
      "/ITFEST2023/3.jpeg",
      "/ITFEST2023/5.jpeg",
      "/ITFEST2023/6.jpeg",
      "/ITFEST2023/7.jpg",
      "/ITFEST2023/8.jpeg"      
    ],
    icon: Trophy,
    tags: ["IT Fest", "Logo Design", "E-Waste", "Net Savvy", "Stage Handling"],
    color: "bg-yellow-500"
  },
  {
    title: "Zonal & Inter-Zonal Debate (First Position)",
    organization: "Guru Nanak Dev University Youth Festival",
    date: "2023-2024",
    description: "Awarded First Position in Debate for both the Zonal and Inter-Zonal Youth Festivals (Session 2023-24).",
    images: [
      "/YFF/1.jpg",
      "/YFF/2.jpg",
      "/YFF/3.jpg",
      "/YFF/4.jpg",
      "/YFF/5.jpg",
      "/YFF/6.jpg",
      "/YFF/7.jpg"
    ],
    icon: Trophy,
    tags: ["Debate", "First Place", "GNDU", "Zonal", "Inter-Zonal"],
    color: "bg-green-500"
  },
];

function ImageCarousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return; // no sliding if only one image
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      3000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-md">
      {images.map((src, i) => (
        <motion.div
          key={src}
          initial={{ opacity: 0 }}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <ImageWithFallback
            src={src}
            alt={`slide-${i}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      {/* dots indicator */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Activities() {
  return (
    <section id="activities" className="py-20 px-6 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="mb-4">Extra-Curricular Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my achievements and participations in various
              extra-curricular activities, highlighting my dedication to
              holistic development beyond academics.
            </p>
          </div>

          <div className="relative">
            {/* timeline line */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 opacity-20" />

            <div className="space-y-12">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* content */}
                  <div className="flex-1">
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div
                          className={`p-3 rounded-lg ${activity.color} text-white shrink-0`}
                        >
                          <activity.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="group-hover:text-blue-600 transition-colors mb-1">
                            {activity.title}
                          </h3>
                          <p className="text-blue-600 mb-2">
                            {activity.organization}
                          </p>
                          <p className="text-sm text-gray-500 mb-3">
                            {activity.date}
                          </p>
                          <p className="text-gray-600 mb-4">
                            {activity.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {activity.tags.map((tag) => (
                              <Badge key={tag} variant="outline">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* timeline dot */}
                  <div className="hidden lg:block relative z-10">
                    <motion.div
                      className={`w-4 h-4 rounded-full ${activity.color}`}
                      whileHover={{ scale: 1.5 }}
                    />
                  </div>

                  {/* image carousel */}
                  <div className="flex-1 w-full">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageCarousel images={activity.images} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
