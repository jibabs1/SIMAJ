import React from "react";

type Props = {};

export default function Stats({}: Props) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="border-gray-200 dark:border-gray-600">
        <div
          className="_p-4 bg-white rounded-lg _md:p-8 dark:bg-gray-800"
          id="stats"
          role="tabpanel"
          aria-labelledby="stats-tab"
        >
          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-4 dark:text-white sm:p-8">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold">377</dt>
              <dd className="font-bold text-[#241C58] dark:text-gray-400">
                Apartments
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold">3</dt>
              <dd className="font-bold text-[#241C58] dark:text-gray-400">
                Communities
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold">2</dt>
              <dd className="font-bold text-[#241C58] dark:text-gray-400">
                Cities
              </dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-5xl font-extrabold">1</dt>
              <dd className="font-bold text-[#241C58] dark:text-gray-400">
                Year in Operation
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
