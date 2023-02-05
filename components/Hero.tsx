import Image from "next/image";
import React from "react";
import Logo from "../public/residential.jpg";
import playstore from "../public/playstore.png";
import appstore from "../public/appstore.png";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div
      className="bg-black w-full h-[500px] mb-20"
      style={{ backgroundImage: `url('/residential.jpg')` }}
    >
      <div
        className="w-full h-full md:px-5"
        style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
      >
        <div
          className="mx-auto py-10 lg:py-20 px-10 lg:px-0"
          style={{ maxWidth: 1232 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">
                {/* A Community Management Software. */}
                Reshaping the future of gated community security
              </h1>

              <h2 className="text-white text-lg">
                Designed for community managers to expeditiously manage gated,
                residential communities and villas.
              </h2>

              <div className="mt-10 pt-3 inline-flex rounded-md shadow">
                <a
                  href="mailto:info@trigonaltech.com"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Schedule Demo
                </a>
              </div>

              <div className="mt-10 flex space-x-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.trigonal.maigadi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={playstore}
                    alt="Banner"
                    className="w-[120px] h-[50px] object-contain mb-5"
                  />
                </a>
                <a
                  href="https://apps.apple.com/ng/app/maigadi/id1620396384"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={appstore}
                    alt="Banner"
                    className="w-[120px] h-[50px] object-contain mb-5"
                  />
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
