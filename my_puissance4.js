$.fn.my_puissance4 = function(options){
	var settings = $.extend({
		background: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
		borderRadius: "100%",
		columns: "6",
		rows: "7",
		width : "60px",
		height : "60px",
		border: "2px solid Black",
		buttons: ['columns', 'rows', 'color', 'second'],
		Player1 : "black",
		Player2 : "DarkRed"
	} , options );

	return this.each(function(){
		var parent = $(this).parent();

		if ($.inArray('second',settings['buttons'])!= -1){
				parent.prepend('<label for="Joueur2"> Joueur 2 </label><input type="color" class="color">');
				$('div').find('.first').click(function(){
					document.execCommand('forecolor', false, $('.color').val());
				});
			};

		if ($.inArray('color', settings['buttons'])!= -1){
			$('div').prepend('<div class="first"><label for="Joueur1">Joueur 1 </label><input type="color" class="color"></div>');
			
			$('div').find('.first').click(function(){
				document.execCommand('forecolor', false, $('.color').val());
			});
		};

				
				if ($.inArray('columns', settings['buttons'])!= -1){
					parent.prepend('<label for="columns"> Nombre de colonnes <input class="columns" type="number" name="columns" min="5" max="15"></label>');
					$('div').find('.first').change(function(){
						document.execCommand('columns', false, $('td').val());
					});
				};
				if ($.inArray('rows', settings['buttons'])!= -1){
					parent.prepend('<label for="rows"> Nombre de ligne <input class="rows" type="number" name="rows" min="5" max="15"></label');
					$('div').find('.first').change(function(){
						document.execCommand('rows', false, $('tr').val());
					})
				};	

				$('table').css({
					"background": settings.background,
					"margin": "0 auto",
					"padding": "1%",
					"border": settings.border,

				});
				/*création de la grille*/
				if ($.inArray('columns', settings['columns']) != 0){
					for (i = 1; i<= settings.columns; i++){
						$('table').append('<tr class="'+i+'"></tr>');
						if ($.inArray('rows',settings['rows']) != 0){
							for(u = 1; u <= settings.rows; u++){
								$('table').append('<td class="'+i+'-'+u+'"></td>');
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

				/*création du jeton + compteur */
				var currentTurn = 0;
				$('td').slice(0).val("true");
				
				$('td').click(function(){
					if ($(this).val() == "true"){
							/*recherche de position pour le jeton*/
					
						var x = $(this).offset(); /*coordonnées des cases, utile pour l'animation*/
						var index = $(this).index(); /*numéro des cases par lignes*/
						var split = $(this)[0].className.split(' '); /*récupération des coordonées des cases*/
						var coord = split[0].split('-');
						var col = coord[1];
						for ( var i = settings.columns; i >= 1; i--){
							//console.log($('.' + i + '-' + col));
							if (!$('.' + i + '-' + col).hasClass("chip")) {
								console.log($("." + i + "-" + col));
								if (currentTurn%2 == 0){
									$("." + i + "-" + col).addClass('chip').css({
										backgroundColor : settings.Player1
									});
								}
								else {
									$("." + i + "-" + col).addClass('chip').css({
										backgroundColor : settings.Player2
									});
								}
								currentTurn ++;
								break;
							};

						};
						
					}
				});
				/*	
					var elem = $("myAnimation");	
					var id = setInterval(frame, 5);
					function frame() {
					if (x == 350) {
						 clearInterval(id);
					}else {
						x++; 
						elem.style.top = x + 'px'; 
		  
						}
					  }
					  */
			});
	
};
