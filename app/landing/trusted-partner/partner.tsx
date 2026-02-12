export default function Partner() {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-8">
          Trusted by over 10,000+ teams across the globe
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale">
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
          <div className="h-8 w-32 bg-gray-300 rounded"></div>
          <div className="h-8 w-28 bg-gray-300 rounded"></div>
          <div className="h-8 w-36 bg-gray-300 rounded"></div>
          <div className="h-8 w-24 bg-gray-300 rounded"></div>
        </div>
      </div>
    </section>
  );
}