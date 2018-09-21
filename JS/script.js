$(document).ready(function() 
{
	//solidifying nav bar
	$(window).scroll(function()
	{
		if($(window).scrollTop() >= 586)
		{
			$(".pure-menu-list").addClass("sticky-menu");
		}
		else
		{
			$(".pure-menu-list").removeClass("sticky-menu");
		}
	});

	//smooth scroll nav bar
	$(".pure-menu-link").click(function(e)
	{
		$("html, body").animate(
		{
			scrollTop: $(this.hash).offset().top -63
		}, 700);
	});
});