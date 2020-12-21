/*
The case of the Python Syndicate
Stage 4

Officer: 9645752
CaseNum: 301-3-62706785-9645752

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var annaKarpinskiImage;
var pawelKarpinskiImage;
var rockyKrayImage;
var bonesKarpinskiImage;
var countessHamiltonImage;
var robbieKrayImage;

var pawelKarpinskiObject;


//declare your new objects below


//var annaKarpinskiXPos = 115;
//var annaKarpinskiYPos = 40;
//var rockyKrayXPos = 701;
//var rockyKrayYPos = 40;
//var bonesKarpinskiXPos = 115;
//var bonesKarpinskiYPos = 309;
//var countessHamiltonXPos = 408;
//var countessHamiltonYPos = 309;
//var robbieKrayXPos = 701;
//var robbieKrayYPos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	robbieKrayImage = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);

    pawelKarpinskiObject = {
		x: 408,
		y: 40,
		image: pawelKarpinskiImage
	};


	//define your new objects below
    annaKarpinskiObject = {
		x: 115,
		y: 40,
		image: annaKarpinskiImage
	};
    rockyKrayObject = {
		x: 701,
		y: 40,
		image: rockyKrayImage
	};
    bonesKarpinskiObject = {
		x: 115,
		y: 309,
		image: bonesKarpinskiImage
	};
    countessHamiltonObject = {
		x: 408,
		y: 309,
		image: countessHamiltonImage
	};
    robbieKrayObject = {
		x: 701,
		y: 309,
		image: robbieKrayImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);
	image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);
	image(countessHamiltonObject.image, countessHamiltonObject.x, countessHamiltonObject.y);
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);


}
