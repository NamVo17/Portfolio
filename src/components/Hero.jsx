import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Hero = ({ onProjectsClick, onContactClick }) => (
  <section
    className="pt-24 pb-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden"
    style={{
      backgroundImage: `url('https://readdy.ai/api/search-image?query=modern%20professional%20workspace%20with%20laptop%20and%20design%20elements%20clean%20minimalist%20background%20with%20soft%20lighting%20and%20contemporary%20office%20setup%20perfect%20for%20developer%20portfolio&width=1440&height=600&seq=hero1&orientation=landscape')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center right',
      backgroundBlendMode: 'overlay',
    }}
  >
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl animate-slideInLeft">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Hi, I'm Nam – Frontend Developer
          </h1>
          <p className="text-xl text-gray-600 mb-8">
          Passionate about crafting intuitive, high-performance web interfaces using modern frontend technologies like React.js, JavaScript, TypeScript and CSS.
          Comfortable with backend integration using PHP and MySQL, with a keen interest in expanding my full-stack capabilities
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/VoCongNam_Frontend_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <Button
                type="primary"
                size="large"
                icon={<DownloadOutlined />}
                className="!rounded-button whitespace-nowrap cursor-pointer bg-blue-500 hover:bg-blue-600"
              >
                Download CV
              </Button>
            </a>
            <Button
              size="large"
              onClick={onProjectsClick}
              className="!rounded-button whitespace-nowrap cursor-pointer"
            >
              View Projects
            </Button>
            <Button
              size="large"
              onClick={onContactClick}
              className="!rounded-button whitespace-nowrap cursor-pointer"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero; 