import React, { useState, useEffect } from "react";
import "../Style/Header.css";

function PrayerCard(props) {
  const [prayerTime, setPrayerTime] = useState([]);
  const now = new Date();
  const day = now.getDate();

  useEffect(() => {
    setPrayerTime(props.prayer);
  }, [props.prayer]);

  // console.log(prayerTime[day - 1].timings.Fajr);
  return (
    <div className="prayer-Box">
      {prayerTime.length > 0 && (
        <div className="prayer-list">
          <li>
            <h3>Fajr </h3>
            <h4>{prayerTime[day - 1].timings.Fajr.substring(0, 5)}</h4>
          </li>
          <li>
            <h3>Duhor</h3>
            <h4>{prayerTime[day - 1].timings.Dhuhr.substring(0, 5)}</h4>
          </li>
          <li>
            <h3>Asr </h3>
            <h4>{prayerTime[day - 1].timings.Asr.substring(0, 5)}</h4>
          </li>
          <li>
            <h3>Maghrib</h3>
            <h4>{prayerTime[day - 1].timings.Maghrib.substring(0, 5)}</h4>
          </li>
          <li>
            <h3>Isha'a</h3>
            <h4>{prayerTime[day - 1].timings.Isha.substring(0, 5)}</h4>
          </li>
        </div>
      )}

      {/* <li >
                <h3>الثلاثاء</h3>
                <h3>7:55</h3>
            </li> */}
    </div>
  );
}

export default PrayerCard;
