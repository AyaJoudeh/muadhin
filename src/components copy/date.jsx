import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
// import "./date.css"

const Date1 = () => {
  // const date1 = new Date.now();
  // const year = date1.getYear()
  let start = Date.now();
  start = new Date(start);
  const [date, setDate] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const url = `http://api.aladhan.com/v1/calendar?latitude=${
        position.coords.latitude
      }&longitude=${position.coords.longitude}&method=2&month=${
        start.getMonth() + 1
      }&year=${start.getYear() + 1900}`;
      console.log(url);
      axios
        .get(url)
        .then((response) => {
          setDate(response?.data?.data[start.getDate()-1]);
        });
    });
  }, []);
  console.log(date?.date?.readable);
  return (
    <div>
      <p>
        <span>{date?.date?.gregorian.weekday.en}</span>
        {date?.date?.readable}
      </p>
      <p>13 Dhul Qadah, 1443</p>

      <i class="fa-solid fa-cloud"></i>
    </div>
  );
};

export default Date1;
