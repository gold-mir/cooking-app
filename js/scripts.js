var litresToGallons = function(volumeInL) {
  return volumeInL * 0.26417;
};

var volume = parseFloat(prompt("Enter a volume in litres:"));
var result = litresToGallons(volume);
alert(result);
