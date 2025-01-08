import Sidebar from "@/components/sidebar";
import MobileNav from "@/components/mobile-nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HoverCard } from "@/components/hover-card";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#0a192f]">
      <Sidebar />
      <MobileNav />

      <main className="lg:ml-96 flex-1 overflow-auto w-full">
        <div className="max-w-3xl mx-auto py-20 px-6 lg:px-8">
          {/* About Section */}
          <section id="about" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">About</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400">
                I'm a passionate software engineer with expertise in AI, web
                development, and technical writing. I specialize in creating
                efficient, user-friendly applications and have a strong
                background in AI model training and evaluation.
              </p>
              <a
                href="/pdf/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-300 hover:text-teal-400 mt-8 group"
              >
                View Full Résumé
                <ArrowUpRight className="ml-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-12">
              Experience
            </h2>
            <div className="space-y-12">
              <HoverCard>
                <div className="group">
                  <div className="text-gray-400 mb-2">
                    April 2023 — May 2024
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-teal-300 transition-colors">
                    <a href="#" className="inline-flex items-center">
                      AI Trainer · Remotasks
                      <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Trained and refined conversational AI models through
                    systematic data curation and preprocessing. Developed and
                    maintained detailed documentation for conversation design
                    patterns. Conducted rigorous quality assurance assessments
                    on AI model outputs. Established and monitored key
                    performance metrics for AI model evaluation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-teal-300">
                      Technical Writing
                    </Badge>
                    <Badge variant="secondary" className="text-teal-300">
                      Multimodal Prompting
                    </Badge>
                    <Badge variant="secondary" className="text-teal-300">
                      Programming
                    </Badge>
                  </div>
                </div>
              </HoverCard>

              <HoverCard>
                <div className="group">
                  <div className="text-gray-400 mb-2">
                    January 2023 — April 2023
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-teal-300 transition-colors">
                    <a href="#" className="inline-flex items-center">
                      Information Technology Intern · AGC Tenwek Hospital
                      <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Created a prototype patient management system using Java.
                    Assisted in API integration and backend maintenance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-teal-300">
                      Java
                    </Badge>
                    <Badge variant="secondary" className="text-teal-300">
                      Database Management
                    </Badge>
                    <Badge variant="secondary" className="text-teal-300">
                      Networking
                    </Badge>
                    <Badge variant="secondary" className="text-teal-300">
                      Teaching
                    </Badge>
                  </div>
                </div>
              </HoverCard>

              <HoverCard>
                <div className="group">
                  <div className="text-gray-400 mb-2">
                    April 2023 — May 2023
                  </div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-teal-300 transition-colors">
                    <a href="#" className="inline-flex items-center">
                      Front-end Developer · Tenwek Comprehensive School
                      <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </a>
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Developed and maintained the school's web portal using
                    React.js. Integrated secure APIs for data handling. Improved
                    user experience through responsive design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-teal-300">
                      JavaScript
                    </Badge>
                    <Badge variant="secondary" className="text-teal-300">
                      ReactJs
                    </Badge>
                    <Badge variant="secondary" className="text-teal-300">
                      Responsive Design
                    </Badge>
                    <Badge variant="secondary" className="text-teal-300">
                      Bootstrap
                    </Badge>
                  </div>
                </div>
              </HoverCard>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-12">Projects</h2>
            <div className="space-y-12">
              <HoverCard>
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video bg-[#112240] rounded-lg overflow-hidden">
                      <Image
                        src="/images/project-name.jpg"
                        alt="Project thumbnail"
                        width={400}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-teal-300 transition-colors">
                      <a href="#" className="inline-flex items-center">
                        Build a Spotify Connected App
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Video course that teaches how to build a web app with the
                      Spotify Web API. Topics covered include the principles of
                      REST APIs, user auth flows, Node, Express, React, Styled
                      Components, and more.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Express
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Spotify API
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Heroku
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-20">
            <h2 className="text-3xl font-bold text-gray-100 mb-12">
              Education
            </h2>
            <div className="space-y-8">
              <HoverCard>
                <Card className="bg-[#112240] border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      Kabarak University
                    </h3>
                    <p className="text-gray-400 mb-2">
                      Bachelor in Business and Information Technology
                    </p>
                    <p className="text-gray-400 mb-4">Sep 2019 - Dec 2023</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        MySQL
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Networking
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Team Leadership
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Front-End Design
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Java
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </HoverCard>

              <HoverCard>
                <Card className="bg-[#112240] border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      Moringa School
                    </h3>
                    <p className="text-gray-400 mb-2">Software Development</p>
                    <p className="text-gray-400 mb-4">May 2021 - Dec 2021</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        React.js
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        JavaScript
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Python
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Django
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Tailwind CSS
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </HoverCard>

              <HoverCard>
                <Card className="bg-[#112240] border-none">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">
                      ALX
                    </h3>
                    <p className="text-gray-400 mb-2">
                      AI Essentials · Grade: A+
                    </p>
                    <p className="text-gray-400 mb-4">Mar 2024 - Apr 2024</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        Artificial Intelligence (AI)
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Generative AI Tools
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Prompt Engineering
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </HoverCard>
            </div>
          </section>

          {/* Built With Section */}
          <section className="text-center text-gray-400 text-sm">
            <p>
              Designed by yours truly😊in Figma, built with Next.js, Tailwind
              CSS,and framer-motion. Deployed on Vercel.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
