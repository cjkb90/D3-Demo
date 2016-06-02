//Now that we have a function, ready to work with more data

//Paste in data above the render function
var data = [
{star_avg: 4.7, no_reviews: 310, price: 50, brand: "sennheiser"}, 
{star_avg: 4.1, no_reviews: 250, price: 45, brand: "sennheiser"},
{star_avg: 4.4, no_reviews: 370, price: 60, brand: "sennheiser"}, 
{star_avg: 4.2, no_reviews: 270, price: 55, brand: "sennheiser"}, 
{star_avg: 4.8, no_reviews: 300, price: 53, brand: "sennheiser"},
{star_avg: 3.1, no_reviews: 150, price: 35, brand: "bose"}, 
{star_avg: 3.5, no_reviews: 400, price: 42, brand: "bose"},
{star_avg: 3.6, no_reviews: 200, price: 34, brand: "bose"},
{star_avg: 3.9, no_reviews: 240, price: 37, brand: "bose"},
{star_avg: 4, no_reviews: 280, price: 39, brand: "bose"},
{star_avg: 2.6, no_reviews: 175, price: 32, brand: "beats"}, 
{star_avg: 2.3, no_reviews: 280, price: 28, brand: "beats"},
{star_avg: 1.9, no_reviews: 80, price: 20, brand: "beats"},
{star_avg: 2, no_reviews: 100, price: 23, brand: "beats"},
{star_avg: 2.8, no_reviews: 200, price: 31, brand: "beats"},
{star_avg: 0, no_reviews: 0, price: 10, brand: "beats"},
{star_avg: 5, no_reviews: 0, price: 80, brand: "beats"}
];

//First is to establish the axes scales

//Remove Scale

var xScale = d3.scale.linear().range([0, outerWidth]);
var yScale = d3.scale.linear().range([outerHeight, 0]);

//Declare what the x and y values will be
var xValue = "price";
var yValue = "star_avg";

//Insert these into render function above var=circles
//What extent does is it gets the maximum and minimum values
	xScale.domain(d3.extent(data, function (d){ return d[xValue]; }));
	yScale.domain(d3.extent(data, function (d){ return d[yValue]; }));

//Replace cx and cy
	 	.attr("cx", function (d){ return xScale(d[xValue]);})
	  .attr("cy", function (d){ return yScale(d[yValue]);})
		.attr("r",  5);