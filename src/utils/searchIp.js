const searchIP = async ipOrDomain => {
  const API_KEY = 'at_MtkoZ3HG26PAGV3xx6SgHkCpihZ4T';
  const API = `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`;

  if (!ipOrDomain) {
    const response = await fetch(API);
    const data = await response.json();

    return data;
  }

  const ipAndDomain = `&ipAddress=${ipOrDomain}&domain=${ipOrDomain}`;
  const URL = `${API}${ipAndDomain}`;

  const response = await fetch(URL);
  const data = await response.json();

  return data;
}

export default searchIP;