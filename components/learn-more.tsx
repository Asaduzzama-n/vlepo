"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LearnMore() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const topics = [
    {
      title: "Creator Tools",
      description:
        "Discover the powerful tools we provide to help creators engage with their audience and monetize their content.",
      link: "/creator-tools",
    },
    {
      title: "Streaming Technology",
      description:
        "Learn about our cutting-edge streaming technology that ensures high-quality, low-latency video for all users.",
      link: "/technology",
    },
    {
      title: "Community Guidelines",
      description:
        "Understand our community guidelines and how we maintain a safe, inclusive environment for all users.",
      link: "/guidelines",
    },
  ];

  return (
    <section
      className="py-24 md:py-32 bg-black relative"
      ref={ref}
      id="learn-more"
    >
      {/* Purple gradient accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10 z-0"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover More</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Dive deeper into Vlepo's features, technology, and community
            guidelines to understand how our platform is revolutionizing the
            livestreaming industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-3">{topic.title}</h3>
              <p className="text-gray-400 mb-6">{topic.description}</p>
              <Link
                href={topic.link}
                className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors font-medium"
              >
                Explore {topic.title.toLowerCase()}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
