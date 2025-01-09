import Sidebar from "@/components/sidebar";
import MobileNav from "@/components/mobile-nav";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { HoverCard } from "@/components/hover-card";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#1e2836]">
      <Sidebar />
      <MobileNav />

      <main className="lg:ml-96 flex-1 overflow-auto w-full">
        <div className="max-w-3xl mx-auto py-20 px-6 lg:px-8">
          {/* About Section */}
          <section id="about" className="mb-20 mt-24 lg:mt-0">
            <h2 className="text-3xl font-bold text-gray-100 mb-8">About</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400">
                Hi, I’m Austin Onyango, a curious mind with a passion for
                exploring technology, space,anatomy, philosophy, and psychology.
                As a developer, I enjoy the challenge of solving problems and
                creating meaningful digital experiences, but my interests extend
                far beyond code. I’m deeply fascinated by the human
                experience—how we think, why we act, and the bigger questions
                about existence and the universe. Whether I’m reading about
                stoicism, contemplating the nature of time, or diving into a
                discussion about the cosmos, I find inspiration in understanding
                the world and our place in it. When I’m not immersed in tech or
                philosophical musings, you’ll often find me gaming, watching
                documentaries, or enjoying the tranquility of a solo nature
                walk. These moments help me recharge and spark new ideas,
                blending creativity and logic in everything I do. For me, life
                is about growth, meaningful connections, and creating things
                that make an impact. If that resonates with you, let’s connect!
              </p>
              <a
                href="/pdf/resume.docx"
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
                    Developed and maintained the school&apos;s web portal using
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
                        src="/images/sustainopolis.png"
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
                        Sustainopolis
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Sustainopolis is a gamified educational platform that
                      combines learning with real-world problem-solving.
                      Learners tackle societal challenges in a simulated
                      city—like pollution or urban overcrowding by applying
                      knowledge gained from topics like waste management,
                      renewable energy, and urban planning. The goal is to
                      inspire critical thinking and empower users to create
                      sustainable solutions for real-world impact.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Express
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        MongoDB
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Jupyter
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div className="space-y-12">
              <HoverCard>
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video bg-[#112240] rounded-lg overflow-hidden">
                      <Image
                        src="/images/shopease.png"
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
                        ShopEase Ecommerce App
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      ShopEase is a sleek and modern e-commerce platform
                      designed to deliver a seamless shopping experience with a
                      focus on minimalism. This project showcases my ability to
                      create responsive, user-friendly interfaces and implement
                      key e-commerce functionalities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        HTML
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        SCSS
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Vanilla JS
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div className="space-y-12">
              <HoverCard>
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video bg-[#112240] rounded-lg overflow-hidden">
                      <Image
                        src="/images/fastlink.png"
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
                        Fastlink.Net
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Fastlink.net is a responsive and interactive website built
                      with React.js, designed for Fastlink Communications, an
                      internet service provider located in Ruiru, Kenya. This
                      project emphasizes user experience, clean design, and
                      efficient performance to showcase the company’s services
                      and connect with potential customers.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        React
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        CSS Modules
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Netflify
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Git
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div className="space-y-12">
              <HoverCard>
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video bg-[#112240] rounded-lg overflow-hidden">
                      <Image
                        src="/images/menu-cafe.png"
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
                        Menu-Cafe
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Menu Café is a simple, visually appealing website designed
                      to showcase the offerings of a cozy café. Built using only
                      HTML and CSS, the project focuses on creating an engaging
                      and user-friendly design that reflects the warm and
                      inviting atmosphere of a coffee shop.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        HTML
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        CSS
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div className="space-y-12">
              <HoverCard>
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video bg-[#112240] rounded-lg overflow-hidden">
                      <Image
                        src="/images/photography-app.png"
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
                        Photography App
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      It&apos;s a modern photography app built with Next.js and
                      styled with Tailwind CSS, designed to provide
                      photographers and photography enthusiasts with an
                      interactive platform to explore, share, and manage
                      stunning visuals. The app combines smooth performance with
                      a clean and minimalist design for an engaging user
                      experience.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        NextJs
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        NodeJs
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        MongoDB
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div className="space-y-12">
              <HoverCard>
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video bg-[#112240] rounded-lg overflow-hidden">
                      <Image
                        src="/images/reading-lamp.jpg"
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
                        Reading Lamp
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      Reading Lamp is a simple yet innovative mobile application
                      designed to transform your phone screen into a reading
                      lamp. Built as my first app project, it combines
                      functionality and simplicity to create a practical tool
                      for nighttime reading without straining the eyes.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        React Native
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Expo Go
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div className="space-y-12">
              <HoverCard>
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video bg-[#112240] rounded-lg overflow-hidden">
                      <Image
                        src="/images/youtube-clone.png"
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
                        YouTube Clone
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      YouTube clone application designed to provide users with a
                      platform to upload, view, and interact with videos in a
                      modern and responsive interface. Built with React.js and
                      Firebase for real-time data handling, this project mimics
                      the core functionality of YouTube while offering an
                      opportunity to showcase my skills in building
                      video-sharing platforms.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        ReactJs
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Firebase
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Tailwind CSS
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Vercel
                      </Badge>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div className="space-y-12">
              <HoverCard>
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="md:col-span-2">
                    <div className="aspect-video bg-[#112240] rounded-lg overflow-hidden">
                      <Image
                        src="/images/weather-app.png"
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
                        Weather App
                        <ArrowUpRight className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
                    </h3>
                    <p className="text-gray-400 mb-4">
                      WeatherNow is a weather application built using HTML, CSS,
                      and JavaScript that provides users with real-time weather
                      information based on their location or a city search. The
                      app is designed with simplicity and responsiveness in
                      mind, making it easy for users to get quick weather
                      updates.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-teal-300">
                        HTML
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        CSS
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Vanilla JS
                      </Badge>
                      <Badge variant="secondary" className="text-teal-300">
                        Git
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
              Loosely designed in Figma and coded in Visual Studio Code by yours
              truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
              All text is set in the Inter typeface.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
