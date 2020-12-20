/*

Officer: 9645752
CaseNum: 202-0-83003409-9645752

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Orange text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(631,553);
	textFont(letterFont);
	textSize(27);
}

function draw()
{
	background(255);

	fill(165,42,42);
	text("eyes.", 97,144);
	fill(0,250,154);
	text("that", 252,272);
	fill(127,255,212);
	text("voice", 315,177);
	fill(210,105,30);
	text("?", 347,81);
	fill(255,69,0);
	text("kisses,", 143,415);
	fill(233,150,122);
	text("har", 189,210);
	fill(222,184,135);
	text("the", 454,177);
	fill(176,224,230);
	text("since", 440,81);
	fill(219,112,147);
	text("I", 317,272);
	fill(0,0,128);
	text("saw", 334,272);
	fill(147,112,219);
	text("in", 474,144);
	fill(154,205,50);
	text("I", 255,242);
	text("Love", 9,415);
	text("I", 74,81);
	fill(25,25,112);
	text("alive", 115,242);
	fill(0,255,255);
	text("confession", 192,81);
	fill(0,0,205);
	text("your", 396,114);
	fill(244,164,96);
	text("May", 9,81);
	text("hear", 174,177);
	fill(153,50,204);
	text("your", 396,272);
	fill(135,206,235);
	text("few", 345,300);
	fill(255,127,80);
	text("and", 83,415);
	fill(72,209,204);
	text("luckiest", 460,210);
	text("Bob", 9,469);
	fill(0,255,255);
	text("p.", 234,210);
	fill(0,255,0);
	text("of", 99,210);
	fill(199,21,133);
	text("a", 389,144);
	text("must", 286,210);
	text("fa", 13,300);
	fill(219,112,147);
	text("green", 10,144);
	fill(178,34,34);
	text("last", 10,114);
	text("that", 190,242);
	fill(128,128,0);
	text("sunny", 14,361);
	fill(139,69,19);
	text("moment", 129,272);
	fill(124,252,0);
	text("lovely", 466,272);
	fill(255,0,0);
	text("Ever", 370,81);
	fill(255,69,0);
	text("darling,", 466,114);
	fill(165,42,42);
	text("Daisy,", 153,27);
	fill(218,112,214);
	text("that", 523,300);
	fill(0,255,127);
	text("I", 320,144);
	text("first", 67,272);
	fill(160,82,45);
	text("when", 238,144);
	fill(255,105,180);
	text("the", 135,210);
	text("Oh", 15,27);
	fill(165,42,42);
	text("only", 215,114);
	text("lone", 406,144);
	fill(152,251,152);
	text("knew", 107,300);
	text("those", 260,300);
	fill(173,255,47);
	text("true", 258,332);
	text("are", 455,332);
	fill(238,232,170);
	text("from", 188,300);
	fill(139,0,139);
	text("am", 272,242);
	text("the", 406,210);
	fill(0,191,255);
	text("our", 520,81);
	fill(135,206,250);
	text("love.", 323,332);
	fill(128,0,128);
	text("like", 397,177);
	fill(255,0,255);
	text("were", 72,332);
	fill(255,165,0);
	text("chosen", 394,242);
	text("a", 166,81);
	text("date", 69,114);
	fill(32,178,170);
	text("I", 269,210);
	fill(107,142,35);
	text("nk", 318,114);
	text("person", 13,242);
	fill(0,0,139);
	text("my", 147,332);
	fill(240,230,140);
	text("that", 92,177);
	text("It", 179,144);
	fill(0,0,139);
	text("music", 10,210);
	fill(0,128,0);
	text("am", 337,144);
	fill(127,255,0);
	text("can", 157,114);
	fill(0,128,128);
	text("lovely", 62,27);
	text("ce,", 40,300);
	fill(220,20,60);
	text("my", 508,332);
	text("x", 71,469);
	fill(205,133,63);
	text("your", 245,177);
	text("your", 324,242);
	fill(255,215,0);
	text("I", 140,114);
	fill(34,139,34);
	text("blessed", 508,177);
	fill(178,34,34);
	text("s", 500,300);
	fill(34,139,34);
	text("You", 399,332);
	fill(0,0,139);
	text("one", 198,332);
	fill(178,34,34);
	text("be", 363,210);
	fill(0,255,127);
	text("the", 13,272);
	fill(255,165,0);
	text("day", 104,361);
	fill(30,144,255);
	text("I", 90,300);
	fill(144,238,144);
	text("make", 91,81);
	fill(255,165,0);
	text("April", 197,361);
	text("second", 403,300);
	text("is", 207,144);
	text("in", 163,361);
	fill(138,43,226);
	text("From", 500,242);
	text("thi", 282,114);
	fill(0,255,255);
	text("of", 360,114);
	fill(160,82,45);
	text("quiet", 13,177);
	fill(65,105,225);
	text("the", 508,144);
	fill(144,238,144);
	text("you", 13,332);
	fill(75,0,130);
	text("I", 157,177);



}
