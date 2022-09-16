import React from "react";
import Navbar from "../components/Navbar";
import { myDATA } from "../libs/myDATA";

export default function Profile() {
  return (
    <Navbar>
      <div className="mx-auto px-2" style={{ maxWidth: "1000px" }}>
        <div className="border border-2 rounded-3 p-2 vstack gap-2">
          <div className="vstack gap-3">
            <img
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              src={
                "https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/274099911_3197464537152583_8727837563285133600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGQ5g1K-jx0MRSJIq3szV09GTx_29JMj6QZPH_b0kyPpGWdaOvCe_08orayvT7hMM9qWOMLhdFYmd6jgJhVsM9u&_nc_ohc=XwF4gQ9p_qcAX_DE4lU&_nc_ht=scontent.fbkk14-1.fna&oh=00_AT9FpqU3WHamnNPqDZkmKkhYYH5Scg7hdVecPOJpfxSKYQ&oe=63272BB1"
              }
              width="150"
              height="150"
              className="rounded-circle "
            />
            <span className="fw-bold h3 text-center">PATTHARAPON TAKHAM</span>
          </div>

          <div className="vstack gap-0"></div>
          {myDATA.map((x) => (
            <div>
              <button
                type="button"
                className="fw-bold"
                style={{
                  backgroundColor: "#97d3df",
                  color: "white",
                  cursor: "pointer",
                  padding: "18px",
                  width: "100%",
                  border: "none",
                  textAlign: "center",
                  outline: "none",
                  fontSize: "15px",
                }}
              >
                {x.topic}
              </button>
              <div
                style={{
                  padding: "0 18px",
                  backgroundColor: "#f2f1f1",
                  textAlign: "center",
                }}
                className="border border-2"
              >
                {x.data}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Navbar>
  );
}
