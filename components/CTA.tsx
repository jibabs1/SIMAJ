import React, { useRef, useState } from "react";

type Props = {};

export default function CTA({}: Props) {
  return (
    <div
      className="_bg-gray-50 px-6 lg:flex lg:items-center lg:justify-between py-8 lg:py-16 lg:px-8"
      id="CTA"
    >
      <div className="_mx-auto _max-w-7xl ">
        <div className="mb-5 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block underline">Contact us today</span>
          </h2>
          <br />
          <p className="text-2xl">
            <span className="font-bold">Business Address:</span> No. 125/127
            Maiduguri Road, Kano, Kano State{" "}
          </p>
          <p className="text-2xl">
            <span className="font-bold">Phone: </span>
            <a href="tel: +2347063365325">+2347063365325</a>,
            <a href="tel: +2348036731245">+2348036731245</a>
          </p>
          <p className="text-2xl">
            <span className="font-bold">Email: </span>
            <a href="mailto:info@simajonline.com">simajonline@gmail.com </a>
          </p>
        </div>
      </div>
    </div>
  );
}
