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

					<p className='text-center mb-5'>2020 - Febraban | ID/TBWA</p>

					<div className='flex flex-row gap-5 justify-center'>
						{ghLink === '' ? '' : githubLink}
						{projLink === '' ? '' : projectLink}
					</div>
				</div>
			</div>

			{/* Text block */}
			<div className={`flex flex-row mt-10 justify-center mb-24`}>
				<p className='w-[90%] sm:basis-2/3 text-center'>
					In 2020, the world experienced an unimaginable period. In Brazil, the
					COVID-19 pandemic affected the health of millions of people, along
					with a growing number of Brazilians who lost their jobs, and
					consequently, lost the ability to provide for their families.
					Furthermore, due to a lack of information, other misinformation
					campaigns and scams began to emerge, trying to take advantage of the
					chaotic situation the country found itself in regarding its health and
					economy. In such a devastating moment, FEBRABAN (Brazilian Federation
					of Banks) decided to create a journalistic channel where all
					Brazilians could receive news related to the economy, the emergency
					aid they were entitled to, and alerts for preventing scams that were
					being perpetrated. All this news was provided through the new website
					created by FEBRABAN NEWS. News directly from the source that helped in
					deciding the course of the economy.
				</p>
			</div>

			{/* Video block */}
			<div className='flex flex-row justify-center'>
				<div className='flex flex-row mb-24 w-[100%] sm:w-[80%]'>
					<iframe
						className='w-full h-[250px] sm:h-[540px]'
						title='febraban-news-video'
						width='960'
						height='540'
						src='https://www.youtube.com/embed/1IesX0ILNnc'
						frameBorder='0'
						allowFullScreen></iframe>
				</div>
			</div>

			{/* Text block */}
			<div className='flex flex-row justify-center mb-24'>
				<div className='flex flex-col text-center w-[90%] sm:basis-2/3'>
					<p className='text-orange font-bebas text-section-subtitle'>
						PROJECT DEVELOPMENT
					</p>
					<p className=''>
						In order for the website to provide a better experience, we
						developed a modern visual language aimed at creating a website
						focused on delivering news almost in real time. We produced a
						podcast in addition to explanatory and journalistic videos featuring
						interviews directly from the key authorities making decisions about
						the economy.
					</p>
				</div>
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
				<div className='flex flex-col text-center w-[90%] sm:basis-2/3'>
					<p className='text-orange font-bebas text-section-subtitle'>
						REAL-TIME INFORMATION ABOUT THE ECONOMY
					</p>
					<p className=''>
						The project was a success, providing quality, transparent, and
						relevant information during the pandemic period, helping people
						avoid falling victim to scams, providing knowledge about key
						processes related to bank services, as well as access to relevant
						information about the economy that directly impacted the lives of
						all Brazilians.
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
				<div className='flex flex-col text-center w-[90%] sm:basis-2/3'>
					<p className='text-orange font-bebas text-section-subtitle'>LIVE</p>
					<p className=''>
						To ensure the information was relevant, we conducted interviews with
						key decision-makers in the economy such as politicians, economists,
						central bank authorities, entrepreneurs, and researchers. All
						interviews were conducted in real-time through Live streams that
						took place on YouTube, LinkedIn, and Instagram.
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
				<div className='flex flex-col text-center w-[90%] sm:basis-2/3'>
					<p className='text-orange font-bebas text-section-subtitle'>
						ART DIRECTION AND PROMOTION
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
							to={'/bbseguros'}>
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
