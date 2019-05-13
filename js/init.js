(function($){
	$(function(){
		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('.dropdown-trigger').dropdown();
		$('#textarea1').val('New Text');
		M.textareaAutoResize($('#textarea1'));
	});
})(jQuery);