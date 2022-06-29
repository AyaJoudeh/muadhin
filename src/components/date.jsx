import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Date1 = () => {
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
      axios.get(url).then((response) => {
        setDate(response?.data?.data[start.getDate() - 1]);
      });
    });
  }, []);
const test = (time)=>{
  let timings = time?.timings;
  let dateNow = time?.date?.gregorian?.date
  dateNow=dateNow?.split('-')?.reverse()?.join('-')
let arr = []
for (const property in timings) {

  var dateMili = new Date(`${dateNow}T${timings[property].split(' ')[0]}`); // some mock date


var milliseconds = dateMili.getTime(); 
  arr.push(milliseconds);
}
return arr;

}
let nowTime = (new Date()).getTime()
let arr = test(date)

for (let i = 0; i < arr.length; i++) {
  if (nowTime<arr[i]) {
    console.log( new Date(arr[i]).toISOString());
    break;
  }
  
}

  return (
    <div className="text-3xl text-color text-[#E5E5E5] font-sans">
      <p> <span className="text-white">{date?.date.gregorian.weekday.en}</span> {date?.date.readable}</p>
      <p>{date?.date.hijri.day} {date?.date.hijri.month.en} {date?.date.hijri.year}</p>
    </div>
  );
};

export default Date1;
