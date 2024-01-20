import React from 'react';
import { Link } from 'react-router-dom';
import EmailIcon from '../images/email_icon.svg';
import GitHubIcon from '../images/github_icon.svg';
import LinkedInIcon from '../images/linkedin_icon.svg';

const ContactIcons = () => {
	return (
		<div className='flex flex-row gap-5'>
			<Link to={'mailto:vinicius_watanabe@hotmail.com'}>
				<img src={EmailIcon} alt='' />
			</Link>
			<Link to={'https://github.com/vinwatanabe'} target='blank'>
				<img src={GitHubIcon} alt='' />
			</Link>
			<Link to={'https://www.linkedin.com/in/vinwatanabe/'} target='blank'>
				<img src={LinkedInIcon} alt='' />
			</Link>
		</div>
	);
};

export default ContactIcons;
