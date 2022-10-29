import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Seat = () => {
  const dispatch = useDispatch();
  //Lấy data từ store vào state
  const { seatSelected, seatList } = useSelector((state) => state.datve);

  const handleClick = (hang, soGhe) => {
    console.log(hang, soGhe);
    dispatch({ type: "dang_chon", hang, soGhe });
  };

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th className="rowNumber"></th>
            <th className="rowNumber">1</th>
            <th className="rowNumber">2</th>
            <th className="rowNumber">3</th>
            <th className="rowNumber">4</th>
            <th className="rowNumber">5</th>
            <th className="rowNumber">6</th>
            <th className="rowNumber">7</th>
            <th className="rowNumber">8</th>
            <th className="rowNumber">9</th>
            <th className="rowNumber">10</th>
            <th className="rowNumber">11</th>
            <th className="rowNumber">12</th>
          </tr>
        </thead>
        <tbody>
          {seatList.map((item) => (
            <tr key={item.seatList}>
              <td className="firstChar">{item.hang}</td>
              {item.danhSachGhe.map((seat, index) => (
                <td key={seat.id}>
                  {/* Nếu daDat là true thì className sẽ là gheDuocChon, nếu dangChon là true thì className là gheDangChon, trường hợp còn lại className là ghe */}
                  <button
                    className={
                      seat.daDat
                        ? "gheDuocChon"
                        : seat.dangChon
                        ? "gheDangChon"
                        : "ghe"
                    }
                    onClick={() => handleClick(item.hang, seat.soGhe)}
                  >
                    {index + 1}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Seat;
