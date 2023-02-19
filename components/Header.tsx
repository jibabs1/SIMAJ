import Image from "next/image";
import Link from "next/link";
import Logo from "../public/logo.png";
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
              <Image src={Logo} width={100} height={14} alt="Maigadi Logo" />
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center"
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <ul className="flex flex-row mt-0 mr-6 space-x-16 text-sm font-medium">
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
                  href="#About"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#Features"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#FAQ"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  FAQs
                </a>
              </li>

              <li className="hidden md:block">
                <a
                  href="#CTA"
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
