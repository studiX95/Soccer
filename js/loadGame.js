$('#play').on('click',function(){

	$('.football-field').html(''); //usuwam zawartosc
	//dodaje nowa
	$('.football-field').append('<div class="score">Score 0</div>');
	$('.football-field').append('<div class="heart">10 X <img src="img/life.png"></div>');
	$('.football-field').append('<div class="column-1" id="1"></div>');
	$('.football-field').append('<div class="column-2" id="2"></div>');
	$('.football-field').append('<div class="column-3" id="3"><img class="gloves" src="img/gloves/gloves.png"></div>');
	$('.football-field').append('<div class="column-4" id="4"></div>');
	$('.football-field').append('<div class="column-5" id="5"></div>');
	$('.football-field').append('<div style="clear: both;"></div>');

	//generuje czas
	function randTime(x,y){
		var time = Math.floor(Math.random()*x+y);
		return time;
	}

	var level = 0;
	var x = 2000;
	var y = 501;

	var set; //folder z którego zostana pobrane obrazy
	var z = 3; // ilosc elementow w folderze set
	//id lecacej piłki
	var idBall = 100;
	function randBall(){
		/*
			w zależności od poziomu gry ładuje obrazy
			z innych katalogów set-n
		*/
		if(level < 10){
			set = 1;
			z = 3;
		}
		else if((level >= 10)&&(level < 35)){
			set = 2;
			z = 4;
			time = 2200;
		}
		else if((level >= 35)&&(level < 70)){
			set = 3;
			z = 5;
		}
		else if((level >= 70)&&(level < 95)){
			set = 4;
			z = 6;
		}
		else if((level >= 95)&&(level < 120)){
			set =5;
			z = 7;
		}
		else if((level >= 120)&&(level < 150)){
			set =6;
			z = 8;
		}
		else if(level >=150){
			set = 7;
			z = 9;
		}

		//losuje .column-n dla piłki
		var field = Math.floor(Math.random()*5+1);
		//losuje rodzaj piłki
		var ball = Math.floor(Math.random()*z+1);
		//wylosowana piłka
		var img = '<img src="img/set-'+set+'/ball-'+ball+'.png" class="ball" id=\"'+idBall+'\">';
		//pozycja piłki w .field-
		var positionBall = '.column-'+field;
		$(positionBall).append(img);
		//animacja lotu piłki
		$('img.ball').animate({
			top: '600px'
		},2500,'linear',function(){
			$(this).remove();
		});
		//nowa piłka
		idBall++;
		var countBall = (100 - idBall)*(-1);
		if((countBall % 10 == 0)&&(x > 500)){
			x = Math.floor(x - (10/100) * x);
		}
		else if((countBall % 5 == 0)&&(x < 500)&&(y > 300)){
			y = Math.floor(y - (5/100) * y);
		}
		level++;
		//console.log(countBall+"| x = "+ x+" | y = "+y+" | s ="+set+" level = "+level);
		//wywołanie randBall() za każdym razem innym czasem
		setTimeout(randBall,randTime(x,y));
	}
	randBall();
	
});

	




