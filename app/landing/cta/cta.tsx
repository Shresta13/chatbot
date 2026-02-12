import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to transform your productivity?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Join 10,000+ professionals who have found peace of mind with TaskMaster
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start for Free
            </Link>
            <Link
              href="/"
              className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              We need more details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
