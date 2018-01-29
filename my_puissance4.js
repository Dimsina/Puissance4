$.fn.my_puissance4 = function(options){
	var settings= $.extend({
		background: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
		borderRadius: "100%",
		columns: "6",
		rows: "7",
		width : "60px",
		height : "60px",
		border: "2px solid Black",
		buttons: ['columns', 'rows', 'first', 'second'],
		Player1 : {"background-color": "black"},
		Player2 : {"background-color": "DarkRed"},
	} , options );

	return this.each(function(){

        if ($.inArray('first', settings['buttons'])!= -1){
        $('div').prepend('<div class="first"><label for="Joueur1">Joueur 1</label><input type="color" class="color"></div>');
        $('div').find('.first').click(function(){
        	document.execCommand('forecolor', false, $('.first').val());
        });};

        if ($.inArray('second',settings['buttons'])!= -1){
        $('div').append('<div class="second"><label for="Joueur2">Joueur 2</label><input type="color" class="color"></div>');
        $('div').find('.second').click(function(){
        	document.execCommand('forecolor', false, $('.second').val());
        });};

		$('table').css({
		"background": settings.background,
		"margin": "0 auto",
		"padding": "1%",
		"border": settings.border,
		
	});

		if ($.inArray('columns', settings['columns']) != 0){
			for (i = 1; i<= settings.columns; i++){
				$('table').append('<tr></tr>');
				if ($.inArray('rows',settings['rows']) != 0){
					for(u = 1; u <= settings.rows; u++){
						$('table').append('<td></td>');
					}
				}
				}
			};
			
		$('tr').css({
			columns: settings.columns,	
	});

		$('td').css({
			"border-radius": settings.borderRadius,
			"background-color": "White",
			"rows": settings.rows,
			"width": settings.width,
			"height": settings.height,
			"border": settings.border,		
	});	

		$('.first').css({
			"border-radius": settings.borderRadius,
			"background-color": settings.backgroundColor,
		});

		$('.second').css({
			"border-radius": settings.borderRadius,
			
		});

		var Player1 = $('td').click(function(){
			$('td').change(function(){
				$(this).css('Player1: {"background-color": "DarkRed"}');
			})
		});
	})
};
	