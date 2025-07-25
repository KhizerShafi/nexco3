// "use client";
// import { motion } from "framer-motion";
// import { Users, Target, Zap, Globe, Award, Building } from "lucide-react";
// import Image from "next/image";

// function Service() {
//   return (
//     <section className="py-24 bg-gray-800/30" id="service">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
//             WHY <span className="text-orange-400">NEXCO OUTSOURCING</span>
//           </h2>
//           <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             NexCo Outsourcing — Connecting Global Talent with Your Business
//             Needs
//           </p>
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100px" }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"
//           />
//         </motion.div>

//         <div className="mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed"
//           >
//             At NexCo Outsourcing, we utilize our extensive networks, expertise,
//             and proven reputation to ensure you have access to the best
//             professionals when your business demands top talent — wherever you
//             operate globally.
//           </motion.p>
//         </div>

//         <div className="relative grid lg:grid-cols-2 gap-16 items-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="space-y-12">
//               <motion.div
//                 whileHover={{ scale: 1.02, x: 10 }}
//                 className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden"
//               >
//                 <motion.div
//                   className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"
//                   initial={{ height: 0 }}
//                   whileInView={{ height: "100%" }}
//                   transition={{ duration: 1, delay: 0.3 }}
//                 />
//                 <div className="flex items-center mb-6">
//                   <motion.div
//                     className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4"
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.8 }}
//                   >
//                     <Building className="w-6 h-6 text-orange-400" />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-orange-400">
//                   Recruitment Services (Permanent / Contract Hiring)
//                   </h3>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed text-lg mb-6">
//                 We help companies hire top talent across the UK and globally. From sourcing and screening to interview coordination and onboarding, our end-to-end recruitment services ensure you find the right candidate — fast.
//                 </p>
//                 <p className="text-gray-300 leading-relaxed text-lg ">
//                   Key Features
//                           <ul className="list-disc list-inside mt-2 space-y-1">
//           <li>End-to-End Hiring Support</li>
//           <li>Industry-Specific Talent Pools</li>
//           <li>Permanent & Contract Recruitment</li>
//           <li>Free Trial Available</li>
//           <li>Speed & Quality Guarantee</li>
//         </ul>
//                 </p>
                  

//               </motion.div>

//               <motion.div
//                 whileHover={{ scale: 1.02, x: 10 }}
//                 className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden"
//               >
//                 <motion.div
//                   className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"
//                   initial={{ height: 0 }}
//                   whileInView={{ height: "100%" }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 />
//                 <div className="flex items-center mb-6">
//                   <motion.div
//                     className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4"
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.8 }}
//                   >
//                     <Users className="w-6 h-6 text-orange-400" />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-orange-400">
//                     For Candidates
//                   </h3>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed text-lg">
//                   For job seekers looking to take the next step in their career,
//                   we simplify the recruitment journey. We match your skills and
//                   experience with roles that truly fit your talents, across
//                   industries and regions, without the typical recruitment
//                   hassles.
//                 </p>
//               </motion.div>
              
// <motion.div
//                 whileHover={{ scale: 1.02, x: 10 }}
//                 className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden"
//               >
//                 <motion.div
//                   className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"
//                   initial={{ height: 0 }}
//                   whileInView={{ height: "100%" }}
//                   transition={{ duration: 1, delay: 0.5 }}
//                 />
//                 <div className="flex items-center mb-6">
//                   <motion.div
//                     className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4"
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.8 }}
//                   >
//                     <Users className="w-6 h-6 text-orange-400" />
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-orange-400">
//                     For Our Clients
//                   </h3>
//                 </div>
//                 <p className="text-gray-300 leading-relaxed text-lg">
//                   We know that people are the heart of every successful
//                   organization. Whether you're a startup finding your footing or
//                   an established enterprise expanding your reach, we collaborate
//                   closely with you to build high-performing teams that help you
//                   achieve your goals.
//                 </p>
//                 <br></br>
//                 <p className="text-gray-300 leading-relaxed text-lg">
//                If you need to augment your recruitment with skilled CV
//                   sourcing, professional CV formatting, or dedicated virtual
//                   staffing support, NexCo Outsourcing is your trusted partner to
//                   make it happen efficiently and cost-effectively.
//                 </p>
//               </motion.div>


