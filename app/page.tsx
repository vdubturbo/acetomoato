import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkShowcase from "@/components/WorkShowcase";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WorkShowcase />
      <About />
      <Footer />
    </main>
  );
}
