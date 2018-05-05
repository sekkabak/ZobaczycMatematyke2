var canvasn = document.getElementById('napis');
var can = canvasn.getContext("2d");
can.fillStyle = "#00ccff";


var statX1 = 70;
var statX2 = 0;
var statY1 = 210;
var statY2 = 20;

$( document ).ready(function() {
    $('#napis_button_start').click(function(){
    	//wyraz 1
		napZ(statX1+0,0+statY1);
		napO(statX1+170,45+statY1);
		napB(statX1+250,45+statY1);
		napA(statX1+350,105+statY1);
		napC(statX1+450,+45+statY1);
		napZ(statX1+500,0+statY1);
		napY(statX1+670,35+statY1);
		napCi(statX1+770,45+statY1);

		//wyraz 2
		napM(statX2+0,0+statY2);
		napA(statX2+170,110+statY2);
		napT(statX2+230,0+statY2);
		napE(statX2+350,0+statY2);
		napM(statX2+450,0+statY2);
		napA(statX2+600,110+statY2);
		napT(statX2+650,0+statY2);
		napY(statX2+800,35+statY2);
		napK(statX2+850,0+statY2);
		napEi(statX2+920,0+statY2);
	});
});


function napZ(wekx,weky) {
	var odlg = [100,50,100];
	var ar1 = 1, la1 = 0, krok1 = 0.001;
	var ar2 = 1, la2 = 0, krok2 = 0.001;
	var ar3 = 1, la3 = 0, krok3 = 0.001;
	var szybkosc = 2;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		  	else if(ar3<odlg[2])
		  	{
		  		rysuj3(ar3);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x = i;
			var y = odlg[0]-1;
			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la1 = ar1;
		ar1=ar1+0.5;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			var x = 2 * i+2;
			var y = 2 * i;
			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
	function rysuj3(g)
	{
		for (var i = la3; i < g; i=i+krok3) {

			var x = i+1;
			var y = 0;
			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la3 = ar3;
		ar3=ar3+0.5;
		manager();
	}
}

function napO(wekx,weky) {
	var odlg = 10;
	var ar = 0, la = 0, krok = 0.001, a = 52;
	var szybkosc = 2;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar<odlg)
		  	{
		  		rysuj(ar);
		  	}
		  	else
		  	{

		  	}
		  }, szybkosc);
	}
	
	function rysuj(g)
	{
		for (var i = la; i < g; i=i+krok) {

		var x = a * Math.cos(i);
		var y = a * Math.sin(i);
		x = x + wekx;
		y = y + weky;
		can.fillRect(x,canvasn.height-y,1,1);
		}
		la = ar;
		ar=ar+0.01;
		manager();
	}
}

function napB(wekx,weky) {
	var a = 40;
	var b = 1;
	var c = 60;
	var odlg = [1.57,2*c];
	var ar1 = 0, la1 = 0, krok1 = 0.001;
	var ar2 = 0, la2 = 0, krok2 = 0.001;
	var ar3 = 0, la3 = 0, krok3 = 0.001;
	var szybkosc = 8;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[0])
		  	{
		  		rysuj2(ar2);
		  	}
		  	else if(ar3<odlg[1])
		  	{
		  		rysuj3(ar3);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x1 = b*a*i;
			var y1 = b*a*Math.sin(2*i);

			var x = x1 * Math.cos(-3.14/2) - y1 * Math.sin(-3.14/2);
			var y = x1 * Math.sin(-3.14/2) + y1 * Math.cos(-3.14/2);

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la1 = ar1;
		ar1=ar1+0.01;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			var x1 = b*a*i;
			var y1 = b*a*Math.sin(2*i);

			var x = x1 * Math.cos(-3.14/2) - y1 * Math.sin(-3.14/2);
			var y = x1 * Math.sin(-3.14/2) + y1 * Math.cos(-3.14/2) + c;

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la2 = ar2;
		ar2=ar2+0.01;
		manager();
	}
	function rysuj3(g)
	{
		for (var i = la3; i < g; i=i+krok3) {

			var y = i - c - 1;
			var x = 0;

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la3 = ar3;
		ar3=ar3+0.5;
		manager();
	}
}

