import React from 'react';

const TermsConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white space-y-10">
      <h1 className="text-4xl font-bold text-orange-500 mt-16 py-15">Terms & Conditions</h1>
      <p className="text-sm text-gray-400">Last updated: 2024</p>
      <p>
        Welcome to Nexco Outsourcing. By using our services, you agree to the terms outlined below.
        Please review them carefully. If you do not agree, please do not use our services.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🏢 Company Details</h2>
        <ul className="list-disc pl-5">
          <li><strong>Nexco Outsourcing LTD</strong> — Registered in the United Kingdom, Company Number: 15076384</li>
          <li><strong>Nexco Outsourcing LLC</strong> — Registered in Montana, United States, Filing Number: C1489023</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">✅ What We Offer</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-orange-300">For Companies:</h3>
            <ul className="list-disc pl-5">
              <li>CV Sourcing & Formatting</li>
              <li>Candidate Screening</li>
              <li>Job Lead Generation</li>
              <li>LinkedIn Search Support</li>
              <li>Back-office Recruitment Support</li>
              <li>Job Posting & Vacancy Promotion</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-orange-300">For Job Seekers:</h3>
            <ul className="list-disc pl-5">
              <li>CV Formatting & Optimization</li>
              <li>Job Application Assistance</li>
              <li>Job Matching & Placement Services</li>
              <li>Interview Scheduling Support</li>
            </ul>
            <p className="mt-2 text-sm text-gray-300">Note: We do not charge candidates for job placement.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">💳 Payments</h2>
        <ul className="list-disc pl-5">
          <li>Business clients are invoiced based on their selected service plan.</li>
          <li>All payments must be made in advance unless otherwise agreed.</li>
          <li>Trials and discounts are non-refundable.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🔁 Refunds & Cancellation</h2>
        <ul className="list-disc pl-5">
          <li>Refunds are offered only if services were not delivered as per agreement.</li>
          <li>Clients must request a refund within 7 days of service delivery.</li>
          <li>Job placement services for candidates are free and not subject to payment or refund.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🔒 Confidentiality & Data Privacy</h2>
        <ul className="list-disc pl-5">
          <li>All information shared by clients and candidates is strictly confidential.</li>
          <li>We comply with UK GDPR and US data protection laws.</li>
          <li>Your data is never sold or shared without your consent.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">📄 Ownership of Work</h2>
        <ul className="list-disc pl-5">
          <li>All deliverables (e.g. CVs, reports) become the client’s property after full payment.</li>
          <li>Nexco branding and materials remain our intellectual property.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🧑‍💼 Recruitment Disclaimer</h2>
        <ul className="list-disc pl-5">
          <li>Nexco Outsourcing acts as a recruitment support service and job match facilitator.</li>
          <li>We do not guarantee job placement for every candidate.</li>
          <li>Job seeker success depends on experience, skills, availability, and market demand.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">⚠️ Limitation of Liability</h2>
        <ul className="list-disc pl-5">
          <li>We are not responsible for indirect or consequential losses.</li>
          <li>Our maximum liability is limited to the amount paid for the specific service.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">⏳ Termination</h2>
        <ul className="list-disc pl-5">
          <li>Either party may terminate the agreement with 7 days’ written notice.</li>
          <li>Outstanding invoices must be cleared before service closure.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">⚖️ Jurisdiction</h2>
        <ul className="list-disc pl-5">
          <li><strong>UK Clients:</strong> governed by England & Wales law.</li>
          <li><strong>US Clients:</strong> governed by the laws of Montana, USA.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">📬 Contact</h2>
        <ul className="list-disc pl-5">
          <li>Email (UK Office): <a href="mailto:info@nexcooutsourcing.com" className="text-orange-300 underline">info@nexcooutsourcing.com</a></li>
          <li>Email (USA Office): <a href="mailto:contact@nexcooutsourcing.com" className="text-orange-300 underline">contact@nexcooutsourcing.com</a></li>
        </ul>
        <p className="mt-4">Thank you for trusting Nexco Outsourcing. We’re here to support your growth — whether you're building a team or finding your next role.</p>
      </section>
    </div>
  );
};

export default TermsConditions;
