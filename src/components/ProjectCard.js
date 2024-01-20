import React from 'react';
import ProjectImage from '../images/project-image.jpg';
import Button from './Button';

const ProjectCard = ({ position }) => {
	const flexDirection = position % 2 ? 'flex-row-reverse' : 'flex-row';

	return (
		<div className={`flex ${flexDirection} gap-10 items-center`}>
			<picture className='basis-1/2'>
				<img className='rounded-2xl' src={ProjectImage} alt='' />
			</picture>

			<div className='flex flex-col basis-1/2'>
				<p className='font-bebas text-section-subtitle text-orange mb-1'>
					Recco
				</p>

				<p className='text-orange mb-3'>2023 - Frontend & Backend</p>

				<hr className='text-orange w-12 border-2 mb-3' />

				<p className='mb-3'>
					A web app for visualizing personalized Spotify data. View your top
					artists, top tracks, recently played tracks, and detailed audio
					information about each track. Create and save new playlists of
					recommended tracks based on your existing playlists and more.
				</p>

				<p className='text-orange mb-4'>React | NodeJS | Redux | MongoDB</p>

				<Button text={'View project'} url={'/project'} />
			</div>
		</div>
	);
};

export default ProjectCard;
