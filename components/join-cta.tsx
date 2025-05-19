"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function JoinCta() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="py-24 md:py-32 bg-black relative" ref={ref}>
      {/* Orange gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90 z-0"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500 rounded-full filter blur-[200px] opacity-20 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Experience the Future of Streaming?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Join thousands of creators and viewers on Alex Vlepo. Download the
            app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-lg py-6 px-8">
              Download App
            </Button>
          </div>

          {/* <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email" className="bg-gray-900 border-gray-700" />
              <Button className="bg-orange-500 hover:bg-orange-600">Subscribe</Button>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
