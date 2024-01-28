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

					<p className='text-center mb-5'>2019 - BB Seguros | ID/TBWA</p>

					<div className='flex flex-row gap-5 justify-center'>
						{ghLink === '' ? '' : githubLink}
						{projLink === '' ? '' : projectLink}
					</div>
				</div>
			</div>

			{/* Text block */}
			<div className={`flex flex-row mt-10 justify-center mb-24`}>
				<p className='w-[90%] sm:basis-2/3 text-center'>
					With the internet changing how we do things, BB Seguros decided to
					upgrade too, to make things better for customers. They made a new
					website that combines insurance, capitalization, pensions, and dental
					services all in one place, for a smoother experience.
				</p>
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
				<div className='flex flex-col text-center w-[90%] sm:basis-2/3'>
					<p className='text-orange font-bebas text-section-subtitle'>
						PROJECT CHALLENGES
					</p>
					<p className=''>
						Throughout the project, we encountered various challenges, primarily
						due to it being a portal where different sectors of the company
						needed to be present and given appropriate prominence for their
						various products. Furthermore, due to the large variety of products
						offered, many pages of the website had few images to help explain
						the services, along with a volume of text information that made the
						experience and navigation more difficult.
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

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-center w-[90%] sm:basis-2/3'>
					<p className='text-orange font-bebas text-section-subtitle'>
						COMPLEX USABILITY
					</p>
					<p className=''>
						The overall usability of the site was quite complex, primarily due
						to the volume of links and information that often led the user to
						paths that were not desired, significantly affecting the overall
						experience on the site and making navigation difficult.
					</p>
				</div>
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
				<div className='flex flex-col text-center w-[90%] sm:basis-2/3'>
					<p className='text-orange font-bebas text-section-subtitle'>
						PROJECT DEVELOPMENT
					</p>
					<p className=''>
						To better meet the needs of users, we redesigned the overall
						navigation of the portal to make it easier to navigate and to
						simplify the overall experience of purchasing various products and
						filing claims. Additionally, we developed a visual project to
						standardize and create consistency across all areas of the site to
						make the experience more enjoyable.
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
				<div className='flex flex-col text-center w-[90%] sm:basis-2/3'>
					<p className='text-orange font-bebas text-section-subtitle'>
						PERSONALIZED EXPERIENCE FOR CLIENTS
					</p>
					<p className=''>
						The final result was highly satisfactory. We developed an experience
						centered around the needs of the clients, making it easier to access
						and understand various products with more direct explanations and
						language accessible to clients. Furthermore, to facilitate finding
						the ideal product for each client, we developed an area where,
						through simple question responses, the most suitable products could
						be offered to each client, thus creating a personalized experience.
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
							to={'/febraban-news'}>
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
							to={'/mimo-restaurant'}>
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
