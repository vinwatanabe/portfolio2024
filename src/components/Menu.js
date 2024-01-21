import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import MenuIcon from '../images/menu_icon.svg';

const Menu = () => {
	return (
		<menu className='flex flex-row justify-between items-center py-8 mx-5 sm:mx-10'>
			<Link to={'/'}>
				<p className='relative font-bebas text-3xl text-orange z-50'>
					Vinicius Watanabe
				</p>
			</Link>

			<div className='block md:hidden'>
				<Link to={'/project'}>
					<img src={MenuIcon} alt='Menu icon' />
				</Link>
			</div>

			<div className='hidden md:block z-50'>
				<ul className='flex flex-row gap-8 font-bold items-center'>
					<a href='#about'>
						<li>About me</li>
					</a>
					<a href='#projects'>
						<li>Projects</li>
					</a>
					<a href='#contact'>
						<li>Contact</li>
					</a>
					<li>
						<Button text={'Resume'} url={'#!'} />
					</li>
				</ul>
			</div>
		</menu>
	);
};

export default Menu;
