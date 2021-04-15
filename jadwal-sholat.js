const imsakElement = document.querySelector(".imsak");
const shubuhElement = document.querySelector(".shubuh");
const dzuhurElement = document.querySelector(".dzuhur");
const asharElement = document.querySelector(".ashar");
const magribElement = document.querySelector(".magrib");
const isyaElement = document.querySelector(".isya");
let waktuImsak, waktuShubuh, waktuDzuhur, waktuAshar, waktuMagrib, waktuIsya;
fetch("https://api.pray.zone/v2/times/today.json?city=cirebon")
  .then((response) => response.json())
  .then((result) => {
    const data = result.results.datetime;
    data.forEach((element) => {
      waktuImsak = element.times.Imsak;
      waktuShubuh = element.times.Fajr;
      waktuDzuhur = element.times.Dhuhr;
      waktuAshar = element.times.Asr;
      waktuMagrib = element.times.Maghrib;
      waktuIsya = element.times.Isha;
      displayJadwal();
    });
  });

const displayJadwal = () => {
  imsakElement.innerHTML = `
    <h2>Imsak</h2>
    <div class="waktu">${waktuImsak}</div>
  `;
  shubuhElement.innerHTML = `
    <h2>Shubuh</h2>
    <div class="waktu">${waktuShubuh}</div>
  `;
  dzuhurElement.innerHTML = `
    <h2>Dzuhur</h2>
    <div class="waktu">${waktuDzuhur}</div>
  `;
  asharElement.innerHTML = `
    <h2>Ashar</h2>
    <div class="waktu">${waktuAshar}</div>
  `;
  magribElement.innerHTML = `
    <h2>Magrib</h2>
    <div class="waktu">${waktuMagrib}</div>
  `;
  isyaElement.innerHTML = `
    <h2>Isya</h2>
    <div class="waktu">${waktuIsya}</div>
  `;
};
