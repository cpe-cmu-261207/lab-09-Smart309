import Navbar from "../components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        minHeight: "100vh",
      }}
    >
      <div class="position-absolute top-50 start-50 translate-middle vstack">
        <Link href="/Manu">
          <a
            style={{
              textDecoration: "none",
              fontSize: "150px",
              fontFamily: "Rubik Moonrocks",
            }}
            class="text-white"
            href=""
          >
            SMART
          </a>
        </Link>
      </div>
    </div>
  );
}
