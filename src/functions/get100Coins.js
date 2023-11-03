import axios from "axios";
import { DASHBOARD_API_URL } from "../constants";

export const get100Coins = () => {
  const data = axios
    .get(DASHBOARD_API_URL)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error>>>", error);
    });

  return data;
};
