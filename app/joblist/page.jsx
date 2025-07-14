"use client"
import { motion } from "framer-motion";
import React from "react";

// Job data array
const jobs = [
  {
    id: 1,
    title: "Senior Mechanical Engineer, Frankfurt",
    sector: "Building & Construction",
    location: "Europe",
    type: "Permanent",
    description:
      "Nexco client is an international design and build main contractor, specialising in large commercial and industrial buildings. They are looking to hire a Senior Mechanical Engineer with experience in HVAC works to join their...",
  },
  {
    id: 2,
    title: "Site Supervisor, Berlin",
    sector: "Building & Construction",
    location: "Germany",
    type: "Contract",
    description:
      "We are seeking a skilled Site Supervisor to manage construction activities on-site. Ideal for candidates with experience managing large teams and schedules...",
  },
  // Add more job objects here
];

const JobsPage = () => {
  return (
    <main className="min-h-screen bg-white text-[#111827]">
    
    <section className="bg-[#E4540C] text-white py-24 mt-10 flex items-center justify-center">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className="text-4xl font-bold">Latest Jobs</h1>
  </motion.div>
</section>

      {/* Job Cards Container */}
      <div className="max-w-5xl mx-auto px-4 py-12 mb-6 space-y-10">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border-2 border-[#D1D5DB] rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <p className="text-sm text-[#111827] font-medium mb-1">
              {job.sector}
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#111827] mb-6">
              {job.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 text-sm mb-6">
              <div>
                <span className="font-semibold">Location:</span>{" "}
                <span className="text-[#E4540C]">{job.location}</span>
              </div>
              <div>
                <span className="font-semibold">Job Type:</span>{" "}
                <span className="text-[#E4540C]">{job.type}</span>
              </div>
              <div>
                <span className="font-semibold">Job Sector:</span>{" "}
                <span className="text-[#E4540C]">{job.sector}</span>
              </div>
            </div>

            <hr className="mb-6 border-[#D1D5DB]" />

            <p className="text-[#111827] mb-6">{job.description}</p>

            {/* <button className="bg-[#E4540C] hover:bg-[#c34408] text-white font-semibold py-2 px-6 rounded-md">
              Apply Now
            </button> */}
<a href="mailto:career@nexcooutsourcing.com">
  <button className="bg-[#E4540C] hover:bg-[#c34408] text-white font-semibold py-2 px-6 rounded-md">
    Apply Now
  </button>
</a>


          </div>
        ))}
      </div>
    </main>
  );
};

export default JobsPage;
