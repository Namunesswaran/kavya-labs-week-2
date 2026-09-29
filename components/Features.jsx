const FEATURES = [
  {
    title: "Auto-triage",
    desc: "Every request is read, classified, and routed to the right person the moment it arrives — by urgency and by who's actually best placed to handle it, not just whoever's next in the queue.",
  },
  {
    title: "Playbook memory",
    desc: "Point it at your existing SOPs and past resolved tickets. It answers the questions you've already answered a hundred times, and flags the ones that genuinely need a person.",
  },
  {
    title: "Live reporting",
    desc: "No more end-of-day recap in Slack. Volume, response times, and open issues roll up automatically into a report that's ready before your standup starts.",
  },
];

export default function Features() {
  return (
    <section
      id="approach"
      className="wrap border-t border-kavya-line py-20"
      aria-labelledby="approach-heading"
    >
      <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-12 mb-14">
        <h2
          id="approach-heading"
          className="font-serif font-medium text-[1.7rem] md:text-[2.15rem] leading-tight max-w-[16ch] m-0"
        >
          One system, watching every request come in.
        </h2>
        <p className="text-kavya-muted leading-relaxed max-w-[44ch] mt-1">
          Kavya Labs sits in front of the tools your team already uses. No
          new inbox, no new dashboard to check — it learns from what&apos;s
          already there.
        </p>
      </div>

      <ul className="list-none p-0 m-0" aria-label="Kavya Labs features">
        {FEATURES.map((f, i) => (
          <li
            key={f.title}
            aria-label={f.title}
            className={`grid md:grid-cols-[280px_1fr] gap-10 py-8 border-t border-kavya-line ${
              i === FEATURES.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="font-serif italic font-medium text-[1.35rem]">
              {f.title}
            </div>
            <p className="text-kavya-muted leading-relaxed max-w-[56ch] m-0">
              {f.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
