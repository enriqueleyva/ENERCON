// Año actual
document.getElementById("year").textContent = new Date().getFullYear();

// GSAP base
gsap.registerPlugin(ScrollTrigger);

// HERO animation
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
tl.from(".eyebrow", { y: 20, opacity: 0, duration: 0.5 })
	.from("h1", { y: 18, opacity: 0, duration: 0.6 }, "-=0.2")
	.from(".hero p", { y: 18, opacity: 0, duration: 0.6 }, "-=0.4")
	.from(
		".hero__cta .btn",
		{ y: 20, opacity: 0, stagger: 0.1, duration: 0.45 },
		"-=0.4"
	)
	.from(".phone", { y: 24, rotate: 4, opacity: 0, duration: 0.7 }, "-=0.5");

// Orbits parallax
gsap.to(".orbit--1", {
	yPercent: 6,
	xPercent: -6,
	scrollTrigger: { scrub: 0.3 },
});
gsap.to(".orbit--2", {
	yPercent: -8,
	xPercent: 8,
	scrollTrigger: { scrub: 0.3 },
});

// Reveal on scroll
gsap.utils.toArray(".reveal, .reveal-up").forEach((el) => {
	const from = el.classList.contains("reveal-up") ? { y: 24 } : { y: 18 };
	gsap.from(el, {
		...from,
		opacity: 0,
		duration: 0.6,
		ease: "power2.out",
		scrollTrigger: { trigger: el, start: "top 80%" },
	});
});

// KPI Counters
document.querySelectorAll("[data-counter]").forEach((el) => {
	const end = parseInt(el.dataset.counter, 10);
	gsap.fromTo(
		el,
		{ innerText: 0 },
		{
			innerText: end,
			duration: 1.8,
			ease: "power1.out",
			snap: { innerText: 1 },
			scrollTrigger: { trigger: el, start: "top 90%" },
		}
	);
});

// Float for logos
gsap.to(".logo-tile", {
	y: 6,
	repeat: -1,
	yoyo: true,
	duration: 2.4,
	ease: "sine.inOut",
	stagger: 0.15,
});

// Keyboard nav helper
document.addEventListener("keydown", (e) => {
	if ((e.key === "g" || e.key === "G") && e.altKey) {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
});
