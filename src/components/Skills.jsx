import React from 'react';
import { Progress } from 'antd';

const Skills = ({ skills, fadeInUpClass }) => (
  <section id="skills" className={`py-20 px-6 bg-gray-50 ${fadeInUpClass('skills')}`}> 
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mb-16 text-4xl font-bold text-gray-900">Skills & Expertise</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Frontend Skills */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <i className="fas fa-code text-blue-500 text-2xl mr-3"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-0">Frontend</h3>
          </div>
          <div className="space-y-4">
            {skills.frontend.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <Progress percent={skill.level} showInfo={false} strokeColor="#3B82F6" />
              </div>
            ))}
          </div>
        </div>
        {/* Backend Skills */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <i className="fas fa-server text-green-500 text-2xl mr-3"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-0">Backend</h3>
          </div>
          <div className="space-y-4">
            {skills.backend.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <Progress percent={skill.level} showInfo={false} strokeColor="#10B981" />
              </div>
            ))}
          </div>
        </div>
        {/* Tools Skills */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex items-center mb-6">
            <i className="fas fa-tools text-purple-500 text-2xl mr-3"></i>
            <h3 className="text-xl font-semibold text-gray-900 mb-0">Tools</h3>
          </div>
          <div className="space-y-4">
            {skills.tools.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <Progress percent={skill.level} showInfo={false} strokeColor="#8B5CF6" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Skills; 