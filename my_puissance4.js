$.fn.my_puissance4 = function (options){
	var settings= $.extend({
		backgroundColor: "DarkBlue",
		borderRadius: "100%",
		columns: "7",
		rows: "6",
	});

	return this.each(function()){
		var parent = $( this ).parent();
		var map = 
		$('table').css({
		backgroundColor: settings.backgroundColor,
	});
		$('td').css({
		borderRadius: settings.borderRadius,
		backgroundColor: "White",
	});
	}
	
}