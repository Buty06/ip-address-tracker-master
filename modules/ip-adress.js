const getIPApi = async (ipAddress) => {
  let response = await fetch(
    `https://apiip.net/api/check?ip=${ipAddress}&accessKey=ccd4fb09-6572-42f0-a1a1-2dd8e733b499`
  );

  if (!response.ok) {
    response = await fetch(
      `https://apiip.net/api/check?&accessKey=ccd4fb09-6572-42f0-a1a1-2dd8e733b499`
    );
  }
  

  try {
    if (!response.ok) throw new Error("Fallo al obtener la api");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getData = async (ipAddress) => {
  const data = await getIPApi(ipAddress);

  //?Coleccionar la data
  const storeData = {
    ip: data.ip,

    location: {
      country: data.countryName,
      region: data.continentName,
      city: data.city,
    },

    coordinates: {
      latitude: data.latitude,
      longitude: data.longitude,
    },

    fullName: data.officialCountryName,
    flag: data.countryFlagEmoj,
  };

  return storeData;
};
