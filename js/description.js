function loadMenu(){
	$('.football-field').html('');
	$('.football-field').css('background-image','linear-gradient(gold,gold)');
	
	$('.football-field').append('<div class="iHave-title">Jesli zlapiesz</div>');
	$('.football-field').append('<div class="iHave"></div>');
	$('.iHave').append('<div class="iHave-img-1"></div>');
	$('.iHave-img-1').append('<img src="img/set-7/ball-1.png">');
	$('.iHave-img-1').append('<img src="img/set-7/ball-2.png">');
	$('.iHave-img-1').append('<img src="img/set-7/ball-3.png">');
	$('.iHave').append('<div class="iHave-img-2"></div>');
	$('.iHave-img-2').append('<img src="img/set-7/ball-5.png">');
	$('.iHave').append('<div class="iHave-img-3"></div>');
	$('.iHave-img-3').append('<img src="img/set-7/ball-7.png">');
	$('.iHave').append('<div class="iHave-img-4"></div>');
	$('.iHave-img-4').append('<img src="img/set-7/ball-4.png">');	
	$('.iHave-img-4').append('<img src="img/set-7/ball-6.png">');
	
	$('.football-field').append('<div class="iHave-pkt"></div>');
	$('.iHave-pkt').append('<div class="iHave-pkt-1">+10</div>');
	$('.iHave-pkt').append('<div class="iHave-pkt-2">+30</div>');
	$('.iHave-pkt').append('<div class="iHave-pkt-3">+50</div>');
	$('.iHave-pkt').append('<div class="iHave-pkt-4">-1 X <img src="img/life.png"></div>');

	$('.football-field').append('<div class="iDoNotHave-title">Jesli nie zlapiesz</div>');
	$('.football-field').append('<div class="iDoNotHave"></div>');
	$('.iDoNotHave').append('<div class="iDoNotHave-img-1"><img src="img/set-7/ball-1.png"><img src="img/set-7/ball-2.png"><img src="img/set-7/ball-3.png"></div>');
	$('.iDoNotHave').append('<div class="iDoNotHave-pkt-1">-1 X <img src="img/life.png"></div>');






	$('.football-field').append('<div class="back">wstecz</div>');


	$('.back').click(function(){
		$('.football-field').html('');
		$('.football-field').css('background-image','url("img/football-field/field.png")');
		
		$('.football-field').append('<div class="menu"></div>');
		$('.menu').append('<div class="menu-option" id="play"></div>');
		$('.menu-option:eq(0)').append('<div class="menu-option-text">Graj</div>');
		$('.menu-option:eq(0)').append('<div class="menu-option-img"></div>');
		$('.menu-option-img:eq(0)').append('<img src="img/set-6/ball-1.png" height="70">');		

		$('.menu').append('<div class="menu-option" id="description"></div>');
		$('.menu-option:eq(1)').append('<div class="menu-option-text">Opis</div>');
		$('.menu-option:eq(1)').append('<div class="menu-option-img"></div>');
		$('.menu-option-img:eq(1)').append('<img src="img/set-6/ball-7.png" height="70">');		
		
		$('.menu').append('<div class="menu-option" id="option"></div>');
		$('.menu-option:eq(2)').append('<div class="menu-option-text">Opcje</div>');
		$('.menu-option:eq(2)').append('<div class="menu-option-img"></div>');
		$('.menu-option-img:eq(2)').append('<img src="img/set-6/ball-4.png" height="70">');	
		/*
		odswiezam strone dlatego ze po zaladowaniu
		powyzszego html, przestaja dzialac mi onclicki
		*/	
		location.reload();
		
	});	
} 

//document.body.style.zoom = "100%";
$('#description').on('click',loadMenu);