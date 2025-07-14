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
