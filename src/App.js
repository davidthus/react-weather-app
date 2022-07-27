import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Selector from "./components/Selector.js";
import WeatherDisplay from "./components/WeatherDisplay.js";
import styles from "./App.module.css";

function App() {
  //holds user input from the selector component
  const [queryObject, setQueryObject] = useState({});
  const [weatherData, setWeatherData] = useState(false);

  useEffect(() => {
    const sendWeatherData = async () => {
      const unitValue = queryObject.units;
      const response = await fetch(
        `https://davidthus-weather-app.herokuapp.com/${unitValue}`,
        {
          method: "POST",
          body: JSON.stringify(queryObject),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setWeatherData(data);
    };

    sendWeatherData();
  }, [queryObject]);

  return (
    <>
      <div className={styles.background}></div>
      <Header />
      <main className={styles.container}>
        <Selector setQueryObject={setQueryObject} />
        {weatherData ? (
          <WeatherDisplay weatherData={weatherData} />
        ) : (
          <div className={styles.notFound}>
            Data will be displayed here after you make a query.
          </div>
        )}
      </main>
    </>
  );
}

export default App;
