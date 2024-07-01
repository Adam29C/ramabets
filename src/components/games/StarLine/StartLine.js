import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import star from "../../../images/star.png";

import { GET_ALL_STARTLINE_GAMES } from "../../service/admin.service";
import { downloadAPK } from "../../Helpers/DownloadAPK";

const StartLine = () => {
  const [getData, setgetData] = useState([]);
  const [AppUrl, setAppUrl] = useState("");
  const getResponseData = async () => {
    const res = await GET_ALL_STARTLINE_GAMES();
    if (res.status) {
      setgetData(res.data);
      setAppUrl(res.appInfo);
    }
  };
  useEffect(() => {
    getResponseData();
  }, []);

  const showData = (data) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (data.length > 0) {
      const result = [];
      for (const item of data) {
        if (
          weekday
            .map((day) => day.toLowerCase())
            .includes(item.gameDay.toLowerCase())
        ) {
          return item;
        }
      }
    }
  };

  const downloadFile = async() => {
   await downloadAPK()

  };
  return (
    <div>
      <div className="available-component">
        <div className="heding-sec heading-sec-custom m-4 d-flex text-center justify-content-center align-items-center">
          <img src={star} alt="" />
          <h1 className="mb-0 ms-2 me-2 font-700">SHREE STARLINE</h1>
          <img src={star} alt="" />
        </div>
        <div className="container">
          <div className="row">
            {getData.map((data, index) => (
              <div key={index} className="col-xl-4 col-lg-4 mb-3">
                <div className="second-card">
                  <div className="top-sec second-card-top-sec d-flex justify-content-between align-items-center">
                    <div className="card-text">
                      <div className="card-text-main">
                        <h4 className="primary-color font-700 ">
                          {data.providerName.toUpperCase()}
                        </h4>
                        <h3 className="font-700 ">{data.providerResult}</h3>

                        <h6
                          className="mb-1"
                          style={{
                            color:
                              showData(data.gameDetails) != undefined &&
                              showData(data.gameDetails).message ==
                                "Close for today"
                                ? "red"
                                : showData(data.gameDetails).message ==
                                  "Betting is running for close"
                                ? "#11305c"
                                : showData(data.gameDetails).message ==
                                  "Betting is running for open"
                                ? "#37a148"
                                : "#d65f78",
                          }}
                        >
                          {showData(data.gameDetails).message}
                        </h6>
                      </div>
                    </div>
                    <div
                      className={`play-icon  ${
                        showData(data.gameDetails).message == "Close for today"
                          ? ""
                          : "zoom-in-zoom-out"
                      } `}
                    >
                      <a
                        href="#"
                        onClick={() =>
                          downloadFile(showData(data.gameDetails).message)
                        }
                      >
                       <svg
                          id="video"
                          xmlns="http://www.w3.org/2000/svg"
                          width="50"
                          height="50"
                          viewBox="0 0 31.277 31.708"
                        >
                          <path
                            id="Path_593"
                            data-name="Path 593"
                            d="M15.589,0A15.589,15.589,0,1,1,0,15.589,15.589,15.589,0,0,1,15.589,0Z"
                            className="play_icon_class"
                            transform="translate(0.098 0)"
                            fill={`${
                              showData(data.gameDetails).message ==
                              "Close for today"
                                ? "#6c757d"
                                : "#11305c"
                            }`}
                          ></path>
                          <path
                            id="Path_590"
                            data-name="Path 590"
                            d="M31.179,256H0a15.589,15.589,0,1,0,31.179,0Z"
                            transform="translate(0 -239.882)"
                            fill={`${
                              showData(data.gameDetails).message ==
                              "Close for today"
                                ? "#6c757d"
                                : "#11305c"
                            }`}
                          ></path>
                          <g
                            id="Group_1840"
                            data-name="Group 1840"
                            transform="translate(11.884 8.643)"
                          >
                            <g
                              id="Group_1786"
                              data-name="Group 1786"
                              transform="translate(0 0)"
                            >
                              <g id="Group_1785" data-name="Group 1785">
                                <path
                                  id="Path_591"
                                  data-name="Path 591"
                                  d="M171.741,125.324a.741.741,0,0,1-.741-.741V111.741a.741.741,0,0,1,1.175-.6l8.89,6.421a.741.741,0,0,1,0,1.2l-8.89,6.421A.74.74,0,0,1,171.741,125.324Z"
                                  transform="translate(-171 -111)"
                                  fill="#fff"
                                ></path>
                              </g>
                            </g>
                            <g
                              id="Group_1787"
                              data-name="Group 1787"
                              transform="translate(0 7.162)"
                            >
                              <path
                                id="Path_592"
                                data-name="Path 592"
                                d="M171,256v6.421a.741.741,0,0,0,1.175.6l8.89-6.421a.741.741,0,0,0,.307-.6Z"
                                transform="translate(-171 -256)"
                                fill="#fff"
                              ></path>
                            </g>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="bottom-sec d-flex align-items-center justify-content-center">
                    <Link
                      to={`/starline/${data.providerName
                        .toLowerCase()
                        .replace(/\s+/g, "")}`}
                      state={{ title: data.providerName }}
                      className="chat-btn"
                      style={{ textDecoration: "none" }}
                    >
                      <span>Pana Chart</span>
                    </Link>
                  </div>
                  <hr />
                  <div class="result__time d-flex justify-content-between">
                    <span>
                      Open Bids :
                      <strong>
                        {showData(data.gameDetails) != undefined &&
                          showData(data.gameDetails).OBT}
                      </strong>
                    </span>
                    <span>
                      Close Bids :{" "}
                      <strong>
                        {showData(data.gameDetails) != undefined &&
                          showData(data.gameDetails).CBT}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default StartLine;



// import { useState , useEffect } from "react";
// import { GET_ALL_STARTLINE_GAMES } from "../../service/admin.service";
// import ReusableCard from "../ReusableCard";

// const AvailableGames = () => {
//   // const [ModalData, setModalData] = useState([]);
//   const [AppUrl, setAppUrl] = useState("");
//   const [getData, setgetData] = useState([]);

//   const getResponseData = async () => {
//       const res = await GET_ALL_STARTLINE_GAMES();

//     if (res.status) {
//       setgetData(res.data);
//       setAppUrl(res.appInfo);
//     }
//   };
//   useEffect(() => {
//     getResponseData();
//   }, []);
//   return (
//     <div>
//       <ReusableCard  GameData={getData} title={"STARLINE GAMES" } showPana={false}/>
//     </div>
//   );
// };

// export default AvailableGames;
