const $input = document.getElementById("input_search");
const $inputButton = document.getElementById("button_search");
const $ip = document.getElementById("ip_text");
const $locationText = document.getElementById("location_text");
const $timezone = document.getElementById("timezone_text");
const $isp = document.getElementById("isp_text");
const $map = document.getElementById("map");
const $ipSearch = document.getElementById("ip_search");
let map;

const showData = async (ipAddress = "") => {
  const storeData = await getData(ipAddress);

  $ip.textContent = storeData.ip;

  $locationText.textContent = `${storeData.location.city}, ${storeData.location.country}`;

  $timezone.textContent = `${storeData.location.region}`;

  $isp.textContent = `${storeData.fullName} ${storeData.flag}`;

  //!Generando el Mapa
  map = L.map("map", {
    center: [storeData.coordinates.latitude, storeData.coordinates.longitude],
    zoom: 13,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  const myIcon = L.icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: [36, 56],
    iconAnchor: [18, 56],
    popupAnchor: [0, -56],
  });

  const marker = L.marker(
    [storeData.coordinates.latitude, storeData.coordinates.longitude],
    { icon: myIcon }
  ).addTo(map);
  marker.bindPopup("<b>Estas Aqui</b>").openPopup();
};

$ipSearch.addEventListener("submit", async (event) => {
  event.preventDefault();
  const ipAddress = $input.value.trim();

  if (ipAddress) {
    if (map) {
      map.remove();
      map = null;
    }
    await showData(ipAddress);
  }
});

showData();
