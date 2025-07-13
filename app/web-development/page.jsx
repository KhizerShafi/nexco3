"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import wd from '../../public/images/wd/wd.JPG';
import wa from '../../public/images/wd/wa.JPG';
import ae from '../../public/images/wd/ae.JPG';
//import header from '../../public/images/header.JPG';

export default function RecruitmentSection() {
  return (
    <div className="w-full">
      {/* Header */}
    <section className="text-white pt-32 pb-16 px-4 text-center relative overflow-hidden" style={{ backgroundColor: '#0090EA'}}>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="inline-block bg-blue-600 text-sm font-medium px-4 py-1 rounded-full mb-4">
      Our Services
    </div>
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Comprehensive RPO Services for Growth
    </h1>
    <p className="max-w-3xl mx-auto text-lg">
      Streamline your operations and accelerate your business growth with our expert outsourcing services designed to deliver exceptional results and drive efficiency.
    </p>
  </motion.div>
</section>

      {/* Business Development Manager Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Web Development</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
          Our Web Development services cover everything from sleek, responsive design to robust back-end functionality. Whether you need a simple business site, a custom platform, or an eCommerce solution, we build user-friendly, mobile-optimized websites that align with your brand and drive results.
          </p>
          <h4 className="text-blue-600 font-semibold mb-3">Key Features</h4>
          <div className="flex flex-wrap gap-4">
            {[
              'Custom Website Design & Development',
              'Responsive & Mobile-Friendly Layouts',
              'UI/UX Design for Better User Experience',
              'Front-End Development (HTML, CSS, JavaScript)',
              'Back-End Development & Database Integration',
              'Full-Stack Development Solutions',
              'CMS Integration (WordPress, etc.)',
              'eCommerce Website Development',
              'SEO-Ready & Optimized Code Structure',
            ].map((item) => (
              <span key={item} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">{item}</span>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:ml-10">
          <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <Image src={wd} alt="Business Development Manager" layout="responsive" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Recruitment Consultant Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:mr-10">
          <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <Image src={wa} alt="Dedicated Recruitment Consultant" layout="responsive" className="rounded-xl" />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Website Automation</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
          Our Website Automation services help streamline your online operations saving you time and improving user experience. From lead capture to automated follow-ups and integrations with your CRM or marketing tools, we turn your site into a smart, self-sufficient system.
          </p>
          <h4 className="text-blue-600 font-semibold mb-3">Key Features</h4>
          <div className="flex flex-wrap gap-4">
            {[
              'Automated Lead Capture & Form Responses',
              'Email & Newsletter Integration',
              'Analytics & Reporting Dashboards',
              'CRM & Third-Party Tool Integrations',
              'Chatbot Implementation for Instant Support',
              'Workflow Automation (Zaps, Triggers, APIs)',
          
            ].map((item) => (
              <span key={item} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Manager Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-4h6v4m0 0v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4m6 0h3m-9 0h3" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">AI Engineering</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
           Our AI Engineering services help you harness the power of artificial intelligence to automate processes, gain insights, and build smarter applications. Whether you're looking to develop custom AI solutions, integrate existing tools, or optimize data workflows, we deliver scalable and secure AI systems tailored to your business goals.
          </p>
          <h4 className="text-blue-600 font-semibold mb-3">Key Features</h4>
          <div className="flex flex-wrap gap-4">
            {[
           
  'Custom AI Model Development',
  'Machine Learning & Predictive Analytics',
  'Natural Language Processing (NLP)',
  'Data Collection, Cleaning & Training',
  'API Integration with AI Tools (e.g., ChatGPT, OpenAI, Google AI)',
  'Automation & Workflow Optimization',
  'AI-Powered Dashboards & Insights',
  'Ethical AI & Data Security Compliance'


            ].map((item) => (
              <span key={item} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">{item}</span>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:ml-10">
          <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
            <Image src={ae} alt="Dedicated Social Media Manager" layout="responsive" className="rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
