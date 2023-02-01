
$(function() {
	$("[data-scroll]").on("click", function(event){
		event.preventDefault();

		blockId = $(this).data('scroll');
		blockOffset = $(blockId).offset().top;

		$("html, body").animate({
			scrollTop: blockOffset - 50
		}, 700);
	});


});











let page = document.querySelector('.body')
let themeButton = document.querySelector('.theme-button')
themeButton.onclick = function()
{
	page.classList.toggle('dark-theme');
	page.classList.toggle('light-theme');
}

