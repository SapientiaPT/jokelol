var h = 350;
var w = 350;
//inicial size: 350,350.
function setup(){
	createCanvas(w,h);
}
function draw(){
	background(50);
	fill(255,75,55);
	ellipse(w/2,h/2+35,30,30);
	createTwin();
	createShaft();
	createTip();
}

function createTwin(){
	fill(255,20,65);
	ellipse(w/2 - 30,h/2+35,30,30);
}

function createShaft(){
	stroke(255,95,120);
	var x1 = w/2-15;
	var x2 = w/2-15;
	var y1 = w/2-10+35;
	var y2 = 50;
	for(var i=0;i<5;i++){
		line(x1+2-i,y1,x2+2-i,y2);
	}
	
}

function createTip(){
	fill(150,20,95);
	ellipse(161,15+35,10,10);
}

