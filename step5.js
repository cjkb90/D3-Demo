//Turn into a function

var render = function render(data){
	var circles = svg.selectAll("circle").data(data);

	circles.enter().append("circle")
	  .attr("cx", function (d){ return scale(d); })
	  .attr("cy", 50)
	  .attr("r",  20)
};

render(data);


