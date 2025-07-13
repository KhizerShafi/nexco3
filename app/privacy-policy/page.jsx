import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-white space-y-10">
      <h1 className="text-4xl font-bold text-orange-400 mt-16 py-15">Privacy Policy</h1>
      <p className="text-sm text-orange-300">Last updated: 2024</p>
      <p>
        This Privacy Policy explains how Nexco Outsourcing LTD (UK) and Nexco Outsourcing LLC (USA) collect, use, and protect your personal data.
        By using our website or services, you consent to this policy.
      </p>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🏢 Who We Are</h2>
        <ul className="list-disc pl-5">
          <li><strong>Nexco Outsourcing LTD</strong> — Registered in the UK under company number 15076384</li>
          <li><strong>Nexco Outsourcing LLC</strong> — Registered in Montana, USA under filing number C1489023</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🔍 Information We Collect</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-orange-300">From Clients (Businesses):</h3>
            <ul className="list-disc pl-5">
              <li>Name, company name, contact info</li>
              <li>Billing details</li>
              <li>Job descriptions and hiring requirements</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-orange-300">From Candidates (Job Seekers):</h3>
            <ul className="list-disc pl-5">
              <li>Full name, contact info, location</li>
              <li>CVs, work history, education</li>
              <li>Job preferences and application records</li>
              <li>Communication records</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-orange-300">Automatically Collected (Website Users):</h3>
            <ul className="list-disc pl-5">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Cookies (for analytics)</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🎯 Why We Collect Your Data</h2>
        <ul className="list-disc pl-5">
          <li>Deliver recruitment and outsourcing services</li>
          <li>Match candidates with job opportunities</li>
          <li>Improve our services and website experience</li>
          <li>Process payments and manage accounts</li>
          <li>Send updates and service-related communications</li>
          <li>Meet legal or compliance requirements</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🔒 How We Protect Your Data</h2>
        <ul className="list-disc pl-5">
          <li>Data is stored on secure servers</li>
          <li>Access is restricted to authorized staff only</li>
          <li>We use encryption, firewalls, and strong passwords</li>
          <li>We do not sell or rent your personal data to third parties</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🤝 Sharing of Information</h2>
        <p>We may share your data only:</p>
        <ul className="list-disc pl-5">
          <li>With verified employers (for job seekers)</li>
          <li>With service providers helping us deliver our services (e.g., payment processors)</li>
          <li>When required by law or legal process</li>
        </ul>
        <p className="mt-2">We never sell your information for marketing purposes.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🌍 International Data Transfers</h2>
        <p>
          Your information may be transferred between the UK, USA, or other countries where we or our partners operate.
          We ensure all data transfers comply with applicable data protection laws.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">🍪 Cookies Policy</h2>
        <p>
          We use cookies to improve your browsing experience. You can control cookie preferences through your browser settings.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">👤 Your Rights (UK & EU Clients)</h2>
        <p>Under GDPR, you have the right to:</p>
        <ul className="list-disc pl-5">
          <li>Access your data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion (“right to be forgotten”)</li>
          <li>Object to processing</li>
          <li>Data portability</li>
        </ul>
        <p className="mt-2">
          To exercise your rights, email us at:{' '}
          <a href="mailto:privacy@nexcooutsourcing.uk" className="text-orange-300 underline">privacy@nexcooutsourcing.uk</a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">⏳ Data Retention</h2>
        <ul className="list-disc pl-5">
          <li>Client and candidate data is retained for up to 2 years after the last interaction</li>
          <li>You may request earlier deletion in writing</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">👶 Children’s Privacy</h2>
        <p>Our services are not intended for users under the age of 16. We do not knowingly collect data from minors.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">📝 Policy Updates</h2>
        <p>We may update this policy occasionally. Any changes will be posted here with a new “last updated” date.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-orange-400 mb-2">📬 Contact Us</h2>
        <ul className="list-disc pl-5">
          <li>Email (UK Office): <a href="mailto:privacy@nexcooutsourcing.uk" className="text-orange-300 underline">privacy@nexcooutsourcing.uk</a></li>
          <li>Email (USA Office): <a href="mailto:privacy@nexcooutsourcing.com" className="text-orange-300 underline">privacy@nexcooutsourcing.com</a></li>
        </ul>
        <p className="mt-4">Nexco Outsourcing is committed to protecting your privacy. Thank you for trusting us.</p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
