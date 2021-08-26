const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journeys) =>{
    return journeys.startLocation
  })

};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journeys) => {
    return journeys.endLocation
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) =>{
    return journey.distance > minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const newJourneys =  this.journeys.map((journeys) =>{
    return journeys.transport
  })
  // indexOf cycles through the different items in an array and checks if the index is equal to the current index. As indexOf will take the first transport type, when the indices are different, it will return false and not be included in the return... e.g for train #2, indexOf will be 0 and index will be 1.
  return newJourneys.filter((journey, index) =>{
    return newJourneys.indexOf(journey) === index;
  })
};

module.exports = Traveller;
