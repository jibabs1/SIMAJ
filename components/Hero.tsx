import Image from "next/image";
import React from "react";
import Logo from "../public/residential.jpg";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div
      className="bg-black w-full h-[400px] mb-20"
      style={{ backgroundImage: `url('/residential.jpg')` }}
    >
      <div
        className="w-full h-full"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        <div
          className="mx-auto py-10 lg:py-20 px-10 lg:px-0"
          style={{ maxWidth: 1232 }}
        >
          <div className="grid grid-cols-2 lg:grid-col-3">
            <div className="space-y-5">
              <h1 className="text-4xl text-white">
                A Community Management Software.
              </h1>

              <h2 className="text-white text-lg">
                Designed for community managers to expeditiously manage gated,
                residential communities and villas.
              </h2>

              <div className="mt-10 pt-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Image
        src={Logo}
        alt="Banner"
        className="w-full h-[500px] object-cover mb-20"
      /> */}
    </div>
  );
}
