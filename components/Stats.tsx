import React from "react";

type Props = {};

export default function Stats({}: Props) {
  return (
    // <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
    <div
      className="bg-black w-full _h-[500px] mb-20 bg-cover bg-no-repeat bg-bottom rounded-lg"
      style={{ backgroundImage: `url('/home-banner2.jpg')` }}
    >
      <div className="border-gray-200 dark:border-gray-600">
        <div
          className="bg-green-100/70 rounded-lg _md:p-8 dark:bg-gray-800"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold">3</dt>
              <dd className="font-bold text-[#241C58] dark:text-gray-400">
                Countries of Operation
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold">13</dt>
              <dd className="font-bold text-[#241C58] dark:text-gray-400">
                Staff
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold">$150M</dt>
              <dd className="font-bold text-[#241C58] dark:text-gray-400">
                Trade Finance
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold">9</dt>
              <dd className="font-bold text-[#241C58] dark:text-gray-400">
                Year of Operation
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
    // </div>
  );
}
