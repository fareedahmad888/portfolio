import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Menu, X, ChevronRight, Download } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skills = {
    "Programming Languages": ["C++", "Python", "Data Structures and Algorithms (DSA)"],
    "Tools and Platforms": ["Visual Studio Code", "Git", "Leetcode"],
    "Other skills": ["Critical Thinking", "Problem-Solving", "Team Collaboration", "Project Management", "Communication Skills", "Time Management"]
  };

  const education = [
    { degree: "Bachelors of Business Administration (BBA)", institution: "Madurai Kamaraj University", year: "2023 – present", location: "Madurai, India" },
    { degree: "Higher Secondary School (HSC)", institution: "National Institute of Open Schooling", year: "2023", location: "Rajapalayam, India" },
    { degree: "BA Arabic and Islamic Studies", institution: "Jamia Uswathul Hasana", year: "2017 – 2022", location: "Karur, India" },
    { degree: "Secondary Secondary School (SSC)", institution: "Progressive English School", year: "2017", location: "Sharjah, U.A.E." }
  ];

  const languages = ["English", "Tamil", "Hindi", "Urdu", "Malayalam", "Arabic"];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold">Fareed.dev</a>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-sky-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-sky-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
              <a href="#education" className="hover:text-sky-400 transition-colors">Education</a>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-900 z-40 pt-16">
          <div className="flex flex-col items-center space-y-8 pt-8">
            <a href="#home" className="text-xl" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-xl" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" className="text-xl" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills" className="text-xl" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#education" className="text-xl" onClick={() => setIsMenuOpen(false)}>Education</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sky-400 text-xl">Hello, I'm</h2>
            <h1 className="text-5xl font-bold">Fareed Ahmad</h1>
            <h2 className="text-3xl text-slate-400">Software Developer</h2>
            <p className="text-slate-400 max-w-xl">
              An aspiring IT professional passionate about coding and continuous learning in programming and data structures.
            </p>
            <div className="flex gap-4">
              <button className="bg-sky-400 hover:bg-sky-500 text-white px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
                <Download size={20} />
                Download CV
              </button>
              <button className="border border-sky-400 text-sky-400 hover:bg-sky-400/10 px-6 py-2 rounded-full flex items-center gap-2 transition-colors">
                Contact Me
              </button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="mailto:fareedahmad888@gmail.com" className="text-slate-400 hover:text-sky-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+919384597945" className="text-slate-400 hover:text-sky-400 transition-colors">
                <Phone size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="max-w-2xl">
            <p className="text-slate-400">
              An aspiring IT professional, currently pursuing a Bachelor's degree in Business Administration through
              distance education. Coding is my passion, and I am developing knowledge in programming and data
              structures continuously. I would be happy to implement my ever-developing knowledge in the fields of C++
              and Python into a permanent position that will help an innovative company achieve success, while gaining
              opportunities for personal and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="max-w-2xl border-l border-sky-400 pl-8 ml-4">
            <div className="relative">
              <div className="absolute -left-10 top-2 w-4 h-4 bg-sky-400 rounded-full"></div>
              <h3 className="text-xl font-semibold">Supervisor and Accountant</h3>
              <p className="text-sky-400 mb-2">Bio-Tek | 02/2023 – present</p>
              <div className="text-slate-400 space-y-2">
                <p>• Initiated and led a startup, achieving a 70% output rate and boosting sales through strategic marketing efforts</p>
                <p>• Developed and managed all accounting processes, ensuring accurate financial reporting</p>
                <p>• Led and supervised staff, cultivating a collaborative and high-performance team environment</p>
                <p>• Improved operational efficiency by demonstrating flexibility and adapting to changing work demands</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-slate-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-sky-400">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill) => (
                    <li key={skill} className="flex items-center gap-2 text-slate-300">
                      <ChevronRight size={16} className="text-sky-400" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="max-w-2xl border-l border-sky-400 pl-8 ml-4">
            {education.map((edu, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="absolute -left-10 top-2 w-4 h-4 bg-sky-400 rounded-full"></div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-sky-400">{edu.institution}</p>
                <p className="text-slate-400">{edu.year} | {edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section id="languages" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Languages</h2>
          <div className="flex flex-wrap gap-4">
            {languages.map((language) => (
              <div 
                key={language}
                className="px-6 py-2 bg-slate-700/50 rounded-full text-sky-400 hover:bg-sky-400 hover:text-white transition-colors cursor-default"
              >
                {language}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Certificates</h2>
          <div className="bg-slate-700/50 p-6 rounded-lg max-w-2xl">
            <h3 className="text-xl font-semibold text-sky-400">Data Structures and Algorithms (DSA) course</h3>
            <p className="text-slate-400">A-Z Striver</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-800/50">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>© 2024 Fareed Ahmad. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
