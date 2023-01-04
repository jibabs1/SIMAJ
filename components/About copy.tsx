import Image from "next/image";
import React from "react";
import Banner from "../public/app.png";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="bg-[#241C58] rounded-lg  grid grid-cols-2">
      <div className="col-span-1 items-center p-14 justify-center text-3xl space-y-7">
        <h2 className="font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-300">
            Start your free trial today.
          </span>
        </h2>
        <span></span>
        <div className="mt-6 inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            Sign up today
          </a>
        </div>
      </div>
      <div className="col-span-1 pt-14">
        <Image src={Banner} className="w-full h-48 object-cover" alt="banner" />
      </div>
    </div>
  );
}
