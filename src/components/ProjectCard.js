import React from 'react';
import { Link } from 'react-router-dom';
// import Button from './Button';

const ProjectCard = ({ position, project }) => {
	const flexDirection =
		position % 2 ? 'flex-col sm:flex-row-reverse' : 'flex-col sm:flex-row';

	return (
		<div className={`flex ${flexDirection} gap-10 items-center`}>
			<picture className='basis-0 sm:basis-1/2'>
				<img
					className='rounded-2xl'
					src={process.env.PUBLIC_URL + `/images/thumbnails/${project.image}`}
					alt=''
				/>
			</picture>

			<div className='flex flex-col basis-0 sm:basis-1/2'>
				<p className='font-bebas text-section-subtitle text-orange mb-1'>
					{project.title}
				</p>

				<p className='text-orange mb-3'>
					{project.year} - {project.type}
				</p>

				<hr className='text-orange w-12 border-2 mb-3 mx-auto sm:mx-0' />

				<p className='mb-3'>{project.description}</p>

				<p className='text-orange mb-4'>{project.technology}</p>

				{/* <Button text={'View project'} url={'/project'} /> */}

				<div className='flex flex-row gap-5 justify-center sm:justify-start'>
					<Link to={project.github}>
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

					<Link to={project.projectUrl}>
						<svg
							className='fill-lightBlue hover:fill-orange'
							id='open_in_new_FILL0_wght400_GRAD0_opsz40'
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
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
