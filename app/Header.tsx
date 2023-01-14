"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [hamburgerState, setHamburgerState] = useState(false);

  return (
    <div className="bg-green-500 w-screen h-16 justify-between flex items-center">
      <h1 className="font-bold mx-4">sidebar</h1>

      {/* Turn this button into icon changing between hamburgermenu and cross */}
      <button
        className="md:hidden mx-4 z-10"
        onClick={() => setHamburgerState(!hamburgerState)}
      >
        hamburger
      </button>

      <nav className="hidden md:block mx-4">
        <ul className="hidden md:flex mx-4">
          <li className="mr-8 lg:mr-14 xl:mr-20 2xl:mr-26">
            <Link href="/projects">Projects</Link>
          </li>
          <li>menu2</li>
          <li className="ml-8 lg:ml-14 xl:ml-20 2xl:ml-26">menu3</li>
        </ul>
      </nav>

      {hamburgerState ? (
        <aside className="h-screen w-48 bg-red-500 flex flex-col fixed top-0 right-0 items-center justify-center">
          <nav>
            <ol className="flex flex-col mx-4 w-full items-center">
              <li className="mb-8">menu1</li>
              <li>menu2</li>
              <li className="mt-8">menu3</li>
            </ol>
          </nav>
        </aside>
      ) : null}
    </div>
  );
}
