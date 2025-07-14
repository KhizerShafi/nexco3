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
      <section className="text-white pt-32 pb-16 px-4 text-center relative overflow-hidden" style={{ backgroundColor: '#E6560C'}}> 
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-block bg-[#D3500B] text-sm font-medium px-4 py-1 rounded-full mb-4">
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

      {/* Sections */}
      {[
        {
          title: "CV Sourcing",
          description: "Nexco Outsourcing Ltd simplifies hiring with focused CV Sourcing...",
          highlight: "Job Boards We Use",
          highlights: [
            'Reed', 'CV Library', 'Total Jobs', 'Monster', 'Indeed', 'LinkedIn',
            'CW Jobs', 'Dice', 'Career Builder', 'E-Financial Careers'
          ],
          image: cs,
          flip: false,
          iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        },
        {
          title: "Pre Qualification",
          description: "Pre-Qualification Service goes beyond basic CV sourcing...",
          highlight: "Key Features",
          highlights: [
            'Candidate Sourcing', 'Outreach & Engagement', 'Response Assurance', 'Ready-to-Interview Candidates'
          ],
          image: pq,
          flip: true,
          iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        },
        {
          title: "Lead Generation",
          description: "Our Lead Generation service delivers high-quality leads...",
          highlight: "Lead Generation Tools",
          highlights: [
            'Zoom Info', 'Apollo', 'Lusha', 'Skrapp.io', 'Contact out', 'Snov.io',
            'RocketReach', 'LinkedIn Sales Navigator', 'sSalesQL', 'Nymeria'
          ],
          image: lg,
          flip: false,
          iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-4h6v4m0 0v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4m6 0h3m-9 0h3" />
        },
        {
          title: "CV Formatting",
          description: "Our CV Formatting service transforms raw resumes into polished documents...",
          highlight: "Key Features",
          highlights: [
            'Professional layout', 'ATS-friendly formatting', 'Custom logos and headers', 'Bulk processing'
          ],
          image: cf,
          flip: true,
          iconPath: <path strokeLinecap="round" strokeLinejoin="round" d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" />
        }
      ].map((section, idx) => (
        <section
          key={idx}
          className={`flex flex-col ${section.flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8`}
        >
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:mr-10">
            <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Image
                src={section.image}
                alt={section.title}
                layout="responsive"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center mb-5">
              <div className="bg-[#E4540C] p-3 rounded-md text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {section.iconPath}
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{section.title}</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {section.description}
            </p>
            <h4 className="text-[#D3500B] font-semibold mb-3">{section.highlight}</h4>
            <div className="flex flex-wrap gap-4">
              {section.highlights.map(item => (
                <span key={item} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
