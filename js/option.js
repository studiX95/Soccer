function loadMenu(){

	var zoom = 0;
	$('.football-field').html('');
	$('.football-field').css('background-image','linear-gradient(gold,gold)');
	$('.football-field').append('<div class="zoom"></div>');
	$('.zoom').append('<div class="plus"></div>');
	$('.plus').append('<div class="plus-p">+</div>');
	$('.zoom').append('<div class="zoom-z">100%</div>');
	$('.football-field').append('<div class="back">wstecz</div>');

	$('.plus-p').click(function(){
		zoom++;
		switch(zoom){
			case 0:
				document.body.style.zoom = "100%";
				$('.zoom-z').text('100%');
				break;
			case 1:
				document.body.style.zoom = "110%";
				$('.zoom-z').text('110%');
				break;
			case 2:
				document.body.style.zoom = "125%";
				$('.zoom-z').text('125%');
				break;
			case 3:
				document.body.style.zoom = "150%";
				$('.zoom-z').text('150%');
				break;
			case 4:
				document.body.style.zoom = "175%";
				$('.zoom-z').text('175%');
				break;
			case 5:
				document.body.style.zoom = "200%";
				$('.zoom-z').text('200%');
				break;

		}	
	});

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

$('#option').on('click',loadMenu);