"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import img0 from "../public/images/Onboarding.png";

import img1 from "../public/images/1.2.png";
import img2 from "../public/images/Influence.png";
import img3 from "../public/images/2.1.png";
export function ScreensShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const screens = [
    {
      title: "Home Screen",
      description: "Discover trending events and creators",
      image: img0,
    },
    {
      title: "Live Stream",
      description: "Watch high-quality streams with interactive features",
      image: img2,
    },
    {
      title: "Creator Profile",
      description: "Follow your favorite creators and see their content",
      image: img3,
    },
    {
      title: "Event Details",
      description: "Get all the information about upcoming events",
      image: img1,
    },
  ];

  const nextScreen = () => {
    setActiveIndex((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  return (
    <section className="py-24 md:py-32 bg-black relative" ref={ref}>
      {/* Orange gradient accent */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-orange-600 rounded-full filter blur-[150px] opacity-10 z-0"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Vlepo
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our intuitive interface designed to provide seamless
            livestreaming experiences for both creators and viewers. Our app
            combines powerful features with elegant design.
          </p>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="flex justify-center">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
              >
                <div className="relative w-[280px] h-[560px] rounded-3xl overflow-hidden border-4 border-gray-800 shadow-lg">
                  <Image
                    src={screens[activeIndex].image || "/placeholder.svg"}
                    alt={screens[activeIndex].title}
                    fill
                    className=""
                  />
                </div>
                <div className="text-center md:text-left max-w-sm">
                  <h3 className="text-2xl font-bold mb-4">
                    {screens[activeIndex].title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {screens[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center mt-12 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevScreen}
                className="rounded-full border-gray-700 hover:bg-gray-800"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {screens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeIndex ? "bg-orange-500" : "bg-gray-700"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextScreen}
                className="rounded-full border-gray-700 hover:bg-gray-800"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
