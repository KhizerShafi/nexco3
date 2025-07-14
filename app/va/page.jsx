"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import db from '../../public/images/va/db.JPG';
import dr from '../../public/images/va/dr.JPG';
import ds from '../../public/images/va/ds.JPG';

export default function RecruitmentSection() {
  return (
    <div className="w-full">
      {/* Header */}
      <section
        className="text-white pt-32 pb-16 px-4 text-center relative overflow-hidden"
       style={{ backgroundColor: '#E6560C'}}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-block bg-white text-[#D3500B] text-sm font-medium px-4 py-1 rounded-full mb-4 shadow-sm">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            End-to-End Virtual Assistance Workflow
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">
            From Task Delegation to Execution, We Handle It All
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white">
            Our seamless VA process empowers productivity matching clients with skilled assistants, defining priorities, and ensuring timely, high-quality delivery. Every interaction is managed with precision to optimize efficiency and free up your core focus.
          </p>
        </motion.div>
      </section>

      {/* Section Template */}
      {[
        {
          title: "Dedicated Business Development Manager",
          text: "We provide dedicated Business Development VAs who operate like your offshore Business Development Manager, working solely on growing your client base. The ultimate goal is to deliver interested clients and warm leads, helping grow your business while you focus on closing deals.",
          features: [
            'Cold Calling & Outbound Lead Generation',
            'Email Campaigns & Follow-Ups',
            'LinkedIn Prospecting & Outreach',
            'CRM Management & Pipeline Tracking',
            'Booking Meetings & Confirmations',
            'Daily Prospect Reports with Status Updates',
            'Lead Follow-Ups & Next-Step Scheduling',
          ],
          img: db,
          reverse: true,
        },
        {
          title: "Dedicated Recruitment Consultant",
          text: "Our Dedicated Recruitment Consultants work full-time as a seamless extension of your team. They handle end-to-end candidate sourcing, engagement, and screening using your job boards, LinkedIn Recruiter, and GDPR-compliant tools.",
          features: [
            'Advanced Boolean Search & Keyword Targeting',
            'Data Tagging & System Optimization',
            'Initial Candidate Screening & Outreach',
            'LinkedIn & Email Engagement',
            'Client Communication & First-Round Calls',
            'Meeting Coordination & Weekly Reporting',
            'Prospect Research & Lead Generation',
          ],
          img: dr,
          reverse: false,
        },
        {
          title: "Dedicated Social Media Manager",
          text: "Our social media VAs manage your brand's presence across LinkedIn, Instagram, Facebook, and more. They create engaging content, schedule posts, manage communication, and provide weekly performance insights.",
          features: [
            'Content Creation (Graphics, Captions, Hashtags)',
            'Inbox, Comments & DM Management',
            'Trend Monitoring & Analytics Tracking',
            'Consistent Brand Voice Execution',
            'Scheduling Across Major Platforms',
            'Weekly Performance Reporting',
          ],
          img: ds,
          reverse: true,
        }
      ].map(({ title, text, features, img, reverse }, idx) => (
        <section
          key={idx}
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8`}
        >
          <div className="lg:w-1/2 w-full">
            <div className="flex items-center mb-5">
              <div className="bg-[#E6560C] p-3 rounded-md text-white mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                     viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-6">{text}</p>
            <h4 className="text-[#FB923C] font-semibold mb-3">Key Features</h4>
            <div className="flex flex-wrap gap-3">
              {features.map((item) => (
                <span
                  key={item}
                  className="bg-[#FFF7F2] border border-[#FB923C] text-[#D3500B] px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:px-10">
            <div className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300">
              <Image src={img} alt={title} layout="responsive" className="rounded-xl" />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

