//Add color

//Establish what dictates color
var colorValue = "brand";

//Create the color scale
var colorScale = d3.scale.category10();

//Fill in each element's color
	.attr("fill", function (d){ return colorScale(d[colorValue]);});