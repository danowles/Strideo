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

sr.reveal('.sobre-text',{delay:350, origin:'left'})
sr.reveal('.sobre-img',{delay:350, origin:'right'})

sr.reveal('.servico,.streamings, .planos',{delay:200, origin:'bottom'})

