import React from 'react';
import { Card, Row, Col } from 'antd';

const Certificates = ({ certificates }) => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-center mb-16 text-4xl font-bold text-gray-900">Certificates & Achievements</h2>
      <Row gutter={[32, 32]} justify="center">
        {certificates.map((cert, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl border-0"
              cover={
                <div className="h-48 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              }
            >
              <div className="p-6">
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{cert.title}</h4>
                <span className="text-gray-600 block mb-2">{cert.issuer}</span>
                <span className="text-gray-500 text-sm">{cert.date}</span>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </section>
);

export default Certificates; 