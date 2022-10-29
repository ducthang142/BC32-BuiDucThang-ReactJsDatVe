import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Bill = () => {
  //Lấy data từ store vào state
  const { seatSelected } = useSelector((state) => state.datve);
  return (
    <>
      <table className="table text-white">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
            <th>Hủy</th>
          </tr>
        </thead>
        <tbody>
          {seatSelected.map((item) => (
            <tr>
              <td>{item.soGhe}</td>
              <td>{item.gia}</td>
              <td>
                <button className="btn btn-danger">x</button>
              </td>
            </tr>
          ))}
          <tr>
            <td><b>Tổng tiền</b></td>
            <td>{seatSelected.reduce((total,item) => total + item.gia, 0)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Bill;
