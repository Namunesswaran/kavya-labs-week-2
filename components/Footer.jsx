export default function Footer() {
  return (
    <footer>
      <div className="wrap py-14">
        <div className="flex justify-between items-start flex-wrap gap-8 pb-8 border-b border-kavya-line">
          <div>
            <div className="font-serif font-semibold text-xl mb-2.5">
              Kavya Labs
            </div>
            <p className="text-kavya-muted text-[0.92rem] max-w-[32ch] m-0">
              Bengaluru, India. Built for teams who&apos;d rather fix the
              queue than manage it.
            </p>
          </div>
          <div className="flex gap-12 flex-wrap">
            <div>
              <h3 className="text-[0.82rem] font-semibold mb-3">Product</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                <li>
                  <a
                    href="#product"
                    className="text-kavya-muted text-[0.92rem] hover:text-kavya-fg"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#approach"
                    className="text-kavya-muted text-[0.92rem] hover:text-kavya-fg"
                  >
                    How it works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[0.82rem] font-semibold mb-3">Company</h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                <li>
                  <a
                    href="#contact"
                    className="text-kavya-muted text-[0.92rem] hover:text-kavya-fg"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@kavyalabs.ai"
                    className="text-kavya-muted text-[0.92rem] hover:text-kavya-fg"
                  >
                    hello@kavyalabs.ai
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-3 pt-6 text-kavya-muted text-[0.85rem]">
          <span>© 2026 Kavya Labs.</span>
          <span>Bengaluru, India</span>
        </div>
      </div>
    </footer>
  );
}
