const timerElement = document.querySelector(".timer");

const jarumDetik = document.querySelector(".jarum-detik");
const jarumMenit = document.querySelector(".jarum-menit");
const jarumJam = document.querySelector(".jarum-jam");

const displayTimer = (detik, menit, jam) => {
  let detikTemp, menitTemp, jamTemp;
  if (detik < 10) detikTemp = `0${detik}`;
  if (menit < 10) menitTemp = `0${menit}`;
  if (jam < 10) jamTemp = `0${jam}`;
  if (detik >= 10) detikTemp = detik;
  if (menit >= 10) menitTemp = menit;
  if (jam >= 10) jamTemp = jam;

  timerElement.innerHTML = `
    <h1>${jamTemp}:${menitTemp}:${detikTemp}</h1>
  `;

  jarumDetik.style.transform = `rotate(${detik * 6 + 270}deg)`;
  jarumMenit.style.transform = `rotate(${menit * 6 + 270}deg)`;
  jarumJam.style.transform = `rotate(${jam * 30 + 270}deg)`;
};

const handleClear = () => {
  clearInterval(timerPlay);
};

const waktu = setInterval(() => {
  const date = new Date();
  const jam = date.getHours();
  const menit = date.getMinutes();
  const detik = date.getSeconds();
  displayTimer(detik, menit, jam);
}, 1000);
