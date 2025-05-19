"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import apiClient from "@/lib/axios";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        // In a real application, replace with your actual API endpoint
        const response = await apiClient.get("/faqs");

        if (response.data) {
          setFaqs(response.data.data);
        } else {
          setError("Failed to load FAQs.");
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching FAQs:", err);
        setError("Failed to load FAQs. Please try again later.");
        setLoading(false);

        // Fallback data in case the API fails
        // Update the fallback FAQs to reflect your mission
        setFaqs([
          {
            question:
              "What makes Vlepo different from other livestreaming platforms?",
            answer:
              "Vlepo operates on a prepaid model that prioritizes fairness, commitment, and value. Unlike subscription or donation-based platforms, we enable creators to receive payment in advance for their livestreams, ensuring fair compensation and more intentional audience participation.",
          },
          {
            question: "How does the prepaid model benefit creators?",
            answer:
              "Creators can set their own terms, pricing, and content availability. The prepaid approach provides guaranteed compensation before the event, better planning capabilities, and a more engaged audience who has invested in the experience.",
          },
          {
            question: "What types of livestreams can be hosted on Vlepo?",
            answer:
              "Vlepo supports a wide range of livestream events including masterclasses, concerts, performances, workshops, private events, and more. Any creator who wants to share their talents in real-time can benefit from our platform.",
          },
          {
            question: "How does Vlepo ensure security for creators?",
            answer:
              "We provide robust privacy and anti-piracy tools that give creators full control over their content. Our platform is built with security as a priority, ensuring that creators' intellectual property is protected.",
          },
          {
            question: "How can I get started with Vlepo?",
            answer:
              "Download our app, create an account, and you can start browsing available livestreams or set up your creator profile. For more information, contact us at vlepolivestream@outlook.com.",
          },
        ]);
      }
    };

    fetchFAQs();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-black relative" ref={ref} id="faq">
      {/* Purple gradient accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10 z-0"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Find answers to common questions about Alex Vlepo and how our
            platform works.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-transparent backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer p-6 flex justify-between items-center hover:bg-gray-900/30 transition-all duration-300"
                >
                  <h3 className="font-medium text-lg">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-orange-500 flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </motion.div>
                </div>

                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-300">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
