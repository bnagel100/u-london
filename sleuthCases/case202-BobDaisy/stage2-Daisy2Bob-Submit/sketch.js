/*

Officer: 9645752
CaseNum: 202-1-32757227-9645752

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Royal Blue filled text with a Sienna outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(629,734);
	textFont(letterFont);
	textSize(34);
}

function draw()
{
	background(255);

	fill(184,134,11);
	stroke(255,0,255);
	// text("orever", 31,545);
	fill(0,191,255);
	stroke(128,0,0);
	// text("How", 142,292);
	fill(240,230,140);
	stroke(139,0,139);
	// text("you.", 57,292);
	fill(165,42,42);
	stroke(0,206,209);
	// text("on", 163,477);
	stroke(199,21,133);
	// text("again", 311,365);
	fill(255,0,255);
	stroke(255,165,0);
	// text("last", 174,179);
	fill(128,128,0);
	stroke(128,128,0);
	// text("this", 12,435);
	fill(165,42,42);
	stroke(128,0,128);
	// text("do", 455,292);
	fill(0,191,255);
	stroke(160,82,45);
	// text("I", 97,102);
	fill(244,164,96);
	stroke(128,128,0);
	// text("around", 408,102);
	fill(222,184,135);
	stroke(184,134,11);
	// text("How", 128,137);
	fill(255,105,180);
	stroke(255,69,0);
	// text("your", 217,477);
	fill(144,238,144);
	stroke(32,178,170);
	// text("we", 77,365);
	fill(176,224,230);
	stroke(255,0,255);
	// text("and", 256,252);
	fill(218,112,214);
	stroke(255,215,0);
	// text("ging", 377,327);
	fill(255,165,0);
	// text("months", 321,137);
	fill(255,0,0);
	stroke(128,128,0);
	// text("united", 191,365);
	fill(128,0,0);
	stroke(153,50,204);
	// text("feels", 281,435);
	fill(210,105,30);
	stroke(0,191,255);
	// text("town", 186,435);
	fill(238,232,170);
	stroke(75,0,130);
	// text("longer", 335,292);
	fill(218,165,32);
	stroke(184,134,11);
	// text("sw", 305,477);
	fill(65,105,225);
	stroke(160,82,45);
	text("at", 562,218);
	fill(0,128,0);
	stroke(107,142,35);
	// text("return.", 395,477);
	fill(30,144,255);
	stroke(0,255,127);
	// text("miss", 118,102);
	fill(128,0,0);
	stroke(0,206,209);
	// text("I", 394,179);
	fill(154,205,50);
	stroke(0,0,139);
	// text("st", 410,218);
	fill(244,164,96);
	stroke(184,134,11);
	// text("is", 461,137);
	fill(0,255,0);
	stroke(46,139,87);
	// text("in", 176,218);
	fill(255,105,180);
	stroke(255,0,255);
	// text("I", 332,252);
	// text("I", 389,218);
	fill(65,105,225);
	stroke(0,255,127);
	// text("I'm", 541,435);
	fill(64,224,208);
	stroke(139,0,139);
	// text("think", 426,252);
	fill(244,164,96);
	stroke(75,0,130);
	// text("ing", 99,477);
	fill(0,255,255);
	stroke(25,25,112);
	// text("arms.", 282,218);
	fill(128,0,0);
	stroke(34,139,34);
	// text("without", 196,401);
	fill(138,43,226);
	stroke(0,128,0);
	// text("When", 492,327);
	fill(65,105,225);
	stroke(160,82,45);
	text("side", 518,401);
	text("up", 507,218);
	text("bank", 14,477);
	fill(0,0,205);
	stroke(0,139,139);
	// text("only", 523,252);
	fill(255,127,80);
	stroke(255,215,0);
	// text("long", 415,179);
	fill(255,0,0);
	stroke(184,134,11);
	// text("at", 409,401);
	fill(123,104,238);
	stroke(255,0,255);
	// text("my", 454,401);
	fill(218,165,32);
	stroke(255,165,0);
	// text("?", 463,327);
	fill(153,50,204);
	stroke(32,178,170);
	// text("it", 499,137);
	fill(25,25,112);
	stroke(255,69,0);
	// text("How", 11,102);
	fill(107,142,35);
	stroke(0,0,255);
	// text("lace.", 36,137);
	fill(153,50,204);
	stroke(0,255,127);
	// text("sky,", 177,252);
	fill(0,255,0);
	stroke(160,82,45);
	// text("kissed", 246,179);
	fill(165,42,42);
	stroke(139,69,19);
	// text("can", 353,252);
	fill(220,20,60);
	stroke(25,25,112);
	// text("lon", 325,327);
	fill(139,69,19);
	stroke(0,255,255);
	// text("store", 155,327);
	fill(0,206,209);
	stroke(128,0,0);
	// text("this", 252,327);
	fill(64,224,208);
	stroke(127,255,0);
	// text("having", 207,102);
	fill(176,224,230);
	stroke(0,139,139);
	// text("you", 102,218);
	fill(147,112,219);
	stroke(0,0,128);
	// text("have", 15,327);
	fill(25,25,112);
	stroke(210,105,30);
	// text("x", 116,613);
	fill(128,0,0);
	stroke(255,69,0);
	// text("are", 441,218);
	fill(220,20,60);
	stroke(124,252,0);
	// text("the", 11,252);
	fill(222,184,135);
	stroke(139,69,19);
	// text("Even", 446,365);
	fill(240,230,140);
	stroke(0,139,139);
	// text("many", 214,137);
	fill(0,255,0);
	stroke(218,165,32);
	// text("since", 14,179);
	fill(0,0,205);
	stroke(255,69,0);
	// text("darling", 68,34);
	fill(135,206,250);
	stroke(210,105,30);
	// text("we", 114,179);
	fill(123,104,238);
	stroke(220,20,60);
	// text("p", 14,137);
	fill(127,255,0);
	stroke(139,0,139);
	// text("My", 8,34);
	fill(50,205,50);
	stroke(0,128,0);
	// text("to", 110,327);
	fill(65,105,225);
	stroke(160,82,45);
	text("spring", 78,401);
	fill(205,133,63);
	stroke(255,0,255);
	// text("you", 334,102);
	fill(139,0,0);
	stroke(220,20,60);
	// text("in", 541,365);
	fill(30,144,255);
	stroke(124,252,0);
	// text("F", 11,545);
	fill(153,50,204);
	stroke(0,255,127);
	// text("?", 417,365);
	// text("night", 78,252);
	fill(255,0,255);
	stroke(165,42,42);
	// text("yours,", 152,545);
	fill(255,140,0);
	stroke(199,21,133);
	// text("small", 85,435);
	fill(240,230,140);
	stroke(46,139,87);
	// text("I", 509,292);
	fill(139,0,0);
	stroke(34,139,34);
	// text("you", 335,401);
	fill(152,251,152);
	stroke(0,0,139);
	// text("ift", 351,477);
	fill(0,255,255);
	stroke(128,128,0);
	// text("the", 11,401);
	fill(238,130,238);
	stroke(255,0,0);
	// text("will", 11,365);
	fill(240,230,140);
	stroke(153,50,204);
	// text("Bob,", 198,34);
	fill(65,105,225);
	stroke(160,82,45);
	text("hold", 17,218);
	fill(64,224,208);
	stroke(0,255,255);
	// text("be", 137,365);
	fill(72,209,204);
	stroke(50,205,50);
	// text("to", 500,179);
	fill(255,0,0);
	stroke(0,191,255);
	// text("Daisy", 11,613);
	fill(34,139,34);
	stroke(25,25,112);
	// text("the", 540,102);
	fill(147,112,219);
	stroke(153,50,204);
	// text("?", 365,179);
	fill(173,216,230);
	stroke(50,205,50);
	// text("much", 228,292);
	fill(0,0,128);
	stroke(128,128,0);
	// text("desolate.", 373,435);
	fill(199,21,133);
	stroke(32,178,170);
	// text("of", 13,292);
	fill(255,140,0);
	stroke(75,0,130);
	// text("my", 218,218);



}
