import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

type Service = {
  title: string;
  description: string;
  cta: string;
  icon?: string;
  href?: string;
};

type ServiceCardProps = {
  service: Service;
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Link
      href={service.href ?? "#"}
      className={`${inter.className} group flex w-full max-w-xs flex-col items-center justify-center gap-6 rounded-[16px] bg-white p-6 text-center shadow-sm shadow-black/10 transition-colors duration-200 hover:bg-[#22C9C7] sm:max-w-sm`}
    >
      <div>
        <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[16px] sm:h-24 sm:w-24 md:h-28 md:w-28">
          {service.icon ? (
            <Image
              src={service.icon}
              alt={`${service.title} logo`}
              fill
              className="object-contain"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-20 w-20 text-black"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M8 12l2.5 2.5L16 9" />
            </svg>
          )}
        </div>
        <h3 className="text-lg font-semibold text-black md:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-black/70 ">{service.description}</p>
      </div>

      <span className="mt-6 inline-block text-sm font-medium text-[#023A62] underline-offset-4 group-hover:underline">
        {service.cta}
      </span>
    </Link>
  );
}