//             </div>
//           </motion.div>



//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="!h-72 lg:!h-full w-full"
//           >
//             <div className="relative h-full w-auto rounded-xl overflow-hidden">
//               <Image src="/images/office.jpeg" fill className="object-cover"/>
//             </div>
//           </motion.div>
//         </div>


        
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 transform -translate-y-1/2" />

//             {[
//               {
//                 icon: <Globe className="w-8 h-8" />,
//                 title: "Global Network",
//                 desc: "Worldwide talent access",
//                 color: "from-blue-500/20 to-blue-600/10",
//               },
//               {
//                 icon: <Target className="w-8 h-8" />,
//                 title: "Precision Matching",
//                 desc: "Perfect fit guaranteed",
//                 color: "from-green-500/20 to-green-600/10",
//               },
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Fast Delivery",
//                 desc: "Quick turnaround",
//                 color: "from-purple-500/20 to-purple-600/10",
//               },
//               {
//                 icon: <Award className="w-8 h-8" />,
//                 title: "Quality Assured",
//                 desc: "Top-tier professionals",
//                 color: "from-orange-500/20 to-orange-600/10",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
//                 className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-orange-500/20 text-center z-10 relative overflow-hidden`}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
//                   initial={{ x: "-100%" }}
//                   whileHover={{ x: "100%" }}
//                   transition={{ duration: 0.8 }}
//                 />
//                 <motion.div
//                   className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
//                   whileHover={{ rotate: 360, scale: 1.1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <div className="text-orange-400">{item.icon}</div>
//                 </motion.div>
//                 <h4 className="font-bold text-lg mb-2 relative z-10">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm text-gray-400 relative z-10">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Service;




// "use client";
// import { motion } from "framer-motion";
// import { Users, Target, Zap, Globe, Award, Building } from "lucide-react";
// import Image from "next/image";

// function Service() {
//   const sections = [
//     {
//       id: 1,
//       title: "Recruitment Services (Permanent / Contract Hiring)",
//       icon: <Building className="w-6 h-6 text-orange-400" />,
//       content: (
//         <>
//           <p className="text-gray-300 leading-relaxed text-lg mb-6">
//             We help companies hire top talent across the UK and globally. From sourcing and screening to interview coordination and onboarding, our end-to-end recruitment services ensure you find the right candidate — fast.
//           </p>
//           <p className="text-gray-300 leading-relaxed text-lg">
//             Key Features
//             <ul className="list-disc list-inside mt-2 space-y-1">
//               <li>End-to-End Hiring Support</li>
//               <li>Industry-Specific Talent Pools</li>
//               <li>Permanent & Contract Recruitment</li>
//               <li>Free Trial Available</li>
//               <li>Speed & Quality Guarantee</li>
//             </ul>
//           </p>
//         </>
//       ),
//       image: "/images/recruitment.jpg"
//     },
//     {
//       id: 2,
//       title: "For Candidates",
//       icon: <Users className="w-6 h-6 text-orange-400" />,
//       content: (
//         <p className="text-gray-300 leading-relaxed text-lg">
//           For job seekers looking to take the next step in their career,
//           we simplify the recruitment journey. We match your skills and
//           experience with roles that truly fit your talents, across
//           industries and regions, without the typical recruitment
//           hassles.
//         </p>
//       ),
//       image: "/images/candidate.jpg"
//     },
//     {
//       id: 3,
//       title: "For Our Clients",
//       icon: <Users className="w-6 h-6 text-orange-400" />,
//       content: (
//         <>
//           <p className="text-gray-300 leading-relaxed text-lg">
//             We know that people are the heart of every successful
//             organization. Whether you're a startup finding your footing or
//             an established enterprise expanding your reach, we collaborate
//             closely with you to build high-performing teams that help you
//             achieve your goals.
//           </p>
//           <br />
//           <p className="text-gray-300 leading-relaxed text-lg">
//             If you need to augment your recruitment with skilled CV
//             sourcing, professional CV formatting, or dedicated virtual
//             staffing support, NexCo Outsourcing is your trusted partner to
//             make it happen efficiently and cost-effectively.
//           </p>
//         </>
//       ),
//       image: "/images/client.jpg"
//     }
//   ];

