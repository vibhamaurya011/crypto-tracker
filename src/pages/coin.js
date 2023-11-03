import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LineChart from "../components/Coin/Chart";
import Info from "../components/Coin/Info/info";
import SelectDays from "../components/Coin/SelectDays/selectDays";
import TogglePrice from "../components/Coin/ToggleComponent/toggle";
import Footer from "../components/Common/Footer/footer";
import Header from "../components/Common/Header";
import Loading from "../components/Common/Loading/loading";
import List from "../components/Dashboard/ListComponent/List";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { setChartDataFunction } from "../functions/setChartData";
import { setCoinDataFunction } from "../functions/setCoinData";

function CoinPage() {
  const { id } = useParams();

  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(120);
  const [loading, setLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{}],
  });

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    const data = await getCoinData(id);
    console.log("Coin Data>>>", data);
    const prices = await getCoinPrices(id, days, priceType);

    if (data) {
      setCoinDataFunction(setCoin, data);
      setLoading(false);
    }
    if (prices) {
      setChartDataFunction(setChartData, prices);
    }
  };

  const handleDaysChange = async (event) => {
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices) {
      setChartDataFunction(setChartData, prices);
    }
  };

  const handlePriceChange = async (event) => {
    setPriceType(event.target.value);
    const prices = await getCoinPrices(id, days, event.target.value);
    if (prices) {
      setChartDataFunction(setChartData, prices);
    }
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="grey-container">
            <List coin={coin} delay={0.5} />
          </div>
          <div className="grey-container">
            <SelectDays days={days} handleChange={handleDaysChange} />
            <TogglePrice
              priceType={priceType}
              handleChange={handlePriceChange}
            />
            <LineChart chartData={chartData} priceType={priceType} />
          </div>
          <div className="grey-container" style={{ marginBottom: "2rem" }}>
            <Info name={coin.name} desc={coin.desc} />
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default CoinPage;
