(function($){
	$(function(){
		$('.sidenav').sidenav();
		$('.parallax').parallax();
		$('.dropdown-trigger').dropdown();
		$('#textarea1').val('New Text');
		M.textareaAutoResize($('#textarea1'));

		 $('.carousel').carousel();
		 setInterval(function() {
		    $('.carousel').carousel('next');
		  }, 4000);

		 $('.carousel.carousel-slider').carousel({
		    fullWidth: true
		  });

		$("#formValidate").validate({
        rules: {
            first_name: {
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email:true
            },
            last_name: {
				required: true,
				minlength: 7
			},
			telefono: {
				required: true,
				minlength: 10,
				number: true
			},
			
            icon_prefix2: {
				required: true,
				minlength: 20
            }
        },
        //For custom messages
        messages: {
            first_name:{
                required: "Ingresa un nombre",
                minlength: "Ingresa al menos 4 caracteres"
            },
            last_name:{
                required: "Ingresa un apellido",
                minlength: "Ingresa al menos 7 caracteres"
            },
            email:{
                required: "Ingresa un email",
                email: "Ingresa un email valido"
            },
            telefono:{
                required: "Ingresa un numero telefonico",
                minlength: "Ingresa al menos 10 caracteres",
                number: "Ingresa solo numeros"
            },
            icon_prefix2:{
                required: "Ingresa un comentario",
                minlength: "Ingresa al menos 20 caracteres"
            }
            
        },
        errorElement : 'div',
        errorPlacement: function(error, element) {
          var placement = $(element).data('error');
          if (placement) {
            $(placement).append(error)
          } else {
            error.insertAfter(element);
          }
        }
     });
	});
})(jQuery);
