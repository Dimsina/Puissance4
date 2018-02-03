$.fn.my_puissance4 = function(options) {
	var settings = $.extend({
		background: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)",
		borderRadius: "100%",
		columns: "6",
		rows: "7",
		width: "60px",
		height: "60px",
		border: "2px solid Black",
		buttons: ['reset', 'second', 'remove'],
		Player1: "black",
		Player2: "Grey"
	}, options);

	return this.each(function() {
		var parent = $(this).parent();
			
			/*Création du tableau qui contiendra mes coordonnées 'x' et 'y' par la suite*/
		var board = new Array(0);
		for (var l = 0; l < settings.columns; l++) {
			board[l] = new Array();
			for (var lx = 0; lx < settings.rows; lx++) {
				board[l][lx] = 0;
			}
		}

		$('div').prepend('<div class="first"><button type="button"><a href="javascript:window.location.reload()"><i class="fa fa-undo fa-5x" aria-hidden="true"></i></a></button></div>');

		///////////////// Creation de la grille	////////////////

		$('table').css({
			"background": settings.background,
			"margin": "0 auto",
			"padding": "1%",
			"border": settings.border,

		});

		if ($.inArray('columns', settings['columns']) != 0) {
			for (i = 1; i <= settings.columns; i++) {
				$('table').append('<tr class="' + i + '"></tr>');
				if ($.inArray('rows', settings['rows']) != 0) {
					for (u = 1; u <= settings.rows; u++) {
						$('table').append('<td class="' + i + '-' + u + '"></td>');
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

		/////////////////* Création du jeton + compteur au click*////////////////

		var currentTurn = 0;
		$('td').slice(0).val("true");
		$('td').click(function() {

			if ($(this).val() == "true") {

				/*recherche de position pour le jeton*/

				var index = $(this).index(); /*numéro des cases par lignes*/

				var split = $(this)[0].className.split(' '); /*récupération des coordonées des cases*/

				var coord = split[0].split('-');
				var col = coord[0];
				var line = coord[1];
				board[col][line];

				/////////// Dynamisme jeu //////////
				for (var i = settings.columns; i >= 1; i--) {
					if (!$('.' + i + '-' + line).hasClass("chip")) {

						if (currentTurn % 2 == 0) {
							board[i - 1][line - 1] = 1;
							var one = $("." + i + "-" + line).addClass('chip').css({
								backgroundColor: settings.Player1,
								"position": "relative",
								"opacity": "0.35",
								"bottom": "400px"
							});
						} else {
							board[i - 1][line - 1] = 2;
							var two = $("." + i + "-" + line).addClass('chip').css({
								backgroundColor: settings.Player2,
								"position": "relative",
								"opacity": "0.35",
								"bottom": "400px"
							});
						}
						currentTurn++;
						/* création de l'animation */
						$(one).animate({
							top: '0px',
							opacity: 1
						});
						$(two).animate({
							top: '0px',
							opacity: 1
						});
						break;
					};
				};

				///////////////////// Vérification horizontale //////////////////////////
				var currentPlayer1 = 0;
				var currentPlayer2 = 0;

				for (var k = 0; k <= settings.rows; k++) {
					if (board[i - 1][k] == 1) { /*on commence a -1 parce que mon tableau commence à 1*/
						currentPlayer1++;
						if (currentPlayer1 == 4) {
							$.alert({
								animation: 'rotate',
								title: 'Gagnant en ligne',
								content: "Joueur 1 a gagné!!",
								type: 'green',
								typeAnimated: true
							});
						}
					} else {
						currentPlayer1 = 0;
					}
					if (board[i - 1][k] == 2) {
						currentPlayer2++;
						
						if (currentPlayer2 == 4) {
							$.alert({
								animation: 'rotate',
								title: 'Gagnant en ligne',
								content: "Joueur 2 a gagné",
								type: 'green',
								typeAnimated: true
							});
						}
					} else {
						currentPlayer2 = 0;
					}
				}
				////////////////////// Vérification verticale /////////////////////////////						
				var currentPlayer1 = 0;
				var currentPlayer2 = 0;

				for (var p = 0; p < settings.columns; p++) {
					if (board[p][line - 1] == 1) {
						currentPlayer1++;
						if (currentPlayer1 == 4) {
							$.alert({
								animation: 'rotate',
								title: 'Gagnant par la verticale',
								content: "Joueur 1 a gagné",
								type: 'green',
								typeAnimated: true

							});
						}
					} else {
						currentPlayer1 = 0;
					}

					if (board[p][line - 1] == 2) {
						currentPlayer2++;
						if (currentPlayer2 == 4) {
							$.alert({
								animation: 'rotate',
								title: 'Gagnant en ligne',
								content: "Joueur 2 a gagné",
								type: 'green',
								typeAnimated: true
							});
						}
					} else {
						currentPlayer2 = 0;
					}

				}
			}
		})
//////////////////////* Annuler dernier coup*////////////////////

		if ($.inArray('remove', settings['buttons']) != -1) {
			parent.prepend('<button type="button" class="remove"><i class="fa fa-eraser fa-4x" aria-hidden="true"></i></button>');
		/*	$('div').find('first').click(function() {
				$(document).ready(function(){
					$(board).one("click", function(){
						$(this).remove();
						
					});
				});
			})*/
		}
	});
};