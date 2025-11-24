"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-[#023A62] sm:text-xl md:text-2xl"
          onClick={closeMobileMenu}
        >
          KYRPTEX Insurance Services
        </Link>

        {/* Desktop nav + CTA */}
        <div className="ml-auto hidden items-center gap-10 md:flex">
          <nav className="flex items-center gap-10 text-base font-medium text-black">
            <Link href="/" className="hover:text-[#023A62]">
              Home
            </Link>
            <Link href="/about" className="hover:text-[#023A62]">
              About Us
            </Link>
            <div className="group relative">
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

        {/* Mobile menu button */}
        <button
          type="button"
          className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 bg-white text-[#023A62] shadow-sm hover:bg-black/5 md:hidden"
          aria-label={
            isMobileOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((open) => !open)}
        >
          {isMobileOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      {isMobileOpen && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 text-sm font-medium text-black sm:px-6">
            <Link
              href="/"
              className="rounded-md px-2 py-2 hover:bg-black/5"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="rounded-md px-2 py-2 hover:bg-black/5"
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <div className="mt-1 rounded-md bg-black/5 px-2 py-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-black/60">
                Services
              </p>
              <div className="mt-1 flex flex-col">
                <Link
                  href="/services/life-insurance"
                  className="rounded px-2 py-1.5 text-sm hover:bg-black/5"
                  onClick={closeMobileMenu}
                >
                  Life Insurance
                </Link>
                <Link
                  href="/services/health-insurance"
                  className="rounded px-2 py-1.5 text-sm hover:bg-black/5"
                  onClick={closeMobileMenu}
                >
                  Health Insurance
                </Link>
                <Link
                  href="/services/indexed-universal-life"
                  className="rounded px-2 py-1.5 text-sm hover:bg-black/5"
                  onClick={closeMobileMenu}
                >
                  Indexed Universal Life (IUL)
                </Link>
                <Link
                  href="/services/accident-insurance"
                  className="rounded px-2 py-1.5 text-sm hover:bg-black/5"
                  onClick={closeMobileMenu}
                >
                  Accident Insurance
                </Link>
                <Link
                  href="/services/annuities"
                  className="rounded px-2 py-1.5 text-sm hover:bg-black/5"
                  onClick={closeMobileMenu}
                >
                  Annuities
                </Link>
              </div>
            </div>
            <Link
              href="/faqs"
              className="mt-1 rounded-md px-2 py-2 hover:bg-black/5"
              onClick={closeMobileMenu}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-[10px] bg-teal-400 px-4 py-2 text-center font-semibold text-black transition-colors hover:bg-teal-500"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
