import React, { useEffect, useState } from "react";
import { GET_ALL_GAMES_RESULT } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import { getWeekStartAndEndDates, fa_time } from "../../Helpers/getWeekDays";
import { nameRejext } from "../../Helpers/StringRejex";

import ShreeDay from "../../Charts/PanaCharts/ShreeDay";
import ShreeNight from "../../Charts/PanaCharts/ShreeNight";

import MadhurDay from "../../Charts/PanaCharts/MadhurDay";
import MadhurNight from "../../Charts/PanaCharts/MadhurNight";

import MilanDay from "../../Charts/PanaCharts/MilanDay";
import MilanNight from "../../Charts/PanaCharts/MilanNight";

import RajdhaniDay from "../../Charts/PanaCharts/RajdhaniDay";
import RajdhaniNight from "../../Charts/PanaCharts/RajdhaniNight";

import Kalyan from "../../Charts/PanaCharts/Kalyan";
import KalyanNight from "../../Charts/PanaCharts/KalyanNight";

import TimeBazar from "../../Charts/PanaCharts/TimeBazar";
import MainBazar from "../../Charts/PanaCharts/MainBazar";

import ShreeDevi from "../../Charts/PanaCharts/ShreeDevi";
import ShreeDeviNight from "../../Charts/PanaCharts/ShreeDeviNight";

import SupremNight from "../../Charts/PanaCharts/SupremNight";

import { GetAllCharts } from "../../Helpers/GetCharts";

const Pana_Chart = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [getData, setgetData] = useState([]);

  const handleClick = () => {
    const targetElement = document.getElementById("scroll-down");

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickUp = () => {
    const targetElement = document.getElementById("scroll-up");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getResponseData = async () => {
    const req = nameRejext(location.state.title);
    const res = await GetAllCharts(GET_ALL_GAMES_RESULT, req);
    setgetData(res);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <>
      <div id="scroll-up"></div>
      <Navbar />
      <div className="pt-110" style={{ textAlign: "center" }}>
        <h2>
          <strong style={{ color: "rgb(51, 51, 51)" }}>
            {location.state.title}
          </strong>
        </h2>

        <p>
          {location.state.title} Pana Chart Satta Matka Record Old History
          Historical Data Bracket Results Chart Online Live Book Digits Numbers
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2rem",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2rem",
        }}
      >
        <button
          className=" btn btn-primary rounded-pill btn-scroll"
          onClick={handleClick}
          id="scroll-down-button"
        >
          Scroll Down
        </button>
      </div>

      <div className="container ">
        <div className="row justify-content-center">
          <div className="table-responsive  text-center col-xl-8 col-lg-12 col-md-12 col-sm-12 ">
            {nameRejext(location.state.title) ===
            nameRejext("SHREE MORNING") ? (
              <ShreeDay chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("SHREE NIGHT") ? (
              <ShreeNight chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("MADHUR DAY") ? (
              <MadhurDay chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("MADHUR NIGHT") ? (
              <MadhurNight chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("MILAN DAY") ? (
              <MilanDay chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("MILAN NIGHT") ? (
              <MilanNight chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("RAJDHANI DAY") ? (
              <RajdhaniDay chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("RAJDHANI NIGHT") ? (
              <RajdhaniNight chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("KALYAN") ? (
              <Kalyan chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("KALYAN NIGHT") ? (
              <KalyanNight chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("TIME BAZAR") ? (
              <TimeBazar chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("MAIN BAZAR") ? (
              <MainBazar chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("SRIDEVI") ? (
              <ShreeDevi chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("SRIDEVINIGHT") ? (
              <ShreeDeviNight chartData={getData.data} />
            ) : nameRejext(location.state.title) ===
              nameRejext("supremenight") ? (
              <SupremNight chartData={getData.data} />
            ) :nameRejext("supremeday") ? (
              <SupremNight chartData={getData.data} />
            ) : (
              ""
            )}

            <button
              className=" btn  rounded-pill btn-scroll"
              onClick={() => navigate(-1)}
              id="scroll-down-button"
            >
              Back
            </button>
            <button
              className=" btn rounded-pill btn-scroll"
              onClick={handleClickUp}
              id="scroll-down-button"
            >
              Scroll to Top
            </button>
          </div>
        </div>
      </div>

      <Footer />
      <div id="scroll-down"></div>
    </>
  );
};

export default Pana_Chart;
