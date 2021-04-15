const tanggalElement = document.querySelector(".tanggal");
let hari, tanggal, bulan, tahun;
const getTanggal = (date = new Date()) => {
  hari = cekHari(date.getDay());
  tanggal = date.getDate();
  bulan = cekBulan(date.getMonth())
  tahun = date.getFullYear()
  displayTanggal(hari, tanggal, bulan, tahun);
};

const displayTanggal = (hari, tanggal, bulan, tahun) => {
  tanggalElement.innerHTML = `
    <div>${hari}, ${tanggal} ${bulan} ${tahun}</div>
  `
}

const cekHari = (nomor_hari) => {
  switch (nomor_hari) {
    case 1:
      return "Senin";
    case 2:
      return "Selasa";
    case 3:
      return "Rabu";
    case 4:
      return "Kamis";
    case 5:
      return "Jumat";
    case 6:
      return "Sabtu";
    case 7:
      return "Minggu";
  }
};

const cekBulan = (nomor_bulan) => {
  switch (nomor_bulan) {
    case 0:
      return "Januari";
    case 1:
      return "Februari";
    case 2:
      return "Maret";
    case 3:
      return "April";
    case 4:
      return "Mei";
    case 5:
      return "Juni";
    case 6:
      return "Juli";
    case 7:
      return "Agustus";
    case 8:
      return "September";
    case 9:
      return "Oktober";
    case 10:
      return "November";
    case 11:
      return "Desember";
  }
}

getTanggal();

navigator.geolocation.getCurrentPosition(function (position) {
  console.log("Geolocation permissions granted");
  console.log("Latitude:" + position.coords.latitude);
  console.log("Longitude:" + position.coords.longitude);
});

navigator.permissions
  .query({ name: "geolocation" })
  .then(function (permissionStatus) {
    console.log("geolocation permission state is ", permissionStatus.state);

    permissionStatus.onchange = function () {
      console.log("geolocation permission state has changed to ", this.state);
    };
  });