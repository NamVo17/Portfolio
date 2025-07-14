import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const About = ({ fadeInUpClass }) => (
  <section id="about" className={`py-20 px-6 bg-white ${fadeInUpClass('about')}`}> 
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mb-16 text-4xl font-bold text-gray-900">About Me</h2>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">Professional Journey</h3>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          As a recent Information Systems graduate with a passion for frontend development, I specialize in building responsive, user-centric web applications using HTML, CSS, JavaScript, and React.js. My academic projects and internships have equipped me with hands-on experience in modern web development, including PHP and MySQL for backend integration.
          </p>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          I thrive on transforming ideas into seamless, interactive experiences and enjoy collaborating across teams to solve technical challenges. Eager to contribute my foundational full-stack knowledge (frontend-focused with backend awareness) and grow in a dynamic development environment.
          </p>
          <h4 className="text-xl font-semibold mb-4 text-gray-900">Soft Skills</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <i className="fas fa-users text-blue-500 text-lg"></i>
              <span className="text-gray-700">Team Collaboration</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-comments text-green-500 text-lg"></i>
              <span className="text-gray-700">Communication</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-lightbulb text-yellow-500 text-lg"></i>
              <span className="text-gray-700">Problem Solving</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fas fa-clock text-purple-500 text-lg"></i>
              <span className="text-gray-700">Time Management</span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <img
              src="/21166180.jpg"
              alt="Nam - Frontend Developer"
              className="w-80 h-80 rounded-2xl object-cover object-top shadow-2xl"
            />
          </div>
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
        </div>
      </div>
    </div>
  </section>
);

export default About; 