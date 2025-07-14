import React from 'react';
import { Card, Row, Col, Button, Space } from 'antd';
import { GithubOutlined, ExportOutlined } from '@ant-design/icons';

const Projects = ({ projects, fadeInUpClass }) => (
  <section id="projects" className={`py-20 px-6 bg-white ${fadeInUpClass('projects')}`}> 
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mb-16 text-4xl font-bold text-gray-900">Featured Projects</h2>
      <Row gutter={[32, 32]}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} key={index}>
            <Card
              className="h-full shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden border-0 hover-scale"
              cover={
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              }
            >
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">{project.title}</h4>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-700 mb-2 block">Technologies:</span>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-600">
                    <strong>Role:</strong> {project.role}
                  </span>
                </div>
                <Space>
                  {project.demo && (
                    <Button
                      type="primary"
                      icon={<ExportOutlined />}
                      href={project.demo}
                      target="_blank"
                      className="!rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    icon={<GithubOutlined />}
                    href={project.github}
                    target="_blank"
                    className="!rounded-button whitespace-nowrap cursor-pointer"
                  >
                    GitHub
                  </Button>
                </Space>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default Projects; 