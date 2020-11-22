/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here

	noStroke();
	fill(255);
	text("cloud", 200, 100);

    ellipse(200,150,80,80)
    ellipse(160,150,60,60)
    ellipse(240,150,60,60)
    ellipse(130,150,40,40)
    ellipse(270,150,40,40)

	//2. a mountain in the distance
	//... add your code here

    fill(128,128,129);


    triangle(450,432,750,432,600,200)
    triangle(350,432,550,432,450,300)

    noStroke();
	fill(255);
	text("mountain", 500, 256);

	//3. a tree
	//... add your code here

    fill(120,100,40)
    rect(900,282,60,150)

    //branches
    fill(0,155,0)
    triangle(850,332,930,232,1010,332)
    triangle(850,282,930,182,1010,282)

	noStroke();
	fill(255);
	text("tree", 800, 346);


	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);


    fill(120,130,40)
    rect(100,432,60,150)

    fill(120,90,40)
    rect(100,432,10,150)

    fill(120,90,40)
    rect(150,432,10,150)


    fill(120,105,40)
    rect(110,432,10,150)

    fill(120,105,40)
    rect(140,432,10,150)

    fill(120,105,40)
    rect(140,432,10,150)
	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
//	text("collectable item", 400, 400);

    fill(255,215,0)
    ellipse(400,400,20,20)
    rect(400,395,50,10)
    rect(425,385,5,20)
    rect(435,385,5,20)
    rect(445,385,5,20)
}

