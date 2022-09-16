import Link from "next/link";
import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <div className="text-bg-info text-white mb-2">
        <div className="d-flex align-item-center mx-auto">
          <Link href="/Manu">
            <a
              style={{
                fontFamily: "Rubik Moonrocks",
                color: "white",
                textDecoration: "none",
              }}
              className="me-auto h2"
              href=""
            >
              SMART
            </a>
          </Link>

          <div className="hstack gap-3">
            <Link href="/Profile">
              <a
                style={{
                  fontFamily: "Rubik Moonrocks",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Profile
              </a>
            </Link>
            <Link href="Experience">
              <a
                style={{
                  fontFamily: "Rubik Moonrocks",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Experience
              </a>
            </Link>
            <Link href="/Contact">
              <a
                style={{
                  fontFamily: "Rubik Moonrocks",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </Link>
            <Link href="/lab-07">
              <a
                style={{
                  fontFamily: "Rubik Moonrocks",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                LAB-7
              </a>
            </Link>
          </div>
        </div>
      </div>
      {props.children}
    </div>
  );
}
