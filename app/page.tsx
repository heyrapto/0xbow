import Navbar from "@/components/layout/navbar";
import Hero from "@/components/sections/hero";
import Association from "@/components/sections/association";
import Features from "@/components/sections/features";
import Privacy from "@/components/sections/privacy";
import Trusted from "@/components/sections/trusted";
import Blog from "@/components/sections/blog";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Association />
      <Features />
      <Privacy />
      <Trusted />
      <Blog />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}