import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Technology() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section className="py-24 md:py-32 bg-black min-h-screen">
        <div className="container mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center text-orange-500 hover:text-orange-400 transition-colors font-medium mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Streaming Technology
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl">
            Learn about our cutting-edge streaming technology that ensures
            high-quality, low-latency video for all users.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Low Latency</h2>
              <p className="text-gray-400">
                Our platform delivers industry-leading low latency streaming,
                ensuring real-time interaction between creators and their
                audience.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Adaptive Bitrate</h2>
              <p className="text-gray-400">
                Automatic quality adjustment based on viewer's connection speed,
                ensuring smooth playback regardless of network conditions.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Global CDN</h2>
              <p className="text-gray-400">
                Our content delivery network spans the globe, ensuring fast and
                reliable streaming for viewers anywhere in the world.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Multi-platform Support
              </h2>
              <p className="text-gray-400">
                Stream seamlessly across web, mobile, and smart TV platforms
                with consistent quality and features.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
