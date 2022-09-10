import React, { useEffect, useState } from "react";
import "./css/style.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Lucknow");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=208d290b725ee2448cd399e2d5618b5e`;
      const response = await fetch(url);
      const resJson = await response.json();
      //console.log(resJson);
      setCity(resJson.main);
    };
    fetchApi();
  }, [search]);

  return (
    <>
      <div className="box">
        <div className="inputData">
          <input
            type="search"
            value={search}
            className="inputField"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>

        {!city ? (
          <p className="errorMsg">No data found</p>
        ) : (
          <div className="info">
            <h2 className="location">
              <i className="fas fa-street-view"></i>
              {search}
            </h2>
            <h1 className="temp">{city.temp}°Cel</h1>
            <h3 className="tempmin_max">
              {" "}
              Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel{" "}
            </h3>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
          </div>
        )}
      </div>
    </>
  );
};
export default Weather;
