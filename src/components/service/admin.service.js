import axios from "axios";
// import Files
import * as Config from "../Config/config";

// GET CONTACT
export async function GET_CONTACT(data, token) {
  try {
    const res = await axios.get(
      `${Config.base_url}api/web/walletContact`,
      data,
      {
        // headers: header(token),
        data: {},
      }
    );
    // console.log("res", res);
    return await res?.data;
  } catch (err) {
    return err;
  }
}

// GET ALL GAMESLIST
export async function GET_ALL_GAMESLIST(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/allgames`, data, {
      // headers: header(token),
      data: {},
    });
    // console.log("res", res);
    return await res?.data;
  } catch (err) {
    return err;
  }
}

// GET ALL GAMES
export async function GET_ALL_GAMES(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/games`, data, {
      // headers: header(token),
      data: {},
    });
    // console.log("res", res);
    return await res?.data;
  } catch (err) {
    return err;
  }
}
// GET ALL GAMES
export async function GET_ALL_GAMERATES(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/gamerates`, data, {
      // headers: header(token),
      data: {},
    });
    // console.log("res", res);
    return await res?.data;
  } catch (err) {
    return err;
  }
}
// GET ALL  STARTLINE GAMES
export async function GET_ALL_STARTLINE_GAMES(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/startline`, data, {
      // headers: header(token),
      data: {},
    });
    // console.log("res", res);
    return await res?.data;
  } catch (err) {
    return err;
  }
}

//GET ALL GAMES RESULT
export async function GET_ALL_GAMES_RESULT(data, token) {
  try {
    const res = await axios.post(`${Config.base_url}api/web/panachart`, data, {
      // headers: header(token),
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}

//GET ALL GAMES JODI CHART
export async function GET_ALL_JODI_CHART(data, token) {
  try {
    const res = await axios.post(`${Config.base_url}api/web/jodichart`, data, {
      // headers: header(token),
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}

//GET ALL STARLINE GAMES PANA CHART
export async function GET_ALL_STARLINE_GAME_PANA_CHART(data, token) {
  try {
    const res = await axios.post(
      `${Config.base_url}api/web/startline_pana_chart`,
      data,
      {
        // headers: header(token),
        data: {},
      }
    );
    return await res?.data;
  } catch (err) {
    return err;
  }
}

//GET ALL JACKPOT
export async function GET_ALL_JACKPOT_GAME(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/AbList`, data, {
      // headers: header(token),
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}
//GET ALL JACKPOT
export async function GET_JACKPOT_JODI_CHART(data, token) {
  try {
    const res = await axios.post(`${Config.base_url}api/web/jackpot_jodi_chart`, data, {
      // headers: header(token),
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}
//GET APK LINK
export async function GET_APK_LINK(data, token) {
  try {
    const res = await axios.get(`${Config.base_url}api/web/app_url`, data, {
      // headers: header(token),
      data: {},
    });
    return await res?.data;
  } catch (err) {
    return err;
  }
}
