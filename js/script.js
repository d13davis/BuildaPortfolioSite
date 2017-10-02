$(document).ready(function(){
	$(".panel1").slideUp("slow");

	$(".panel2").slideUp("slow");

	$(".panel3").slideUp("slow");
	
	$(".anim1").mouseenter(function(){
		$(".panel1").slideDown("slow");
	});

	$(".anim2").mouseenter(function(){
		$(".panel2").slideDown("slow");
	});

	$(".anim3").mouseenter(function(){
		$(".panel3").slideDown("slow");
	});

	$(".anim1").mouseleave(function(){
		$(".panel1").slideUp("slow");
	});

	$(".anim2").mouseleave(function(){
		$(".panel2").slideUp("slow");
	});

	$(".anim3").mouseleave(function(){
		$(".panel3").slideUp("slow");
	});
})