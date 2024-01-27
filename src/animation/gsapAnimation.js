import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Animation for home initial page, navigation and titles
const homeAnimation = () => {
	let tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 2 } });

	tl.to('#logo-link', {
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 1.5,
	})
		.to(
			'#about-link',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
			},
			'-=1'
		)
		.to(
			'#projects-link',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
			},
			'-=1.8'
		)
		.to(
			'#contact-link',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
			},
			'-=1.8'
		)
		.to(
			'#resume-link',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
			},
			'-=1.8'
		)
		.to(
			'#site-title',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
				duration: 2,
			},
			'-=2'
		)
		.to(
			'#site-subtitle',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
			},
			'-=2'
		)
		.to(
			'#contact-information-title',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
			},
			'-=1.8'
		);
};

// Animation for about me section
const aboutAnimation = () => {
	// About title
	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#about-title, #about-text',
			start: 'top bottom',
			end: 'bottom center',
			scrub: false,
			markers: false,
		},
	});

	tl.to('#about-title', {
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 1.5,
	}).to(
		'#about-text',
		{
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			opacity: 1,
			y: 0,
			duration: 1.5,
		},
		'=-1'
	);

	// Experience
	tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#experience-title, #experience-text',
			start: 'top bottom',
			end: 'bottom center',
			scrub: false,
			markers: false,
		},
	});

	tl.to('#experience-title', {
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 1.5,
	}).to(
		'#experience-text',
		{
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			opacity: 1,
			y: 0,
			duration: 1.5,
		},
		'=-1'
	);

	// Skills
	tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#skills-title, #skills-text',
			start: 'top bottom',
			end: 'bottom center',
			scrub: false,
			markers: false,
		},
	});

	tl.to('#skills-title', {
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 1.5,
	}).to(
		'#skills-text',
		{
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			opacity: 1,
			y: 0,
			duration: 1.5,
		},
		'=-1'
	);

	// Projects
	tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#project-title',
			start: 'top bottom',
			end: 'bottom center',
			scrub: false,
			markers: false,
		},
	});

	tl.to('#project-title', {
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 1.5,
	});

	// Project card
	tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#project-card-image, #project-card-text',
			start: 'top 80%',
			end: 'bottom center',
			scrub: false,
			markers: false,
		},
	});

	tl.to('#project-card-image', {
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 1.5,
	}).to(
		'#project-card-text',
		{
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
			opacity: 1,
			y: 0,
			duration: 1.5,
		},
		'=-1'
	);

	// Contact
	tl = gsap.timeline({
		scrollTrigger: {
			trigger: '#contact-title, #contact-text, .contact-icons',
			start: 'top 90%',
			end: 'bottom center',
			scrub: false,
			markers: false,
		},
	});

	tl.to('#contact-title', {
		clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
		opacity: 1,
		y: 0,
		duration: 0.8,
	})
		.to(
			'#contact-text',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
				duration: 0.8,
			},
			'=-0.5'
		)
		.to(
			'.contact-icons',
			{
				clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
				opacity: 1,
				y: 0,
				duration: 0.8,
			},
			'=-0.5'
		);
};

export { homeAnimation, aboutAnimation };