//   return (
//     <section className="py-24 bg-gray-800/30" id="service">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
//             WHY <span className="text-orange-400">NEXCO OUTSOURCING</span>
//           </h2>
//           <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             NexCo Outsourcing — Connecting Global Talent with Your Business Needs
//           </p>
//           <motion.div
//             initial={{ width: 0 }}
//             whileInView={{ width: "100px" }}
//             transition={{ duration: 1, delay: 0.5 }}
//             className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"
//           />
//         </motion.div>

//         <div className="mb-16">
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed"
//           >
//             At NexCo Outsourcing, we utilize our extensive networks, expertise,
//             and proven reputation to ensure you have access to the best
//             professionals when your business demands top talent — wherever you
//             operate globally.
//           </motion.p>
//         </div>

//         {sections.map((section, index) => (
//           <div key={section.id} className="relative grid lg:grid-cols-2 gap-16 items-center mb-20">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <motion.div
//                 whileHover={{ scale: 1.02, x: 10 }}
//                 className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden"
//               >
//                 <motion.div
//                   className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"
//                   initial={{ height: 0 }}
//                   whileInView={{ height: "100%" }}
//                   transition={{ duration: 1, delay: 0.3 + (index * 0.2) }}
//                 />
//                 <div className="flex items-center mb-6">
//                   <motion.div
//                     className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4"
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.8 }}
//                   >
//                     {section.icon}
//                   </motion.div>
//                   <h3 className="text-2xl font-bold text-orange-400">
//                     {section.title}
//                   </h3>
//                 </div>
//                 {section.content}
//               </motion.div>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="!h-72 lg:!h-full w-full"
//             >
//               <div className="relative h-full w-auto rounded-xl overflow-hidden">
//                 <Image 
//                   src={section.image} 
//                   fill 
//                   className="object-cover"
//                   alt={section.title}
//                 />
//               </div>
//             </motion.div>
//           </div>
//         ))}

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           viewport={{ once: true }}
//           className="relative"
//         >
//           <div className="grid md:grid-cols-4 gap-8">
//             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 transform -translate-y-1/2" />

//             {[
//               {
//                 icon: <Globe className="w-8 h-8" />,
//                 title: "Global Network",
//                 desc: "Worldwide talent access",
//                 color: "from-blue-500/20 to-blue-600/10",
//               },
//               {
//                 icon: <Target className="w-8 h-8" />,
//                 title: "Precision Matching",
//                 desc: "Perfect fit guaranteed",
//                 color: "from-green-500/20 to-green-600/10",
//               },
//               {
//                 icon: <Zap className="w-8 h-8" />,
//                 title: "Fast Delivery",
//                 desc: "Quick turnaround",
//                 color: "from-purple-500/20 to-purple-600/10",
//               },
//               {
//                 icon: <Award className="w-8 h-8" />,
//                 title: "Quality Assured",
//                 desc: "Top-tier professionals",
//                 color: "from-orange-500/20 to-orange-600/10",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
//                 className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-orange-500/20 text-center z-10 relative overflow-hidden`}
//               >
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
//                   initial={{ x: "-100%" }}
//                   whileHover={{ x: "100%" }}
//                   transition={{ duration: 0.8 }}
//                 />
//                 <motion.div
//                   className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
//                   whileHover={{ rotate: 360, scale: 1.1 }}
//                   transition={{ duration: 0.8 }}
//                 >
//                   <div className="text-orange-400">{item.icon}</div>
//                 </motion.div>
//                 <h4 className="font-bold text-lg mb-2 relative z-10">
//                   {item.title}
//                 </h4>
//                 <p className="text-sm text-gray-400 relative z-10">
//                   {item.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default Service;



"use client";
import { motion } from "framer-motion";
import { Users, Target, Zap, Globe, Award, Building } from "lucide-react";
import Image from "next/image";

