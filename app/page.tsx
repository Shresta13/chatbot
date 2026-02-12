'use client';

import Navbar from './landing/navbar/nav';
import Hero from './landing/hero/hero';
import Features from './landing/features/features';
import CTA from './landing/cta/cta';
import Footer from './landing/footer/footer';
import Partners from './landing/trusted-partner/partner';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
