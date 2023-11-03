import axios from "axios";
import { COIN_GECKO_V3 } from "../constants";

export const getCoinPrices = (id, days, priceType) => {
  const data = axios
    .get(
      `${COIN_GECKO_V3}/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((response) => {
      if (priceType == "prices") return response.data.prices;
      else if (priceType == "market_caps") return response.data.market_caps;
      else if (priceType == "total_volumes") return response.data.total_volumes;
    })
    .catch((error) => {
      console.log("Error>>>", error);
    });
  return data;
};
