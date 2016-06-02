//Send data to everyone
//Questions at the end
//Import D3 into HTML
//Start manipulating the DOM

var outerWidth = 500;
var outerHeight = 450;

//First step is to append the SVG element to the body
var svg = d3.select("body").append("svg")
.attr("width", outerWidth)
.attr("height", outerHeight)


.append("rect")
.attr("x",50)
.attr("y",50)
.attr("width",100)
.attr("height",100)