import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../images/menu_icon.svg';

const Menu = () => {
	return (
		<menu className='flex flex-row justify-between items-center py-8 mx-5 sm:mx-10'>
			<Link to={'/'}>
				<p className='font-bebas text-3xl text-orange'>Vinicius Watanabe</p>
			</Link>

			<Link to={'/project'}>
				<img src={MenuIcon} alt='Menu icon' />
			</Link>
		</menu>
	);
};

export default Menu;
