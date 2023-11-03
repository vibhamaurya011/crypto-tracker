import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import Search from "../components/Dashboard/Search/search";
import Tabs from "../components/Dashboard/Tabs/tabs";
import Loading from "../components/Common/Loading/loading";
import PaginationComponent from "../components/Dashboard/PaginationComponent/pagination";
import Footer from "../components/Common/Footer/footer";
import { get100Coins } from "../functions/get100Coins";
import TopButton from "../components/Common/TopButton/topButton";
import Button from "../components/Common/Button/Button";

function DashboardPage() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCoins, setPageCoins] = useState([]);

  var filteredCoins = data.filter((item) => {
    if (
      item.symbol.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return item;
    }
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await get100Coins();
    if (response) {
      setData(response);
      setLoading(false);
      setPageCoins(response.slice(0, 10));
    }
  };

  const handleChange = (event, value) => {
    setPageNumber(value);
    setPageCoins(data.slice((value - 1) * 10, (value - 1) * 10 + 10));
  };

  return (
    <div>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Search search={search} setSearch={setSearch} />
          {search && filteredCoins.length == 0 ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                minHeight: "80vh",
              }}
            >
              <h1 style={{ textAlign: "center" }}>No Results Found</h1>
              <p style={{ textAlign: "center", color: "var(--grey)" }}>
                Could not find what you were looking for...
              </p>
              <div
                style={{
                  marginTop: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a href="/dashboard">
                  <Button text="Clear Search" onClick={() => setSearch("")} />
                </a>
              </div>
            </div>
          ) : (
            <Tabs data={search ? filteredCoins : pageCoins} />
          )}
          {!search && (
            <PaginationComponent
              pageNumber={pageNumber}
              handleChange={handleChange}
            />
          )}
          <Footer />
        </>
      )}
      <TopButton />
    </div>
  );
}

export default DashboardPage;
