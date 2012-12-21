$(document).ready(function(){
	$("#main_contents").hover(
		function(){
			$(window).bind('mousewheel', function(event, delta){
				var sl = $('#main_contents').scrollLeft();	
				$('#main_contents').scrollLeft(sl-delta*3);
				return false;
			});
		},
		function(){
			$(window).unbind('mousewheel');
		}
	);
});