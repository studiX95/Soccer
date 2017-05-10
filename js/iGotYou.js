$('#play').on('click',function(){

	var score = 0;
	var heart = 10;
	$('div.score').html('Score '+score);
	$('div.heart').html(heart+' X '+'<img src="img/life.png">');
	//id pilki pierwszej
	var idBall = 100;
	function iGotYou(){
		//JESI GRACZ PRZEGRA
		if(heart == 0){
			$('.football-field').html('');
			$('.football-field').css('background-image','linear-gradient(gold,gold)');
			$('.football-field').append('<div class="result">Wynik : '+score+'</div>');
			//musze to ogarnac lepiej
			$('.football-field').append('<div class="end-game-menu">Nacisnij F5 aby przejsc do Menu gry.</div>');
		}


		var selektor = 'img#'+idBall;
		//id .column-n w którym znajduje się piłka
		var positionBall = $(selektor).parent().attr('id');
		//id .column-n w którym znajdują rękawice
		var positionGloves = $('img.gloves').parent().attr('id');
		//wartośc top spadającej piłki
		var positionTopBall = $(selektor).attr('style');
		
		//z atrybutu style img pobieram wartość właściwości top
		var re = new RegExp("[0-9][0-9][0-9]\.?[0-9]?");
		positionTopBall = String(re.exec(positionTopBall));
		//do wyniku dkleja się "p" nwm dlaczego więc usuwam ostatni znak
		if(positionTopBall.length == 4){
			positionTopBall = positionTopBall.substring(0,3);
		}

		//wartość atrybutu src piłki
		var srcBall = String($(selektor).attr('src'));

		var position = positionGloves - positionBall;
		//jeżeli rękawice i piłka są w tej samej kolumnie... (position = 0)
		if(position == 0){
			//...sprawdzam wartośc przesunięcia top 
			if((positionTopBall >= 500)&&(positionTopBall < 521)){

				if(/ball-1.png/.test(srcBall)){
					score+=10;
					//boxShadowGreen();
				}
				else if(/ball-2.png/.test(srcBall)){
					score+=10;
					//boxShadowGreen();
				}
				else if(/ball-3.png/.test(srcBall)){
					score+=10;
					//boxShadowGreen();
				}
				else if(/ball-4.png/.test(srcBall)){
					if(heart>0)	
						heart-=1;
					//boxShadowRed();
				}
				else if(/ball-5.png/.test(srcBall)){
					score+=30;
					//boxShadowGreen();
				}
				else if(/ball-6.png/.test(srcBall)){
					if(heart>0)
						heart-=1;
					//boxShadowRed();
				}
				else if(/ball-7.png/.test(srcBall)){
					score+=50;
					//boxShadowGreen();
				}	
				else if(/ball-8.png/.test(srcBall)){
					if(heart>0)
						heart-=1;
				}
				else if(/ball-9.png/.test(srcBall)){
					if(heart>0)
						heart-=1;
				}
				
				//łąpię piłkę i ją usuwam
				$(selektor).remove();
				$('div.score').html('Score '+score);
				$('div.heart').html(heart+' X '+'<img src="img/life.png">');
				idBall++;
			}
		}

		if(positionTopBall >= 521){
			
			if(/ball-1.png/.test(srcBall)){
				if(heart>0)
					heart--;
				//boxShadowRed();
			}
			else if(/ball-2.png/.test(srcBall)){
				if(heart>0)
					heart-=1;
				//boxShadowRed();
			}
			else if(/ball-3.png/.test(srcBall)){
				if(heart>0)
					heart-=1;
				//boxShadowRed();
			}

			idBall++;
			$('div.heart').html(heart+' X '+'<img src="img/life.png">');
		}
		setTimeout(iGotYou);
	} 

	iGotYou();

});


