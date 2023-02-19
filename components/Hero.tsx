import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <div
      className="bg-black w-full h-[500px] mb-20 bg-cover bg-no-repeat bg-bottom"
      style={{ backgroundImage: `url('/home-banner2.jpg')` }}
    >
      <div
        className="w-full h-full md:px-5"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      >
        <div
          className="mx-auto py-10 lg:py-20 px-10 lg:px-0"
          style={{ maxWidth: 1232 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">
                {/* A Community Management Software. */}
                Reshaping the future of specialized services
              </h1>

              <h2 className="text-white text-lg">
                SIMAJ Engineering and Technical Services Limited is made up of a
                comprehensive team of engineers, medical doctors, scientists,
                fund managers and other professionals who overtime have proved
                to be the best in service delivery in terms of speed and quality
                in the country today
              </h2>

              {/* <div className="mt-10 pt-3 inline-flex rounded-md shadow">
                <a
                  href="mailto:info@trigonaltech.com"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Schedule Demo
                </a>
              </div> */}
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
