import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-20 pb-16 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
            ✨ NEW: AI-POWERED SUGGESTIONS IS HERE!  
          </div>
          
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Master your day,
            <br />
            <span className="text-blue-600">one task at a time</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            The simple way to manage projects, track progress, and stay focused on what matters most. No clutter, just productivity.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30"
            >
              Get Started for Free
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
            >
              <Play className="w-4 h-4" />
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Image - Below Hero */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative w-full flex justify-center">
            <Image
              src="/ddd.png"
              alt="Dashboard Preview"
              width={1309}
              height={507}
              className="rounded-2xl shadow-2xl border border-gray-200 w-full h-auto"
              priority
              unoptimized
            />
          </div>
        </div>
      </section>

    </>
  );
}