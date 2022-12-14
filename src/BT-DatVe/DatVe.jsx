import React from "react";
import Seat from "./Seat";
import Bill from "./Bill";

const DatVe = () => {
  return (
    <div>
      <h1 className="my-5 text-center text-white">ĐẶT VÉ XEM PHIM</h1>

      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="text-center text-white">Màn Hình</h4>
            <div className="screen"></div>
            <Seat />
          </div>
          <div>
            <h2 className="text-center text-white">DANH SÁCH GHẾ BẠN CHỌN</h2>
            <button className="gheDuocChon"></button>
            <span className="text-white mx-2">Ghế đã đặt</span>
            <br />
            <button className="gheDangChon"></button>
            <span className="text-white mx-2">Ghế đang đặt</span>
            <br />
            <button className="ghe"></button>
            <span className="text-white mx-2">Ghế chưa đặt</span>
            <Bill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatVe;
