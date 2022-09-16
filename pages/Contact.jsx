import React from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <Navbar>
      <div className="d-flex justify-content-center">
        <div className="card-group my-5">
          <div className="card text-bg-primary" style={{ width: "200px" }}>
            <img
              src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"
              className="card-img-top bg-white"
            />
            <div className="card-body">
              <h5 className="card-title">Facebook</h5>
              <a
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
                className="text-white"
                href="https://www.facebook.com/phattaraphon.takham.7/"
              >
                Pattharapon Takham
              </a>
            </div>
          </div>
        </div>
        <div className="card-group my-5">
          <div className="card text-bg-primary" style={{ width: "200px" }}>
            <img
              src="https://www.shareicon.net/download/2016/07/06/110727_outlook.svg"
              className="card-img-top bg-white"
            />
            <div className="card-body">
              <h5 className="card-title">Outlook</h5>
              <a
                target="_blank"
                style={{ textDecoration: "none" }}
                className="text-white"
                href="mailto:#"
              >
                pattharapon_takham@cmu.ac.th
              </a>
            </div>
          </div>
        </div>
        <div className="card-group my-5">
          <div className="card text-bg-primary" style={{ width: "200px" }}>
            <img
              src="https://th.bing.com/th/id/OIP.M_26ozICF9-cS8_P0a2eOAHaHa?pid=ImgDet&rs=1"
              className="card-img-top bg-white"
            />
            <div className="card-body">
              <h5 className="card-title">Phone Number</h5>
              <p className="card-text">097-9279641</p>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}
