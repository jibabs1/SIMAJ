import React from "react";

type Props = {};

export default function Vision({}: Props) {
  return (
    <div className="mb-20 pt-24">
      {/* <div className="sm:text-center mb-5">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Values
        </h2>
      </div> */}
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Our Vision
            </h3>
            <p className="my-4">
              ​Our vision is to provide world class services in computing,
              medical and analytical equipment in Nigeria
            </p>
          </blockquote>
        </figure>

        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h3>
            <p className="my-4">
              To provide excellent services in supply and training of computing,
              medical and analytical equipment in Nigeria by deploying state of
              art equipment and providing reliable technical backup using
              qualified and experienced professionals
            </p>
          </blockquote>
        </figure>
      </div>
    </div>
  );
}
