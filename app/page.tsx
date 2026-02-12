'use client';

import Navbar from './landing/navbar/nav';
import Hero from './landing/hero/hero';
import Partner from './landing/trusted-partner/partner';
import Features from './landing/features/features';
import CTA from './landing/cta/cta';
import Footer from './landing/footer/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Partner />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
