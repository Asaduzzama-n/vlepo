"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Play, DollarSign } from "lucide-react";
import { useState, useEffect } from "react";

// Don't import images directly - use string paths instead
const img1Path = "/images/1.2.png";
const img2Path = "/images/Influence.png";
const img3Path = "/images/2.1.png";

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-orange-500" />,
      title: "Discover",
      description:
        "Browse trending events, creators, and content tailored to your interests.",
      image: img3Path,
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-500" />,
      title: "Make Payments",
      description:
        "Follow your favorite creators and get notified when they go live.",
      image: img1Path,
    },
    {
      icon: <Play className="w-8 h-8 text-orange-500" />,
      title: "Stream",
      description:
        "Watch high-quality streams, interact with creators, and join the community.",
      image: img2Path,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-black relative" ref={ref}>
      {/* Orange gradient accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px] opacity-10 z-0"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Vlepo Works
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our prepaid approach enhances planning, reduces uncertainty, and
            supports a more professional and rewarding livestreaming ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-xs mx-auto">
                {step.description}
              </p>
              <div className="relative rounded-3xl overflow-hidden  transition-colors">
                {isMounted && (
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
