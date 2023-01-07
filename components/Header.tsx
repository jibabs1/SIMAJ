import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo-white-bg.png";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      {/* <nav className="bg-[#241C58] border-gray-200 dark:bg-gray-900"></nav> */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Link href="/" className="flex items-center">
              <Image src={Logo} width={82} height={48} alt="Maigadi Logo" />
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Link
              href="tel:09063745975"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              (090) 63745975
            </Link>
            <Link
              href="https://admin.maigadi.com"
              // className="text-black bg-white hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              className="text-white bg-[#241C58] hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-[#241C58] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login
            </Link>
          </motion.div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex items-center"
          >
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Download
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </nav>
    </>
  );
}
