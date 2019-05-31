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
            
            last_name: {
				required: true,
				minlength: 7
			},
            email: {
                required: true,
                email:true
            },
			telefono: {
				required: true,
				minlength: 10,
				number: true
			},
			
            icon_prefix2: {
				required: true,
				minlength: 20
            },
            password: {
                required: true,
                minlength: 8
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
            },
            password:{
                required: "Ingresa tu contrase;a",
                minlength: "Ingresa al menos 8 caracteres"
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
