import Image from "next/image";
import React from "react";
import Banner from "../public/banner.png";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function About({}: Props) {
  const [text] = useTypewriter({
    // words: [
    //   "Visitor management",
    //   "Community orchestration",
    //   "Accounts & Payment",
    //   "Community management",
    // ],
    words: [
      "Ease-of-use",
      "Low Investment",
      "Quick Set-up",
      "24*7 Support",
      "Innovative Culture",
      "Secured Service",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="bg-[#241C58] rounded-lg  grid grid-cols-2 relative">
      <div className="col-span-2 md:col-span-1 items-center p-14 justify-center text-3xl gap-y-7">
        <h2 className="font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Why maigadi?</span>
          <span className="block text-indigo-300">{text}.</span>
        </h2>
        <p className="text-gray-100 text-[13px] mt-4 leading-5">
          <span className="underline text-yellow-300 text-[13px]">Maigadi</span>{" "}
          is all you need to manage your gated estate/community effectively. It
          gives you access to various services that helps you keep track of
          activities within your community.
        </p>
        <div className="mt-6 inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Sign up today
          </a>
        </div>
      </div>
      <div className="hidden md:block md:col-span-1 pt-14 absolute right-0 bottom-0">
        <Image
          src={Banner}
          className="w-full h-60 object-contain"
          alt="banner"
        />
      </div>
    </div>
  );
}
