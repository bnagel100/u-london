/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    canyon = {x_pos: 0, width: 150};
    collectable = {x_pos: 200, y_pos: 100, size: 50}
    mountain = {x_pos: 200, y_pos: 100};
    cloud = {x_pos: 200, y_pos: 150, size: 15};

}

function draw()
{
	//fill the sky blue
    background(100, 155, 255);

    //draw some green ground
    noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y);

    //a mountain in the distance

    fill(128,128,129);
    //    triangle(450,432,750,432,600,200)
    triangle(mountain.x_pos+50,mountain.y_pos+332,mountain.x_pos+350,mountain.y_pos+332,mountain.x_pos+200,mountain.y_pos)
     //   triangle(350,432,550,432,450,300)
    triangle(mountain.x_pos-50,mountain.y_pos+332,mountain.x_pos+150,mountain.y_pos+332,mountain.x_pos+50,mountain.y_pos+200)


    //a tree
    fill(120,100,40)
    rect(treePos_x,treePos_y,60,150)
    //branches
    fill(0,155,0)
    triangle(treePos_x-50,treePos_y+50,treePos_x+30,treePos_y-50,treePos_x+110,treePos_y+50)
    triangle(treePos_x-50,treePos_y,treePos_x+30,treePos_y-100,treePos_x+110,treePos_y)


       //a canyon
    fill(100,50,0)
    beginShape()
        vertex(canyon.x_pos+178*canyon.width/100,432)
        vertex(canyon.x_pos+200*canyon.width/100,432)
        vertex(canyon.x_pos+155*canyon.width/100,492)
        vertex(canyon.x_pos+175*canyon.width/100,492)
        vertex(canyon.x_pos-110*canyon.width/100,903)
        vertex(canyon.x_pos-750*canyon.width/100,702)
        vertex(canyon.x_pos+188*canyon.width/100,432)
    endShape()

    fill(10,0,0,170)
    beginShape()
        vertex(canyon.x_pos+188*canyon.width/100,432)
        vertex(canyon.x_pos+198*canyon.width/100,432)
        vertex(canyon.x_pos+155*canyon.width/100,492)
        vertex(canyon.x_pos+175*canyon.width/100,492)
        vertex(canyon.x_pos+canyon.width/100,753)
        vertex(canyon.x_pos+canyon.width/100,603)
        vertex(canyon.x_pos+30*canyon.width/100,903)
        vertex(canyon.x_pos-100*canyon.width/100,553)
    endShape()

    //a cloud in the sky
    fill(255);
    ellipse(cloud.x_pos,cloud.y_pos,cloud.size*8,cloud.size*8);
    ellipse(cloud.x_pos-40,cloud.y_pos,cloud.size*6,cloud.size*6);
    ellipse(cloud.x_pos+40,cloud.y_pos,cloud.size*6,cloud.size*6);
    ellipse(cloud.x_pos-70,cloud.y_pos,cloud.size*4,cloud.size*4);
    ellipse(cloud.x_pos+70,cloud.y_pos,cloud.size*4,cloud.size*4);

    //collectable
    fill(255,215,0)
    ellipse(collectable.x_pos,collectable.y_pos+300,20*collectable.size/50,20*collectable.size/50)
    rect(collectable.x_pos,collectable.y_pos+295,50*collectable.size/50,10*collectable.size/50)
    rect(collectable.x_pos+25,collectable.y_pos+285,5*collectable.size/50,20*collectable.size/50)
    rect(collectable.x_pos+35,collectable.y_pos+285,5*collectable.size/50,20*collectable.size/50)
    rect(collectable.x_pos+45,collectable.y_pos+285,5*collectable.size/50,20*collectable.size/50)


    //character
    fill(200,150,150);
    ellipse(gameChar_x,gameChar_y -50,35,35);

    fill(0,0,255);
    rect(gameChar_x - 13,gameChar_y - 35,26,30);

    fill(0);
    rect(gameChar_x-15,gameChar_y-5,10,10);
    rect(gameChar_x+5,gameChar_y-5,10,10);
}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;

}
