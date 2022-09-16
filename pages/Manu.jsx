import React from "react";
import Link from "next/link";

export default function Manu() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        minHeight: "100vh",
      }}
    >
      <div className="vstack text-center my-5">
        <Link href="/Profile">
          <a
            style={{
              textDecoration: "none",
              fontSize: "100px",
              fontFamily: "Rubik Moonrocks",
            }}
            href=""
          >
            Profile
          </a>
        </Link>
        <Link href="/Experience">
          <a
            style={{
              textDecoration: "none",
              fontSize: "100px",
              fontFamily: "Rubik Moonrocks",
            }}
            href=""
          >
            Experience
          </a>
        </Link>
        <Link href="/Contact">
          <a
            style={{
              textDecoration: "none",
              fontSize: "100px",
              fontFamily: "Rubik Moonrocks",
            }}
            href=""
          >
            Contact
          </a>
        </Link>
      </div>
      <Link href="/">
        <a href="">
          <img
            src="/png-house-icon-18.jpg"
            classNameName="bottomleft"
            width="50px"
          />
        </a>
      </Link>
    </div>
  );
}
