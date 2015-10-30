jQuery(document).ready(function($){              
  
  $('.menu-me').click(function(){ //Scrollfunktion för menyn
		$('html, body').animate({
	        scrollTop: $(".me").offset().top
	    }, 1000);
	});  


   $('.menu-work').click(function(){ //Scrollfunktion för menyn
		$('html, body').animate({
	        scrollTop: $(".work").offset().top
	    }, 1000);
	}); 


    $('.menu-contact').click(function(){ //Scrollfunktion för menyn
		$('html, body').animate({
	        scrollTop: $(".contact").offset().top
	    }, 1500);
	}); 

});




$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})