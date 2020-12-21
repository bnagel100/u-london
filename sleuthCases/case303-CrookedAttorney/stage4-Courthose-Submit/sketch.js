/*

Officer: 9645752
CaseNum: 303-3-32134417-9645752

Case 303 - The Case of the Crooked Attorney
Stage 4 - The Courthouse

Torvalds has his final safe in his courthouse chambers. Luckily there is a court case proceeding.
You can sneak into his chambers whilst he makes his closing statement.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Use the 'random' function to produce random values ranging from 1 to 11.
	- Assign the output to crypticVaultCombA

	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 3 to 20.
	- Assign the output to crypticVaultCombB

	When any key is released:
	- Make crypticVaultCombC equal to the value of 'keyCode'

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseY to values ranging from 12 to 67.
	- Assign the output to crypticVaultCombD

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseY to values ranging from 20 to 80.
	- Assign the output to crypticVaultCombE

	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseX to values ranging from 14 to 72.
	- Assign the output to crypticVaultCombF



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- key, keyCode
	- random
	- map

*/

//declare the variables

var crypticVaultCombA;
var crypticVaultCombB;
var crypticVaultCombC;
var crypticVaultCombD;
var crypticVaultCombE;
var crypticVaultCombF;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	crypticVaultCombA = 0;
	crypticVaultCombB = "";
	crypticVaultCombC = "";
	crypticVaultCombD = 0;
	crypticVaultCombE = 0;
	crypticVaultCombF = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...


/*
Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Use the 'random' function to produce random values ranging from 1 to 11.
	- Assign the output to crypticVaultCombA */
function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
    crypticVaultCombA = random(1,11);
}


/*	When the mouse button is released:
	- Use the 'map' function to scale mouseX to values ranging from 3 to 20.
	- Assign the output to crypticVaultCombB */
function mouseReleased()
{
	console.log("mouseReleased", mouseX, mouseY);
    crypticVaultCombB = map(mouseX,0,width,3,20);
}
/*  When any key is released:
	- Make crypticVaultCombC equal to the value of 'keyCode' */

function keyReleased()
{
	console.log("keyReleased", key);
    crypticVaultCombC = keyCode;
}
/*	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseY to values ranging from 12 to 67.
	- Assign the output to crypticVaultCombD
    Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseY to values ranging from 20 to 80.
	- Assign the output to crypticVaultCombE 	Whilst the mouse is being dragged:
	- Use the 'map' function to scale mouseX to values ranging from 14 to 72.
	- Assign the output to crypticVaultCombF

    */
function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
    crypticVaultCombD = map(mouseY,0,height,12,67);
    crypticVaultCombE = map(mouseY,0,height,20,80);
    crypticVaultCombF = map(mouseX,0,width,14,72);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dial
	push();
	translate(256,180);
	drawDial(170,crypticVaultCombA,20);
	pop();

	//Draw the spinners
	push();
	translate(206,280);
	drawSpinner(3, crypticVaultCombB);
	pop();

	push();
	translate(306,280);
	drawSpinner(3, crypticVaultCombC);
	pop();

	//Draw the levers
	push();
	translate(125,356);
	drawLever(crypticVaultCombD);
	pop();

	push();
	translate(250,356);
	drawLever(crypticVaultCombE);
	pop();

	push();
	translate(375,356);
	drawLever(crypticVaultCombF);
	pop();

}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}

function drawSpinner(numSpinners, val)
{
	var sw = 20;
	var ow = (sw + 5) * numSpinners + 5;
	stroke(0);
	fill(100);
	rect(-ow/2,0,ow,35);
	if(typeof(val) == "number")
	{
		val = floor(val).toString(); //convert to string
	}
	var d = numSpinners - val.length;

	for(var d = numSpinners - val.length; d > 0; d--)
	{
		val = "-" + val;
	}

	for(var i = 0; i < numSpinners; i++)
	{
		stroke(0);
		fill(255,255,200);
		rect(-ow/2 + i * (sw + 5) + 5,5,20,25);
		fill(0);
		noStroke();
		text(val[i],-ow/2 + sw/2 + i * (sw +5),25);
	}

}
