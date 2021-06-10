import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Settings from "./components/Settings";
import {useDarkMode} from './hooks/useDarkMode';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/black-dashboard.css";
import Sidebar from "./components/Sidebar";
import MainPanel from "./components/MainPanel";
// import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [darkMode, setDarkMode] = useDarkMode(false);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className={darkMode ? "dark-mode App" : "App"}>
      <Sidebar />
      <Settings />
      <MainPanel />
      {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Charts coinData={coinData} /> */}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
