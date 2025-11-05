import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-center mb-4">Get In Touch</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            I'm currently available for freelance work and new opportunities. Let's discuss your project!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="p-6 bg-white/80 backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">Name</label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">Email</label>
                      <Input id="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2">Subject</label>
                    <Input id="subject" placeholder="Project inquiry" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="mb-1">Email</h3>
                    <p className="text-gray-600">manroopkaur2204@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="mb-1">Phone</h3>
                   <p className="text-gray-600">+91 6284855758</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="mb-1">Location</h3>
                    <p className="text-gray-600">Jalandhar, Punjab</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
