import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Weather = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState(0);
  const [cityName, setCityName] = useState("");

  const savePositionToState =async (position) => {
    try {
          const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=744e9f87f5bdd76fed18a56896a97613&units=metric`
      );
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }

  };

  const fetchWeather = async () => {
    try {
      window.navigator.geolocation.getCurrentPosition(
        savePositionToState
      );
      console.log(latitude,longitude);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=744e9f87f5bdd76fed18a56896a97613&units=metric`
      );
      setTemperature(res.data.main.temp);
      setCityName(res.data.name);
      setWeather(res.data.weather[0].main);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);




  // const [location, setLocation] = useState('');

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     const url = `https://api.openweathermap.org/data/3.0/onecall?lat=
  //     ${position.coords.latitude}&lon=
  //     ${position.coords.longitude}&exclude=
  //     ${hourly}&appid=
  //     ${"744e9f87f5bdd76fed18a56896a97613"}`;
  //     console.log(url);
  //     axios.get(url).then((response) => {
  //       setDate(response?.data?.data[start.getDate() - 1]);
  //     });
  //   });
  // }, []);
 
  return (
   
    <div className="text-3xl text-white text-center">
      <div className="flex gap-24">
      <div className="m-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="141.755"
          height="108.064"
          viewBox="0 0 141.755 108.064"
        >
          <g
            id="Group_9"
            data-name="Group 9"
            transform="translate(-1223.722 -29.105)"
          >
            <g id="Group_8" data-name="Group 8">
              <circle
                id="Ellipse_1"
                data-name="Ellipse 1"
                cx="33.095"
                cy="33.095"
                r="33.095"
                transform="translate(1243.579 48.961)"
                fill="#ff9f1c"
              />
              <rect
                id="Rectangle_4"
                data-name="Rectangle 4"
                width="3.309"
                height="14.893"
                rx="0.594"
                transform="translate(1275.019 29.105)"
                fill="#ff9f1c"
              />
              <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="3.309"
                height="14.893"
                rx="0.594"
                transform="translate(1312.946 43.444) rotate(45)"
                fill="#ff9f1c"
              />
              <rect
                id="Rectangle_6"
                data-name="Rectangle 6"
                width="3.309"
                height="14.893"
                rx="0.594"
                transform="translate(1329.625 80.401) rotate(90)"
                fill="#ff9f1c"
              />
              <rect
                id="Rectangle_7"
                data-name="Rectangle 7"
                width="3.309"
                height="14.893"
                rx="0.594"
                transform="translate(1315.286 118.328) rotate(135)"
                fill="#ff9f1c"
              />
              <rect
                id="Rectangle_8"
                data-name="Rectangle 8"
                width="3.309"
                height="14.893"
                rx="0.594"
                transform="translate(1278.328 135.008) rotate(180)"
                fill="#ff9f1c"
              />
              <rect
                id="Rectangle_9"
                data-name="Rectangle 9"
                width="3.309"
                height="14.893"
                rx="0.594"
                transform="translate(1240.401 120.669) rotate(-135)"
                fill="#ff9f1c"
              />
              <rect
                id="Rectangle_10"
                data-name="Rectangle 10"
                width="3.309"
                height="14.893"
                rx="0.594"
                transform="translate(1223.722 83.711) rotate(-90)"
                fill="#ff9f1c"
              />
              <rect
                id="Rectangle_11"
                data-name="Rectangle 11"
                width="3.309"
                height="14.893"
                rx="0.594"
                transform="translate(1238.061 45.784) rotate(-45)"
                fill="#ff9f1c"
              />
            </g>
            <path
              id="Path_17"
              data-name="Path 17"
              d="M1365.477,112.454a24.816,24.816,0,0,0-24.916-24.715,25.3,25.3,0,0,0-3.8.285,31.382,31.382,0,0,0-62.644,2.461c0,.927.049,1.843.129,2.749-.043,0-.086,0-.129,0a21.97,21.97,0,1,0,0,43.938h68.474v-.089A24.793,24.793,0,0,0,1365.477,112.454Z"
              fill="#e6e3ce"
            />
          </g>
        </svg>
      </div>
        <div >
          <p>{weather}</p>
          <p>{cityName}</p>
        </div>
        <div>
          <p>{temperature}ºC</p>
          <p>{(temperature * 1.8) + 32}ºF</p>
        </div>
      </div>

    </div>
  );
};

export default Weather;

//const url=`https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=${hourly}&appid=${"744e9f87f5bdd76fed18a56896a97613"}`;