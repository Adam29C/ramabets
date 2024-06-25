import React, { useEffect, useState } from "react";
import { GET_JACKPOT_JODI_CHART } from "../../service/admin.service";
import Navbar from "../../Pages/Navbar/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Footer from "../../Pages/Footer/Footer";
import {
  getWeekStartAndEndDates,
  getActualDateFormate,
  fa_time,
} from "../../Helpers/getWeekDays";
import { nameRejext } from "../../Helpers/StringRejex";

import ShreeDay from "../../Charts/ShreeJackpot/7PM";
import ShreeNight from "../../Charts/ShreeJackpot/8PM";

import MadhurDay from "../../Charts/ShreeJackpot/12PM";
import MadhurNight from "../../Charts/ShreeJackpot/1PM";

import MilanDay from "../../Charts/ShreeJackpot/3PM";
import MilanNight from "../../Charts/ShreeJackpot/4PM";

import RajdhaniDay from "../../Charts/ShreeJackpot/5PM";
import RajdhaniNight from "../../Charts/ShreeJackpot/6PM";

import Kalyan from "../../Charts/ShreeJackpot/10Am";
import KalyanNight from "../../Charts/ShreeJackpot/11Am";

import TimeBazar from "../../Charts/ShreeJackpot/9PM";
import MainBazar from "../../Charts/ShreeJackpot/2PM";
import { GetAllCharts } from "../../Helpers/GetCharts";
const Andar_Bahar_Chart = (props) => {
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
    const res = await GetAllCharts(GET_JACKPOT_JODI_CHART, req);
    setgetData(res);

    if (res.status) {
      const convertedData = {
        data: [],
      };

      res.data.forEach((weekData) => {
        const resultDates = weekData.data.map(
          (item) => new Date(item.resultDate)
        );

        const week = {
          weekStartDay: getActualDateFormate(weekData.startDate),
          weekEndDay: getActualDateFormate(weekData.endDate),
          data: [],
        };

        let currentResultDate = "";
        let relatedData = [];

        weekData.data.forEach((item) => {
          if (item.resultDate !== currentResultDate) {
            if (currentResultDate !== "") {
              week.data.push({
                resultDate: currentResultDate,
                relatedData: relatedData,
              });
            }
            currentResultDate = item.resultDate;
            relatedData = [];
          }
          relatedData.push(item);
        });

        week.data.push({
          resultDate: currentResultDate,
          relatedData: relatedData,
        });

        convertedData.data.push(week);
      });

      setgetData(convertedData);
    }
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
            Shree Jackpot &nbsp;
            {location.state.title}&nbsp; Chart
          </strong>
        </h2>
        <p>
          {location.state.title}&nbsp; Pana Chart Satta Matka Record Old History
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
            {nameRejext(location.state.title) === nameRejext("7:30PM") ? (
              <ShreeDay chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("8:30PM") ? (
              <ShreeNight chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("12:30PM") ? (
              <MadhurDay chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("1:30PM") ? (
              <MadhurNight chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("3:30PM") ? (
              <MilanDay chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("4:30PM") ? (
              <MilanNight chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("5:30PM") ? (
              <RajdhaniDay chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("6:30PM") ? (
              <RajdhaniNight chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("10:30Am") ? (
              <Kalyan chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("11:30Am") ? (
              <KalyanNight chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("9:30PM") ? (
              <TimeBazar chartData={getData.data} />
            ) : nameRejext(location.state.title) === nameRejext("2:30PM") ? (
              <MainBazar chartData={getData.data} />
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

export default Andar_Bahar_Chart;
