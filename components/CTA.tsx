import React, { useRef, useState } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import Image from "next/image";

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
    if (response.status == 200) {
      setIsLoading(false);
      setData("Thank you for reaching out. We will be in touch shortly");
    } else {
      setIsLoading(false);
      setData("Could not submit. Please try again.");
    }
  };

  return (
    <div
      className="bg-gray-50 px-6 lg:flex lg:items-center lg:justify-between py-8 lg:py-16 lg:px-8"
      id="CTA"
    >
      <div className="_mx-auto _max-w-7xl ">
        <div className="mb-5">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Join our happy customers</span>
            <span className="block text-indigo-600">Schedule a demo</span>
          </h2>
        </div>
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
              <option value="">Role</option>
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
              <option value="">State</option>
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
            <p className="mt-2 bg-green-500 w-1/2 p-1 justify-center items-center text-center">
              {data}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
