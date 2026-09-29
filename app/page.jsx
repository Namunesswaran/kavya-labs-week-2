import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <section id="contact" className="wrap border-t border-kavya-line py-20">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12">
            <div>
              <h2 className="font-serif font-medium text-[1.7rem] md:text-[2.15rem] leading-tight max-w-[16ch] mb-4">
                See it on your own queue.
              </h2>
              <p className="text-kavya-muted leading-relaxed max-w-[44ch]">
                Tell us a bit about your team and we&apos;ll set up a 20-minute
                walkthrough using your actual request volume.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
