import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function CreatorTools() {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Creator Tools</h1>
          <p className="text-gray-300 text-lg mb-8 max-w-3xl">
            Discover the powerful tools we provide to help creators engage with
            their audience and monetize their content.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Audience Engagement
              </h2>
              <p className="text-gray-400">
                Our platform provides powerful tools to help you engage with
                your audience in real-time, including chat, polls, and
                interactive elements.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Monetization</h2>
              <p className="text-gray-400">
                Multiple revenue streams available including subscriptions,
                tips, merchandise sales, and sponsored content opportunities.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Analytics</h2>
              <p className="text-gray-400">
                Comprehensive analytics to track your audience growth,
                engagement metrics, and revenue performance.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">
                Content Management
              </h2>
              <p className="text-gray-400">
                Easy-to-use tools for scheduling streams, managing VODs, and
                organizing your content library.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
