function move(e){
	//id elementu w którym znajdują się rękawice
	var idGloves = parseInt($('div[class*="column"] img.gloves').parent().attr('id'));
	//rękawice
	var img = '<img class="gloves" src="img/gloves/gloves.png">';
	
	//move right
	if((idGloves == 1)&&(e == 39)){
		$('img.gloves').remove();
		idGloves++;
		$('div#'+idGloves).append(img);	
	}
	else if((idGloves == 2)&&(e == 39)){
		$('img.gloves').remove();
		idGloves++;
		$('div#'+idGloves).append(img);	
	}
	else if((idGloves == 3)&&(e == 39)){
		$('img.gloves').remove();
		idGloves++;
		$('div#'+idGloves).append(img);	
	}
	else if((idGloves == 4)&&(e == 39)){
		$('img.gloves').remove();
		idGloves++;
		$('div#'+idGloves).append(img);	
	}
	//move left
	else if((idGloves == 5)&&(e == 37)){
		$('img.gloves').remove();
		idGloves--;
		$('div#'+idGloves).append(img);
	}
	else if((idGloves == 4)&&(e == 37)){
		$('img.gloves').remove();
		idGloves--;
		$('div#'+idGloves).append(img);	
	}
	else if((idGloves == 3)&&(e == 37)){
		$('img.gloves').remove();
		idGloves--;
		$('div#'+idGloves).append(img);	
	}
	else if((idGloves == 2)&&(e == 37)){
		$('img.gloves').remove();
		idGloves--;
		$('div#'+idGloves).append(img);	
	}
}

$('#play').on('click',function(){
	$(document).on('keydown',function(e){
		if((e.keyCode == 37)||(e.keyCode == 39)){
			move(e.keyCode);
		}
	});	
});





