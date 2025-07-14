'use client';
import { motion } from "framer-motion";
import React from 'react';
import {
  DollarSign,
  Target,
  Shield,
  RefreshCcw,
  Clock,
  UserCheck,
  Zap,
  BadgeCheck,
  CheckCircle,
} from 'lucide-react';

const RecruitmentPage = () => {
  const orange = '#FB923C';
  const white = '#FFFFFF';
  const accent1 = '#D3500B';
  const accent2 = '#E6560C';
  const accent3 = '#E4540C';

  const whyChooseFeatures = [
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      title: 'Zero Initial Fees',
      label: 'Start Risk-Free',
      description:
        "No upfront costs — start hiring without financial risk. We only charge once you're fully satisfied with the outcome.",
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Lowest Placement Fee in the Market',
      label: 'Best Value',
      description:
        'We offer one of the most competitive rates in the industry, without compromising on quality or service.',
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: '6-Month Rebate Policy',
      label: '100% Guaranteed',
      description:
        "Peace of mind, guaranteed. If a hire doesn't work out within 6 months, we offer a prorated refund or a free replacement.",
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-white" />,
      title: 'Flexible Payment Plans',
      label: 'Cash Flow Friendly',
      description:
        'Tailored payment structures to support your cash flow and hiring volume — we grow with your business.',
    },
  ];

  const recruitmentSolutions = [
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: 'One-Invoice Simplicity',
      description:
        "Hire first, pay later — you're invoiced only after the candidate successfully completes one full month and continues into the second month without resigning.",
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: '100% Qualified Candidates',
      description:
        'Every candidate is pre-screened and matched based on your job specs — saving you time and ensuring better hires.',
    },
    {
      icon: <Zap className="w-6 h-6 text-white" />,
      title: 'End-to-End Recruitment Power',
      description:
        'From sourcing and screening to onboarding and retention strategy — we handle everything.',
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-white" />,
      title: 'Hired with Confidence, Backed by Assurance',
      description:
        'We guarantee our placements. If the hire leaves or underperforms in the first month, we replace them free.',
    },
  ];

  const bulletPoints = [
    'Zero upfront investment required',
    'Pay only after successful placement',
    '6-month satisfaction guarantee',
  ];

  const valueProps = [
    {
      title: 'Dedicated Account Manager',
      description:
        'You’ll have a single point of contact who understands your hiring goals and provides personalized support every step.',
    },
    {
      title: 'Rapid Turnaround Time',
      description:
        'Access qualified candidates within days — not weeks. Our efficient processes accelerate hiring without sacrificing quality.',
    },
    {
      title: 'Scalable Recruitment for Any Role',
      description:
        "Whether you're hiring one position or building an entire team, we scale to your needs with precision and service.",
    },
    {
      title: 'Your Hiring Partner, On Demand',
      description:
        'We eliminate the need for a costly in-house team. Only pay when you need us — get expert hiring at a fraction of the cost.',
    },
  ];

  return (
    <main className="text-[#3B475D]">
      {/* Header Section */}
      <section
        className="py-24 px-4 text-white text-center relative overflow-hidden"
        style={{ backgroundColor: '#E6560C'}}
      >
        <div
          className="absolute top-6 right-6 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md"
          style={{ backgroundColor: accent1 }}
        >
          🎯 Our Services
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            360 Recruitment Solutions
          </h1>
          <h2 className="text-2xl font-semibold mb-6">
            From Engagement to Employment, We Lead Every Stage
          </h2>
          <p className="text-lg leading-relaxed">
            Our holistic process ensures precision and pace from identifying
            talent to offer negotiation and seamless onboarding.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Ultimate Outsourcing for Your Recruitment Needs?
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            Revolutionary pricing model that puts your success first. No hidden
            fees — just results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseFeatures.map((feature, index) => (
              <div
                key={index}
                className="transition-transform transform hover:scale-105 duration-300 bg-gradient-to-br from-gray-50 to-white border rounded-xl shadow-sm p-6 text-left relative"
              >
                <div
                  className="absolute top-4 right-4 text-white text-xs px-3 py-1 rounded-full font-semibold shadow"
                  style={{ backgroundColor: accent1 }}
                >
                  {feature.label}
                </div>
                <div
                  className="rounded-lg w-12 h-12 flex items-center justify-center mb-4"
                  style={{ backgroundColor: orange }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Solution Section */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Complete Recruitment Solution
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            From sourcing to retention, we handle every aspect of your hiring
            needs with precision and care.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            {recruitmentSolutions.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm flex items-start space-x-4"
              >
                <div
                  className="rounded-md p-3 flex items-center justify-center"
                  style={{ backgroundColor: orange }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Success Is Our Priority Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Your Success is Our Priority
            </h2>
            <p className="text-gray-600 mb-6">
              We become your dedicated recruitment partner — no overhead, no
              hassle.
            </p>
            <div className="space-y-4">
              {valueProps.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-lg flex items-start space-x-3"
                >
                  <CheckCircle className="mt-1" size={20} color={accent3} />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className="rounded-2xl p-8 shadow-lg text-center h-fit self-center text-white"
            style={{
              background: `linear-gradient(to bottom right, ${orange}, ${accent2})`,
            }}
          >
            <h3 className="text-xl font-semibold mb-4">
              Ready to Transform Your Hiring?
            </h3>
            <ul className="space-y-2 text-left mb-6">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@nexcooutsourcing.com&su=Inquiry&body=Hi%20NexCo%20Team%2C%0A%0AI%27m%20interested%20in%20your%20services.%20Please%20get%20in%20touch.%0A%0AThanks!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="bg-white text-[#D3500B] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
              >
                Get Started Today
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RecruitmentPage;
