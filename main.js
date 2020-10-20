//hamburger settings

var hamburger = document.querySelector('#hamburger');
var nav = document.querySelector('.nav-ul');
var navLi = document.querySelectorAll('.nav-ul ul li');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('toggle');
	nav.classList.toggle('nav-active')
});

Array.from(navLi).forEach(li => li.addEventListener('click', () => {
	nav.classList.toggle('nav-active');
	hamburger.classList.toggle('toggle')
}))

//switch to sticky nav
var header = document.querySelector('header')
window.addEventListener('scroll', stickySwitch);

function stickySwitch(){
	header.classList.toggle('sticky', window.scrollY > 0);
};

//change text auto
var displaytext = document.querySelector('#boldtxt');
const txtarr = [
	'Never give up for even rivers someday wash dams away',
	'Push yourself cause no one else is going to do it for you',
	'Don\'t stop when you\'re tired, stop when you\'re done',
	'Great things never come from comfort zones',
	'Success doesn\'t find you. You have to go out and get it'
];
var count = 0;

setInterval (function(){
  count++;
  if (count == txtarr.length){
  	count = 0;
  };
  displaytext.textContent = txtarr[count];
} , 5000);

//change text with button
var prev = document.querySelector('#prev');
var next = document.querySelector('#next');

prev.addEventListener('click', ()=>{
	count--;
	if (count < 0) {
		count = txtarr.length-1;
	}
	displaytext.textContent = txtarr[count];
});

next.addEventListener('click', ()=>{
	count++;
	 if (count == txtarr.length){
  		count = 0;
	  };
	  displaytext.textContent = txtarr[count];
})