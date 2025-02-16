const $ipSearch = document.getElementById("ip_search");

const getIPApi = async () => {
  const response = await fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_tb2yfj6660rK3Y2IA5OuVsU9MxL76"
  );

  try {
    if (!response.ok) throw new Error("Fallo al obtener la api");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getSubmitIPApi = async (ipAdress) => {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_tb2yfj6660rK3Y2IA5OuVsU9MxL76&ipAddress=${ipAdress}`
  );

  try {
    if (!response.ok) throw new Error("Fallo al obtener la api");

    const submitData = await response.json();
    return submitData;
  } catch (error) {
    console.log(error);
  }
};

const getData = async () => {
  let data = await getData();

  //?Coleccionar la data
  const storeData = {
    ip: data.ip,

    location: {
      country: data.location.country,
      region: data.location.region,
      city: data.location.city,
    },

    timezone: data.location.timezone,
    isp: data.isp,
  };

  return storeData;
};
