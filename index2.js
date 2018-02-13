<!DOCTYPE html>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab" rel="stylesheet">
<style type='text/css'>
#wrapper {
position: fixed;
margin: 0;
padding:10px;
top:0;
left:0;
width: 100%;
height: 100%;
//text-align: center;
//background: color;
background-color: #222;
//background-image: url("grid.png");
//background-repeat: repeat;
color: #fff;
font-family: 'Roboto', sans-serif;
}

#name {
font-family: 'Roboto Slab', serif;
font-size: 64px;
//font-weight: 900;
}

</style>
<body>
<div id="wrapper">
	<div id="name">
		
	</div>
	
	email : first last @ gmail.com <br>
	Cornell netID : ask252
</div>
<script src="https://d3js.org/d3.v4.min.js"></script>
<script>
d3.select("body")
	//.on("mousemove", update)
	;

svg = d3.select("#name").append("svg")
	.attr("width", 750)
	.attr("height", 100)
	;


leng = 20;
colors = ["#f44", "#ff4", "#4f4", "#4ff", "#44f", "#f4f"]
//colors = ["#222", "#222","#222","#222","#222", "#2ff"]

var t = svg.selectAll(".pretty")
	.data(colors)
	.enter().append("text")
	.attr("x", 10)
	.attr("y", 74)
	.attr("class", "pretty")
	.text("Agrippa Spence Kellum")
	.attr("stroke-width", "5")
	.attr("stroke", function (d) {return d;})
	.attr("stroke-dasharray", leng+","+ leng*(colors.length-1))
	.attr("fill", "none")
	.style("pointer-events", "none")
	.attr("display", "none")
	;

function onwards() {
	t
		.attr("stroke-dashoffset", function (d, i) {return leng*i;})
		.transition(d3.transition().duration(1000).ease(d3.easeLinear))
		//.attr("stroke-dashoffset", 0)
		.attr("stroke-dashoffset", function (d, i) {return  leng*i + leng*colors.length;})
		.on("end", onwards)
		
		;
}

onwards();
	
	
f = svg.append("text")
	.attr("x", 10)
	.attr("y", 74)
	.text("Agrippa Spence Kellum")
	.attr("stroke-width", "2")
	.attr("stroke", "#222")
	.style("font-weight", "100")
	.attr("fill", "#fff")
	.on("mouseover", function () {t.attr("display", "true");})
	.on("mouseout", function () {t.attr("display", "none");})
	//.attr("display","none")
	;
	

	

	
/* function update(){
	pos = d3.mouse(this);
	//t.attr("stroke-dashoffset", (pos[0]+pos[1])/100);
	t.attr("stroke-dashoffset", function (d, i) {return (leng*i)+((pos[0]+pos[1])/50);});
} */

</script>

</body>