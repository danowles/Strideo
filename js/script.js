const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('fa-bars-staggered');
	navlist.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('fa-bars-staggered');
	navlist.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '45px',
	duration: 2700,
	reset: true
})

sr.reveal('.inicio-text, .sobre-text',{delay:350, origin:'left'})
sr.reveal('.inicio-img, .sobre-img',{delay:350, origin:'right'})

sr.reveal('.servico,.streamings,.servico,.contato',{delay:200, origin:'bottom'})







function validacao(e) {
	e.preventDefault();
  
	if (document.form.nome.value == "") {
  
	  Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Por favor, preencha o campo nome!'
	  });
	  document.form.nome.focus();
	  return false;
	}
  
	if (document.form.email.value == "" | document.form.email.value.indexOf('@') == -1 | document.form.email.value.indexOf('.') == -1) {
  
	  Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'Por favor, digite um endereço de e-mail válido!'
	  });
	  document.form.email.focus();
	  return false;
	}
  
	if (document.form.nome.value.length < 3) {
  
	  Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: 'O nome deve conter no mínimo 3 caracteres!'
	  });
	  document.form.nome.focus();
	  return false;
	}
  
	else {
	  Swal.fire(
		'Muito obrigada!',
		'Sua mensagem foi enviada com sucesso! Conversaremos em breve :)',
		'success'
	  ); 
	  
	  var $form = $("#formContato");
	  $.post($form.attr("action"), $form.serialize()).then(function() {
	
	  });
	  return true
	}
  }
  
  

