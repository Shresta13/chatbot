import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-lg">TaskMaster</span>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">About us</Link></li>
              <li><Link href="/" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/" className="hover:text-foreground">Careers</Link></li>
            </ul>
          </div>

          {/* Careers */}
          <div>
            <h4 className="font-semibold mb-4">Careers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Job openings</Link></li>
              <li><Link href="/" className="hover:text-foreground">Benefits</Link></li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h4 className="font-semibold mb-4">Privacy</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Privacy policy</Link></li>
              <li><Link href="/" className="hover:text-foreground">Terms of service</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Help center</Link></li>
              <li><Link href="/" className="hover:text-foreground">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 sm:mb-0">
            © 2026 TaskMaster. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
