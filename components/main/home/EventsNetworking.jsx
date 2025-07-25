"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Globe, TrendingUp } from "lucide-react";
import Image from "next/image";

function EventsNetworking() {
  return (
    <section className="py-24 bg-gray-800/30">
      <div className="container mx-auto px-4 space-y-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              EVENTS & <span className="text-orange-400">NETWORKING</span>
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-8"
            />
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our strongest asset is our diverse network of clients, talent, and
              industry partners. Through exclusive events, we promote continuous
              learning, collaboration, and meaningful connections. Join NexCo
              Outsourcing events to stay ahead in recruitment and outsourcing.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit"
            >
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 text-lg relative overflow-hidden group">
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  Let's Connect
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="!h-72 lg:!h-full w-full"
          >
            <div className="relative h-full w-auto rounded-xl overflow-hidden">
              <Image src="/images/net.jpeg" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 relative"
        >
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 transform -translate-y-1/2" />

          {[
            {
              icon: <Users className="w-8 h-8" />,
              title: "Industry Meetups",
              desc: "Connect with professionals",
              color: "from-blue-500/20 to-blue-600/10",
            },
            {
              icon: <Target className="w-8 h-8" />,
              title: "Workshops",
              desc: "Learn latest trends",
              color: "from-green-500/20 to-green-600/10",
            },
            {
              icon: <TrendingUp className="w-8 h-8" />,
              title: "Conferences",
              desc: "Industry insights",
              color: "from-purple-500/20 to-purple-600/10",
            },
            {
              icon: <Globe className="w-8 h-8" />,
              title: "Global Events",
              desc: "Worldwide networking",
              color: "from-orange-500/20 to-orange-600/10",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
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
              <h4 className="font-bold text-lg mb-2 relative z-10 group-hover:text-orange-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-gray-300 relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default EventsNetworking;
