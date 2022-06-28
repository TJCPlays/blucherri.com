import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faGamepad,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faRedditAlien,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex lg:flex-row flex-col h-screen">
      <aside className="lg:w-60 lg:h-screen h-16 w-screen" aria-label="Sidebar">
        <div className="w-screen py-2 lg:w-auto lg:h-screen lg:overflow-y-auto lg:py-4 px-3 bg-gray-50 dark:bg-gray-800">
          <ul className="flex flex-row lg:[display:initial;] lg:[flex-direction:unset;] mb-2 justify-around">
            <li>
              <Link href="/">
                <a className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ml-3 lg:block hidden lg:text-[0.5rem] ">
                    Home
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/games">
                <a className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FontAwesomeIcon
                    icon={faGamepad}
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ml-3 lg:block hidden lg:text-[0.5rem] ">
                    Games
                  </span>
                </a>
              </Link>
            </li>
            {/* <li>
              <Link href="#">
                <a className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <FontAwesomeIcon
                    icon={faDownload}
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ml-3 lg:block hidden lg:text-[0.5rem] ">Download</span>
                </a>
              </Link>
            </li> */}
            {/* <li>
              <Link href="https://discord.gg/StPDajv" passHref>
                <a
                  target="_blank"
                  className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon
                    icon={faDiscord}
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ml-3 lg:block hidden lg:text-[0.5rem] ">
                    Discord
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/SonicTurboBlast" passHref>
                <a
                  target="_blank"
                  className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ml-3 lg:block hidden lg:text-[0.5rem] ">
                    Twitter
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://www.reddit.com/r/sonicturboblast/" passHref>
                <a
                  target="_blank"
                  className="flex items-center p-2 text-3xl font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <FontAwesomeIcon
                    icon={faRedditAlien}
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  />
                  <span className="ml-3 lg:block hidden lg:text-[0.5rem] ">
                    Reddit
                  </span>
                </a>
              </Link>
            </li> */}
          </ul>
        </div>
      </aside>
      <main className="flex-1 h-auto lg:h-screen bg-gray-100 dark:bg-gray-700">
        {children}
      </main>
    </div>
  );
}
