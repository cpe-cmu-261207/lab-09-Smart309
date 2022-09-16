import React from "react";
import Navbar from "../components/Navbar";
import { EXP } from "../libs/EXP";

export default function Experience() {
  return (
    <Navbar>
      <div class="d-flex justify-content-center">
        <div>
          {EXP.map((x) => (
            <div class="card mb-3" style={{ maxWidth: "300px" }}>
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    style={{
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                    src={x.img}
                    width="180px"
                  />
                </div>
                <div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{x.topic}</h5>
                      <p class="card-text">{x.data}</p>
                      <p class="card-text">
                        <small class="text-muted">{x.date}</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            // <div class="d-flex justify-content-center">
            //   <div class=" card mb-3" style={{ maxWidth: "540px" }}>
            //     <div class="d-flex justify-content-center">
            //       <img src={x.img} width="200px" />
            //     </div>

            //     <p class="h4">{x.topic}</p>
            //     <p>{x.data}</p>
            //     <p class="text-secondary">{x.date}</p>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </Navbar>
  );
}
