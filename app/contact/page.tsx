"use client";

import { useState, FormEvent } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import apiClient from "@/lib/axios";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await apiClient.post("/public/contact", formData);

      if (response.status === 200 || response.status === 201) {
        setStatus("success");
        setFeedbackMessage(
          "Thank you for your message! We'll get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Server error");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setStatus("error");
      setFeedbackMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact Us</h1>
          <p className="text-gray-300 mb-12">
            Have questions about Vlepo? Want to learn more about our prepaid
            livestreaming platform or need help getting started? Fill out the
            form below and we'll get back to you as soon as possible.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              {status === "success" ? (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-300 mb-4">{feedbackMessage}</p>
                  <Button
                    onClick={() => setStatus("idle")}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={`bg-gray-900 border-gray-700 ${
                        errors.name ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                      disabled={status === "loading"}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Your email"
                      className={`bg-gray-900 border-gray-700 ${
                        errors.email ? "border-red-500 focus:ring-red-500" : ""
                      }`}
                      disabled={status === "loading"}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      className={`bg-gray-900 border-gray-700 min-h-[150px] ${
                        errors.message
                          ? "border-red-500 focus:ring-red-500"
                          : ""
                      }`}
                      disabled={status === "loading"}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  {status === "error" && (
                    <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-sm">
                      {feedbackMessage}
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Support</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Email</h3>
                  <a
                    href="mailto:vlepolivestream@outlook.com"
                    className="text-orange-500 hover:text-orange-400 transition-colors"
                  >
                    vlepolivestream@outlook.com
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      YouTube
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">FAQs</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">
                        How does the prepaid model work?
                      </h4>
                      <p className="text-gray-400">
                        Our platform allows viewers to purchase access to
                        individual livestreams in advance, creating a clear
                        value exchange.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">How do I stream an event?</h4>
                      <p className="text-gray-400">
                        Create an account, set up your profile, set your
                        pricing, and use our intuitive streaming tools to
                        connect with your audience.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Is Vlepo available worldwide?
                      </h4>
                      <p className="text-gray-400">
                        Yes, Vlepo is available worldwide with our global CDN
                        ensuring fast and reliable streaming for viewers
                        anywhere.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
