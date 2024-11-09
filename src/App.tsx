import React, { useEffect } from 'react';
import { User, Mail, Phone, MapPin, BookOpen, Briefcase, Code, Globe, Award, Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-4">
            <span className="text-xl font-bold text-sky-400">Fareed.dev</span>
            <div className="flex gap-6">
              <a href="#about" className="text-gray-300 hover:text-sky-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-sky-400 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-300 hover:text-sky-400 transition-colors">Experience</a>
              <a href="#education" className="text-gray-300 hover:text-sky-400 transition-colors">Education</a>
              <a href="#skills" className="text-gray-300 hover:text-sky-400 transition-colors">Skills</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="pt-32 pb-20 px-4 md:px-6 w-full" id="about">
        <div className="container max-w-6xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold">Fareed Ahmad</h1>
            <h2 className="text-2xl text-sky-400">Software Developer</h2>
            <div className="flex flex-wrap gap-6 text-gray-300">
              <a href="mailto:fareedahmad888@gmail.com" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <Mail size={16} />
                <span>fareedahmad888@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 93845 97945</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Rajapalayam, Tamilnadu, India</span>
              </div>
              <a 
                href="https://fareedahmad888.github.io/portfolio/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-sky-400 transition-colors"
              >
                <Github size={16} />
                <span>Portfolio</span>
              </a>
            </div>
            <p className="max-w-3xl text-gray-400 leading-relaxed">
              An aspiring IT professional, currently pursuing a Bachelor's degree in Business Administration through
              distance education. Coding is my passion, and I am developing knowledge in programming and data
              structures continuously. I would be happy to implement my ever-developing knowledge in the fields of C++
              and Python into a permanent position that will help an innovative company achieve success, while gaining
              opportunities for personal and professional growth.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-6xl mx-auto px-4 md:px-6 space-y-24 pb-24">
        {/* Projects Section */}
        <section id="projects" className="pt-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-sky-400" />
            Projects
          </h2>
          <div className="grid gap-6">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-sky-400 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Personal Portfolio Website</h3>
                <a href="https://fareedahmad888.github.io/portfolio/" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="text-sky-400 hover:text-sky-300">
                  <ExternalLink size={20} />
                </a>
              </div>
              <p className="text-gray-400 mb-4">
                Built a responsive, React-based portfolio website to showcase skills, experience, and education.
                Deployed locally and hosted on GitHub Pages, demonstrating expertise in front-end development,
                component-based design, and web deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-sky-400/10 text-sky-400 px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-sky-400/10 text-sky-400 px-3 py-1 rounded-full text-sm">GitHub Pages</span>
                <span className="bg-sky-400/10 text-sky-400 px-3 py-1 rounded-full text-sm">Responsive Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="pt-16 w-full">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="text-sky-400" />
            Experience
          </h2>
          <div className="relative w-full">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700" />
            
            {/* Experience item */}
            <div className="relative pl-24">
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-3 h-3 bg-sky-400 rounded-full transform -translate-x-1.5" />
              <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <h3 className="text-xl font-bold">Supervisor and Accountant</h3>
                <p className="text-sky-400 mb-2">Bio-Tek</p>
                <p className="text-gray-400 mb-4">February 2023 – present | Rajapalayam, India</p>
                <ul className="list-disc ml-6 text-gray-300 space-y-2">
                  <li>Initiated and led a startup, achieving a 70% output rate and boosting sales through strategic marketing efforts</li>
                  <li>Developed and managed all accounting processes, ensuring accurate financial reporting and precise bookkeeping</li>
                  <li>Led and supervised staff, cultivating a collaborative and high-performance team environment</li>
                  <li>Improved operational efficiency by demonstrating flexibility and adapting to changing work demands</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="pt-16 w-full">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="text-sky-400" />
            Education
          </h2>
          <div className="relative space-y-6 w-full">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-700" />
            
            {/* Education items */}
            <div className="relative pl-24">
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-3 h-3 bg-sky-400 rounded-full transform -translate-x-1.5" />
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold">Bachelors of Business Administration (BBA)</h3>
                <p className="text-sky-400">Madurai Kamaraj University</p>
                <p className="text-gray-400">2023 – present | Madurai, India</p>
              </div>
            </div>

            <div className="relative pl-24">
              {/* Timeline dot */}
              <div className="absolute left-8 top-8 w-3 h-3 bg-sky-400 rounded-full transform -translate-x-1.5" />
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold">BA Arabic and Islamic Studies</h3>
                <p className="text-sky-400">Jamia Uswathul Hasana</p>
                <p className="text-gray-400">2017 – 2022 | Karur, India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="pt-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Code className="text-sky-400" />
            Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-sky-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-sky-400/10 text-sky-400 px-4 py-2 rounded-full">C++</span>
                <span className="bg-sky-400/10 text-sky-400 px-4 py-2 rounded-full">Python</span>
                <span className="bg-sky-400/10 text-sky-400 px-4 py-2 rounded-full">DSA</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-sky-400">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-3">
                <span className="bg-sky-400/10 text-sky-400 px-4 py-2 rounded-full">Visual Studio Code</span>
                <span className="bg-sky-400/10 text-sky-400 px-4 py-2 rounded-full">Git</span>
                <span className="bg-sky-400/10 text-sky-400 px-4 py-2 rounded-full">Leetcode</span>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-sky-400">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['English', 'Tamil', 'Hindi', 'Urdu', 'Malayalam', 'Arabic'].map((lang) => (
                  <span key={lang} className="bg-sky-400/10 text-sky-400 px-4 py-2 rounded-full">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
