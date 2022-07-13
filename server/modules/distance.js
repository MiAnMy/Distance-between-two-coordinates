const PI_OVER_180 = Math.PI / 180.0;
const EQUATORIAL_EARTH_RADIUS = 6378.137;

const haversineInKM = (lat1, lon1, lat2, lon2) => {
  const dLong = (lon2 - lon1) * PI_OVER_180;
  const dLat = (lat2 - lat1) * PI_OVER_180;

  const a =
    Math.pow(Math.sin(dLat / 2.0), 2.0) +
    Math.cos(lat1 * PI_OVER_180) *
      Math.cos(lat2 * PI_OVER_180) *
      Math.pow(Math.sin(dLong / 2.0), 2.0);

  const c = 2.0 * Math.atan2(Math.sqrt(a), Math.sqrt(1.0 - a));
  const distance = EQUATORIAL_EARTH_RADIUS * c;

  return distance;
};

const distanceInM = km => 1000 * km;

module.exports = { haversineInKM, distanceInM };
