"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import apiClient from "@/lib/axios";

interface PolicyContent {
  title: string;
  content: string; // Assuming content is HTML string
  lastUpdated: string;
}

export default function PrivacyPolicyPage() {
  const [policy, setPolicy] = useState<PolicyContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPolicy = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get("/public/privacy-policy"); // Adjust endpoint if needed
        if (response.data) {
          setPolicy(response.data);
        } else {
          setError("Failed to load privacy policy.");
        }
      } catch (err) {
        setError("An error occurred while fetching the privacy policy.");
        console.error("Privacy policy fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPolicy();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {loading && (
              <p className="text-center text-gray-300">
                Loading Privacy Policy...
              </p>
            )}
            {error && <p className="text-center text-red-400">{error}</p>}
            {policy && !loading && !error && (
              <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  {policy.title || "Privacy Policy"}
                </h1>
                {policy.lastUpdated && (
                  <p className="text-center text-gray-400 mb-10">
                    Last Updated:{" "}
                    {new Date(policy.lastUpdated).toLocaleDateString()}
                  </p>
                )}
                {/* If content is HTML, use dangerouslySetInnerHTML. Sanitize on server if possible. */}
                <div
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: policy.content }}
                />
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
