import React, { useState, useEffect } from "react";
import "../Style/Header.css";

function HijriDate(props) {
  const [date, setDate] = useState([]);
  const now = new Date();
  const day = now.getDate();

  //date details
  // const [weekDay,setWeekDay] = useState('احد');
  // const [dayNumber,setDayNumber] = useState('01');
  // const [monthName,setMonthName] = useState('Ramadan');
  // const [yearNumber,setYearNumber] = useState([]);
  useEffect(() => {
    setDate(props.date);
  }, [props.date]);

  if (date.length > 0) {
    // setWeekDay(date[day - 1].date.hijri.weekday.ar);
    console.log(date[day - 1].timings);
  }

  return (
    <div className="date-Box">
      {date.length > 0 && (
        <h2 className="hijri-Date">
          <span className="hijri-Date el">
            {date[day - 1].date.hijri.weekday.en}
          </span>
          <span className="hijri-Date el">{date[day - 1].date.hijri.day}</span>
          <span className="hijri-Date el">
            {date[day - 1].date.hijri.month.en}
          </span>
          <span className="hijri-Date el">{date[day - 1].date.hijri.year}</span>
        </h2>
      )}
    </div>
  );
}

export default HijriDate;

//{hijri.weekday.ar} {hijri.day} {hijri.month.ar} {hijri.year}
