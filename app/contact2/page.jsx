// "use client";

// import { useState } from "react";
// import { motion, useScroll, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Mail,
//   MapPin,
//   Phone,
//   CheckCircle,
// } from "lucide-react";

// // Particle Component
// const Particle = ({ delay = 0 }) => (
//   <motion.div
//     className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
//     initial={{ opacity: 0, scale: 0 }}
//     animate={{
//       opacity: [0, 1, 0],
//       scale: [0, 1, 0],
//       x: [0, Math.random() * 200 - 100],
//       y: [0, Math.random() * 200 - 100],
//     }}
//     transition={{
//       duration: 3,
//       delay,
//       repeat: Number.POSITIVE_INFINITY,
//       repeatDelay: Math.random() * 2,
//     }}
//     style={{
//       left: `${Math.random() * 100}%`,
//       top: `${Math.random() * 100}%`,
//     }}
//   />
// );

// export default function ContactPage() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     services: "",
//     email: "",
//     phone: "",
//     requirements: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const { name, company, services, email, phone, requirements } = formData;

//     const subject = encodeURIComponent("New Inquiry from Website Form");
//     const body = encodeURIComponent(
//       `Hi NexCo Team,

// You have received a new inquiry from your website.

// Name: ${name}
// Company: ${company}
// Email: ${email}
// Phone: ${phone}
// Interested Services: ${services}

// Requirements:
// ${requirements}

// Thanks!
// `
//     );

//     const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Info@nexcooutsourcing.com&su=${subject}&body=${body}`;
//     window.open(gmailUrl, "_blank");

//     setIsSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900 overflow-x-hidden">
//       <main className="pt-24 pb-16">
//         <div className="container mx-auto px-4 py-10">
//           {/* Header Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <motion.h1
//               className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//             >
//               NexCo Outsourcing
//             </motion.h1>
//             <motion.p
//               className="text-xl md:text-2xl text-gray-600 mb-4"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               Your Trusted Back-Office Partner for Recruitment Agencies
//             </motion.p>
//           </motion.div>

//           {/* Form Section with Background */}
//           <div className="relative max-w-4xl mx-auto rounded-2xl shadow-xl overflow-hidden">
//             {/* Background Image */}
//             <div className="absolute inset-0">
//               <img
//                 src="/images/contact.jpg" // Replace with your image path
//                 alt="Contact background"
//                 className="w-full h-full object-cover opacity-30"
//               />
//               <div className="absolute inset-0 bg-white/50" />
//             </div>

//             {/* Foreground Form */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="relative z-10 p-8 md:p-12"
//             >
//               <motion.h2
//                 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.8 }}
//               >
//                 Let's chat
//               </motion.h2>

//               <div className="mb-8">
//                 <p className="text-gray-600 mb-2">Fill in the form below:</p>
//                 <p className="text-sm text-orange-500">
//                   * denotes a required field
//                 </p>
//               </div>

//               <AnimatePresence mode="wait">
//                 {!isSubmitted ? (
//                   <motion.form
//                     key="form"
//                     onSubmit={handleSubmit}
//                     className="space-y-8"
//                     initial={{ opacity: 1 }}
//                     exit={{ opacity: 0, y: -20 }}
//                   >
//                     {/* Name */}
//                     <div className="flex flex-wrap items-center gap-2 text-lg text-gray-700">
//                       <span>Hi! My name is</span>
//                       <div className="flex-1 min-w-[250px]">
//                         <Input
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           placeholder="enter your name here*"
//                           required
//                           className="border-0 border-b-2 focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
//                         />
//                       </div>
//                     </div>

//                     {/* Company */}
//                     <div className="flex flex-wrap items-center gap-2 text-lg text-gray-700">
//                       <span>and I represent</span>
//                       <div className="flex-1 min-w-[300px]">
//                         <Input
//                           name="company"
//                           value={formData.company}
//                           onChange={handleInputChange}
//                           placeholder="your recruitment agency / company name"
//                           className="border-0 border-b-2 focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
//                         />
//                       </div>
//                     </div>

//                     {/* Services */}
//                     <div>
//                       <p className="text-lg text-gray-700 mb-2">
//                         I'm interested in your services, especially
//                       </p>
//                       <Input
//                         name="services"
//                         value={formData.services}
//                         onChange={handleInputChange}
//                         placeholder="CV Sourcing, CV Formatting, Lead Generation..."
//                         className="border-0 border-b-2 focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
//                       />
//                     </div>

//                     {/* Email */}
//                     <div className="flex flex-wrap items-center gap-2 text-lg text-gray-700">
//                       <span>You can reach me on email at</span>
//                       <div className="flex-1 min-w-[250px]">
//                         <Input
//                           name="email"
//                           type="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           placeholder="email@example.com*"
//                           required
//                           className="border-0 border-b-2 focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
//                         />
//                       </div>
//                     </div>

