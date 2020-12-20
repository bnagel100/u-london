/*

Officer: 9645752
CaseNum: 101-3-56932271-9645752

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Cornflower Blue filled rectangle with a Yellow outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Lime Green filled
rectangle with a Brown outline around him.

Identify the man reading the newspaper by drawing a Medium Slate Blue filled rectangle
with a Dark Magenta outline around him.

Identify the woman with the dog by drawing a Green Yellow filled rectangle with a
Purple outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...


}
