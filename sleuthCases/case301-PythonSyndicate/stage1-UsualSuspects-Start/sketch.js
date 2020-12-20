/*
The case of the Python Syndicate
Stage 1

Officer: 9645752
CaseNum: 301-0-51627828-9645752

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var robbie_kray_img;
var rocky_kray_img;
var cecil_karpinski_img;
var pawel_karpinski_img;
var bones_karpinski_img;
var countess_hamilton_img;



//declare your new variables below
var rocky_kray_location_x = 408;
var rocky_kray_location_y = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_img = loadImage("krayBrothers2.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	bones_karpinski_img = loadImage("karpinskiDog.png");
	countess_hamilton_img = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(rocky_kray_img, rocky_kray_location_x, rocky_kray_location_y);

	//image(robbie_kray_img, 115, 40);
	//image(cecil_karpinski_img, 701, 40);
	//image(pawel_karpinski_img, 115, 309);
	//image(bones_karpinski_img, 408, 309);
	//image(countess_hamilton_img, 701, 309);

}
