import React, { useEffect, useState } from "react";
import { GET_ALL_GAMERATES } from "../../service/admin.service";
import doller from '../../../images/doller.png'
const GameRateSection = () => {
  const [getData, setgetData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMERATES();
    setgetData(res.data);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <div className="container">
      <div className="game-rate-container">
        <div className="heding-sec heading-sec-custom m-4 d-flex text-center justify-content-center align-items-center">
          <img
            src={doller}
            alt=""
          />
          <h1 className="mb-0 ms-2 me-2 font-700">Game Rates</h1>
          <img
            src={doller}
            alt=""
          />
        </div>
        <div className="row custom-card p-0 m-0">
          {getData.map((items, index) => (
            <div key={index} className="col-12 col-sm-12 col-lg-12 col-xl-4">
              <div
                style={{ marginTop: "10px" }}
                className="border-card text-center"
              >
                <h4 className="primary-color">{items.gameName}</h4>
                <h4 className="font-400"> 1 RS KA {items.gamePrice}</h4>
              </div>
            </div>
          ))}
        </div>
        {/* <Section4 /> */}
      </div>
    </div>
  );
};

export default GameRateSection;
