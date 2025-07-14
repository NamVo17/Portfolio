import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const ProfessionalJourney = () => (
  <section className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <Title
        level={2}
        className="text-center mb-16 text-4xl font-bold text-gray-900"
      >
        Professional Journey
      </Title>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
            <div className="flex-1 w-full md:w-[45%] order-2 md:order-1 bg-white p-6 rounded-2xl shadow-lg ml-6 md:ml-0 animate-slideInLeft">
              <span className="text-blue-600 font-semibold">
                2021 - 2025
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-2">
                Bachelor of Information Systems
              </h3>
              <h3 className="text-xl font-bold text-gray-900 mt-2">
                Nong Lam University - Ho Chi Minh City
              </h3>
              <p className="text-gray-600 mt-2">
                Relevant coursework: Web Application Development, Database Systems
              </p>
              <p className="text-gray-600 mt-2">
              Thesis on "Designing an E-Commerce Website for Selling Cakes and Tea with Integrated Customer Support Chatbot and Recommendation System".

Developed the Front-End using modern UI frameworks (Bootstrap, Tailwind CSS).
Implemented a PHP & MySQL back-end for product management and user authentication.
Integrated an AI-powered chatbot for customer support. Built a Product Recommendation System.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  HTML
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  CSS
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Javascript
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  PHP
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  MySQL
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Python
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Bootstrap
                </span>
                
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
          </div>

          {/* Item 2 */}
          <div className="relative flex flex-col md:flex-row items-center md:justify-between group">
            <div className="flex-1 w-full md:w-[45%] order-2 md:order-2 bg-white p-6 rounded-2xl shadow-lg mr-0 md:mr-0 md:ml-auto animate-slideInRight">
              <span className="text-blue-600 font-semibold">
              Oct 2024 – Dec 2024
              </span>
              <h3 className="text-xl font-bold text-gray-900 mt-2">
                Intern GIS Developer
              </h3>
              <h3 className="text-xl font-bold text-gray-900 mt-2">
                VIỆN CÔNG NGHỆ THÔNG TIN BQP CƠ SỞ 2
              </h3>
              <p className="text-gray-600 mt-2">
              Developed a tool using Python and PyQGIS for drawing/editing symbols on maps without QGIS.
              Worked in a team to design and implement the user interface for loading and interacting with maps.
              Coded the UI and functionalities for symbol manipulation, including drawing and editing tools.
              Completed 90% of the project compared to the initial requirements.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Python
                </span>
              </div>
            </div>
            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ProfessionalJourney; 