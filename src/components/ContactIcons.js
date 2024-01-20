import React from 'react';
import { Link } from 'react-router-dom';

const ContactIcons = ({ justification }) => {
	return (
		<div className={`flex flex-row gap-5 ${justification}`}>
			<Link to={'mailto:vinicius_watanabe@hotmail.com'}>
				<svg
					className='hover:fill-orange fill-lightBlue'
					id='mail_FILL0_wght400_GRAD0_opsz48'
					xmlns='http://www.w3.org/2000/svg'
					width='25'
					height='20'
					viewBox='0 0 25 20'>
					<path
						id='mail_FILL0_wght400_GRAD0_opsz48-2'
						data-name='mail_FILL0_wght400_GRAD0_opsz48'
						d='M81.875,276A1.922,1.922,0,0,1,80,274.125v-16.25A1.922,1.922,0,0,1,81.875,256h21.25A1.922,1.922,0,0,1,105,257.875v16.25A1.922,1.922,0,0,1,103.125,276ZM92.5,266.562l-10.625-6.969v14.531h21.25V259.594Zm0-1.875,10.5-6.812H82.031Zm-10.625-5.094v0Z'
						transform='translate(-80 -256)'
					/>
				</svg>
			</Link>
			<Link to={'https://github.com/vinwatanabe'} target='blank'>
				<svg
					className='stroke-lightBlue hover:stroke-orange'
					xmlns='http://www.w3.org/2000/svg'
					width='18.797'
					height='22.005'
					viewBox='0 0 18.797 22.005'>
					<g id='github-svgrepo-com' transform='translate(1.13 1.005)'>
						<path
							id='Path_1'
							data-name='Path 1'
							d='M9.8,23V20.156l.038-2.021a2.844,2.844,0,0,1,.7-1.68l.018-.02a.029.029,0,0,0-.018-.048h0C7.826,16.051,5,14.914,5,9.964A5.219,5.219,0,0,1,6.124,6.636l.079-.1h0a.159.159,0,0,0,.03-.149l0-.009Q6.2,6.293,6.179,6.2a5,5,0,0,1,.169-3.094l.009-.022a.111.111,0,0,1,.083-.071h0c.24-.043,1.212-.1,3.073,1.176l.176.123h0a.175.175,0,0,0,.149.026h0q.15-.042.3-.08a10.982,10.982,0,0,1,5.38,0q.143.036.285.076l.006,0a.206.206,0,0,0,.175-.03h0l.164-.115c1.856-1.273,2.823-1.219,3.064-1.176h0a.114.114,0,0,1,.085.072l.006.014a4.975,4.975,0,0,1,.179,3.1q-.024.091-.052.182h0a.168.168,0,0,0,.032.157l0,0,.072.089a5.218,5.218,0,0,1,1.123,3.328c0,4.977-2.846,6.084-5.571,6.386h0a.019.019,0,0,0-.012.032l.012.013a3.108,3.108,0,0,1,.626,1.06,3.244,3.244,0,0,1,.172,1.295V23'
							transform='translate(-4 -3)'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
						/>
						<path
							id='Path_2'
							data-name='Path 2'
							d='M4,17a2.457,2.457,0,0,1,1.784,1.208,2.488,2.488,0,0,0,3.4.978'
							transform='translate(-4 -1)'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
						/>
					</g>
				</svg>
			</Link>
			<Link to={'https://www.linkedin.com/in/vinwatanabe/'} target='blank'>
				<svg
					className='fill-lightBlue hover:fill-orange'
					id='linkedin-svgrepo-com'
					xmlns='http://www.w3.org/2000/svg'
					width='21.786'
					height='20'
					viewBox='0 0 21.786 20'>
					<rect
						id='Rectangle_3'
						data-name='Rectangle 3'
						width='4.245'
						height='13.586'
						transform='translate(0.561 6.414)'
						// fill='#94bed8'
					/>
					<path
						id='Path_3'
						data-name='Path 3'
						d='M-268.405,283.9A2.38,2.38,0,0,0-271,286.256a2.357,2.357,0,0,0,2.535,2.356h.034a2.368,2.368,0,0,0,2.586-2.356A2.369,2.369,0,0,0-268.405,283.9Z'
						transform='translate(271 -283.9)'
						// fill='#94bed8'
					/>
					<path
						id='Path_4'
						data-name='Path 4'
						d='M-175.091,357.8c-2.433,0-3.956,1.327-4.237,2.263v-2.135H-184.1c.06,1.131,0,13.586,0,13.586h4.772v-7.342a3.211,3.211,0,0,1,.1-1.114,2.427,2.427,0,0,1,2.3-1.667c1.659,0,2.407,1.259,2.407,3.1v7.027h4.815v-7.554C-169.706,359.757-172.071,357.8-175.091,357.8Z'
						transform='translate(191.493 -351.513)'
						// fill='#94bed8'
					/>
				</svg>
			</Link>
		</div>
	);
};

export default ContactIcons;