//                     {/* Phone */}
//                     <div className="flex flex-wrap items-center gap-2 text-lg text-gray-700">
//                       <span>or, via phone on</span>
//                       <div className="flex-1 min-w-[250px]">
//                         <Input
//                           name="phone"
//                           type="tel"
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           placeholder="enter your phone number here*"
//                           required
//                           className="border-0 border-b-2 focus:border-orange-500 rounded-none bg-transparent px-0 py-2 text-lg placeholder:text-gray-400 focus-visible:ring-0 transition-all duration-300"
//                         />
//                       </div>
//                     </div>

//                     {/* Requirements */}
//                     <div>
//                       <p className="text-lg text-gray-700 mb-4">
//                         Here's a bit more about what I need:
//                       </p>
//                       <Textarea
//                         name="requirements"
//                         value={formData.requirements}
//                         onChange={handleInputChange}
//                         placeholder="Tell us briefly about your requirements (e.g. # of roles, type of candidates, etc.)"
//                         rows={4}
//                         className="border-2 focus:border-orange-500 rounded-lg bg-transparent px-4 py-3 text-lg placeholder:text-gray-400 resize-none transition-all duration-300"
//                       />
//                     </div>

//                     {/* Submit Button */}
//                     <div className="pt-4">
//                       <Button
//                         type="submit"
//                         className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300"
//                       >
//                         SUBMIT
//                       </Button>
//                     </div>
//                   </motion.form>
//                 ) : (
//                   <motion.div
//                     key="success"
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     className="text-center py-12"
//                   >
//                     <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
//                       <CheckCircle className="w-10 h-10 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-green-600 mb-4">
//                       Message Sent Successfully!
//                     </h3>
//                     <p className="text-gray-600 mb-6">
//                       Thank you for reaching out. We'll get back to you within
//                       24 hours.
//                     </p>
//                     <Button
//                       onClick={() => setIsSubmitted(false)}
//                       variant="outline"
//                       className="border-orange-500 text-orange-500 hover:bg-orange-50"
//                     >
//                       Send Another Message
//                     </Button>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           </div>

//           {/* Contact Info Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 2.0 }}
//             className="mt-16 text-center"
//           >
//             <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
//               {[
//                 {
//                   icon: <MapPin className="w-6 h-6" />,
//                   text: "182-189 High Street North, East Ham, London",
//                 },
//                 {
//                   icon: <Mail className="w-6 h-6" />,
//                   text: "Info@nexcooutsourcing.com",
//                 },
//                 {
//                   icon: <Phone className="w-6 h-6" />,
//                   text: "+44 (0) 20 7123 4567",
//                 },
//               ].map((item, index) => (
//                 <motion.div
//                   key={index}
//                   whileHover={{ y: -5 }}
//                   className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-200"
//                 >
//                   <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
//                     <div className="text-orange-500">{item.icon}</div>
//                   </div>
//                   <p className="text-gray-600 text-center">{item.text}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </main>
//     </div>
//   );
// }

















"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    services: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, company, services, email, phone, requirements } = formData;

    const subject = encodeURIComponent("New Inquiry from Website Form");
    const body = encodeURIComponent(
      `Hi NexCo Team,

You have received a new inquiry from your website.

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}
Interested Services: ${services}

Requirements:
${requirements}

Thanks!`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Info@nexcooutsourcing.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, "_blank");

    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 py-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 className="text-4xl md:text-6xl font-bold mb-4">
              NexCo Outsourcing
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-gray-600">
              Your Trusted Back-Office Partner for Recruitment Agencies
            </motion.p>
          </motion.div>

          {/* Contact Section */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Let's Chat
              </motion.h2>

              <div className="mb-6">
                <p className="text-gray-600 mb-1">Fill in the form below:</p>
                <p className="text-sm text-orange-500">
                  * denotes a required field
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name*"
                      required
                    />
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company / Recruitment Agency"
                    />
                    <Input
                      name="services"
                      value={formData.services}
                      onChange={handleInputChange}
                      placeholder="Interested services (e.g. CV Sourcing)"
                    />
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email*"
                      required
                    />
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number*"
                      required
                    />
                    <Textarea
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements"
                      rows={4}
                    />
                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg"
                    >
                      Submit
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We’ll be in touch shortly.
                    </p>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="outline"
                      className="border-orange-500 text-orange-500 hover:bg-orange-50"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>


            {/* Image Section */}
            <div className="w-full h-[400px] md:h-auto">
              <img
                src="/images/contact.jpg"
                alt="Contact"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Form Section */}
            
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: <MapPin className="w-6 h-6" />,
                  text: "182-189 High Street North, East Ham, London",
                },
                {
                  icon: <Mail className="w-6 h-6" />,
                  text: "Info@nexcooutsourcing.com",
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  text: "+44 (0) 796160600 3",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-gray-100"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3 text-orange-500">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 text-center">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
