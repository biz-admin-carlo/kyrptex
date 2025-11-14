import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-0">
      {/* Main footer */}
      <div className="bg-[#063C5E] py-14 text-white md:py-20">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 xl:gap-x-32">
          {/* Brand and blurb */}
          <div>
            <h3 className="text-5xl font-bold leading-none tracking-wide text-[#22C9C7] md:text-6xl">
              KYRPTEX
            </h3>
            <p className="mt-2 text-2xl font-semibold text-[#22C9C7]">
              Insurance Services
            </p>
            <p className="mt-6 max-w-md text-white/90">
              Reliable insurance solutions, backed by years of experience and
              trust.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center text-teal-400 transition-color"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center text-teal-400 transition-colors"
              >
                <Image
                  src="/Facebook.png"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center  text-teal-400 transition-colors "
              >
                <Image
                  src="/Instagram.png"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right column: Help + Quick Links */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Help */}
            <div>
              <h4 className="text-2xl font-semibold">Help</h4>
              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-white transition-colors hover:text-teal-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#quote"
                    className="text-white transition-colors hover:text-teal-300"
                  >
                    Get a Quote
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition-colors hover:text-teal-300"
                  >
                    Book an Appointment
                  </a>
                </li>
              </ul>
              <ul className="mt-8 space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-white transition-colors hover:text-teal-300"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition-colors hover:text-teal-300"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-2xl font-semibold">Quick Links</h4>
              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    href="#"
                    className="text-white transition-colors hover:text-teal-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-white transition-colors hover:text-teal-300"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition-colors hover:text-teal-300"
                  >
                    Claims
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-white py-3 text-black">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 text-sm md:text-base">
          <p>
            © {year}.{" "}
            <a href="#" className="text-teal-500 hover:text-teal-600">
              KYRPTEX Insurance Services
            </a>
            . All rights reserved.
          </p>
          <p className="text-center">
            Designed &amp; Developed by{" "}
            <span className="font-medium">BizSolutions</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
