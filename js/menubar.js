$(document).ready(function(){
	
	$('ul.activities_menu_wrap li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.activities_menu_wrap li').removeClass('current');
		$('#gotohere').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$('#gotohere').addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

