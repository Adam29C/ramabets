import React, { useEffect, useState } from "react";
import { GET_ALL_JODI_CHART } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import { nameRejext } from "../../Helpers/StringRejex";
import { getWeekStartAndEndDates, fa_time } from "../../Helpers/getWeekDays";

import ShreeMorning from "../../Charts/JodiCharts/ShreeMorning";

import ShreeDay from "../../Charts/JodiCharts/ShreeDay";
import ShreeNight from "../../Charts/JodiCharts/ShreeNight";

import MadhurDay from "../../Charts/JodiCharts/MadhurDay";
import MadhurNight from "../../Charts/JodiCharts/MadhurNight";

import MilanDay from "../../Charts/JodiCharts/MilanDay";
import MilanNight from "../../Charts/JodiCharts/MilanNight";

import RajdhaniDay from "../../Charts/JodiCharts/RajdhaniDay";
import RajdhaniNight from "../../Charts/JodiCharts/RajdhaniNight";

import Kalyan from "../../Charts/JodiCharts/Kalyan";
import KalyanNight from "../../Charts/JodiCharts/KalyanNight";

import TimeBazar from "../../Charts/JodiCharts/TimeBazar";
import MainBazar from "../../Charts/JodiCharts/MainBazar";

import ShreeDevi from "../../Charts/JodiCharts/ShreeDevi";
import ShreeDeviNight from "../../Charts/JodiCharts/ShreeDeviNight";

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
    var { startOfWeek, endOfWeek } = getWeekStartAndEndDates();
    const req = nameRejext(location.state.title);
    const res = await GetAllCharts(GET_ALL_JODI_CHART, req);
    setgetData(res);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <>
      <div id="scroll-up"></div>
      <Navbar />
      <div className="pt-110 mt-5" style={{ textAlign: "center" }}>
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
      >
        {/* Other content */}
      </div>
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
              <ShreeMorning chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("SHREE day") ? (
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
              nameRejext("sridevinight") ? (
              <ShreeDeviNight chartData={getData.data} />
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
