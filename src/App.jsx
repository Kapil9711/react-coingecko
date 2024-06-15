import React from "react";

import "./Global-Styles.scss";
import getfilteredData from "./filterData";
import useFetchAsync_Then from "./fetchData";
import Header from "./components/Header.component";
import Main from "./components/main/Main.component";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const App = () => {
  const { data, isLoading, isError } = useFetchAsync_Then(url);
  const [sortInputs, setSortInputs] = React.useState({
    searchInput: "",
    sortByMktCap: false,
    sortByPercentage: false,
  });
  const filteredData = getfilteredData(data, sortInputs);
  return (
    <>
      <Header {...{ sortInputs, setSortInputs }} />
      <Main {...{ filteredData, isLoading, isError }} />
    </>
  );
};

export default App;
