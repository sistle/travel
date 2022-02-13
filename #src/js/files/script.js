const header = document.querySelector('.header');
let vh = window.innerHeight * 0.01;

function headeHendler(entries, observer) {
	if (entries[0].isIntersecting) {
		header.classList.remove('scroll');

	} else {
		header.classList.add('scroll');
	}
}

const headerObserver = new IntersectionObserver(headeHendler, { threshold: 1 });
headerObserver.observe(header);


document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});


window.onload = () => {
	const options = {
		root: null,
		rootMargin: '30px',
		threshold: 0
	}

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const lazyImg = entry.target;
				console.log(lazyImg);
				lazyImg.classList.add('visible');
				console.log('work');
				observer.unobserve(lazyImg);
			}
		})
	}, options)

	const roadmapBg = document.querySelectorAll('.lazy-bg');
	roadmapBg.forEach(item => {
		observer.observe(item);
	})
}

