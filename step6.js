//Size of points into Number of Reviews

//Declare what will dictate the radius
var rValue = "no_reviews";

//Set min and max
var rMin = 1; // "r" stands for radius
var rMax = 15;

//Declare the scale for r
var rScale = d3.scale.linear().range([rMin, rMax]);

//Inside the function, make use of the scale
	rScale.domain(d3.extent(data, function (d){ return d[rValue]; }));

	//Finally, establish the value of the radius for each data point
	.attr("r", function (d){ return rScale(d[rValue]);});

//Make a big bigger
var outerWidth = 500;
var outerHeight = 450;

//Now we have dynamically sized radii