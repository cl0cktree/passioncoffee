$(function(){
	$('#tbtn1').mouseover(function(){
		$('#tbtn1').css('background','rgba(0,0,0,0.6)')
		$('#tbtnf1').animate({'opacity':'1'},200)
	})	
	$('#tbtn1').mouseout(function(){
		$('#tbtn1').css('background','rgba(0,0,0,0.0)')
		$('#tbtnf1').animate({'opacity':'0'},200)
	})	
	$('#tbtn2').mouseover(function(){
		$('#tbtn2').css('background','rgba(0,0,0,0.6)')
		$('#tbtnf2').animate({'opacity':'1'},300)
	})	
	$('#tbtn2').mouseout(function(){
		$('#tbtn2').css('background','rgba(0,0,0,0.0)')
		$('#tbtnf2').animate({'opacity':'0'},300)
	})	
	$('#tbtn3').mouseover(function(){
		$('#tbtn3').css('background','rgba(0,0,0,0.6)')
		$('#tbtnf3').animate({'opacity':'1'},300)
	})	
	$('#tbtn3').mouseout(function(){
		$('#tbtn3').css('background','rgba(0,0,0,0.0)')
		$('#tbtnf3').animate({'opacity':'0'},300)
	})	
	$('#tbtn4').mouseover(function(){
		$('#tbtn4').css('background','rgba(0,0,0,0.6)')
		$('#tbtnf4').animate({'opacity':'1'},300)
	})	
	$('#tbtn4').mouseout(function(){
		$('#tbtn4').css('background','rgba(0,0,0,0.0)')
		$('#tbtnf4').animate({'opacity':'0'},300)
	})	
	$('#tbtn5').mouseover(function(){
		$('#tbtn5').css('background','rgba(0,0,0,0.6)')
		$('#tbtnf5').animate({'opacity':'1'},300)
	})	
	$('#tbtn5').mouseout(function(){
		$('#tbtn5').css('background','rgba(0,0,0,0.0)')
		$('#tbtnf5').animate({'opacity':'0'},300)
	})	
	
	$('#sump').mouseover(function(){
		$('.sum2').css({'transform':'rotate(-15deg)'})
	})

	$('#sump').mouseout(function(){
		$('.sum2').css({'transform':'rotate(0deg)'})
	})	

	$('.star').mouseover(function(){
		$('.star2').animate({'opacity':'1'},300)
	})

	$('.star').mouseout(function(){
		$('.star2').animate({'opacity':'0'},300)
	})		

});