import React, { Component } from "react";
import InforBookingSeat from "./inforBookingSeat";

export default class MovieSeat extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="display-4 text-warning">ĐẶT VÉ XEM PHIM</div>
                <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
              </div>
              <div className="col-4 text-center">
                <div style={{ fontSize: "35px" }} className=" text-light mt-2">
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <InforBookingSeat />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
