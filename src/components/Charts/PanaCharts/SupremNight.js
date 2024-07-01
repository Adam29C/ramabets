import React from "react";

const ShreeDevi = ({ chartData }) => {
  return (
    <div>
      <div className="table-responsive ">
        <table className="table fw-bold" border="collapse">
          <thead>
            <tr>
              <th className="cc">Date</th>
              <th className="cc">MON</th>
              <th className="cc">TUE</th>
              <th className="cc">WED</th>
              <th className="cc">THU</th>
              <th className="cc">FRI</th>
              <th className="cc">SAT</th>
              <th className="cc">SUN</th>
            </tr>
          </thead>
          <tbody>
      
            {chartData &&
              chartData.map((item1) => (
                <tr key={item1.id}>
                  <td className="cc" style={{ width: "13%" }}>
                    <div
                  className="pana-chart-main"
                    >
                      <span className="result_date">{item1.weekStartDay} </span>
                      <span className="result_date">to</span>
                      <span className="result_date"> {item1.weekEndDay}</span>
                    </div>
                  </td>
                  {item1.data.map((nestedItem) => (
                    <td key={nestedItem.id} className="cc">
                      <div
                      className="kalyan-chart-number-black"
                      >
                        <span className="cp">
                          {nestedItem.relatedData[0] &&
                            nestedItem.relatedData[0].winningDigit}
                        </span>
                        <span className="cp">
                          {nestedItem.relatedData[0] &&
                            nestedItem.relatedData[0].winningDigitFamily}
                          {nestedItem.relatedData[1] &&
                            nestedItem.relatedData[1].winningDigitFamily}
                        </span>
                        <span className="cp">
                          {nestedItem.relatedData[1] &&
                            nestedItem.relatedData[1].winningDigit}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShreeDevi;
