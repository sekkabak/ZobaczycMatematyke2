;(function () {
	"use strict";
	var naphidden = null;

	// MagnificPopup
	var magnifPopup = function() {
		$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	};

	// Smooth Scroll Top
	var sScrollTop = function () {
		$(window).scroll(function(){
			if ($(window).scrollTop() > 100 ) {
				$('.gotop').show();
			} else {
				$('.gotop').hide();
			}
		});
		$('.gotop').click(function(event){

		    $('html, body').animate({
		        scrollTop: 0
		    }, 500);

		    event.preventDefault();
		    return false;
		});
	};

	var checkSize = function () {
		if(naphidden == null)
		{
			if(window.innerWidth <= 1024)
			{
				naphidden = true;
				hideNap();	
			}
		}
		else
		{
			if(window.innerWidth < 1024 && naphidden == false)
			{
				naphidden = true;
				hideNap();			
			}
			else if(naphidden == true && window.innerWidth >= 1024 )
			{
				naphidden = false;
				showNap();
			}
		}
	};

	var createTable = function(value)
	{
		var wk = new Array(value);
		for (var i = 0; i < value; i++) {
		  wk[i] = new Array(2);
		}

		return wk;
	};

	var hideNap = function () {
		$("#napis_button_start").prop('disabled', true);
		$("#napis-err-dps").show();
		$("#napis").hide();
	};

	var showNap = function () {
		$("#napis_button_start").prop('disabled', false);
		$("#napis-err-dps").hide();
		$("#napis").show();	
	};



	var resizeLogo = function (){
		var x = window.innerWidth;
		switch(true)
		{
			case (x <= 576):
				$("#logo a img").attr("width","500");
				$("#logo a img").attr("height","200");
			break;
			case (x <= 768):
				$("#logo a img").attr("width","570");
				$("#logo a img").attr("height","250");
			break;
			case (x <= 992):
				$("#logo a img").attr("width","750");
				$("#logo a img").attr("height","300");
			break;
			case (x <= 1200):
				$("#logo a img").attr("width","900");
				$("#logo a img").attr("height","350");
			break;
			case (x > 1200):
				$("#logo a img").attr("width","900");
				$("#logo a img").attr("height","350");
			break;
		}
	};

	

	$(window).resize(function() {
		resizeLogo();
		checkSize();
	});
	

	var bezier = function(){
		var wt;
		var bezierca = document.getElementById('bezier_canvas');
		var bctx = bezierca.getContext("2d");

		var drawBezier = function(wt)
		{
			bctx.fillStyle= "rgb(0,0,0)";
			for (var i = 0; i < 1; i= i + 0.001) {

				var t = i * 1;

				var x=Math.pow(1-t,3)*wt[0][0] + 3 * t * (1-t) * (1-t) * wt[1][0] + 3 * t * t * (1-t) * wt[2][0]  + Math.pow(t,3) * wt[3][0];
				var y=Math.pow(1-t,3)*wt[0][1] + 3 * t * (1-t) * (1-t) * wt[1][1] + 3 * t * t * (1-t) * wt[2][1]  + Math.pow(t,3) * wt[3][1];

				bctx.fillRect(x,500-y,1,1);

			}
		}

		$("#bezier_canvas").click(function(e) {

			if (typeof wt == 'undefined') {
		    	wt = createTable(4);
			}

		    var posX = $(this).offset().left, posY = $(this).offset().top;
		    var kx = e.pageX - posX;
			var ky = e.pageY - posY;
			
			bctx.fillStyle= "rgb(255,0,0)";
			var x = kx;
			var y = Math.abs(ky - 500);
			if(!wt[0][0]&&!wt[0][1])
		    {
		    	bctx.fillRect(kx-1,ky-1,3,3);
		    	wt[0][0] = x;
		    	wt[0][1] = y;
		    }
		    else if(!wt[1][0]&&!wt[1][1])
		    {
		    	bctx.fillRect(kx-1,ky-1,3,3);
		    	wt[1][0] = x;
		    	wt[1][1] = y;
		    }
		    else if(!wt[2][0]&&!wt[2][1])
		    {
		    	bctx.fillRect(kx-1,ky-1,3,3);
				wt[2][0] = x;
		    	wt[2][1] = y;
		    }
		    else if(!wt[3][0]&&!wt[3][1])
		    {
		    	bctx.fillRect(kx-1,ky-1,3,3);
		    	wt[3][0] = x;
		    	wt[3][1] = y;
				drawBezier(wt);
		    }
		    else
		    {

		    }
		});

		$('#bezier_clear').click(function(){
			var bezierca = document.getElementById('bezier_canvas');
			var bctx = bezierca.getContext("2d");
			bctx.clearRect(0, 0, bezierca.width, bezierca.height);
			wt = undefined;
		});
	};

	var krzywa1 = function(){
		var wk;
		var krzywaa = document.getElementById('krzywa1_canvas');
		var kctx = krzywaa.getContext("2d");

		var drawKrzywa1 = function(wk)
		{
			kctx.fillStyle= "rgb(0,0,0)";

	        var we1X = wk[0][0];
	        var we1Y = wk[0][1];

	        var we2X = wk[1][0];
	        var we2Y = wk[1][1];

	        var we3X = wk[2][0];
	        var we3Y = wk[2][1];
	     
	        var wek1x = wk[1][0] - wk[0][0];
	        var wek1y = wk[1][1] - wk[0][1];

	        var wek2x = wk[2][0] - wk[1][0];
	        var wek2y = wk[2][1] - wk[1][1];

	        var t = 0;
	        var b = 500;
	        var x1,y1,x2,y2,kx,ky;
	        for (var i = 0; i < b; i++) {
	            t = t + 0.002;
	            x1 = we1X + t * wek1x;
	            y1 = we1Y + t * wek1y;
	            x2 = we2X + t * wek2x;
	            y2 = we2Y + t * wek2y;
	            kx = x1 + t * t * wek2x;
	            ky = y1 + t * t * wek2y;
	            kctx.fillRect(kx,500-ky,1,1);
	        }
		};


		$("#krzywa1_canvas").click(function(e) {
			if (typeof wk == 'undefined') {
		    	wk = createTable(3);
			}

		    var posX = $(this).offset().left, posY = $(this).offset().top;
		    var kx = e.pageX - posX;
			var ky = e.pageY - posY;
			kctx.fillStyle= "rgb(255,0,0)";
			var x = kx;
			var y = Math.abs(ky - 500);
		    if(!wk[0][0]&&!wk[0][1])
		    {
		        kctx.fillRect(kx-1,ky-1,3,3);
		    	wk[0][0] = x;
		    	wk[0][1] = y;
		    }
		    else if(!wk[1][0]&&!wk[1][1])
		    {
		        kctx.fillRect(kx-1,ky-1,3,3);
		    	wk[1][0] = x;
		    	wk[1][1] = y;
		    }
		    else if(!wk[2][0]&&!wk[2][1])
		    {
		        kctx.fillRect(kx-1,ky-1,3,3);
				wk[2][0] = x;
		    	wk[2][1] = y;
		    	drawKrzywa1(wk);
		    }
		    else
		    {

		    }
		});   

	    $('#krzywa1_clear').click(function(){
			var krzywaa = document.getElementById('krzywa1_canvas');
			var kctx = krzywaa.getContext("2d");
			kctx.clearRect(0, 0, krzywaa.width, krzywaa.height);
			wk = undefined;
		});
	};

	var krzywa2 = function(){
		var wk;
		var krzywaa = document.getElementById('krzywa2_canvas');
		var kctx = krzywaa.getContext("2d");


		var drawKrzywa2 = function(wk)
		{
			kctx.fillStyle= "rgb(0,0,0)";
			var we1X = wk[0][0];
	        var we1Y = wk[0][1];

	        var we2X = wk[1][0];
	        var we2Y = wk[1][1];

	        var we3X = wk[2][0];
	        var we3Y = wk[2][1];

	        var we4X = wk[3][0];
	        var we4Y = wk[3][1];
	     
	        var wek1x = wk[1][0] - wk[0][0];
	        var wek1y = wk[1][1] - wk[0][1];

	        var wek2x = wk[2][0] - wk[1][0];
	        var wek2y = wk[2][1] - wk[1][1];

	        var wek3x = wk[3][0] - wk[2][0];
	        var wek3y = wk[3][1] - wk[2][1];

	        //te pana
	        var xsr = (wk[1][0]+wk[2][0])/2;
	        var ysr = (wk[1][1]+wk[2][1])/2;

	        var xx1 = wk[0][0];
	        var xw  = wk[1][0];   
	        var xx2 = xsr; 
	        var yy1 = wk[0][1];
	        var yw  = wk[1][1];
	        var yy2 = ysr;

	        var v1x = xw-xx1;
	        var v1y = yw-yy1;

	        var v2x = xx2-xw;
	        var v2y = yy2-yw;
	        var b = 500;
	        for (var i = 0; i < b; i++) {

	            var t=0.002*i;
	            var px=xx1+t*v1x;
	           	var py=yy1+t*v1y;
	             
	            var xwyswietl= px+t*t*v2x; 
	            var ywyswietl= py+t*t*v2y;
	            kctx.fillRect(xwyswietl,500-ywyswietl,1,1);

	        }

	        xx1=xsr;
	        xw=wk[2][0];
	        xx2=wk[3][0];
	        yy1=ysr;
	        yw=wk[2][1];
	        yy2=wk[3][1];

	        v1x=xw-xx1;
	        v1y=yw-yy1;

	        v2x=xx2-xw;
	        v2y=yy2-yw;
	        var b = 500;
	        for (var i = 0; i < b; i++) {

	            t=0.002*i;
	            px=xx1+t*v1x;
	            py=yy1+t*v1y;
	             
	            xwyswietl= px+t*t*v2x; 
	            ywyswietl= py+t*t*v2y;
	            kctx.fillRect(xwyswietl,500-ywyswietl,1,1);

	        }
		};

		$("#krzywa2_canvas").click(function(e) {

			if (typeof wk == 'undefined') {
		    	wk = createTable(4);
			}

		    var posX = $(this).offset().left, posY = $(this).offset().top;
		    var kx = e.pageX - posX;
			var ky = e.pageY - posY;
			
			kctx.fillStyle= "rgb(255,0,0)";
			var x = kx;
			var y = Math.abs(ky - 500);
		   if(!wk[0][0]&&!wk[0][1])
		    {
		        kctx.fillRect(kx-1,ky-1,3,3);
		    	wk[0][0] = x;
		    	wk[0][1] = y;
		    }
		    else if(!wk[1][0]&&!wk[1][1])
		    {
		        kctx.fillRect(kx-1,ky-1,3,3);
		    	wk[1][0] = x;
		    	wk[1][1] = y;
		    }
		    else if(!wk[2][0]&&!wk[2][1])
		    {
		        kctx.fillRect(kx-1,ky-1,3,3);
				wk[2][0] = x;
		    	wk[2][1] = y;
		    }
		    else if(!wk[3][0]&&!wk[3][1])
		    {
		        kctx.fillRect(kx-1,ky-1,3,3);
		    	wk[3][0] = x;
		    	wk[3][1] = y;
		    	drawKrzywa2(wk);
		    }
		    else
		    {

		    }
		});

		$('#krzywa2_clear').click(function(){
			var krzywaa = document.getElementById('krzywa2_canvas');
			var kctx = krzywaa.getContext("2d");
			kctx.clearRect(0, 0, krzywaa.width, krzywaa.height);
			wk = undefined;
		});
	};

	var animacje = function(){
		var canvas1 = document.getElementById('animacje');
		var can1 = canvas1.getContext("2d");

		var drawaxis = function() {
			can1.fillStyle = "#000000";
			can1.beginPath();
			can1.moveTo(0,250);
			can1.lineTo(500,250);
			can1.stroke();

			can1.beginPath();
			can1.moveTo(250,0);
			can1.lineTo(250,500);
			can1.stroke();
		};

		var load_data = function(type) {
			var data = [11];
			
			data[0] = $("#"+type+"_kod_x").val();
			data[1] = $("#"+type+"_kod_y").val();
			data[2] = $("#"+type+"_input_color").val();
			data[3] = Number($("#"+type+"_input_time").val());
			data[4] = Number($("#"+type+"_input_dlg").val());
			data[5] = Number($("#"+type+"_input_la").val());
			data[6] = Number($("#"+type+"_input_kr").val());
			data[7] = Number($("#"+type+"_input_dok").val());
			data[8] = Number($("#"+type+"_param_a").val());
			data[9] = Number($("#"+type+"_param_b").val());
			data[10] = Number($("#"+type+"_param_c").val());
			data[11] = Number($("#"+type+"_param_d").val());

			return data;
		};

		var rysKrz = function(data) {
			can1.fillStyle = data[2];
			var a = data[8];
			var b = data[9];
			var c = data[10];
			var d = data[11];
			var temp = data[5];
			pocz();
			function rysuj(g)
			{
				for (var t = data[5]; t < g; t=t+data[6]) {

					var x = eval(data[0]);
					var y = eval(data[1]);

					x = x + 250;
					y = y + 250;
					can1.fillRect(x,500-y,1,1);
				}
				data[5] = temp;
				temp=temp+data[7];
				pocz();
			}

			function pocz()
			{
				setTimeout(
				  function() 
				  {
				  	if(temp<data[4])
				  	{
				  		rysuj(temp);
				  	}
				    
				  }, data[3]);
			}
		};



		$("#anim_select").change(function() {
		  	var select = $("#anim_select").val();

		  	hideall();

			switch(select)
			{
				case "0":
					$('#spirala').show();
				break;
				case "1":
					$('#pascal').show();
				break;
				case "2":
					$('#kardioida').show();
				break;
				case "3":
					$('#diokles').show();
				break;
				case "4":
					$('#motyl').show();
				break;
				case "5":
					$('#lasso').show();
				break;
			}

			function hideall() {
				$('#spirala').hide();
				$('#pascal').hide();
				$('#kardioida').hide();
				$('#diokles').hide();
				$('#motyl').hide();
				$('#lasso').hide();
			}
		});

		$('#anim_button_start').click(function(){
			var select = $("#anim_select").val();

			var data = load_data(select);

			rysKrz(data);
		});

		$('#anim_button_clear').click(function(){
			can1.clearRect(0, 0, canvas1.width, canvas1.height);
			drawaxis();
		});

		drawaxis();
	};

	var szyfr = function(){
		var canvas = document.getElementById('szyfry');
		var ctx = canvas.getContext("2d");
		var alfabet = [" ","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var licz=0;

		var imageLoader = document.getElementById('imageLoader');
		    imageLoader.addEventListener('change', wklejzdj, false);

		function wklejzdj(e){
		    var reader = new FileReader();
		    reader.onload = function(event){
		        var img = new Image();
		        img.onload = function(){
		            canvas.width = img.width;
		            canvas.height = img.height;
		            ctx.drawImage(img,0,0);
		        }
		        img.src = event.target.result;
		    }
		    reader.readAsDataURL(e.target.files[0]);     
		};

		function downloadCanvas(link, canvasId, filename) {
		    link.href = document.getElementById(canvasId).toDataURL();
		    link.download = filename;
		};

		//szybka zmiana koloru
		var kolor = function(kolor) {
			ctx.fillStyle= "rgb("+kolor+")";
		};

		var wstawPunkt = function(x,y) {
			ctx.fillStyle= "rgb(0,255,0)";
			ctx.fillRect(x,y,1,1);
			ctx.fillStyle= "rgb(0,0,0)";
		};

		function zakoduj(zdanie) {
			//początkowe zmienne
			var zl = zdanie.length; //dlugosc zdania

			var losoweodl = [];
			var odleglosc = 5;
			var pktx = 10;
			var pkty = Math.round(Math.random() * canvas.height);

			//rysowanie początkowego punktu
			ctx.fillStyle= "rgb(0,255,0)";
			ctx.fillRect(pktx,pkty,1,1);
			ctx.fillStyle= "rgb(0,0,0)";

			


			//losowanie punktow i rysowanie ich
			for(var i = 0; i < zl; i++)
			{
				var litera = alfabet.indexOf(zdanie[i]);
				litera = litera+1;
				var rand = Math.round(Math.random() * 8 + 1);
				losoweodl[i] = rand + 10 * litera;
				
				//losowanie kierunku łamanej
				var rpol = Math.round(Math.random());

				if(rpol == 0)
				{
					for (var j = 0; j <= canvas.height; j++) {
						
						var wx = pktx + odleglosc;
						var wy = j;

						var wdlg = Math.round(Math.sqrt(Math.pow(pktx - wx,2) + Math.pow(pkty - wy,2)));
						if(wdlg==losoweodl[i]){
							ctx.beginPath();
							ctx.moveTo(pktx,pkty);
							ctx.lineTo(wx,wy);
							ctx.stroke();
							wstawPunkt(pktx,pkty);
							
							pktx = wx;
							pkty = wy;

							break;
						}
					}
				}
				else
				{
					for (var j = canvas.height; j >= 0; j--) {

						var wx = pktx + odleglosc;
						var wy = j;

						var wdlg = Math.round(Math.sqrt(Math.pow(wx - pktx,2) + Math.pow(wy - pkty,2)));
						if(wdlg==losoweodl[i]){

							ctx.beginPath();
							ctx.moveTo(pktx,pkty);
							ctx.lineTo(wx,wy);
							ctx.stroke();
							wstawPunkt(pktx,pkty);

							pktx = wx;
							pkty = wy;
							
							break;
						}
					}
				}
				wstawPunkt(pktx,pkty);
			}
		};

		function odkoduj() {
			var px = [];
			var py = [];
			var l = 0;
			var x = 0;
			var last = 0;
			var krok = 5;

			var doCalculation = function()
			{
			   if (x < canvas.width)
			   {
				   	var percent_complete=Math.round(x/(canvas.width/100));

				   	for (; x < krok + last; x++) {
						for (var y = 0; y < canvas.height; y++) {
							var pixel = ctx.getImageData(x, y, 1, 1);
							var data = pixel.data;
							if(data[0] == 0 && data[1] == 255 && data[2] == 0)
							{
								px[l] = x;
								py[l] = y;
								l++;
							}
						}
					}
					last = last + krok;
			   }
			   else
			   {
			   		percent_complete = 100;
			   		$("#szyfry_output").val(dlugosc(px,py));

			   }

			   return percent_complete;
			}

			function pump()
			{
			   var percent_complete=doCalculation();
			   $("#szyfr_progress").attr("style", "width:"+percent_complete + "%;");
			   $("#szyfr_progress").attr("aria-valuenow", percent_complete);
			   $("#szyfr_progress").html(percent_complete + "%");
			   if (percent_complete<100)
			   {
			      setTimeout(pump, 10);
			   }
			}

			function dlugosc(px,py)
			{
				var output = "";

				for (var i = 0; i < px.length - 1 && i < py.length -1; i++)
				{
					var odl = Math.round(Math.sqrt(Math.pow(px[i] - px[i+1],2) + Math.pow(py[i] - py[i+1],2)));
					output += dopasuj(odl);
				}

				return output;
			}

			function dopasuj(odl) {
				var litera, alf = 0;
				for (var i = 0; i < alfabet.length; i++) {
					if(odl >= (i+1)*10 && odl < (i+2)*10)
					{
						litera = alfabet[i]; 
					}
				}
				return litera;
			}
			pump();
		};


		$("#szyfry_start").click(function(){
			if(licz<=0)
			{
				zakoduj($("#szyfry_input").val());
				licz++;
			}
		});

		$("#szyfry_start_o").click(function(){
			odkoduj();
		});

		$("#szyfry_clear").click(function(){
			licz = 0;
			var nic = "";

			$("#szyfry_input").val(nic);
			$("#szyfry_output").val(nic);

			nic = undefined;

			$("#szyfr_progress").attr("style", "width:0%;");
			$("#szyfr_progress").attr("aria-valuenow", 0);
			$("#szyfr_progress").html("0%");

			ctx.clearRect(0, 0, canvas.width, canvas.height);
		});

		document.getElementById('download_szyfr').addEventListener('click', function() {
		    downloadCanvas(this, 'szyfry', 'szyfr.png');
		}, false);
	};

	var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
	$(document).ready(function() {
		if(stronavariable)
		{
			resizeLogo();
			checkSize();
			magnifPopup();
			sScrollTop();
			if(isChrome)
			{
				$("#animator_err").show();
			}
			
			krzywa1();
			krzywa2();
			bezier();
			animacje();
			szyfr();


			$("#napis-err-fix").click(function(){
				showNap();
			});
		}
		else
		{
			resizeLogo();
			checkSize();
			sScrollTop();
		}
	});
	
	
	$(function(){
		
	});
}());