import React, { useEffect } from 'react';
import scrollTop from '../functions/scrollTop';

const ScrollTopButton = () => {
	useEffect(() => {
		let btnScrollTop = document.getElementById('btnScrollTop');

		window.onscroll = function () {
			scrollFunc();
		};

		const scrollFunc = () => {
			if (
				document.body.scrollTop > 100 ||
				document.documentElement.scrollTop > 100
			) {
				btnScrollTop.style.opacity = '1';
			} else {
				btnScrollTop.style.opacity = '0';
			}
		};
	}, []);

	return (
		<div
			onClick={scrollTop}
			id='btnScrollTop'
			className='fixed bg-midBlue px-4 py-5 rounded-full bottom-5 right-5 z-[999] cursor-pointer transition-opacity duration-300 ease-in-out opacity-0'>
			<svg
				className='stroke-lightBlue'
				xmlns='http://www.w3.org/2000/svg'
				width='18.411'
				height='10.784'
				viewBox='0 0 18.411 10.784'>
				<g id='Seta' transform='translate(-4795.598 -2560.256) rotate(-45)'>
					<line
						id='Line_9'
						data-name='Line 9'
						x2='11.149'
						transform='translate(1575 5209)'
						fill='none'
						strokeLinecap='round'
						strokeWidth='2'
					/>
					<line
						id='Line_10'
						data-name='Line 10'
						y1='10.62'
						transform='translate(1586.334 5209.083)'
						fill='none'
						strokeLinecap='round'
						strokeWidth='2'
					/>
				</g>
			</svg>
		</div>
	);
};

export default ScrollTopButton;
