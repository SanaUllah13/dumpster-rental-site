import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DumpsterSizes from "@/components/DumpsterSizes";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <About />
      <DumpsterSizes />
      <Services />
      <HowItWorks />
      <Pricing />
      <WhyChooseUs />
      <Testimonials />
      <QuoteForm />
      <FAQ />
      <Footer />
    </main>
  );
}
