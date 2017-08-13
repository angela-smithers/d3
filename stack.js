var parseDate = d3.timeParse("%Y");

d3.xml("data2.xml").get(function(error,xml){
  
  xml = [].map.call(xml.querySelectorAll("dat"),function(d){
    return {
    date: parseDate(d.getAttribute("id")),
      top: +d.querySelector("top").textContent,
      middle: +d.querySelector("middle").textContent,
      bottom: +d.querySelector("bottom").textContent
    };
  })
  console.log(xml);

});
