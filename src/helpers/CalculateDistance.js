const calculateDistance = (myLatitude, myLongitude, storeLatitude, storeLongitude) => {
    const radians = (angle) => (angle * Math.PI) / 180;
    const R = 6371;

    const dLat = radians(storeLatitude - myLatitude);
    const dLon = radians(storeLongitude - myLongitude);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(radians(myLatitude)) * Math.cos(radians(storeLatitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;
    return distance.toFixed(0);
  };

  export default calculateDistance