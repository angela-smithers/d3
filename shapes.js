var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
	.attr("height",function(d,i){ return d*15; })
	.attr("width","50")
	.attr("x",function(d,i){ return 60*i; })
	.attr("y","100");

