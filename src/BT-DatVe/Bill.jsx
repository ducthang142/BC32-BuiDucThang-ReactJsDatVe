import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Bill = () => {

  const dispatch = useDispatch();
  //Lấy data từ store vào state
  const { seatSelected } = useSelector((state) => state.datve);

  //Hàm handleRemove
  const handleRemove = () => {
    dispatch({type:"bo_chon"});
  }
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
            <tr key={item.soGhe}>
              <td>{item.soGhe}</td>
              <td>{item.gia}</td>
              <td>
                <button className="btn btn-danger" onClick={()=>handleRemove()}>x</button>
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
