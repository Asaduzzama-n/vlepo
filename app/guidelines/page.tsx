"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Header } from "@/components/header";
import {
  Shield,
  Users,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GuidelinesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const guidelines = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Safety First",
      description:
        "We prioritize the safety of all users. Content that promotes harm, violence, or illegal activities is strictly prohibited.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Respect Others",
      description:
        "Treat everyone with respect. Harassment, hate speech, and discrimination have no place on our platform.",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-orange-500" />,
      title: "Constructive Communication",
      description:
        "Engage in constructive conversations. Provide feedback in a respectful manner and be open to different perspectives.",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
      title: "Content Moderation",
      description:
        "All content is subject to moderation. We reserve the right to remove content that violates our guidelines.",
    },
  ];

  const dosDonts = [
    {
      do: "Share original and creative content",
      dont: "Post copyrighted material without permission",
    },
    {
      do: "Engage respectfully with other users",
      dont: "Harass, bully, or intimidate others",
    },
    {
      do: "Report inappropriate content",
      dont: "Spam or post misleading information",
    },
    {
      do: "Protect your personal information",
      dont: "Share others' private information without consent",
    },
    {
      do: "Follow age-appropriate content guidelines",
      dont: "Post explicit or adult content without proper age restrictions",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-black text-white">
        {/* Hero section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
          {/* Purple gradient accent */}
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[150px] opacity-10 z-0"></div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Community Guidelines
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Our guidelines help maintain a safe, inclusive, and positive
                environment for all users.
              </p>
            </div>
          </div>
        </section>

        {/* Guidelines section */}
        <section className="py-16 md:py-24 bg-black relative" ref={ref}>
          {/* Orange gradient accent */}
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-[150px] opacity-10 z-0"></div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Principles
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                These guidelines help ensure that Alex Vlepo remains a platform
                where creators and viewers can connect in a positive
                environment.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {guidelines.map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800"
                >
                  <div className="mb-6">{guideline.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {guideline.title}
                  </h3>
                  <p className="text-gray-400">{guideline.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Dos and Don'ts section */}
        <section className="py-16 md:py-24 bg-black relative">
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-10 z-0"></div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dos and Don'ts
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto text-lg">
                Follow these simple guidelines to ensure a positive experience
                for everyone on the platform.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {dosDonts.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  <div className="bg-gray-900 rounded-xl p-6 border border-green-800/30">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-200">{item.do}</p>
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-xl p-6 border border-red-800/30">
                    <div className="flex items-start">
                      <XCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                      <p className="text-gray-200">{item.dont}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enforcement section */}
        <section className="py-16 md:py-24 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Enforcement
                </h2>
                <p className="text-gray-300 text-lg">
                  We take our community guidelines seriously and enforce them to
                  maintain a positive environment.
                </p>
              </motion.div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">
                  Consequences of Violations
                </h3>
                <p className="text-gray-400 mb-6">
                  Violations of our community guidelines may result in content
                  removal, temporary restrictions, or permanent account
                  suspension, depending on the severity and frequency of
                  violations.
                </p>

                <h3 className="text-xl font-semibold mb-4">
                  Reporting Violations
                </h3>
                <p className="text-gray-400 mb-6">
                  If you encounter content that violates our guidelines, please
                  report it immediately. Our moderation team will review all
                  reports and take appropriate action.
                </p>

                <h3 className="text-xl font-semibold mb-4">Appeals Process</h3>
                <p className="text-gray-400 mb-8">
                  If you believe your content was removed in error or you've
                  been unfairly penalized, you can submit an appeal for review
                  by our team.
                </p>

                <div className="flex justify-center">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 md:py-24 bg-black relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500 rounded-full filter blur-[200px] opacity-10 z-0"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Community?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Download the app today and become part of a positive, creative,
                and engaging community.
              </p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg py-6 px-8">
                  Download App
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
