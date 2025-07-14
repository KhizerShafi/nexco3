"use client";
import { motion } from "framer-motion";
import Image from 'next/image';
import as from '../../public/images/bd/as.JPG';
import crs from '../../public/images/bd/crs.JPG';
import oc from '../../public/images/bd/oc.JPG';
import ps from '../../public/images/bd/ps.JPG';

export default function RecruitmentSection() {
  return (
    <div className="w-full">
      {/* Header */}
     <section className=" text-white pt-32 pb-16 px-4 text-center relative overflow-hidden" style={{ backgroundColor: '#E6560C'}}>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <div className="inline-block bg-[#D3500B] text-sm font-medium px-4 py-1 rounded-full mb-4">
      Our Services
    </div>
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Strategic Business Development Framework
    </h1>
    <h2 className="text-xl md:text-2xl font-semibold mb-4">
      From Outreach to Alliance, We Drive Each Phase
    </h2>
    <p className="max-w-4xl mx-auto text-lg">
      This end-to-end approach delivers clarity and momentum from pinpointing leads to finalizing agreements and cultivating strong collaborations.
      Every phase is thoughtfully executed to maximise impact and accelerate expansion.
    </p>
  </motion.div>
</section>

      {/* Admin Support Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-[#FB923C] p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Admin Support</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
           Our Admin Support service helps keep your operations running smoothly. From managing schedules and emails to handling data and documentation, we take care of the day-to-day admin tasks so your team can focus on higher-value work.
          </p>
          <h4 className="text-[#E4540C] font-semibold mb-3">Key Areas</h4>
          <div className="flex flex-wrap gap-4">
            {['Leads Entry & Record Management', 'Calendar & Appointment Scheduling', 'Inbox & Communication Handling', 'Client Management'].map((item) => (
              <span key={item} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">{item}</span>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:ml-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image src={as} alt="Admin Support" layout="responsive" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Client Relationship Support Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:mr-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image src={crs} alt="Client Relationship Support" layout="responsive" className="rounded-xl" />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-[#FB923C] p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Client Relationship Support</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
           Our Client Relationship Support service ensures prospects and clients feel engaged and valued at every stage. From warm introductions to ongoing support, we help you strengthen relationships, boost retention, and maintain a professional client experience—while your team stays focused on delivering results.
          </p>
          <h4 className="text-[#E4540C] font-semibold mb-3">Key Features</h4>
          <div className="flex flex-wrap gap-4">
            {['Client Onboarding & Welcome Calls', 'Regular Check-ins for Interested Prospects', 'Query Handling & Ongoing Communication', 'Feedback Collection & Follow-Ups'].map((item) => (
              <span key={item} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Campaign Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-[#FB923C] p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-4h6v4m0 0v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4m6 0h3m-9 0h3" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Outreach Campaign</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
           Our Business Development Services are crafted to help you grow your client base, enter new markets, and drive revenue without the overheads of in-house hiring. Whether you're a startup, recruitment agency, or an established business looking to scale, our solution ensures you stay focused on delivery while we bring the business in.
          </p>
          <h4 className="text-[#E4540C] font-semibold mb-3">Key Features</h4>
          <div className="flex flex-wrap gap-4">
            {['Market Research', 'Email Marketing & Outreach Campaigns', 'Cold Calling & Prospect Nurturing', 'Interest Generation & Follow-Ups', 'Daily Reporting & Conversion to Client'].map((item) => (
              <span key={item} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">{item}</span>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:ml-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image src={oc} alt="Outreach Campaign" layout="responsive" className="rounded-xl" />
          </div>
        </div>
      </section>

      {/* Proposal and Assistance Section */}
      <section className="flex flex-col lg:flex-row items-center bg-white px-8 py-12 rounded-xl shadow-lg w-full max-w-[90rem] mx-auto mt-8">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 lg:mr-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105">
            <Image src={ps} alt="Proposal and Assistance" layout="responsive" className="rounded-xl" />
          </div>
        </div>
        <div className="lg:w-1/2 w-full">
          <div className="flex items-center mb-5">
            <div className="bg-[#FB923C] p-3 rounded-md text-white mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Proposal and Assistance</h2>
          </div>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
           We help you craft compelling, data-driven proposals tailored to your target audience. From research and formatting to follow-ups and automation, our support ensures your proposals stand out and reach the right people saving time and increasing chances of conversion.
          </p>
          <h4 className="text-[#E4540C] font-semibold mb-3">Key Features</h4>
          <div className="flex flex-wrap gap-4">
            {['Tailored Proposal Creation', 'Market Research & Competitor Insights', 'Proposal Submission & Follow-Ups', 'Automation Support & Template Setup'].map((item) => (
              <span key={item} className="bg-gray-100 px-5 py-2 rounded-full text-sm font-medium text-gray-700">{item}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}