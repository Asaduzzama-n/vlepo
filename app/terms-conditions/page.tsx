"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import apiClient from "@/lib/axios";

interface TermsContent {
  title: string;
  content: string; // Assuming content is HTML string
  lastUpdated: string;
}

export default function TermsConditionsPage() {
  const [terms, setTerms] = useState<TermsContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get("/public/terms-conditions"); // Adjust endpoint if needed
        if (response.data) {
          setTerms(response.data);
        } else {
          setError("Failed to load terms and conditions.");
        }
      } catch (err) {
        setError("An error occurred while fetching the terms and conditions.");
        console.error("Terms and conditions fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTerms();
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {loading && (
              <p className="text-center text-gray-300">
                Loading Terms & Conditions...
              </p>
            )}
            {error && <p className="text-center text-red-400">{error}</p>}
            {terms && !loading && !error && (
              <>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
                  {terms.title || "Terms & Conditions"}
                </h1>
                {terms.lastUpdated && (
                  <p className="text-center text-gray-400 mb-10">
                    Last Updated:{" "}
                    {new Date(terms.lastUpdated).toLocaleDateString()}
                  </p>
                )}
                <div
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: terms.content }}
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
