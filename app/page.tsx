"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-8 md:pl-20 lg:pl-40 pb-32 md:pb-20 flex flex-col gap-3 md:gap-5 z-[10] max-w-[90%] md:max-w-[750px]">
          <h1 className="text-[32px] md:text-[50px] text-white font-semibold">
            Making anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            "Every challenge is an opportunity in disguise; embrace it, and turn it into your stepping stone to greatness."
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-3 md:gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[180px] md:max-w-[200px]"
              aria-label="Go to my skills"
            >
              Home
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent border border-white px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[180px] md:max-w-[200px]"
              aria-label="View my projects"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My projects
            </Link>
            <Link
              href="/about-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[180px] md:max-w-[200px]"
              aria-label="Learn about me"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              About me
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-4 md:px-5 py-2 md:py-3 text-base md:text-lg text-white max-w-[180px] md:max-w-[200px]"
              aria-label="Contact me"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-3">
        <Link
          href="/my-skills"
          className="rounded-[20px] group bg-blue-500 px-4 py-2 text-base text-white max-w-[180px]"
          aria-label="Go to my skills"
        >
          Home
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-transparent border border-white px-4 py-2 text-base text-white max-w-[180px]"
          aria-label="View my projects"
        >
          My projects
        </Link>
        <Link
          href="/about-me"
          className="rounded-[20px] group bg-transparent border border-white px-4 py-2 text-base text-white max-w-[180px]"
          aria-label="Learn about me"
        >
          About me
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] group bg-transparent border border-white px-4 py-2 text-base text-white max-w-[180px]"
          aria-label="Contact me"
        >
          Contact me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10] flex flex-col items-end">
        <Image
          src="/horse.png"
          alt="A horse"
          height={200}
          width={200}
          className="absolute right-0 top-24 md:right-10 md:top-40"
        />
        <Image
          src="/cliff.webp"
          alt="Cliff"
          height={360}
          width={360}
          className="hidden md:block"
        />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="Trees in the background"
          height={1500}
          width={1500}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="Stars in the sky"
        height={200}
        width={200}
        className="absolute top-5 left-2 md:top-10 md:left-0 z-[10]"
      />
    </main>
  );
}
