// Año actual
document.getElementById("year").textContent = new Date().getFullYear();

// GSAP base
gsap.registerPlugin(ScrollTrigger);

const navToggle = document.querySelector(".nav__toggle");
const navActions = document.querySelector(".nav__actions");
if (navToggle && navActions) {
	navToggle.addEventListener("click", () => {
		navActions.classList.toggle("is-open");
	});
}
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
	const end = parseFloat(el.dataset.counter);
	const decimals = 1;
	const formatter = new Intl.NumberFormat("es-MX", {
		notation: "compact",
		maximumFractionDigits: decimals,
	});
	gsap.fromTo(
		el,
		{ innerText: 0 },
		{
			innerText: end,
			duration: 1.8,
			ease: "power1.out",
			snap: { innerText: 1 / Math.pow(10, decimals) },
			scrollTrigger: { trigger: el, start: "top 90%" },
			onUpdate: () => {
				el.innerText = formatter.format(parseFloat(el.innerText));
			},
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
// Dibujo progresivo de las flechas del flujo
gsap.utils.toArray(".flow-line").forEach((path) => {
	const length = path.getTotalLength();
	gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
	gsap.to(path, {
		strokeDashoffset: 0,
		duration: 0.9,
		ease: "power2.out",
		scrollTrigger: { trigger: ".flow", start: "top 75%" },
	});
});

document.addEventListener("keydown", (e) => {
	if ((e.key === "g" || e.key === "G") && e.altKey) {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}
});
(function () {
	const root = document.getElementById("story-flujo");
	if (!root || !window.ScrollTrigger) return;
	const states = root.querySelectorAll(".state");
	const steps = gsap.utils.toArray("#story-flujo .step");
	const set = (i) =>
		states.forEach((s, k) => s.classList.toggle("is-on", i === k));
	steps.forEach((el, i) => {
		ScrollTrigger.create({
			trigger: el,
			start: "top 65%",
			end: "bottom 35%",
			onEnter: () => set(i),
			onEnterBack: () => set(i),
		});
	});
})();

// Animaciones de entrada (zig-zag)
gsap.utils.toArray(".zz__item").forEach((item, i) => {
	const media = item.querySelector(".zz__media");
	const content = item.querySelector(".zz__content");
	const fromX = i % 2 === 0 ? -24 : 24;

	gsap.from(media, {
		opacity: 0,
		y: 18,
		scale: 0.96,
		duration: 0.6,
		ease: "power2.out",
		scrollTrigger: { trigger: item, start: "top 80%" },
	});

	gsap.from(content, {
		opacity: 0,
		x: fromX,
		y: 12,
		duration: 0.6,
		ease: "power2.out",
		scrollTrigger: { trigger: item, start: "top 78%" },
	});
});
