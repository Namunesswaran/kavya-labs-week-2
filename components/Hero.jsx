export default function Hero() {
  return (
    <section
      id="product"
      className="wrap grid md:grid-cols-[1.05fr_0.95fr] gap-12 items-center py-16 md:py-24"
    >
      <div>
        <h1 className="font-serif font-medium text-[2.4rem] md:text-[3.6rem] leading-[1.08] tracking-tight mb-6 max-w-[14ch]">
          Your operations team, minus the busywork.
        </h1>
        <p className="text-[1.09rem] leading-relaxed text-kavya-muted max-w-[46ch] mb-9">
          Kavya Labs routes incoming requests, answers the repetitive ones
          from your own playbooks, and turns the day&apos;s activity into a
          report — so your team spends its time on the work only people can
          do.
        </p>
        <div className="flex gap-3.5 flex-wrap mb-10">
          <a
            href="#contact"
            className="inline-block font-semibold text-[0.95rem] rounded px-5 py-2.5 bg-kavya-accent text-[#241A0A] hover:bg-[#f0b158] transition-colors"
          >
            Book a demo
          </a>
          <a
            href="#approach"
            className="inline-block font-semibold text-[0.95rem] rounded px-5 py-2.5 border border-kavya-line hover:border-kavya-muted transition-colors"
          >
            See how it works
          </a>
        </div>
        <p className="text-[0.88rem] text-kavya-muted border-t border-kavya-line pt-[18px] max-w-[40ch]">
          Built for operations teams handling 50–500 requests a day across
          support, logistics, or internal IT.
        </p>
      </div>

      <div
        className="w-full aspect-[1/0.92] order-first md:order-last max-w-xs md:max-w-none mx-auto"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 420 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <line x1="70" y1="90" x2="200" y2="180" stroke="#3A3646" strokeWidth="1.5" />
          <line x1="200" y1="180" x2="350" y2="70" stroke="#3A3646" strokeWidth="1.5" />
          <line x1="200" y1="180" x2="120" y2="290" stroke="#3A3646" strokeWidth="1.5" />
          <line x1="200" y1="180" x2="320" y2="300" stroke="#3A3646" strokeWidth="1.5" />
          <line x1="70" y1="90" x2="120" y2="290" stroke="#3A3646" strokeWidth="1.5" />
          <line
            x1="350"
            y1="70"
            x2="320"
            y2="300"
            strokeDasharray="4 5"
            stroke="#E8A33D"
            strokeWidth="1.5"
          />
          <line x1="200" y1="180" x2="350" y2="70" stroke="#E8A33D" strokeWidth="2" />

          <circle cx="70" cy="90" r="7" fill="#6E56CF" />
          <circle cx="350" cy="70" r="7" fill="#6E56CF" />
          <circle cx="120" cy="290" r="7" fill="#6E56CF" />
          <circle cx="320" cy="300" r="7" fill="#6E56CF" />
          <circle cx="200" cy="180" r="11" fill="#E8A33D" />

          <circle
            cx="200"
            cy="180"
            r="20"
            fill="none"
            stroke="#E8A33D"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle
            cx="200"
            cy="180"
            r="30"
            fill="none"
            stroke="#E8A33D"
            strokeWidth="1"
            opacity="0.25"
          />
        </svg>
      </div>
    </section>
  );
}
