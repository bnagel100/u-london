/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 9645752
CaseNum: 201-3-42127625-9645752

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below

    beginShape();
        vertex(323,208);  //left hand bottom 1
        vertex(344,174);  //left hand top 2
        vertex(464,197);  //left shoulder 3
        vertex(554,186);  //top left head 4
        vertex(583,203);  //top right head 5
        vertex(604,253);  //top right shoulder 6
        vertex(606,287);  //top right shoulder 7
        vertex(626,300);  //top right elbow 8
        vertex(660,260);  //top right hand 9
        vertex(684,282);  //bottom right hand 10
        vertex(630,348);  //bottom right elbow 11
        vertex(583,327);  //right armpit 12
        vertex(539,500);  //bottom right dress 13
        vertex(489,572);  //right foot 14
        vertex(444,563);  //inside right foot 15
        vertex(445,545);  //inside left foot 16
        vertex(385,554);  //left foot 17
        vertex(387,479);  //bottom left dress 18
        vertex(470,260);  //left armpit 19
        vertex(404,244);  //bottom left armpit 20
    endShape(CLOSE);
}
