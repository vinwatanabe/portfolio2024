import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu';
import scrollTop from '../../../functions/scrollTop';
import ScrollTopButton from '../../../components/ScrollTopButton';

const FebrabanNews = () => {
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
							'/images/projects/febraban-news/febraban_header.jpg'
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
						FEBRABAN NEWS
					</p>

					<p className='text-center mb-5'>Febraban | ID/TBWA</p>

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
						In 2020, the world faced an unprecedented crisis. In Brazil, the
						COVID-19 pandemic profoundly impacted public health, leading to
						widespread job losses and economic instability. Amidst this turmoil,
						misinformation campaigns and scams took advantage of the chaotic
						situation, further complicating matters. In response to these
						challenges, FEBRABAN (Brazilian Federation of Banks) launched
						FEBRABAN News, a journalistic channel dedicated to delivering
						reliable information to all Brazilians. The website quickly became a
						vital source for economic news, updates on emergency aid programs,
						and alerts to prevent scams. Journalists provided comprehensive
						coverage through articles, podcasts, and video interviews with
						politicians, business leaders, and economists. This initiative
						ensured that citizens had access to accurate information directly
						from authoritative sources, crucial for navigating the economic
						uncertainties caused by the pandemic.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_img7.jpg'
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
						Launching the website promptly was crucial due to the urgency of
						addressing scams involving banking institutions and providing
						essential information during the pandemic. Time constraints and
						project organization posed significant challenges. Therefore,
						assembling a well-aligned and focused team was essential to the
						project's success.
					</p>
				</div>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Objectives
					</p>
					<p className=''>
						<span className='font-bold text-orange'>Navigation:</span> Design an
						intuitive website that seamlessly integrates various types of media,
						including articles, videos, and audios updated in real time.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>User Flow:</span> Ensure the
						website’s navigation is straightforward and easy to understand,
						considering the dynamic nature of frequently updated content.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							Architecture and Hierarchy:
						</span>{' '}
						Prioritize and highlight high-priority information to enhance user
						accessibility and ensure important content is prominently displayed.
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
						<span className='font-bold text-orange'>
							User Persona and Stories:
						</span>{' '}
						We developed user personas based on interviews with FEBRABAN
						managers to accurately reflect the typical users and their routines.
						These personas guided the entire design process and inspired the
						creation of user stories.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>Competitor Analysis:</span>{' '}
						We conducted a competitor analysis to define a visual style and
						understand how local news websites operate. This helped us gather
						information for brand positioning and identify areas for
						improvement.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_personas.jpg'
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
						The user flow was designed to be straightforward and comprehensible,
						accommodating a wide range of information that would be updated
						frequently. Key considerations included:
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							1. Ease of Navigation:
						</span>{' '}
						Ensuring users could easily find and access different types of
						content.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							2. Content Accessibility:
						</span>{' '}
						Highlighting high-priority information and making it readily
						visible.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							3. Seamless Media Integration:
						</span>{' '}
						Providing a unified experience for articles, videos, and audios.
					</p>
					<p className=''>
						By focusing on these aspects, we aimed to create a user-friendly
						environment that met the informational needs of our audience.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_map.jpg'
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
						After defining the user flow, we moved on to wireframing, which
						involved:
					</p>
					<p className=''>
						<span className='font-bold text-orange'>1. Initial Sketches:</span>{' '}
						Outlining the basic structure and layout of the website, focusing on
						key elements such as the homepage, navigation menus, and content
						sections.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							2. Iterative Refinement:
						</span>{' '}
						Testing and refining the wireframes through multiple iterations to
						improve the user experience.
					</p>
					<p className=''>
						<span className='font-bold text-orange'>
							3. Design Consistency:
						</span>{' '}
						Establishing a simple design system to ensure visual coherence
						across the website.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_prototypes.jpg'
					}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_img2.jpg'
					}
					alt=''
				/>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Results
					</p>
					<p className='font-bold text-orange'>Trusted Source of Information</p>
					<p className='mb-4'>
						FEBRABAN News quickly became a trusted source for economic updates
						and emergency aid information. It played a crucial role in
						preventing scams with timely alerts and received positive feedback
						for its clear, accessible design, enhancing the user experience.
					</p>
					<p className='font-bold text-orange'>Business Impact</p>
					<p className=''>
						The launch strengthened public trust in FEBRABAN and its associated
						banks, improved user engagement, and ensured critical information
						reached those in need. The success of FEBRABAN News shows the
						importance of reliable information and effective communication
						during crises, reinforcing FEBRABAN’s commitment to supporting the
						Brazilian public.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_img3.jpg'
					}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center pb-5 bg-[#fff]'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_img4.jpg'
					}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_img5.jpg'
					}
					alt=''
				/>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-left w-[90%] sm:basis-2/3'>
					<p className='uppercase text-orange text-center font-bebas text-section-subtitle'>
						Art Direction and Promotion
					</p>
					<p className=''>
						To promote the website and all the activities taking place, we
						developed an integrated campaign that was promoted on major news
						channels, YouTube, newspapers, Spotify, radio channels, television,
						and the internet.
					</p>
				</div>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL +
						'/images/projects/febraban-news/febraban_img8.jpg'
					}
					alt=''
				/>
			</div>

			{/* Credits block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col lg:flex-row text-center lg:text-left justify-between w-[80%] gap-10 lg:gap-0'>
					<div>
						<p className='text-orange font-bebas text-section-subtitle'>
							Febraban News
						</p>
						<ul>
							<li>
								<span className='font-bold'>Client:</span> Febraban
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
								<span className='font-bold'>Creative Director:</span> Marcus
								Mesquita
							</li>
							<li>
								<span className='font-bold'>Art Director:</span> Vinicius
								Watanabe
							</li>
							<li>
								<span className='font-bold'>UX Design:</span> Vinicius Watanabe
							</li>
							<li>
								<span className='font-bold'>Copywriter:</span> Murilo Dada
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
							className='flex flex-row text-right gap-3 items-center'
							to={'/bbseguros'}>
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

export default FebrabanNews;
