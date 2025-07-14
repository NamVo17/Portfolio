import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { MailOutlined, PhoneOutlined, LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const Contact = ({ fadeInUpClass }) => {
  const [form] = Form.useForm();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (values) => {
    setSubmitted(true);
    form.resetFields();
  };

  return (
    <section id="contact" className={`py-20 px-6 bg-white ${fadeInUpClass('contact')}`}> 
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center mb-16 text-4xl font-bold text-gray-900">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send Message</h3>
            <Form form={form} onFinish={handleSubmit} layout="vertical">
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input
                  size="large"
                  placeholder="Your Name"
                  className="!rounded-button border-gray-300 text-sm"
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' },
                ]}
              >
                <Input
                  size="large"
                  placeholder="your.email@example.com"
                  className="!rounded-button border-gray-300 text-sm"
                />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea
                  rows={5}
                  placeholder="Your message here..."
                  className="!rounded-button border-gray-300 text-sm"
                />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                block
                className="!rounded-button whitespace-nowrap cursor-pointer"
              >
                Send Message
              </Button>
              {submitted && <p className="text-green-600 mt-2">Message sent! (Demo only)</p>}
            </Form>
          </div>
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900">Contact Information</h3>
            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MailOutlined className="text-blue-600 text-lg" />
                </div>
                <div>
                  <span className="text-gray-600 block">Email</span>
                  <span className="text-gray-900 font-medium">vocongnam172@email.com</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <PhoneOutlined className="text-green-600 text-lg" />
                </div>
                <div>
                  <span className="text-gray-600 block">Phone</span>
                  <span className="text-gray-900 font-medium">(+84)34 7587 212 </span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-map-marker-alt text-purple-600 text-lg"></i>
                </div>
                <div>
                  <span className="text-gray-600 block">Location</span>
                  <span className="text-gray-900 font-medium">Ho Chi Minh City, Vietnam</span>
                </div>
              </div>
            </div>
            <h4 className="text-xl font-semibold mb-6 text-gray-900">Follow Me</h4>
            <div className="flex gap-4">
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<LinkedinOutlined />}
                href="https://www.linkedin.com/in/v%C3%B5-c%C3%B4ng-nam-00a192326/"
                target="_blank"
                className="cursor-pointer"
              />
              <Button
                shape="circle"
                size="large"
                icon={<GithubOutlined />}
                href="https://github.com/NamVo17"
                target="_blank"
                className="cursor-pointer"
              />
              <Button
                shape="circle"
                size="large"
                className="cursor-pointer"
                href="https://www.facebook.com/nam.vo.332753"
                target="_blank"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 