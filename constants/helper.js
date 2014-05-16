var integers = require('./integers');
var Bubble = require('../models/bubble');

exports.log = function(methodName, log) {
  console.log(new Date().toUTCString() + " - [" + methodName + "] " + log);
}

exports.isInBubble = function(bubbleDistance) {
  return (bubbleDistance < integers.RADIUS_DATA_BUBBLE);
}

exports.normalizeCoordinate = function(coordinate) {
  var coordinateObject = JSON.parse("[" + coordinate + "]");
  var normalizedCoordinate = coordinateObject.map(function(coordinate) {
    return parseFloat(coordinate);
  })
  return {type:'Point', coordinates: normalizedCoordinate};
}

exports.checkParameters = function(keys, dictionary) {
  for(var k in keys) {
    if (!keys[k] in dictionary)
      return {'result':false, 'missingKey':keys[k]};
  }
  return {'result': true};
}

exports.bubbleLiveStatus = function(currentDateTime, bubble) {

  // Returns -1, if the bubble is already expired (ended)
  // Returns 0, if the bubble is live
  // Returns second left for the bubble to be live, else

  var bubbleStartTime = new Date(bubble['startTime']).getTime();
  var bubbleEndTime = new Date(bubble['endTime']).getTime();
  var currentDateTime = new Date(currentDateTime).getTime();

  var timeDifferenceStart = currentDateTime - bubbleStartTime;
  var timeDifferenceEnd = bubbleEndTime - currentDateTime;

  if (timeDifferenceStart < 0) // Bubble upcoming to be live
    return Math.abs(timeDifferenceStart); // Abs, to get the difference
  else if (timeDifferenceStart > 0 && timeDifferenceEnd > 0) // Bubble live
    return 0;
  return -1;
}

exports.returnCoordinateObject = function(coordinate) {
  return {type:'Point', coordinates: coordinate};
}

exports.returnBubbleObject = function(bubble) {
  return {
    'Lat': bubble['loc']['coordinates'][1],
    'Lon': bubble['loc']['coordinates'][0],
    'startTime': bubble['startTime'],
    'endTime': bubble['endTime']
  }
}

exports.saveBubble = function(location, startTime, endTime, callback) {
  var bubbleObject = Bubble({ loc: {type:'Point', coordinates:location },
    startTime: startTime,
    endTime: endTime });
  return bubbleObject.save(callback);
}

exports.listBubblesNearCoordinate = function(coordinate, callback) {

  var geoNearOptions = { spherical:true,
    distanceMultiplier: integers.DISTANCE_MULTIPLIER_KM};

  Bubble.geoNear(coordinate, geoNearOptions, function (err, data) {
    return callback(err, data);
  });
}

exports.compareUpcomingBubbles = function(bubbleA, bubbleB) {
  if(bubbleA['upcoming'] < bubbleB['upcoming'])
    return -1;
  if(bubbleA['upcoming'] > bubbleB['upcoming'])
    return 1;
  return 0;
}
