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
        <div className="mx-auto py-20" style={{ maxWidth: 1232 }}>
          <div className="grid grid-cols-3">
            <div className="space-y-3">
              <h1 className="text-4xl text-white">
                A place your call home secured by everyone within from your
                mobile device.
              </h1>

              <h2 className="text-white text-2xl">
                Now sleep like a baby, because you have a{" "}
                <span className="uppercase bg-yellow-600">Maigadi</span>
              </h2>
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