function napA(wekx,weky) {
	var a = -1000;
	var b = -70;
	var odlg = [0.75/3,20];
	var ar1 = -0.75/3, la1 = 0, krok1 = 0.0001;
	var ar2 = -20, la2 = 0, krok2 = 0.0001;
	var szybkosc = 1;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x = 2*a*(Math.tan(i) - 1/2*Math.sin(2*i));
			var y = 2*a*Math.sin(i)*Math.sin(i);

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la1 = ar1;
		ar1=ar1+0.001;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			x = i;
			y = b;

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);

		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
}

function napC(wekx,weky) {
	var odlg = -1.1;
	var ar = -5.1, la = 0, krok = 0.001, a = 52;
	var szybkosc = 2;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar<odlg)
		  	{
		  		rysuj(ar);
		  	}
		  	else
		  	{

		  	}
		  }, szybkosc);
	}
	
	function rysuj(g)
	{
		for (var i = la; i < g; i=i+krok) {

		var x = a * Math.cos(i);
		var y = a * Math.sin(i);
		x = x + wekx;
		y = y + weky;
		can.fillRect(x,canvasn.height-y,1,1);
		}
		la = ar;
		ar=ar+0.01;
		manager();
	}
}

function napY(wekx,weky) {
	var odlg = [40,40];
	var a = 25;
	var ar1 = -40, la1 = 0, krok1 = 0.001;
	var ar2 = 0, la2 = 0, krok2 = 0.001;
	var szybkosc = 1;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x = i;
			var y = 1/a*i*i;
			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la1 = ar1;
		ar1=ar1+0.5;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			x = 0;
			y = -i;

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);

		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
}

function napCi(wekx,weky) {
	var odlg = [-1.1,10];
	var ar1 = -5.1, la1 = 0, krok1 = 0.001, a1 = 52;
	var ar2 = 0, la2 = 0, krok2 = 0.001;
	var szybkosc = 1;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

		var x = a1 * Math.cos(i);
		var y = a1 * Math.sin(i);
		x = x + wekx;
		y = y + weky;
		can.fillRect(x,canvasn.height-y,1,1);
		}
		la1 = ar1;
		ar1=ar1+0.01;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			var x = 2 * i - 2;
			var y = (2 * i) ;
			x = x + wekx;
			y = y + weky + a1 + 8;
			can.fillRect(x,canvasn.height-y,1,1);

		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
}

