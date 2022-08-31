import React, { useState, useEffect } from "react";
import "../Style/Header.css";
import PrayerCard from "./PrayerCard";
import Clock from "./Clock";
import HijriDate from "./HijriDate";
import useFetch from "../fetchData/useFetch";

function Header() {
  const [lat, setLat] = useState();
  const [long, setLong] = useState();
  const apiRec = new Date();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  } else {
    alert(
      "It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it."
    );
  }

  function successFunction(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  function errorFunction() {
    alert("Allow Location");
  }

  //api link, to fetch data from api
  let apiLink = `http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=4&month=${
    apiRec.getMonth() + 1
  }&year=${apiRec.getFullYear()}`;

  const { data, loading, error } = useFetch(apiLink);

  return (
    <header className="header">
      <div className="logo-box">
        <a href="https://github.com/NatourTech">
          <img
            src={require("../img/logo-white.png")}
            alt="Logo"
            className="logo"
          />
        </a>
      </div>

      <Clock />
      {loading && <h3>loading...</h3>}
      {error && <h3>Error: somthion went wrong</h3>}
      {/* {data.length} */}
      {loading === false ? (
        <HijriDate date={data} />
      ) : (
        <div>Loading Hijri Date..</div>
      )}
      {loading === false ? (
        <PrayerCard prayer={data} />
      ) : (
        <div>Loading Prayer Times..</div>
      )}
    </header>
  );
}

export default Header;
