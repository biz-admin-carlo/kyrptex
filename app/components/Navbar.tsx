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
            <Link href="/" className="hover:text-[#023A62]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#023A62]">
              About Us
            </Link>
            <div className="relative group">
              <Link href="/#services" className="hover:text-[#023A62]">
                <span className="inline-flex items-center gap-1">
                  Services
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
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
              {/* Dropdown menu */}
              <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 translate-y-1 rounded-md border border-black/10 bg-white p-2 text-sm text-black opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="flex flex-col">
                  <li>
                    <Link
                      href="/services/life-insurance"
                      className="block rounded px-3 py-2 hover:bg-black/5"
                    >
                      Life Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/health-insurance"
                      className="block rounded px-3 py-2 hover:bg-black/5"
                    >
                      Health Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/indexed-universal-life"
                      className="block rounded px-3 py-2 hover:bg-black/5"
                    >
                      Indexed Universal Life (IUL)
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/accident-insurance"
                      className="block rounded px-3 py-2 hover:bg-black/5"
                    >
                      Accident Insurance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/annuities"
                      className="block rounded px-3 py-2 hover:bg-black/5"
                    >
                      Annuities
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/faqs" className="hover:text-[#023A62]">
              FAQs
            </Link>
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="rounded-[10px] bg-teal-400 px-5 py-2.5 font-semibold text-black transition-colors hover:bg-teal-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
