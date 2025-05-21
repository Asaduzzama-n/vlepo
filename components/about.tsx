"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Headphones } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: <Globe className="w-10 h-10 text-orange-500" />,
      title: "Virtual Events",
      description:
        "Access exclusive live events from your favorite creators, artists, and influencers. Experience concerts, workshops, and more from anywhere.",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-500" />,
      title: "Creator Marketplace",
      description:
        "Discover and connect with trending creators across various niches and categories. Support your favorites and find new talent to follow.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-orange-500" />,
      title: "Personalized Experience",
      description:
        "Get recommendations tailored to your interests and viewing habits. Our algorithm learns what you love to deliver content you'll enjoy.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-black relative" ref={ref}>
      {/* Orange gradient accent */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-[150px] opacity-10 z-0"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A Next-Generation Prepaid Livestreaming Platform
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Unlike traditional streaming models based on subscriptions or donations, Vlepo allows users to secure access to individual livestreams in advance, creating a clear, commitment-based environment. Whether it's a masterclass, a concert, a performance, or a private event, every session is paid upfront—guaranteeing value for creators and intentional participation from viewers.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
