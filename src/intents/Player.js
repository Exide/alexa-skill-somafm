module.exports = function (intent, session, response) {
  var station = intent.slots.station.value;
  response.tellWithCard(station, station, station);
};
