$(function() {
	$(".scroll").click(function(event){
		event.preventDefault();
		$('html, body').animate({scrollTop:$(this.hash).offset().top -150}, 1000);
	});
});