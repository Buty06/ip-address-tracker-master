const getIPApi = async () => {
  const response = await fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_tb2yfj6660rK3Y2IA5OuVsU9MxL76"
  );

  const data = await response.json();

  return data;
};

const getData = async () => {
  const data = await getIPApi();

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
