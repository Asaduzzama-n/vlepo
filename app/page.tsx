import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { HowItWorks } from "@/components/how-it-works";
import { ScreensShowcase } from "@/components/screens-showcase";
import { LearnMore } from "@/components/learn-more";
import { Reviews } from "@/components/reviews";
import { JoinCta } from "@/components/join-cta";
import { Footer } from "@/components/footer";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <ScreensShowcase />
      <Reviews />

      <LearnMore />
      <FAQ></FAQ>
      <JoinCta />
      <Footer />
    </main>
  );
}
