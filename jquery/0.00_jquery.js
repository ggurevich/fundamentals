$(document).ready(function(){
	//alert("hello world");

	$("#hide").click(function(){
		$("#image").hide();
	});
	$("#show").click(function(){
		$("#image").show();
	});
	$("#fadeIn").click(function(){
		$("#image").fadeIn(5000);
	});
	$("#explode").click(function(){
		$("#image").hide("explode", { pieces: 512}, 5000);
	});
	$("#slideIN").click(function(){
		$("#image").slideUp(2000).slideDown(2000);
	});
	$("#pulse").click(function(){
		$("#image").pulse("pulsate");
	});
});