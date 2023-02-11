/* eslint-disable @typescript-eslint/no-explicit-any */

const JSONtoHomes = (data: any): Home[] => {
  return data.map((home: any): Home => {
    return {
      id: home['id'],
      address: home['address'],
      owner: home['owner'],
      currency: home['currency'],
      floor: home['floor'] || null,
      picture: home['picture'],
      price: home['price'],
      rooms: home['rooms'],
      surface: home['surface'],
      year: home['year'] || null,
    };
  });
};

export const fetchHomes = async (): Promise<Home[]> => {
  const res = await fetch('api/home');
  const json = await res.json();
  const homes = JSONtoHomes(json);
  return homes;
};
