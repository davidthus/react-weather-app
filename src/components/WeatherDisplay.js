import styles from "./WeatherDisplay.module.css";

function WeatherDisplay(props) {
  const {
    units,
    coordinates,
    city,
    lat,
    lon,
    weather,
    main,
    wind,
    clouds,
    timezone,
    rain,
    snow,
  } = props.weatherData;

  function unit(unitType, measurement) {
    if (unitType === "standard") {
      if (measurement === "speed") {
        return "meter/sec";
      }

      if (measurement === "temperature") {
        return "kelvin";
      }
    }

    if (unitType === "metric") {
      if (measurement === "speed") {
        return "meter/sec";
      }

      if (measurement === "temperature") {
        return "°C";
      }
    }

    if (unitType === "imperial") {
      if (measurement === "speed") {
        return "miles/hour";
      }

      if (measurement === "temperature") {
        return "°F";
      }
    }
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.title}>
        This is the weather found in the city of <code>{city[0]}</code> in{" "}
        <code
          className={styles.countryCode}
          data-tooltip="ISO 3166 country code"
        >
          {city[1]}
        </code>
      </h3>
      <div className={styles.groupContainer}>
        {weather && (
          <div className={styles.group}>
            <div className={styles.headingContainer}>
              <h4 className={styles.heading}>Weather:</h4>
            </div>
            <ul className={styles.data}>
              <li>{`${weather[0].main}, ${weather[0].description}`}</li>
            </ul>
          </div>
        )}
        {main && (
          <div className={styles.group}>
            <div className={styles.headingContainer}>
              <h4 className={styles.heading}>Climate:</h4>
            </div>
            <ul className={styles.data}>
              <li>
              <span className={styles.span}>Temp:</span> {main.temp}
                {unit(units, "temperature")}
              </li>
              <li>
              <span className={styles.span}>Feels like:</span> {main.feels_like}
                {unit(units, "temperature")}
              </li>
              <li>
              <span className={styles.span}>Pressure(sea level):</span>{" "}{main.pressure}hPa
              </li>
              <li><span className={styles.span}>Humidity:</span> {main.humidity}%</li>
            </ul>
          </div>
        )}
        {wind && (
          <div className={styles.group}>
            <div className={styles.headingContainer}>
              <h4 className={styles.heading}>Wind:</h4>
            </div>
            <ul className={styles.data}>
              <li>
              <span className={styles.span}>Speed:</span> {wind.speed}
                {unit(units, "speed")}
              </li>
              <li><span className={styles.span}>Direction:</span> {wind.deg}°</li>
            </ul>
          </div>
        )}
        {timezone && (
          <div className={styles.group}>
            <div className={styles.headingContainer}>
              <h4 className={styles.heading}>Timezone:</h4>
            </div>
            <ul className={styles.data}>
              <li><span className={styles.span}>Shift in seconds from UTC:</span> {timezone}</li>
            </ul>
          </div>
        )}
        {clouds && (
          <div className={styles.group}>
            <div className={styles.headingContainer}>
              <h4 className={styles.heading}>Clouds:</h4>
            </div>
            <ul className={styles.data}>
              <li><span className={styles.span}>Cloudiness:</span> {clouds.all}%</li>
            </ul>
          </div>
        )}
        {rain && (
          <div className={styles.group}>
            <div className={styles.headingContainer}>
              <h4 className={styles.heading}>Rain:</h4>
            </div>
            <ul className={styles.data}>
              <li>Rain volume for the last hour: {rain["1h"]}mm</li>
            </ul>
          </div>
        )}
        {snow && (
          <div className={styles.group}>
            <div className={styles.headingContainer}>
              <h4 className={styles.heading}>Snow:</h4>
            </div>
            <ul className={styles.data}>
              <li>Snow volume for the last hour: {snow["1h"]}mm</li>
            </ul>
          </div>
        )}
      </div>
      {coordinates && (
        <article className={styles.coordContainer}>
          <code>Lat: {lat}</code>
          <code>Lon: {lon}</code>
        </article>
      )}
    </section>
  );
}

export default WeatherDisplay;
