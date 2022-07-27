import React from "react";
import styles from "./Selector.module.css";

function Selector(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const cityInput = document.getElementById("city").value;

    if(cityInput.length === 0) {
      alert("Please select a city");
      return;
    }

    let cityValue = cityInput.split(/[,\s/]+/);

    //object collects data from the input form
    let queryInfo = {
      units: document.getElementById("units").value,
      coordinates: document.getElementById("coordinates").checked,
      city: cityValue,
    };

    //this sends the input data to the app component
    props.setQueryObject(queryInfo);
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Query board.</h2>
      <form className={styles.form}>
        <input value="Reset options." type="reset" className={styles.reset} />
        <div className={styles.inputFields}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="selector">
              Units used:
            </label>
            <select name="units" id="units" className={styles.select}>
              <option className={styles.option} value="standard">
                Standard
              </option>
              <option className={styles.option} value="metric">
                Metric
              </option>
              <option className={styles.option} value="imperial">
                Imperial
              </option>
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="coordinates">
              Geo Coordinates:
            </label>
            <input
              type="checkbox"
              className={styles.check}
              id="coordinates"
              name="coordinate"
            />
          </div>
        </div>
        <input
          type="text"
          id="city"
          placeholder="Enter City, Country"
          className={styles.city}
        />
        <input type="submit" className={styles.submit} onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default Selector;
