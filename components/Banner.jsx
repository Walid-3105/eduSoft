"use client";
import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-300 via-indigo-600 to-purple-300 text-white py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30 animate-pulse-slow">
        <Image
          src="/banner/banner.webp"
          alt="College background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center transform animate-fade-in-up">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-wide drop-shadow-lg">
          Unlock Your Future with Top Colleges
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow">
          Embark on a journey to find your dream college. Explore, discover, and
          apply with ease—all in one magical platform.
        </p>
        <Link href="/colleges">
          <button className="bg-white/90 text-indigo-700 px-8 py-4 rounded-full text-xl font-bold hover:bg-indigo-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-bounce-slow">
            Start Your Adventure Now
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Banner;
