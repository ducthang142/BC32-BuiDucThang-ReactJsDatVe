import React from "react";

const Seat = ({ data }) => {
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
          {data.map((item) => (
            <tr key={item.id}>
              <td className="firstChar">{item.hang}</td>
              {item.danhSachGhe.map((seat) => (
                <td key={seat.id}>
                  <input type="checkbox" className={seat.daDat?"gheDuocChon":"ghe"}  defaultValue={seat.soGhe} cursor />
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
