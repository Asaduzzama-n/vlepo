"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useAnimation,
} from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// Sample review data - in a real app, you'd fetch this from an API
const initialReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "/avatars/avatar-1.png",
    rating: 5,
    date: "2 weeks ago",
    content:
      "Alex Vlepo has completely changed how I connect with my audience. The streaming quality is incredible and the engagement tools are next level!",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "/avatars/avatar-2.png",
    rating: 5,
    date: "1 month ago",
    content:
      "As a content creator, I've tried many platforms, but none compare to the features and community I've found here. The monetization options are fantastic!",
  },
  {
    id: 3,
    name: "Jessica Williams",
    avatar: "/avatars/avatar-3.png",
    rating: 4,
    date: "3 weeks ago",
    content:
      "The platform is intuitive and powerful. I love how easy it is to schedule streams and interact with viewers in real-time.",
  },
  {
    id: 4,
    name: "David Rodriguez",
    avatar: "/avatars/avatar-4.png",
    rating: 5,
    date: "2 months ago",
    content:
      "The analytics tools have helped me understand my audience better and grow my channel significantly. Highly recommended!",
  },
  {
    id: 5,
    name: "Emma Thompson",
    avatar: "/avatars/avatar-5.png",
    rating: 5,
    date: "1 week ago",
    content:
      "The low latency streaming is a game-changer for interactive content. My viewers love the real-time engagement!",
  },
];

// Component for individual review card with animation
const ReviewCard = ({
  review,
  index,
}: {
  review: {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    date: string;
    content: string;
  };
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900/50  backdrop-blur-sm rounded-xl p-6 border border-gray-800 flex flex-col h-66 w-[300px] md:w-[320px] lg:w-[350px] flex-shrink-0 mx-3"
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden mr-4">
          {/* Placeholder for avatar - in production use next/image */}
          <div className="w-full h-full bg-gradient-to-br from-orange-500 to-purple-600"></div>
        </div>
        <div>
          <h4 className="font-semibold">{review.name}</h4>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${
                  i < review.rating ? "text-orange-500" : "text-gray-600"
                } fill-current`}
              />
            ))}
            <span className="text-gray-400 text-xs ml-2">{review.date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-300 flex-grow">{review.content}</p>
    </motion.div>
  );
};

export function Reviews() {
  const sectionRef = useRef(null);
  const rowOneRef = useRef(null);
  const rowTwoRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controlsRowOne = useAnimation();
  const controlsRowTwo = useAnimation();

  // Parallax effect for the section title
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Split reviews into two rows
  const firstRowReviews = initialReviews.slice(0, 3);
  const secondRowReviews = initialReviews
    .slice(3)
    .concat(initialReviews.slice(0, 1));

  // Start the animation when the component is in view
  useEffect(() => {
    if (isInView) {
      // Animate the first row to scroll left
      controlsRowOne.start({
        x: [0, -1200],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });

      // Animate the second row to scroll right (opposite direction)
      controlsRowTwo.start({
        x: [-1200, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controlsRowOne.stop();
      controlsRowTwo.stop();
    }
  }, [isInView, controlsRowOne, controlsRowTwo]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-black relative overflow-hidden"
    >
      {/* Gradient background effects */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10 z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-600 rounded-full filter blur-[150px] opacity-10 z-0"></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 mb-16">
          <motion.div style={{ y: titleY, opacity }} className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              What Our Users Say
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 max-w-3xl mx-auto text-lg"
            >
              Join thousands of creators and viewers who love the Alex Vlepo
              experience
            </motion.p>
          </motion.div>
        </div>

        {/* First row - scrolling left */}
        <div className="overflow-hidden mb-6">
          <motion.div ref={rowOneRef} className="flex" animate={controlsRowOne}>
            {/* Double the reviews for seamless looping */}
            {[...firstRowReviews, ...firstRowReviews, ...firstRowReviews].map(
              (review, index) => (
                <ReviewCard
                  key={`row1-${review.id}-${index}`}
                  review={review}
                  index={index % 3}
                />
              )
            )}
          </motion.div>
        </div>

        {/* Second row - scrolling right */}
        <div className="overflow-hidden">
          <motion.div ref={rowTwoRef} className="flex" animate={controlsRowTwo}>
            {/* Double the reviews for seamless looping */}
            {[
              ...secondRowReviews,
              ...secondRowReviews,
              ...secondRowReviews,
            ].map((review, index) => (
              <ReviewCard
                key={`row2-${review.id}-${index}`}
                review={review}
                index={index % 3}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Add CSS to hide scrollbar */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
