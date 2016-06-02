var outerWidth = 500;
var outerHeight = 450;
var rMin = 1; // "r" stands for radius
var rMax = 15;
var xValue = "price";
var yValue = "star_avg";
var rValue = "no_reviews";
var colorValue = "brand";

var xScale = d3.scale.linear().range([0, outerWidth]);
var yScale = d3.scale.linear().range([outerHeight, 0]);
var rScale = d3.scale.linear().range([rMin, rMax]);
var colorScale = d3.scale.category10();

var svg = d3.select("body").append("svg")
.attr("width", outerWidth)
.attr("height", outerHeight);

function render(data){
	xScale.domain(d3.extent(data, function (d){ return d[xValue]; }));
	yScale.domain(d3.extent(data, function (d){ return d[yValue]; }));
	rScale.domain(d3.extent(data, function (d){ return d[rValue]; }));

	var circles = svg.selectAll("circle").data(data);
	circles.enter().append("circle");
	circles
	  .attr("cx", function (d){ return xScale(d[xValue]);})
	  .attr("cy", function (d){ return yScale(d[yValue]);})
	  .attr("r", function (d){ return rScale(d[rValue]);})
	  .attr("fill", function (d){ return colorScale(d[colorValue]);});
}

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


render(data);