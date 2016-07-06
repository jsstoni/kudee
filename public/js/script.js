(function($){
	$.fn.extend({
		prehigh : function() {
			return this.each(function( index, element ) {
				var str = $( this ).html();

				/* lenguaje other file */
				var dataLenguaje = $(this).attr('data-lenguaje');
				var tags = lenguaje[dataLenguaje];
				
				var num_lineas = str.split(/\n/).length;
				for (var i in tags) {
					str = str.replace(tags[i][0], tags[i][1]);
				}
				$(this).html(str);
				var strSepare = $(this).html().split(/\n/);
				var table = $("<table />", {
					'cellspacing': '0',
					'cellpadding': '0'
				});
				$(this).html(table);
				for (var i = 0; i < strSepare.length; i++) {
					var tr = $("<tr />");
					var td_num = $("<td />", {
						'class': 'line-num',
						'line-number': (i+1)
					});
					var td_text = $("<td />",{
						'class': 'str_'+(i+1)
					});
					var tr_td = tr.append(td_num);
					var tr_td = tr.append(td_text.append(strSepare[i]));
					$(this).find("table").append(tr_td);
				}
			});
		}
	});
})(jQuery);