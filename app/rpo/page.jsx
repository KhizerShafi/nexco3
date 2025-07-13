"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import cs from '../../public/images/cs.JPG';
import pq from '../../public/images/pq.JPG';
import lg from '../../public/images/lg.JPG';
import cf from '../../public/images/cf.JPG';

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
      Our Streamlined Recruitment Process
    </h1>
    <h2 className="text-xl md:text-2xl font-semibold mb-4">
      From Search to Selection, We Power Every Step
    </h2>
    <p className="max-w-3xl mx-auto text-lg">
      Our RPO workflow guarantees a streamlined process, from candidate sourcing to successful onboarding.
      With meticulous management at every stage, we ensure the efficient and effective.
    </p>
  </motion.div>
</section>

      {/* CV Sourcing Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">CV Sourcing</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Nexco Outsourcing Ltd simplifies hiring with focused CV Sourcing. We provide fresh CVs from leading job boards, relevant LinkedIn profiles, and complete candidate details.
            It’s an easy way to save time, widen your reach, and find the right talent faster.
          </p>
          <h4 className="text-blue-600 font-semibold mb-3">Job Boards We Use</h4>
          <div className="flex flex-wrap gap-4">
            {[
              'Reed', 'CV Library', 'Total Jobs', 'Monster', 'Indeed', 'LinkedIn',
              'CW Jobs', 'Dice', 'Career Builder', 'E-Financial Careers'
            ].map(board => (
              <span key={board} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">
                {board}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:ml-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
              src={cs}
              alt="CV Sourcing"
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Pre-Qualification Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:mr-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
              src={pq}
              alt="Pre Qualification Interview"
              layout="responsive"
              className="rounded-xl"
            />
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
            <h2 className="text-3xl font-bold text-gray-800">Pre Qualification</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
           Pre-Qualification Service goes beyond basic CV sourcing by directly engaging with candidates to confirm their interest, availability, and alignment with your job roles. We ensure that every profile you receive is not only qualified on paper but also motivated and ready to proceed, reducing time-to-hire and increasing placement success.
          </p>
          <h4 className="text-blue-600 font-semibold mb-3">Key Features</h4>
          <div className="flex flex-wrap gap-4">
            <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">Candidate Sourcing</span>
            <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">Outreach & Engagement</span>
            <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">Response Assurance</span>
            <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">Ready-to-Interview Candidates</span>
          </div>
        </div>
      </section>

      {/* Lead Generation Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-4h6v4m0 0v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4m6 0h3m-9 0h3" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Lead Generation</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Our Lead Generation service delivers high-quality leads with verified contact details, company insights, lead status, and source info—all time-stamped and CRM-ready. We can also upload leads directly into your CRM, making the process seamless and efficient.
          </p>
          <h4 className="text-blue-600 font-semibold mb-3">Lead Generation Tools</h4>
          <div className="flex flex-wrap gap-4">
            {[
              'Zoom Info', 'Apollo', 'Lusha', 'Skrapp.io', 'Contact out', 'Snov.io',
              'RocketReach', 'LinkedIn Sales Navigator', 'sSalesQL', 'Nymeria'
            ].map(tool => (
              <span key={tool} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:ml-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
              src={lg}
              alt="Lead Generation"
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* CV Formatting Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:mr-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image
              src={cf}
              alt="CV Formatting"
              layout="responsive"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-blue-500 p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">CV Formatting</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            Our CV Formatting service transforms raw resumes into polished, recruiter-ready documents. We ensure consistency in structure, optimize for applicant tracking systems (ATS), and can include your agency’s branding for a professional touch. Perfect for recruitment teams handling large volumes or looking to present candidates in the best possible light.
          </p>
          <h4 className="text-blue-600 font-semibold mb-3">Key Features</h4>
          <div className="flex flex-wrap gap-4">
            <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">Professional layout</span>
            <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">ATS-friendly formatting</span>
            <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">Custom logos and headers</span>
            <span className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">Bulk processing</span>
          </div>
        </div>
      </section>
    </div>
  );
}
