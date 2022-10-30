import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Bill = () => {
  const dispatch = useDispatch();
  //Lấy data từ store vào state
  const { seatSelected } = useSelector((state) => state.datve);

  const handlePurchase = (seatPurchaseds) => {
    dispatch({ type: "da_chon", seatPurchaseds });
    alert("Đặt vé thành công");
  };

  return (
    <>
      <table className="table text-white">
        <thead>
          <tr>
            <th>Số ghế</th>
            <th>Giá</th>
          </tr>
        </thead>
        <tbody>
          {seatSelected.map((item) => (
            <tr key={item.soGhe}>
              <td>{item.soGhe}</td>
              <td>{item.gia}</td>
            </tr>
          ))}
          <tr>
            <td className="text-warning">
              <b>Tổng tiền</b>
            </td>
            <td className="text-warning">
              <b>{seatSelected.reduce((total, item) => total + item.gia, 0)}</b>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        className="btn btn-success"
        onClick={() => handlePurchase(seatSelected)}
      >
        Đặt vé
      </button>
    </>
  );
};

export default Bill;
