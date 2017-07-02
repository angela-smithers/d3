var dataArray = [5,11,18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

svg.selectAll("rect")
  .data(dataArray)
  .enter().append("rect")
	.attr("height",function(d,i){ return d*10; })
	.attr("width","50")
	.attr("fill","cornflowerblue")
	.attr("x",function(d,i){ return 60*i; })
	.attr("y",function(d,i){ return 120-(d*10); });

var newX = 300;
svg.selectAll("circle")
  .data(dataArray)
  .enter().append("circle")
	.attr("cx",function(d,i){ newX+=(d*8)+(i*20); return newX; })
	.attr("cy","100")
	.attr("r",function(d,i){ return d*3; });
