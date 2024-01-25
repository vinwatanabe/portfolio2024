import React from 'react';
import { Link } from 'react-router-dom';
// import Button from './Button';
// import MenuIcon from '../assets/images/menu_icon.svg';

const Menu = () => {
	return (
		<nav className='flex flex-row justify-center sm:justify-between items-center py-8 mx-5 sm:mx-10'>
			<Link to={'/'}>
				<p
					id='logo-link'
					className='relative font-bebas text-3xl text-orange hover:text-lightBlue z-50 ease-in duration-200'>
					Vinicius Watanabe
				</p>
			</Link>

			{/* <div className='block md:hidden z-50'>
				<Link to={'/project'}>
					<img src={MenuIcon} alt='Menu icon' />
				</Link>
			</div> */}

			<div className='hidden md:block z-50'>
				<ul className='flex flex-row gap-8 font-bold items-center'>
					<a id='about-link' href='#about'>
						<li className='ease-in duration-200 hover:text-orange'>About me</li>
					</a>
					<a id='projects-link' href='#projects'>
						<li className='ease-in duration-200 hover:text-orange'>Projects</li>
					</a>
					<a id='contact-link' href='#contact'>
						<li className='ease-in duration-200 hover:text-orange'>Contact</li>
					</a>
					{/* <li id='resume-link'>
						<Button text={'Resume'} url={'#!'} />
					</li> */}
				</ul>
			</div>
		</nav>
	);
};

export default Menu;
