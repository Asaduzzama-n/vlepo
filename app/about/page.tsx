"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Users,
  Headphones,
  Award,
  BarChart,
  Shield,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function AboutPage() {
  const ref = useRef(null);
  const missionRef = useRef(null);
  const teamRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 });

  const values = [
    {
      icon: <Award className="w-10 h-10 text-orange-500" />,
      title: "Quality Content",
      description:
        "We prioritize high-quality, valuable content that benefits both creators and viewers.",
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-500" />,
      title: "Trust & Security",
      description:
        "We maintain robust security measures to protect our users' data and financial transactions.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-orange-500" />,
      title: "Fair Compensation",
      description:
        "Our prepaid model ensures creators receive fair compensation for their work and time.",
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former streaming platform executive with 10+ years of experience in digital media.",
      image: "/images/team/placeholder.jpg",
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      bio: "Tech innovator with expertise in scalable video streaming solutions.",
      image: "/images/team/placeholder.jpg",
    },
    {
      name: "Marcus Williams",
      role: "Head of Creator Relations",
      bio: "Former content creator who understands the challenges creators face.",
      image: "/images/team/placeholder.jpg",
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
              <div className="flex justify-center items-center mb-5">
                <h1 className="text-4xl md:text-5xl font-bold mr-4 ">About</h1>
                <Image
                  src={logo}
                  alt=""
                  className="h-10 w-28 border-b-4 border-orange-500 "
                ></Image>
              </div>
              <p className="text-xl text-gray-300 mb-8">
                Reshaping the livestreaming economy through a prepaid model that
                prioritizes fairness, commitment, and value.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story section */}
        <section className="py-16 md:py-24 bg-black relative" ref={ref}>
          {/* Orange gradient accent */}
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full filter blur-[150px] opacity-10 z-0"></div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Vlepo was born from a simple observation: the current
                  livestreaming economy isn't working optimally for creators or
                  viewers. While subscription models create recurring revenue,
                  they often lead to content that prioritizes quantity over
                  quality. Meanwhile, donation-based systems create uncertainty
                  for creators and pressure for viewers.
                </p>
                <p>
                  Founded in 2023, Vlepo introduces a prepaid model that
                  transforms how livestreaming works. By allowing viewers to
                  purchase access to individual livestreams in advance, we
                  create a clear value exchange that benefits everyone involved.
                </p>
                <p>
                  Our platform enables creators to plan better, earn fairly, and
                  focus on delivering exceptional content. For viewers, it means
                  intentional participation in events they truly value, without
                  the pressure of spontaneous donations or ongoing subscription
                  commitments.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission section */}
        <section
          className="py-16 md:py-24 bg-gray-900 relative"
          ref={missionRef}
        >
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px] opacity-10 z-0"></div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission & Values
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We're on a mission to create a more sustainable, transparent,
                and rewarding livestreaming ecosystem for creators and viewers
                alike.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isMissionInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-800 rounded-xl p-8 border border-gray-700"
                >
                  <div className="mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team section */}
        <section className="py-16 md:py-24 bg-black relative" ref={teamRef}>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-[150px] opacity-10 z-0"></div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Team</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Meet the passionate individuals behind Vlepo who are dedicated
                to transforming the livestreaming industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800 text-center"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 bg-gray-800">
                    {/* Replace with actual team member images */}
                    <div className="w-full h-full bg-gradient-to-br from-orange-500 to-purple-600"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-orange-500 mb-4">{member.role}</p>
                  <p className="text-gray-400">{member.bio}</p>
                </motion.div>
              ))}
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
                Join the Vlepo Community
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Be part of the revolution in livestreaming. Download the app
                today and experience the future of creator-viewer relationships.
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
      <Footer />
    </>
  );
}
