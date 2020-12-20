/*
The case of the Python Syndicate
Stage 3


Officer: 9645752
CaseNum: 301-2-17878128-9645752

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Cecil karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Cecil karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var countessHamiltonImage;
var cecilKarpinskiImage;
var annaKarpinskiImage;
var bonesKarpinskiImage;
var rockyKrayImage;
var robbieKrayImage;

var cecilKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImage = loadImage("countessHamilton.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	robbieKrayImage = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	cecilKarpinskiObj = {
		x: 408,
		y: 40,
		image: cecilKarpinskiImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiObj.image, cecilKarpinskiObj.x, cecilKarpinskiObj.y);

	image(countessHamiltonImage, cecilKarpinskiObj.x - 293, cecilKarpinskiObj.y);
	image(annaKarpinskiImage, cecilKarpinskiObj.x + 293, cecilKarpinskiObj.y);
	image(bonesKarpinskiImage, cecilKarpinskiObj.x - 293, cecilKarpinskiObj.y + 269);
	image(rockyKrayImage, cecilKarpinskiObj.x, cecilKarpinskiObj.y + 269);
	image(robbieKrayImage, cecilKarpinskiObj.x + 293, cecilKarpinskiObj.y + 269);

}
