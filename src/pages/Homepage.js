import React from 'react';
import Menu from '../components/Menu';
import ContactIcons from '../components/ContactIcons';
import Blob from '../images/blob.svg';

const Homepage = () => {
	return (
		<div className='relative font-inter text-base text-lightBlue mx-10 overflow-hidden'>
			<picture className='absolute w-[90%] z-0 top-[45%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
				<img src={Blob} alt='' />
			</picture>

			<Menu />

			<div className='flex items-end h-[calc(100vh-100px)]'>
				<div className='flex flex-col w-96 mb-10 z-[999]'>
					<h1 className='font-bebas text-main-title text-orange'>
						Front-end developer
					</h1>
					<p className='pb-4'>
						<span className='text-orange'>Front-end Developer</span> specialized
						in building and designing{' '}
						<span className='text-orange'>awesome digital experiences</span>
					</p>
					<ContactIcons />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
