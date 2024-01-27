import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import Menu from '../../components/Menu';

const Project = () => {
	const githubLink = (
		<Link to={'#!'} target='blank'>
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
		<Link to={'#!'} target='blank'>
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

			<div className=''>
				<picture>
					<img
						className='h-[calc(100vh-40vh)] sm:h-auto'
						src={
							process.env.PUBLIC_URL +
							'/images/projects/sample/header-image.jpg'
						}
						alt=''
					/>
				</picture>
			</div>

			{/* Header title */}
			<div
				className={`absolute translate-y-[-50%] left-[50%] translate-x-[-50%] bg-darkBlue px-5 py-10 sm:py-16 w-[90%] sm:w-[80%] lg:w-[60%]`}>
				<p className='text-orange text-section-title sm:text-main-title font-bebas text-center mb-3'>
					Lorem ipsum dolor sit amet
				</p>

				<p className='text-center mb-5'>2023 - Front-end & Back-end</p>

				<div className='flex flex-row gap-5 justify-center'>
					{githubLink}
					{projectLink}
				</div>
			</div>

			{/* Text block */}
			<div
				className={`flex flex-row mt-[calc(26vh)] sm:mt-[calc(32vh)] justify-center mb-24`}>
				<p className='w-[90%] sm:basis-2/3 text-center'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est
					libero, auctor a est eget, viverra aliquam justo. Proin vitae
					consectetur sapien. In feugiat vulputate leo, non luctus libero.
					Aliquam magna nibh, gravida id mi non, aliquet placerat mauris.
					Pellentesque at vulputate nunc. Ut porttitor mi sit amet sem
					sollicitudin bibendum. Aenean aliquet, orci eu condimentum fringilla,
					est dui pellentesque enim, hendrerit efficitur sapien urna quis erat.
					Sed congue ut est eget imperdiet. Ut eget ipsum nunc.
				</p>
			</div>

			{/* Video block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					className='w-[100%] sm:w-[80%]'
					src={process.env.PUBLIC_URL + '/images/projects/sample/video.jpg'}
					alt=''
				/>
			</div>

			{/* Full image block */}
			<div className='flex flex-row justify-center mb-24'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/full-image.jpg'
					}
					alt=''
				/>
			</div>

			{/* Image grid block */}
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mx-5 sm:mx-10 mb-24'>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
					}
					alt=''
				/>

				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
					}
					alt=''
				/>

				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
					}
					alt=''
				/>

				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
					}
					alt=''
				/>

				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
					}
					alt=''
				/>

				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
					}
					alt=''
				/>
				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
					}
					alt=''
				/>

				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
					}
					alt=''
				/>

				<img
					src={
						process.env.PUBLIC_URL + '/images/projects/sample/grid-block.jpg'
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
					<div className='flex flex-row gap-3 items-center text-orange hover:text-lightBlue stroke-orange hover:stroke-lightBlue cursor-pointer'>
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
					</div>

					<div className='flex flex-row text-right gap-3 items-center text-orange hover:text-lightBlue stroke-orange hover:stroke-lightBlue cursor-pointer'>
						<p className='font-bold'>Next project</p>

						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='10.784'
							height='18.411'
							viewBox='0 0 10.784 18.411'>
							<g id='Seta' transform='translate(2571.04 -4795.598) rotate(45)'>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
