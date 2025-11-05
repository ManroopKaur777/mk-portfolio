import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { useState } from "react";

const certifications = [
  {
    title: "The Complete Flutter Development Bootcamp with Dart",
    issuer: "Udemy",
    date: "May 2025",
    skills: ["Flutter", "Dart", "Cross-Platform Mobile"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHvGkH1b521HQ/profile-treasury-image-shrink_800_800/B4EZfwfK3xH0AY-/0/1752086393611?e=1762880400&v=beta&t=oqXdaV6F1OKigv0TCyI9rrjQ6MAgmjoWs-344_aA2Oc",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "TATA / Forage",
    date: "June 2025",
    skills: ["Generative AI", "Data Analytics", "TATA Simulation"],
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_93osZq3apxmNwpPQN_1749578064236_completion_certificate.pdf",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Solutions Architecture Job Simulation",
    issuer: "AWS / Forage",
    date: "June 2025",
    skills: ["AWS", "Cloud Architecture", "AWS Simulation"],
    verifyUrl: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_93osZq3apxmNwpPQN_1749578835703_completion_certificate.pdf",
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "HackManthan 2025",
    issuer: "Eventeye & Growbinar",
    date: "Oct 2025",
    skills: ["Hackathon Participant", "Team Collaboration"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQH0bd6vTr1LjA/profile-treasury-image-shrink_800_800/B4EZnHZE9QHIAc-/0/1759986873128?e=1762880400&v=beta&t=gwf_LjMH7uO_DHcOsdMEPf6Envopou8Nm6T4LxIANJ8",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "Full Stack Development Workshop",
    issuer: "Eventeye / GeeksforGeeks",
    date: "Oct 2025",
    skills: ["Full Stack Development", "GeeksforGeeks Workshop"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E22AQHVmnWO_FV0gw/feedshare-shrink_2048_1536/B4EZoaT.mEKoAw-/0/1761378037701?e=1763596800&v=beta&t=ahoD3WzaYoJMfZ2Rdtqv_AuE9F7n6YoPhkcT6QvvaZQ",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Merit Scholar Award (650/800)",
    issuer: "DAV College / Guru Nanak Dev University",
    date: "May 2023",
    skills: ["Academic Excellence", "Merit Scholar", "GNDU"],
    verifyUrl: "/merit.png",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "NET SAVVY (3rd Position)",
    issuer: "IT Fest 2024",
    date: "Mar 2024",
    skills: ["IT Competition", "NET SAVVY (3rd)"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQF8OvyHVI8t5A/profile-treasury-image-shrink_800_800/B4EZau6Y1fHYAc-/0/1746691271827?e=1762884000&v=beta&t=6qeSMkcZOEJEzTv-E5drTWXKSNpRjrRLTaw0Z8yCjZo",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Logo Designing (3rd Position)",
    issuer: "IT Fest 2024",
    date: "Feb 2024",
    skills: ["Logo Design", "Creative Competition (3rd)"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQFjZ0cv-kClog/profile-treasury-image-shrink_800_800/B4EZau6umYHoAc-/0/1746691367192?e=1762884000&v=beta&t=oobzcsylwALKfD-1epEPSkLNSmjV_O-reBP6tnCagfY",
    color: "from-indigo-500 to-purple-500"
  },
  {
    title: "Program In Professional Edge",
    issuer: "NIIT Foundation / Infosys",
    date: "Jan 2025",
    skills: ["Professional Edge", "Infosys Program", "Career Prep"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQH3_4CRhwDWqA/profile-treasury-image-shrink_800_800/B4EZbpPsh.HYAc-/0/1747669929779?e=1762880400&v=beta&t=lQgknEeo-9A46-bOhsEvNeiT0pjq61ZohOUTewuHRbE",
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    date: "July 2020",
    skills: ["Google Digital Marketing", "SEO Fundamentals"],
    verifyUrl: "https://skillshop.exceedlms.com/student/award/RPCmCkRnRUnRkd7cNMT5VURW",
    color: "from-red-500 to-orange-500"
  },
  {
    title: "How to ace the Hackathons Workshop",
    issuer: "Eventeye / GeeksforGeeks",
    date: "Oct 2025",
    skills: ["Hackathon Strategy", "GeeksforGeeks Workshop"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E22AQF015WB1jsjew/feedshare-shrink_2048_1536/B4EZogjehHJ0A0-/0/1761482763869?e=1763596800&v=beta&t=Jl-Gas_BgEfueoNAnLZ--TgTYMhZg5cT8FZLdN1P0ew",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "AI Agents & The Future of Jobs Talk",
    issuer: "Capabl",
    date: "Sep 2025",
    skills: ["AI Agents", "Future of Jobs", "Tech Talk"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E22AQH3Zv_o0UzJIA/feedshare-shrink_2048_1536/B4EZl4Q9v.KUAw-/0/1758659339009?e=1763596800&v=beta&t=lSnPgYJIke1MYG06yzASj6KqvRBZsuHRJrNgkXpdUHk",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Tech Talk: Alumni Edition Workshop",
    issuer: "Accenture",
    date: "N/A",
    skills: ["Career Development", "Accenture Alumni Talk"],
    verifyUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGd3Xl6zsF7-w/profile-treasury-image-shrink_800_800/B4EZm1KAeRKkAY-/0/1759680925219?e=1762880400&v=beta&t=Z8WyCv-YwpikSPaNG75RsT-XOBTH_zbN9eNX26ifI5o",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Career Proficiency: Exploring Paths Beyond College",
    issuer: "LPU / De Talks",
    date: "June 2025",
    skills: ["Career Proficiency", "Professional Development", "LPU"],
    verifyUrl: "public/cp.jpg", // <-- Add your verification link here
    color: "from-orange-500 to-yellow-500"
  },
  {
    title: "Foundation of Universal Human Values",
    issuer: "LPU / De Talks",
    date: "July 2025",
    skills: ["Universal Human Values", "Personal Development", "LPU"],
    verifyUrl: "public/fohv.jpg", // <-- Add your verification link here
    color: "from-blue-500 to-cyan-500"
  },
];

export function Certifications() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="mb-4">Certifications & Credentials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional certifications that validate my expertise across various technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${cert.color} bg-opacity-10`}>
                        <Award className="w-6 h-6 text-gray-700" />
                      </div>
                      <motion.a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>

                    <h3 className="mb-2 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{cert.issuer}</p>

                    <div className="flex items-center gap-2 text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{cert.date}</span>
                    </div>

                    {/* I have removed the motion.div block that was displaying the ID here. */}

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