function napM(wekx,weky) {
	var odlg = [100,25,25,100];
	var ar1 = 1, la1 = 0, krok1 = 0.001;
	var ar2 = 0, la2 = odlg[0], krok2 = 0.001;
	var ar3 = 0, la3 = odlg[0], krok3 = 0.001;
	var ar4 = 1, la4 = 0, krok4 = 0.001;
	var szybkosc = 2;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		  	else if(ar3<odlg[2])
		  	{
		  		rysuj3(ar3);
		  	}
		  	else if(ar4<odlg[3])
		  	{
		  		rysuj4(ar4);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x = 0;
			var y = i;
			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la1 = ar1;
		ar1=ar1+0.5;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			var x = 2 * i;
			var y = 2 * i;
			x = x + wekx + odlg[1] * 2;
			y = y + weky + odlg[1] * 2;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
	function rysuj3(g)
	{
		for (var i = la3; i < g; i=i+krok3) {

			var x = -2 * i;
			var y = 2 * i;
			x = x + wekx + odlg[1] * 2;
			y = y + weky + odlg[1] * 2;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la3 = ar3;
		ar3=ar3+0.5;
		manager();
	}
	function rysuj4(g)
	{
		for (var i = la4; i < g; i=i+krok4) {

			var x = 0;
			var y = i;
			x = x + wekx + odlg[0] - 2;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la4 = ar4;
		ar4=ar4+0.5;
		manager();
	}
}

function napT(wekx,weky) {
	var odlg = [100,100];
	var ar1 = 1, la1 = 0, krok1 = 0.001;
	var ar2 = 0, la2 = 0, krok2 = 0.001;
	var szybkosc = 2;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x = 0;
			var y = i;
			x = x + wekx + odlg[0]/2;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la1 = ar1;
		ar1=ar1+0.5;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			x = i;
			y = odlg[0];

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);

		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
}

function napE(wekx,weky) {
	var odlg = [100,50,50,50];
	var ar1 = 1, la1 = 0, krok1 = 0.001;
	var ar2 = 0, la2 = odlg[0], krok2 = 0.001;
	var ar3 = 0, la3 = odlg[0], krok3 = 0.001;
	var ar4 = 1, la4 = 0, krok4 = 0.001;
	var szybkosc = 2;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		  	else if(ar3<odlg[2])
		  	{
		  		rysuj3(ar3);
		  	}
		  	else if(ar4<odlg[3])
		  	{
		  		rysuj4(ar4);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x = 0;
			var y = i;
			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la1 = ar1;
		ar1=ar1+0.5;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			x = i;
			y = odlg[0];

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
	function rysuj3(g)
	{
		for (var i = la3; i < g; i=i+krok3) {

			x = i;
			y = odlg[0]/2;

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la3 = ar3;
		ar3=ar3+0.5;
		manager();
	}
	function rysuj4(g)
	{
		for (var i = la4; i < g; i=i+krok4) {

			x = i;
			y = 0;

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la4 = ar4;
		ar4=ar4+0.5;
		manager();
	}
}

function napK(wekx,weky) {
	var odlg = [100,50,25];
	var ar1 = 1, la1 = 0, krok1 = 0.001;
	var ar2 = 1, la2 = 0, krok2 = 0.001;
	var ar3 = 1, la3 = 0, krok3 = 0.001;
	var szybkosc = 2;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		  	else if(ar3<odlg[2])
		  	{
		  		rysuj3(ar3);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x = 0;
			var y = i;
			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la1 = ar1;
		ar1=ar1+0.5;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			var x = i+2;
			var y = i;
			x = x + wekx;
			y = y + weky + odlg[0]/2;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
	function rysuj3(g)
	{
		for (var i = la3; i < g; i=i+krok3) {

			var x = -2 * i;
			var y = 2 * i;
			x = x + wekx + odlg[0]/2;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la3 = ar3;
		ar3=ar3+0.5;
		manager();
	}
}

function napEi(wekx,weky) {
	var a = 40;
	var b = 1;
	var c = 60;
	var odlg = [100,50,50,50,5];
	var ar1 = 1, la1 = 0, krok1 = 0.001;
	var ar2 = 0, la2 = odlg[0], krok2 = 0.001;
	var ar3 = 0, la3 = odlg[0], krok3 = 0.001;
	var ar4 = 1, la4 = 0, krok4 = 0.001;
	var ar5 = 0, la5 = 0, krok5 = 0.001;
	var szybkosc = 2;
	manager();

	function manager() {
		setTimeout(
		  function() 
		  {
		  	if(ar1<odlg[0])
		  	{
		  		rysuj1(ar1);
		  	}
		  	else if(ar2<odlg[1])
		  	{
		  		rysuj2(ar2);
		  	}
		  	else if(ar3<odlg[2])
		  	{
		  		rysuj3(ar3);
		  	}
		  	else if(ar4<odlg[3])
		  	{
		  		rysuj4(ar4);
		  	}
		  	else if(ar5<odlg[4])
		  	{
		  		rysuj5(ar5);
		  	}
		    
		  }, szybkosc);
	}
	
	function rysuj1(g)
	{
		for (var i = la1; i < g; i=i+krok1) {

			var x = 0;
			var y = i;
			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la1 = ar1;
		ar1=ar1+0.5;
		manager();
	}
	function rysuj2(g)
	{
		for (var i = la2; i < g; i=i+krok2) {

			x = i;
			y = odlg[0];

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la2 = ar2;
		ar2=ar2+0.5;
		manager();
	}
	function rysuj3(g)
	{
		for (var i = la3; i < g; i=i+krok3) {

			x = i;
			y = odlg[0]/2;

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la3 = ar3;
		ar3=ar3+0.5;
		manager();
	}
	function rysuj4(g)
	{
		for (var i = la4; i < g; i=i+krok4) {

			x = i;
			y = 0;

			x = x + wekx;
			y = y + weky;
			can.fillRect(x,canvasn.height-y,2,2);
		}
		la4 = ar4;
		ar4=ar4+0.5;
		manager();
	}

	function rysuj5(g)
	{
		for (var i = la5; i < g; i=i+krok5) {

			var x = 2 * i;
			var y = 2 * i;

			x = x + wekx + odlg[0]/2 - odlg[4]*2;
			y = y + weky - odlg[4]*2;
			can.fillRect(x,canvasn.height-y,1,1);
		}
		la5 = ar5;
		ar5=ar5+0.5;
		manager();
	}
}