const $ipSearch = document.getElementById("ip_search");
const $input = document.getElementById("input_search");
const $inputButton = document.getElementById("button_search");
const $ip = document.getElementById("ip_text");
const $locationText = document.getElementById("location_text");
const $timezone = document.getElementById("timezone_text");
const $isp = document.getElementById("isp_text");
const $map = document.getElementById("map");

const showData = async () => {
  const storeData = await getData();

  $ip.textContent = storeData.ip;

  $locationText.textContent = `${storeData.location.country}, ${storeData.location.region}, ${storeData.location.city}`;

  $timezone.textContent = `UTC ${storeData.timezone}`

  $isp.textContent = storeData.isp
};

showData();
