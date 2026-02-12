"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
          </div>
          <span className="text-xl font-bold">TaskMaster</span>
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-blue-600">
            Features
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-blue-600">
            Pricing
          </Link>
          <Link href="#resources" className="text-sm font-medium hover:text-blue-600">
            Resources
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-blue-600">
            Log In
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

      </div>
    </header>
  );
}
