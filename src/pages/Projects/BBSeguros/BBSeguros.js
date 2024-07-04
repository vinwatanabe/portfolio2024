import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu';
import scrollTop from '../../../functions/scrollTop';
import ScrollTopButton from '../../../components/ScrollTopButton';

const BBSeguros = () => {
	useEffect(() => {
		scrollTop();
	}, []);

	const ghLink = '';
	const projLink = '';

	const githubLink = (
		<Link to={ghLink} target='blank'>
			<svg
				className='stroke-lightBlue hover:stroke-orange ease-in duration-200'
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
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
					/>
					<path
						id='Path_2'
						data-name='Path 2'
						d='M4,17a2.457,2.457,0,0,1,1.784,1.208,2.488,2.488,0,0,0,3.4.978'
						transform='translate(-4 -1)'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
					/>
				</g>
			</svg>
		</Link>
	);

	const projectLink = (
		<Link to={projLink} target='blank'>
			<svg
				className='fill-lightBlue hover:fill-orange ease-in duration-200'
				xmlns='http://www.w3.org/2000/svg'
				width='20'
				height='20'
				viewBox='0 0 20 20'>
				<path
					id='open_in_new_FILL0_wght400_GRAD0_opsz40-2'
					data-name='open_in_new_FILL0_wght400_GRAD0_opsz40'
					d='M121.852,236A1.882,1.882,0,0,1,120,234.148v-16.3A1.882,1.882,0,0,1,121.852,216h7.759v1.852h-7.759v16.3h16.3v-7.759H140v7.759A1.882,1.882,0,0,1,138.148,236Zm5.481-6.019-1.3-1.315,10.815-10.815h-5.389V216H140v8.537h-1.852v-5.37Z'
					transform='translate(-120 -216)'
				/>
			</svg>
		</Link>
	);

	return (
		<div className='font-inter text-base text-lightBlue'>
			<Menu />
			<ScrollTopButton />

			<div className=''>
				<picture className=''>
					<img
						className='h-auto'
						src={
							process.env.PUBLIC_URL +
							'/images/projects/bbseguros/bbseg_header.jpg'
						}
						alt=''
					/>
				</picture>
			</div>

			{/* Header title */}
			<div className='sm:relative sm:h-40'>
				<div
					className={`relative sm:absolute sm:translate-y-[-50%] left-[50%] translate-x-[-50%] bg-darkBlue px-5 py-10 sm:py-16 w-[90%] sm:w-[80%] lg:w-[60%]`}>
					<p className='text-orange text-section-title sm:text-main-title font-bebas text-center mb-3'>
						BB SEGUROS
					</p>

					<p className='text-center mb-5'>BB Seguros | ID/TBWA</p>

					<div className='flex flex-row gap-5 justify-center'>
						{ghLink === '' ? '' : githubLink}
						{projLink === '' ? '' : projectLink}
					</div>
				</div>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Project Overview
					</p>
					<p className=''>
						BB Seguros, one of the largest insurance companies in Brazil and a
						subsidiary of Bank of Brazil, approached us with the idea of
						redesigning their website to achieve a more modern look. Their
						website features a diverse range of products, including life
						insurance, car insurance, home insurance, business insurance, and
						dental healthcare. Additionally, they offer capitalization bonds and
						private pension plans.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/bbseguros/bbseg_img1.jpg'
					}
					alt=''
				/>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Challenge Statement
					</p>
					<p className=''>
						Redesigning their website presented several challenges, primarily in
						categorizing and organizing product and service pages to be easy to
						navigate. The previous website caused cognitive load due to the
						sheer amount of text and information. Additionally, some buttons and
						links were either malfunctioning or redundant, leading to customer
						confusion and frustration. The product descriptions were also
						problematic, as they were written in a highly technical manner,
						making them difficult for users to comprehend.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/bbseguros/bbseg_img3.jpg'
					}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/bbseguros/bbseg_img4.jpg'
					}
					alt=''
				/>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Main Objectives
					</p>
					<p className=''>
						<span className='font-bold text-orange'>User-Centric Design: </span>
						We aimed to create an intuitive navigation system and simplify
						information so users can easily understand the products and offers.
						Given BB Seguros' diverse range of products, each product page must
						clearly explain how the product works and highlight its features in
						a straightforward manner.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							Reducing Cognitive Load:{' '}
						</span>
						Research indicated that users felt overwhelmed by the website's
						excessive information and technical jargon, making it difficult to
						digest. Additionally, some pages not functioning properly added to
						the confusion and frustration. Therefore, it was crucial to
						streamline the information, emphasizing the most important features
						in a clear and concise way.
					</p>

					<p className=''>
						<span className='font-bold text-orange'>Fluid User Flow: </span>
						Ensuring that all pages function correctly and users do not feel
						lost within the website is important. A well-structured user flow is
						essential for providing an optimal navigational experience.
					</p>
				</div>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Research and strategy
					</p>
					<p className=''>
						<span className='font-bold text-orange'>User Persona </span>- The
						project began with the creation of well-defined user personas,
						representing typical customers that use BB Seguros products and
						services. These personas guided the entire design process of the
						website.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							Interviews and Insights{' '}
						</span>
						- We conducted interviews and surveys with customers, managers for
						each sector of the company to gather valuable insights into their
						expectations, ideas, concerns, and preferences for the website. This
						data informed the design process and overall architecture
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/bbseguros/bbseg_personas.jpg'
					}
					alt=''
				/>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						User Flow
					</p>
					<p className=''>
						With a clear understanding of our users and their expectations, as
						well as potential navigation issues, we defined an initial user
						flow. This user flow maps out all the interactions and pages users
						will experience on the BB Seguros website, aiming to optimize
						navigation by minimizing the information users need to sift through
						across different categories and reducing the number of steps in the
						navigation process.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/bbseguros/bbseg_map.jpg'
					}
					alt=''
				/>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Prototypes & Wireframes
					</p>
					<p className=''>
						After defining the user flow, I began creating low-fidelity
						prototypes and wireframes to explore the user experience in greater
						detail. This process allowed us to validate navigation ideas and
						identify any issues or areas for improvement.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/bbseguros/bbseg_prototypes.jpg'
					}
					alt=''
				/>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Design System
					</p>
					<p className=''>
						Additionally, we defined a simple yet comprehensive design system to
						be followed throughout the website. This system includes guidelines
						for typography, color schemes, button styles, and layout structures.
						By adhering to these design principles, we ensured visual
						consistency and coherence across all pages.The design system serves
						as a foundation, allowing for cohesive updates and maintenance in
						the future, ensuring the website remains modern and user-friendly.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/bbseguros/bbseg_img6.jpg'
					}
					alt=''
				/>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Launch and results
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							Navigation Improvement:{' '}
						</span>
						The website saw positive results by making the navigation experience
						less confusing and the texts clearer and more suitable for its
						audience, with fewer technical jargons. We reduced the number of
						pages and steps in navigation by 28% by eliminating unnecessary
						pages and outdated links that didn't contribute to a good user
						experience.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>Business Impact: </span>
						By optimizing the user flow and employing user-centric design
						approaches, managers reported improved navigation within their
						sections and products. This led to increased sales and a better
						understanding of their offers and products.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-5'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/bbseguros/bbseg_img7.jpg'
					}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-5'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/bbseguros/bbseg_img8.jpg'
					}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/bbseguros/bbseg_img9.jpg'
					}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/bbseguros/bbseg_img10.jpg'
					}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/bbseguros/bbseg_img11.jpg'
					}
					alt=''
				/>
			</div>

			{/* Credits block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col lg:flex-row text-center lg:text-left justify-between w-[80%] gap-10 lg:gap-0'>
					<div>
						<p className='text-orange font-bebas text-section-subtitle'>
							BB Seguros Website
						</p>
						<ul>
							<li>
								<span className='font-bold'>Client:</span> BB Seguros
							</li>
							<li>
								<span className='font-bold'>Agency:</span> ID/TBWA
							</li>
						</ul>
					</div>

					<div>
						<p className='text-orange font-bebas text-section-subtitle'>Role</p>
						<ul>
							<li>Art Direction</li>
							<li>UX Design</li>
						</ul>
					</div>

					<div>
						<p className='text-orange font-bebas text-section-subtitle'>
							Credits
						</p>
						<ul>
							<li>
								<span className='font-bold'>Head of Art:</span> Vicente Zanatta
							</li>
							<li>
								<span className='font-bold'>Art Director:</span> Vinicius
								Watanabe
							</li>
							<li>
								<span className='font-bold'>UX Design:</span> Vinicius Watanabe
							</li>
							<li>
								<span className='font-bold'>Copywriter:</span> Marcelo Torres
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Project navigation block */}
			<div className='flex flex-row justify-center pb-24'>
				<div className='flex flex-row justify-between w-[80%]'>
					<div className='text-orange hover:text-lightBlue stroke-orange hover:stroke-lightBlue cursor-pointer'>
						<Link
							className='flex flex-row gap-3 items-center'
							to={'/mimo-restaurant'}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='10.784'
								height='18.411'
								viewBox='0 0 10.784 18.411'>
								<g
									id='Seta'
									transform='translate(-2560.256 4814.009) rotate(-135)'>
									<line
										data-name='Line 9'
										x2='11.149'
										transform='translate(1575 5209)'
										fill='none'
										strokeLinecap='round'
										strokeWidth='2'
									/>
									<line
										data-name='Line 10'
										y1='10.62'
										transform='translate(1586.334 5209.083)'
										fill='none'
										strokeLinecap='round'
										strokeWidth='2'
									/>
								</g>
							</svg>

							<p className='font-bold'>Previous project</p>
						</Link>
					</div>

					<div className='text-orange hover:text-lightBlue stroke-orange hover:stroke-lightBlue cursor-pointer'>
						<Link
							className='flex flex-row text-right gap-3 items-center'
							to={'/febraban-news'}>
							<p className='font-bold'>Next project</p>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='10.784'
								height='18.411'
								viewBox='0 0 10.784 18.411'>
								<g
									id='Seta'
									transform='translate(2571.04 -4795.598) rotate(45)'>
									<line
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
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BBSeguros;
