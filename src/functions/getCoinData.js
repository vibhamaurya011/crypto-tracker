import axios from "axios";
import { COIN_GECKO_V3 } from "../constants";

export const getCoinData = (id) => {
  const data = axios
    .get(`${COIN_GECKO_V3}/coins/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error>>>", error);
    });
  return data;
};
