"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["700", "800"],
});

type Slide = {
  key: string;
  title: string;
  image: string;
  headline?: string;
  subtext?: string;
};

type HeroSliderProps = {
  slides: Slide[];
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlideIdx((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative min-h-[80vh] overflow-hidden md:min-h-screen">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentSlideIdx * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.key}
              className="relative h-full min-w-full flex-none bg-[#023A62]"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:px-12">
                <p className="text-2xl font-semibold tracking-tight text-[#22C9C7] md:text-6xl">
                  {slide.title}
                </p>
                <h1
                  className={`${inter.className} mt-3 max-w-5xl text-4xl font-extrabold tracking-tight text-white md:mt-4 md:text-5xl lg:text-7xl`}
                >
                  {slide.headline ?? "Explore Our Coverage Options"}
                </h1>
                {slide.subtext ? (
                  <h3 className="mx-auto mt-6 max-w-5xl text-lg font-semibold text-white/85 md:text-xl">
                    {slide.subtext}
                  </h3>
                ) : null}
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="#learn-more"
                    className="inline-flex items-center justify-center rounded-[10px] border border-teal/50 px-6 py-3 text-teal-500 transition-colors hover:bg-white/10"
                  >
                    Learn More
                  </a>
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center rounded-[10px] bg-teal-500 px-6 py-3 font-medium text-black transition-colors hover:bg-teal-600"
                  >
                    Get a Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
