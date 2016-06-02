//Remove Circle

var data = [1,2,3];

svg.selectAll("circle")
  .data(data)
.enter().append("circle")
  .attr("cx", 50)
  .attr("cy", 50)
  .attr("r",  20)

//Before the enter(), there are no circles in the HTML. Enter will dynamically append elements based on the data

//Note that the display is not dynamic to the data
//This is where the scale comes in

  .attr("cx", function (d){ return scale(d); })


//To simplify

var circles = svg.selectAll("circle").data(data);

circles.enter().append("circle")
  .attr("cx", function (d){ return scale(d); })
  .attr("cy", 50)
  .attr("r",  20);


//Turn into a function

var render = function(data){
	var circles = svg.selectAll("circle").data(data);

	circles.enter().append("circle")
	  .attr("cx", function (d){ return scale(d); })
	  .attr("cy", 50)
	  .attr("r",  20);
};

render(data);

