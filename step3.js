//Scales transform data space into pixel space

var scale = d3.scale.linear()

.domain([0, 5])  // Data space
.range([0, 300]); // Pixel space