function Service() {
  const sections = [
    {
      id: 1,
      title: "Recruitment Services (Permanent / Contract Hiring)",
      icon: <Building className="w-6 h-6 text-orange-400" />,
      content: (
        <div className="text-gray-300 leading-relaxed text-lg space-y-4">
          <p>
            We help companies hire top talent across the UK and globally. From sourcing and screening to interview coordination and onboarding, our end-to-end recruitment services ensure you find the right candidate — fast.
          </p>
          <div>
            <p className="font-medium">Key Features</p>
            <ul className="list-disc list-inside mt-2 space-y-1 pl-4">
              <li>End-to-End Hiring Support</li>
              <li>Industry-Specific Talent Pools</li>
              <li>Permanent & Contract Recruitment</li>
              <li>Free Trial Available</li>
              <li>Speed & Quality Guarantee</li>
            </ul>
          </div>
        </div>
      ),
      image: "/images/recruitment.jpg"
    },
    {
      id: 2,
      title: "For Candidates",
      icon: <Users className="w-6 h-6 text-orange-400" />,
      content: (
        <p className="text-gray-300 leading-relaxed text-lg">
          For job seekers looking to take the next step in their career,
          we simplify the recruitment journey. We match your skills and
          experience with roles that truly fit your talents, across
          industries and regions, without the typical recruitment
          hassles.
        </p>
      ),
      image: "/images/candidates.jpg"
    },
    {
      id: 3,
      title: "For Our Clients",
      icon: <Users className="w-6 h-6 text-orange-400" />,
      content: (
        <div className="text-gray-300 leading-relaxed text-lg space-y-4">
          <p>
            We know that people are the heart of every successful
            organization. Whether you're a startup finding your footing or
            an established enterprise expanding your reach, we collaborate
            closely with you to build high-performing teams that help you
            achieve your goals.
          </p>
          <p>
            If you need to augment your recruitment with skilled CV
            sourcing, professional CV formatting, or dedicated virtual
            staffing support, NexCo Outsourcing is your trusted partner to
            make it happen efficiently and cost-effectively.
          </p>
        </div>
      ),
      image: "/images/clients.jpg"
    }
  ];

  return (
    <section className="py-24 bg-gray-800/30" id="service">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
            WHY <span className="text-orange-400">NEXCO OUTSOURCING</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            NexCo Outsourcing — Connecting Global Talent with Your Business Needs
          </p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mt-6"
          />
        </motion.div>

        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed"
          >
            At NexCo Outsourcing, we utilize our extensive networks, expertise,
            and proven reputation to ensure you have access to the best
            professionals when your business demands top talent — wherever you
            operate globally.
          </motion.p>
        </div>

        {sections.map((section, index) => (
          <div key={section.id} className="relative grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 p-8 rounded-2xl border border-orange-500/20 relative overflow-hidden"
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-600"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  transition={{ duration: 1, delay: 0.3 + (index * 0.2) }}
                />
                <div className="flex items-center mb-6">
                  <motion.div
                    className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                  >
                    {section.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-orange-400">
                    {section.title}
                  </h3>
                </div>
                {section.content}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="!h-72 lg:!h-full w-full"
            >
              <div className="relative h-full w-auto rounded-xl overflow-hidden">
                <Image 
                  src={section.image} 
                  fill 
                  className="object-cover"
                  alt={section.title}
                />
              </div>
            </motion.div>
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 transform -translate-y-1/2" />

            {[
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Network",
                desc: "Worldwide talent access",
                color: "from-blue-500/20 to-blue-600/10",
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Precision Matching",
                desc: "Perfect fit guaranteed",
                color: "from-green-500/20 to-green-600/10",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Delivery",
                desc: "Quick turnaround",
                color: "from-purple-500/20 to-purple-600/10",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Quality Assured",
                desc: "Top-tier professionals",
                color: "from-orange-500/20 to-orange-600/10",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
                className={`bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 rounded-2xl border border-orange-500/20 text-center z-10 relative overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-orange-400">{item.icon}</div>
                </motion.div>
                <h4 className="font-bold text-lg mb-2 relative z-10">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Service;