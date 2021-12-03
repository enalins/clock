//CAROUSEL
const
	myCarousel = document.querySelector('.carousel-container'),
	scroller = myCarousel.querySelector('.scroller'),
	slides = scroller.querySelectorAll('.switch-block'),
	navButtons = document.querySelectorAll('.nav-button');
let 
  slideIndex = 1;

//nav config
for(i=0; i < navButtons.length; i++){
	navButtons[i].addEventListener('click', function (e) {
		let target = this.getAttribute('data-target');
		
		function getKey (target){
			for(i=0; i<slides.length; i++){
				if(slides[i].getAttribute('id') == target){
					return i + 1;
				}
			}
		}
		
		showSlides(slideIndex = getKey(target));
	})
}

//carousel config
function showSlides(n) {
  //prevent trying to reach a slide that does not exist
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  //handle the actual carousel
  scroller.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
}
showSlides(slideIndex);

//CLOCK
const clock = document.querySelector('#clock')
let times = {
	seconds: 0,
	minutes: 0,
	hours: 0
}

function startClock() {
  let today = new Date();
  let s = today.getSeconds();
  let m = today.getMinutes();
  let h = today.getHours();

	// this block was made to prevent the clock ticks from returning counter clock wise when they get to de end of the circle
	if(s == 0){ times.seconds += 360; }
	if(m == 0){ times.minutes += 360; }
	if(h == 0){ times.hours += 360; }

	//analog clock
	clock.querySelector('.clock__seconds').style.transform = `rotate(${times.seconds + (s * 6)}deg)`;
	clock.querySelector('.clock__minutes').style.transform = `rotate(${times.minutes + (m * 6)}deg)`;
	let calcHora = h > 12 ? (times.hours + ((h - 12) * 30)) : (times.hours + (h * 30));
	clock.querySelector('.clock__hours').style.transform = `rotate(${calcHora}deg)`;

	//digital clock
  m = checkTime(m);
  s = checkTime(s);
	clock.querySelector('.clock__time').innerHTML = h + ":" + m;

  setTimeout(startClock, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
startClock()

//ALARM
