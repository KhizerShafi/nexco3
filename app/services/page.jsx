"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaRegHandshake,
  FaRocket,
  FaUserTie,
  FaCode,
  FaUsers,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const services = [
  {
    icon: <FaRegHandshake className="text-[#D3500B] text-2xl" />,
    title: "Recruitment Process Outsourcing",
    description: "End-to-end hiring solutions managed seamlessly.",
    link: "/rpo",
  },
  {
    icon: <FaRocket className="text-[#D3500B] text-2xl" />,
    title: "Business Development",
    description: "Fuel your pipeline with focused outreach and leads.",
    link: "/bd",
  },
  {
    icon: <FaUserTie className="text-[#D3500B] text-2xl" />,
    title: "Virtual Assistant",
    description: "Skilled remote professionals dedicated to your tasks.",
    link: "/va",
  },
  {
    icon: <FaCode className="text-[#D3500B] text-2xl" />,
    title: "Web Development",
    description: "Modern, responsive websites for brand growth.",
    link: "/web-development",
  },
  {
    icon: <FaUsers className="text-[#D3500B] text-2xl" />,
    title: "360 Recruitment",
    description: "Full-cycle recruitment from sourcing to onboarding.",
    link: "/360",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white text-gray-800">
      {/* Orange Header Section */}
      <section
        className="text-white pt-20 pb-16 px-4 text-center relative overflow-hidden"
        style={{ backgroundColor: '#E6560C'}}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block bg-[#D3500B] text-sm font-medium px-4 py-1 rounded-full mb-4">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive BPO Services for Growth
          </h1>
          <p className="max-w-3xl mx-auto text-lg">
            Streamline your operations and accelerate your business growth with
            our expert outsourcing services designed to deliver exceptional
            results and drive efficiency.
          </p>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center py-24">
        {/* Image Section */}
        <div className="rounded-3xl overflow-hidden shadow-lg h-[550px] w-full">
          <img
            src="/images/services/ser.JPG"
            alt="Service Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Service Tabs Section */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            <FaUsers className="text-[#D3500B] text-2xl" />
            <h2 className="text-[#D3500B] font-bold text-lg uppercase">
              Services
            </h2>
          </div>

          <h4 className="text-2xl md:text-3xl font-semibold mb-2">
            Talent Acquisition Excellence
          </h4>
          <p className="text-gray-600 mb-6">
            We combine industry expertise, smart technology, and an extensive
            talent network to help you hire the right people, faster and more
            efficiently. See our services below:
          </p>

          <div className="space-y-4 w-full">
            {services.map((service, idx) => (
              <Link key={idx} href={service.link} className="block">
                <div className="flex justify-between items-center bg-gray-100 hover:bg-[#FFE2D1] hover:scale-[1.02] transition-all duration-200 px-6 py-5 rounded-xl shadow-sm w-full">
                  <div className="flex items-start gap-4 text-left">
                    {service.icon}
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <IoIosArrowForward className="text-[#E6560C] text-xl" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
