import {
  faHouse,
  faGamepad,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import NavBarItem from "./NavBarItem";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex lg:flex-row flex-col h-screen">
      <aside className="lg:w-60 lg:h-screen h-16 w-screen" aria-label="Sidebar">
        <div className="w-screen py-2 lg:w-auto lg:h-screen lg:overflow-y-auto lg:py-4 px-3 bg-gray-50 dark:bg-gray-800">
          <ul className="flex flex-row lg:[display:initial;] lg:[flex-direction:unset;] mb-2 justify-around">
            <NavBarItem name="Home" link="/" icon={faHouse} />
            <NavBarItem name="Games" link="/games" icon={faGamepad} />
            <NavBarItem
              name="Discord"
              link="https://discord.gg/hX7aQ5WsyY"
              icon={faDiscord}
              external
            />
            <NavBarItem
              name="Twitter"
              link="https://twitter.com/cherri_blu"
              icon={faTwitter}
              external
            />
            <NavBarItem name="About" link="/about" icon={faCircleInfo} />
          </ul>
        </div>
      </aside>
      <main className="flex-1 h-auto lg:h-screen bg-gray-100 dark:bg-gray-700">
        {children}
      </main>
    </div>
  );
}
