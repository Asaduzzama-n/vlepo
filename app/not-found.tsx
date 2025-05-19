"use client";

import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white py-20 md:py-32 flex flex-col items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-9xl font-bold text-orange-500 mb-6"
            >
              404
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Page Not Found
            </h1>

            <p className="text-gray-300 text-lg mb-10">
              Oops! The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Link href="/" passHref>
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-6 text-lg">
                  Back to Home
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
