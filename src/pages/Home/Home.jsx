import React, { useState } from 'react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Certificates from '../../components/Certificates';
import Contact from '../../components/Contact';
import useFadeInOnScroll from '../../hooks/useFadeInOnScroll';
import scrollToSection from '../../utils/scrollToSection';

const sectionIds = ['about', 'skills', 'projects', 'contact'];

const skills = {
  frontend: [
    { name: 'HTML/CSS', level: 95 },
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 55 },
  ],
  backend: [
    { name: 'PHP', level: 85 },
    { name: 'MySQL', level: 85 },
    { name: 'Python', level: 85 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'VSCode', level: 95 },
    { name: 'Cursor', level: 85 },
  ],
};

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Chatbot, Recommendation System.',
    tech: ['HTML', 'CSS', 'PHP', 'MySQL', 'Python', 'JavaScript'],
    demo: '',
    github: 'https://github.com/NamVo17/doantotnghiep2025',
    role: 'Full Stack Developer',
    image: '/giaodienweb.png',
  },
  {
    title: 'Calendar',
    description: 'A modern calendar web  with event management and responsive design.',
    tech: ['React + Vite', 'Redux Toolkit', 'Ant Design'],
    demo: 'https://calendar-web-zeta.vercel.app',
    github: 'https://github.com/NamVo17/Calendar-App',
    role: 'Frontend Developer',
    image: '/calendar.png',
  },
  // {
  //   title: 'Weather Dashboard',
  //   description: 'Real-time weather tracking with interactive maps',
  //   tech: ['React', 'Chart.js', 'OpenWeather API'],
  //   demo: 'https://khoahoc-onl.vercel.app',
  //   github: 'https://github.com/NamVo17/weather',
  //   role: 'Frontend Developer',
  //   image: 'https://readdy.ai/api/search-image?query=weather%20dashboard%20interface%20with%20charts%20graphs%20and%20weather%20data%20visualization%20clean%20modern%20design%20on%20white%20background&width=400&height=250&seq=proj3&orientation=landscape',
  // },
  {
    title: 'Portfolio Website',
    description: 'Responsive portfolio website with modern animations',
    tech: ['React', 'Tailwind CSS', 'Ant Design', 'JavaScript'],    
    demo: 'https://portfolio-namvos-projects.vercel.app',
    github: 'https://github.com/NamVo17/portfolio',
    role: 'Frontend Developer',
    image: '/portfolio.png',
  },
  {
    title: 'Tool symbols on the map',
    description: 'Using python and libraries to build a toolkit for manipulating symbols on maps',
    tech: ['Python'],    
    demo: '',
    github: 'https://github.com/NamVo17/thuctapVi-nCNTT',
    image: '/VienCNTT.jpg',
  },
];

const certificates = [
  {
    title: 'React Developer Certification',
    issuer: 'Meta',
    date: '2023',
    image: 'https://readdy.ai/api/search-image?query=professional%20certificate%20design%20with%20React%20logo%20and%20Meta%20branding%20clean%20modern%20certificate%20layout%20on%20white%20background&width=300&height=200&seq=cert1&orientation=landscape',
  },
  {
    title: 'JavaScript Algorithms',
    issuer: 'freeCodeCamp',
    date: '2022',
    image: 'https://readdy.ai/api/search-image?query=JavaScript%20certification%20badge%20with%20freeCodeCamp%20logo%20professional%20certificate%20design%20on%20white%20background&width=300&height=200&seq=cert2&orientation=landscape',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2023',
    image: 'https://readdy.ai/api/search-image?query=AWS%20cloud%20certification%20badge%20with%20Amazon%20logo%20professional%20certificate%20design%20on%20white%20background&width=300&height=200&seq=cert3&orientation=landscape',
  },
];

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fadeInUpClass = useFadeInOnScroll(sectionIds);

  return (
    <div className="min-h-screen bg-white">
      <Header
        onNavClick={(id) => scrollToSection(id, setMobileMenuOpen)}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero
        onProjectsClick={() => scrollToSection('projects', setMobileMenuOpen)}
        onContactClick={() => scrollToSection('contact', setMobileMenuOpen)}
      />
      <About fadeInUpClass={fadeInUpClass} />
      <Skills skills={skills} fadeInUpClass={fadeInUpClass} />
      <Projects projects={projects} fadeInUpClass={fadeInUpClass} />
      <Certificates certificates={certificates} />
      <Contact fadeInUpClass={fadeInUpClass} />
      <Footer />
    </div>
  );
};

export default Home; 