import Image from "next/image";
import React from "react";
import Banner from "../public/home-banner3.jpg";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

export default function About({}: Props) {
  const [text] = useTypewriter({
    words: [
      "Consultancy Services",
      "Education & Training",
      "Equipment & Supply",
      "ICT Solution",
      "Laboratory Testing Services",
      "Engineering Equipment & Materials",
      "General Contractor",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div
      className="bg-[#0d4122] rounded-lg  grid grid-cols-2 relative"
      id="About"
    >
      <div className="col-span-2 md:col-span-1 items-center p-14 justify-center text-3xl gap-y-7">
        <h2 className="font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">About SIMAJ</span>
          <span className="block text-[#1d7c45]">{text}.</span>
        </h2>
        <p className="text-gray-100 text-[13px] mt-4 leading-5">
          <span className="underline text-yellow-300 text-[13px]">
            ​SIMAJ Engineering and Technical Services Limited
          </span>{" "}
          is an indigenous company, wholly owned and operated by highly
          qualified and experienced professionals. SIMAJ is a company duly
          incorporated in Nigeria with registration No. RC1193072. It is a
          private company registered om 27th May 2014, with a solid foundation
          to providing specialized services to all classes of customers/clients
          including the public and private institutions. SIMAJ Engineering and
          Technical Services Limited is made up of a comprehensive team of
          engineers, medical doctors, scientists, fund managers and other
          professionals who overtime have proved to be the best in service
          delivery in terms of speed and quality in the country today. We are
          driven by an unquenchable passion for excellence; we offer our
          services in record time without compromising quality and standard.
        </p>
        {/* <div className="mt-6 inline-flex rounded-md shadow">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#1d7c45] hover:bg-indigo-50"
          >
            Sign up today
          </a>
        </div> */}
      </div>
      <div className="hidden md:block md:col-span-1 pt-14 absolute right-0 bottom-0">
        <Image
          src={"/home-banner3.jpg"}
          //src={Banner}
          width={305}
          height={300}
          // className="w-full h-60 object-contain"
          className="overflow-hidden rounded-tr-lg rounded-br-lg"
          alt="banner"
        />
      </div>
    </div>
  );
}
