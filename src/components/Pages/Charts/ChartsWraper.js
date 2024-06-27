import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  GET_ALL_GAMESLIST,
  GET_ALL_JACKPOT_GAME,
  GET_ALL_STARTLINE_GAMES,
} from "../../service/admin.service";
import Jodi_Chart from "../Charts/JodiChart";
import Pana_Chart from "../Charts/PanaChart";
import Shree_Jackpot from "../Charts/Shree_Jackpot";
import Shree_Starline from "../Charts/Shree_Starline";

const Charts = () => {
  const [getChart, setgetChartData] = useState([]);
  const [getStarline, setgetStarlineData] = useState([]);
  const [getJackpot, setgetJackpotData] = useState([]);

  const getResponseData = async () => {
    const res = await GET_ALL_GAMESLIST();
    setgetChartData(res.data);

    const res1 = await GET_ALL_STARTLINE_GAMES();
    setgetStarlineData(res1.data);

    const res2 = await GET_ALL_JACKPOT_GAME();
    setgetJackpotData(res2.data);
  };
  useEffect(() => {
    getResponseData();
  }, []);

  return (
    <>
      <Navbar />
      <Jodi_Chart title="Jodi Chart" data={getChart} link="jodi" />
      <Pana_Chart title="Pana Chart" data={getChart} link="pana" />
      {/* <Shree_Starline 
        title="Shree Starline"
        data={getStarline}
        link="starline"
      />
      <Shree_Jackpot title="Shree Jackpot" data={getJackpot} link="jackpot" /> */}
      <Footer />
    </>
  );
};

export default Charts;
