import React , {useState} from 'react'

function ApiURL() {

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
  let apiLink = `http://api.aladhan.com/v1/calendar?latitude=${lat}&longitude=${long}&method=2&month=${
    apiRec.getMonth() + 1
  }&year=${apiRec.getFullYear()}`;
  return [apiLink];

  
}

export default ApiURL