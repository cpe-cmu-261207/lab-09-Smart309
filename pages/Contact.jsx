import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <Navbar>
      <div class="d-flex justify-content-center">
        <div class="card-group my-5">
          <div class="card text-bg-primary" style={{ width: "200px" }}>
            <img
              src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
              class="card-img-top bg-white"
            />
            <div class="card-body">
              <h5 class="card-title">Facebook</h5>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                class="text-white"
                href="https://www.facebook.com/phattaraphon.takham.7/"
              >
                Pattharapon Takham
              </a>
            </div>
          </div>
        </div>
        <div class="card-group my-5">
          <div class="card text-bg-primary" style={{ width: "200px" }}>
            <img
              src="https://www.shareicon.net/download/2016/07/06/110727_outlook.svg"
              class="card-img-top bg-white"
            />
            <div class="card-body">
              <h5 class="card-title">Outlook</h5>
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                class="text-white"
                href="mailto:#"
              >
                pattharapon_takham@cmu.ac.th
              </a>
            </div>
          </div>
        </div>
        <div class="card-group my-5">
          <div class="card text-bg-primary" style={{ width: "200px" }}>
            <img
              src="https://th.bing.com/th/id/OIP.M_26ozICF9-cS8_P0a2eOAHaHa?pid=ImgDet&rs=1"
              class="card-img-top bg-white"
            />
            <div class="card-body">
              <h5 class="card-title">Phone Number</h5>
              <p class="card-text">097-9279641</p>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
