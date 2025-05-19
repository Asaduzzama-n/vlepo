"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import image1 from "../public/images/Onboarding.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/80 z-0"></div>

      {/* Orange gradient accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-[150px] opacity-30 z-0"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-orange-600 rounded-full filter blur-[150px] opacity-20 z-0"></div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Reshape the Livestreaming Economy with Prepaid Events
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering creators to share their talents in real time while giving
            audiences the ability to pay in advance for high-quality, exclusive
            livestream events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg py-6 px-8">
              Download App
            </Button>
            <Link
              href="#learn-more"
              className="hover:opacity-80 transition-opacity"
            >
              <Button variant="outline" className="text-lg py-6 px-8">
                Learn More
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                width={160}
                height={53}
                className="h-[53px] w-auto"
              />
            </Link>
            <Link href="#" className="hover:opacity-80 transition-opacity">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                width={180}
                height={53}
                className="h-[53px] w-auto"
              />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] md:w-[320px] h-[580px] md:h-[640px]">
            <Image
              src={image1}
              alt="Alex Vlepo App"
              width={320}
              height={640}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
