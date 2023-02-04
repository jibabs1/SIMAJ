import React, { useRef, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

type Props = {};

export default function CTA({}: Props) {
  const name = useRef<any>(null);
  const email = useRef<any>(null);
  const phone = useRef<any>(null);
  const state = useRef<any>(null);
  const role = useRef<any>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const demoRequest = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();

    const data = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      state: state.current.value,
      role: role.current.value,
    };

    var response = await axios.post("http://localhost:3001/api/sendMail", data);
    if (response.data) {
      setIsLoading(false);
      setData(response.data.result);
    }
  };

  return (
    <div className="bg-gray-50 px-6 lg:flex lg:items-center lg:justify-between py-8 lg:py-16 lg:px-8">
      <div className="_mx-auto _max-w-7xl ">
        <div className="mb-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to use?</span>
            <span className="block text-indigo-600">Schedule a demo</span>
          </h2>
        </div>

        {/* <div className="mt-5 mb-5 flex _lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div> */}
      </div>

      <div className="flex">
        <form onSubmit={demoRequest}>
          <div className="space-x-0 sm:space-x-5 space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-md"
              ref={name}
              required
            />
            <select
              name="role"
              placeholder="Your role"
              className="rounded-md w-1/2"
              ref={role}
              required
            >
              <option value="Resident">Resident</option>
              <option value="Realtor">Realtor</option>
              <option value="Builder">Builder</option>
              <option value="Security Agency">Security Agency</option>
              <option value="Estate Manager">
                Estate Manager / Estate Committee Member
              </option>
            </select>
          </div>

          <div className="sm:space-x-5 space-y-5 mt-5 sm:mt-0">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="rounded-md"
              ref={email}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone number"
              className="rounded-md"
              ref={phone}
              required
            />
          </div>

          <div className="mt-5">
            <select
              name="state"
              placeholder="State"
              className="rounded-md sm:w-full"
              ref={state}
              required
            >
              <option>State</option>
              <option value="Abuja">Abuja</option>
              <option value="Lagos">Lagos</option>
            </select>
          </div>
          <button className="mt-5 bg-blue-700 text-white p-2 px-4 rounded-lg">
            {isLoading ? (
              <ClipLoader
                color="#241C58"
                size={20}
                className="justify-center items-center"
              />
            ) : (
              "Submit"
            )}
          </button>
          {data && (
            <p className="mt-2 bg-green-500 w-32 p-1 justify-center items-center text-center">
              {data}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
