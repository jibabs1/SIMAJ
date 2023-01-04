import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCirles from "./BackgroundCirles";
import Logo from "../public/profile.jpeg";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Visitor management",
      "Community orchestration",
      "Accounts & Payment",
      "Community management",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="flex flex-col text-center md:text-left h-screen items-center justify-center overflow-hidden">
      <BackgroundCirles />
      <img
        src="/profile.jpeg"
        className="relative rounded-full w-28 h-28 mx-auto object-fill"
        alt="Maigadi Logo"
      />
      <div className="mt-3">
        <h2 className="text-sm lowercase text-gray-500 pb-2 tracking-[15px]">
          {" "}
          Maigadi
        </h2>
        <h1 className="text-white">
          <span>{text}</span>
          <Cursor cursorColor="#241C58" />
        </h1>
      </div>
    </div>
  );
}
