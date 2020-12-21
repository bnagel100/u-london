/*

Officer: 9645752
CaseNum: 401-0-31270074-9645752

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When methanol dips below 0.26, reduce methylene by 0.01
	- If nerveGas goes above 0.5, raise methylene by 0.01
	- When nerveGas goes above 0.43, reduce opioids by 0.02
	- When warfarin goes above 0.56, increment opioids by 0.02
	- When methanol dips below 0.28, decrease calciumChloride by 0.04
	- If nerveGas dips below 0.27, increment calciumChloride by 0.02


Your conditional statements should:

consider the following poisons:

	- methanol
	- warfarin
	- nerveGas


and modify the following antidotes:

	- methylene
	- opioids
	- calciumChloride


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var methanol;
var warfarin;
var nerveGas;


//Declare the antidote variables
var methylene;
var opioids;
var calciumChloride;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	warfarin = 0.5;
	nerveGas = 0.5;
	methylene = 0.5;
	opioids = 0.5;
	calciumChloride = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	warfarin = nextValue(graphs[1],warfarin);
	nerveGas = nextValue(graphs[2],nerveGas);


	methylene = constrain(methylene, 0, 1);
	opioids = constrain(opioids, 0, 1);
	calciumChloride = constrain(calciumChloride, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('warfarin: ' + nf(warfarin,1,2), 20,40);
	fill(colors[2]);
	text('nerveGas: ' + nf(nerveGas,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(methylene,50,'methylene');
	drawBar(opioids,200,'opioids');
	drawBar(calciumChloride,350,'calciumChloride');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
