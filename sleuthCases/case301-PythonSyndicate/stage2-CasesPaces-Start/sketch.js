/*
The case of the Python Syndicate
Stage 2


Officer: 9645752
CaseNum: 301-1-81424377-9645752

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Rocky kray

- The variables for Rocky kray have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Rocky kray for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var lina_lovelace_image;
var anna_karpinski_image;
var rocky_kray_image;
var cecil_karpinski_image;
var countess_hamilton_image;
var robbie_kray_image;


var rocky_kray_location_x = 701;
var rocky_kray_location_y = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	lina_lovelace_image = loadImage("lina.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	robbie_kray_image = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rocky_kray_image, rocky_kray_location_x, rocky_kray_location_y);

	//image(lina_lovelace_image, 115, 40);
	//image(anna_karpinski_image, 408, 40);
	//image(cecil_karpinski_image, 115, 309);
	//image(countess_hamilton_image, 408, 309);
	//image(robbie_kray_image, 701, 309);

}
