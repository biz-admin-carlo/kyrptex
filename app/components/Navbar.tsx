import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-3">
        {/* Brand */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight text-[#023A62] md:text-2xl"
        >
          KYRPTEX Insurance Services
        </Link>

        {/* Right group: nav + CTA */}
        <div className="ml-auto hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-10 text-base font-medium text-black">
            <Link href="#home" className="hover:text-[#023A62]">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#023A62]">
              About Us
            </Link>
            <Link href="#services" className="hover:text-[#023A62]">
              <span className="inline-flex items-center gap-1">
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
            <Link href="#faqs" className="hover:text-[#023A62]">
              FAQs
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="rounded-[10px] bg-teal-400 px-5 py-2.5 font-semibold text-black transition-colors hover:bg-teal-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
