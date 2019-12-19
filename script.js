const url = "https://api.openweathermap.org/data/2.5/weather";
const params = {
  appid: "4b5774e9f3d2a07b84f0f2f88e486224",
  q: "London"
};
const qs = new URLSearchParams(params);

fetch(`${url}?${qs}`, {
  method: "GET",
}).then(response => response.json())
.then(json => {
  console.log(json.weather[0].description);
});