import Image from "next/image";
import { Inter } from "next/font/google";

type Service = {
  title: string;
  description: string;
  cta: string;
  icon?: string;
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
    <div
      className={`${inter.className} group flex h-[400px] w-[300px] flex-col items-center justify-center gap-6 rounded-[16px] bg-white p-6 text-center shadow-sm shadow-black/10 transition-colors duration-200 hover:bg-[#22C9C7]`}
    >
      <div>
        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-[16px relative">
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
        <h3 className="text-lg font-semibold text-black  md:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-black/70 ">{service.description}</p>
      </div>

      <a
        href="#"
        className="mt-6 inline-block text-sm font-medium text-[#023A62] underline-offset-4 hover:underline "
      >
        {service.cta}
      </a>
    </div>
  );
}
