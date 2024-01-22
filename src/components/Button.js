import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, url }) => {
	return (
		<>
			<Link to={url}>
				<p className='inline-block text-orange border-2 border-solid border-orange hover:bg-orange hover:text-darkBlue ease-in duration-200 py-1 px-10 rounded-full font-bold'>
					{text}
				</p>
			</Link>
		</>
	);
};

export default Button;
