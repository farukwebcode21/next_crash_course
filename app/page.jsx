import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="container">
      <h1>Welcome to Next Crash Course</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
    </div>
  );
};

export default page;