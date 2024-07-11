import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-300">
      <div className="container h-16  flex justify-between items-center">
        <div className="logo text-white">
          <h2 className="text-color-secondary font-semibold">NextTut</h2>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
