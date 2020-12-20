/*

Officer: 9645752
CaseNum: 202-3-27189073-9645752

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Olive Drab filled text with a Dark Turquoise outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(602,430);
	textSize(28);
}

function draw()
{
	background(255);

	push();
	fill(148,0,211);
	stroke(139,0,139);
	textFont(Melissa);
	text("delays.", 476,178);
	pop();
	fill(219,112,147);
	stroke(255,0,255);
	textFont(Melissa);
	text("so,", 423,148);
	fill(128,0,0);
	stroke(0,139,139);
	textFont(Diggity);
	text("long", 183,178);
	fill(0,206,209);
	stroke(165,42,42);
	text("You", 105,237);
	fill(153,50,204);
	stroke(0,250,154);
	textFont(Melissa);
	text("much", 146,207);
	fill(173,216,230);
	stroke(0,0,255);
	textFont(Diggity);
	text("money", 306,148);
	fill(160,82,45);
	stroke(0,0,205);
	textFont(Ballpointprint);
	text("no", 150,178);
	fill(238,130,238);
	stroke(178,34,34);
	textFont(Diggity);
	text("Perhaps", 221,84);
	fill(0,255,255);
	stroke(0,128,128);
	textFont(RonsFont);
	text("sort", 121,116);
	fill(128,0,0);
	stroke(154,205,50);
	textFont(Ballpointprint);
	text("sometimes.", 302,237);
	fill(0,0,205);
	stroke(32,178,170);
	text("Are", 12,84);
	fill(210,105,30);
	stroke(0,0,139);
	textFont(RonsFont);
	text("me", 163,84);
	fill(147,112,219);
	stroke(0,0,128);
	textFont(Diggity);
	text("The", 376,207);
	fill(255,165,0);
	stroke(255,69,0);
	textFont(Melissa);
	text("and", 88,116);
	fill(186,85,211);
	stroke(154,205,50);
	text("s", 329,84);
	fill(0,0,205);
	stroke(255,165,0);
	textFont(RonsFont);
	text("continual", 366,178);
	push();
	fill(233,150,122);
	stroke(255,0,0);
	textFont(Diggity);
	text("Bob,", 129,28);
	pop();
	fill(160,82,45);
	text("cash.", 10,178);
	fill(127,255,212);
	stroke(255,0,255);
	text("Forever", 15,293);
	fill(128,0,128);
	stroke(0,139,139);
	textFont(Ballpointprint);
	text("relationship", 405,116);
	fill(255,0,255);
	stroke(255,69,0);
	textFont(Diggity);
	text("out.", 263,116);
	fill(25,25,112);
	stroke(128,0,0);
	textFont(RonsFont);
	text("of", 273,148);
	push();
	fill(30,144,255);
	stroke(107,142,35);
	textFont(Ballpointprint);
	text("can", 106,178);
	pop();
	stroke(218,165,32);
	text("secrets,", 420,207);
	fill(148,0,211);
	stroke(0,0,255);
	text("My", 7,28);
	fill(0,128,128);
	stroke(127,255,0);
	textFont(Ballpointprint);
	text("ed", 258,237);
	fill(127,255,212);
	stroke(0,100,0);
	textFont(Melissa);
	text("I", 250,207);
	push();
	fill(255,215,0);
	stroke(199,21,133);
	textFont(Diggity);
	text("ignore", 242,178);
	pop();
	fill(220,20,60);
	textFont(RonsFont);
	text("yours,", 107,293);
	push();
	fill(176,224,230);
	stroke(0,0,128);
	text("?", 356,207);
	pop();
	stroke(0,128,0);
	text("you", 157,148);
	fill(139,0,0);
	stroke(255,0,255);
	textFont(Melissa);
	text("can", 265,207);
	fill(135,206,235);
	stroke(153,50,204);
	textFont(Diggity);
	text("away", 408,84);
	fill(0,255,0);
	stroke(127,255,0);
	textFont(Melissa);
	text("go", 383,84);
	push();
	fill(255,0,255);
	stroke(124,252,0);
	text("?", 370,148);
	pop();
	fill(240,230,140);
	stroke(0,255,127);
	textFont(Ballpointprint);
	text("more", 191,207);
	fill(255,0,255);
	stroke(139,69,19);
	textFont(Diggity);
	text("sure", 59,207);
	stroke(148,0,211);
	textFont(Melissa);
	text("hould", 339,84);
	fill(34,139,34);
	stroke(107,142,35);
	textFont(RonsFont);
	text("Daisy", 10,349);
	fill(210,105,30);
	stroke(255,0,0);
	textFont(Ballpointprint);
	text("all", 230,116);
	push();
	fill(0,255,255);
	stroke(220,20,60);
	text("silence.", 16,237);
	pop();
	fill(64,224,208);
	textFont(Melissa);
	text("we", 299,84);
	push();
	fill(218,112,214);
	stroke(139,69,19);
	textFont(RonsFont);
	text("not", 12,207);
	pop();
	fill(152,251,152);
	stroke(50,205,50);
	text("you", 65,84);
	fill(255,0,0);
	stroke(255,0,255);
	text("?", 205,84);
	fill(0,0,255);
	stroke(0,255,127);
	text("ng", 139,84);
	fill(50,205,50);
	stroke(0,250,154);
	text("avo", 97,84);
	fill(152,251,152);
	stroke(0,0,128);
	textFont(Ballpointprint);
	text("darling", 49,28);
	fill(139,0,139);
	stroke(0,128,0);
	textFont(RonsFont);
	text("these", 302,178);
	fill(173,255,47);
	stroke(255,0,255);
	textFont(Diggity);
	text("send", 532,148);
	fill(135,206,250);
	stroke(184,134,11);
	text("er", 211,178);
	fill(148,0,211);
	stroke(139,0,139);
	textFont(Ballpointprint);
	text("I", 72,178);
	fill(205,133,63);
	stroke(46,139,87);
	textFont(Melissa);
	text("idi", 124,84);
	fill(0,206,209);
	stroke(34,139,34);
	textFont(RonsFont);
	text("our", 350,116);
	fill(0,0,128);
	stroke(124,252,0);
	textFont(Diggity);
	text("?", 83,148);
	fill(138,43,226);
	stroke(34,139,34);
	textFont(Melissa);
	text("how", 109,207);
	push();
	fill(72,209,204);
	stroke(0,0,205);
	textFont(Ballpointprint);
	text("x", 74,349);
	pop();
	fill(107,142,35);
	stroke(0,206,209);
	textFont(Ballpointprint);
	text("guard", 205,237);
	push();
	fill(255,255,0);
	stroke(0,255,0);
	textFont(RonsFont);
	text("this", 180,116);
	pop();
	text("I", 454,148);
	text("take", 298,207);
	text("break", 16,116);
	push();
	fill(255,255,0);
	stroke(32,178,170);
	text("a", 517,84);
	pop();
	text("safe", 20,148);
	fill(0,250,154);
	stroke(0,100,0);
	text("Is", 307,116);
	fill(107,142,35);
	stroke(0,206,209);
	text("the", 523,207);
	push();
	fill(100,149,237);
	textFont(RonsFont);
	text("for", 468,84);
	pop();
	text("can", 488,148);
	push();
	fill(0,255,127);
	stroke(255,255,0);
	textFont(RonsFont);
	text("If", 386,148);
	pop();
	fill(50,205,50);
	textFont(Melissa);
	text("I'm", 534,178);
	fill(106,90,205);
	stroke(0,250,154);
	text("so", 179,237);
	fill(50,205,50);
	stroke(210,105,30);
	textFont(RonsFont);
	text("short", 206,148);
	push();
	fill(255,105,180);
	stroke(50,205,50);
	textFont(Melissa);
	text("are", 148,237);
	pop();
	fill(0,206,209);
	stroke(0,255,0);
	text("Are", 105,148);



}
