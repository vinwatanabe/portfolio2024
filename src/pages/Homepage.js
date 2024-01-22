import React, { useEffect } from 'react';
import blobTop from '../animation/animations';
import Menu from '../components/Menu';
import ContactIcons from '../components/ContactIcons';
import BlobAbout from '../assets/images/blob_about.svg';
import ProjectCard from '../components/ProjectCard';
import ProjectDescription from '../assets/json/projectDescription.json';

const Homepage = () => {
	useEffect(() => {
		blobTop('#blob-top path');
	}, []);

	return (
		<div className='font-inter text-base text-lightBlue' id='home'>
			<div className='relative overflow-hidden mb-40'>
				<picture className='absolute z-0 top-[40%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
					<svg
						id='blob-top'
						className='mx-auto w-[100vh] sm:w-auto h-[180vh]'
						viewBox='0 0 1427.9 1444.3'
						xmlns='http://www.w3.org/2000/svg'>
						<filter id='b'>
							<feGaussianBlur in='SourceGraphic' stdDeviation='35' />
						</filter>
						<defs>
							<linearGradient id='a' x1='1.001' x2='.283' y1='.369' y2='.272'>
								<stop stopColor='#e65805' offset='0' />
								<stop stopColor='#006588' offset='1' />
							</linearGradient>
						</defs>
						<path
							transform='translate(223.958 719.536) rotate(-49)'
							d='M275,31c200,0,139,168,366,299,139,74,111,264,56,326-66,75-217,50-326,50.958C170,708-104,570-104,373.906S75,31,275,31Z'
							fill='url(#a)'
							filter='url(#b)'
							data-name='Path 1'
						/>
					</svg>
				</picture>

				<Menu />

				<div className='flex items-end h-[calc(100vh-100px)] mx-10'>
					<div className='flex flex-col w-96 mb-10 z-[999]'>
						<h1 className='font-bebas text-orange text-7xl sm:text-main-title text-center sm:text-start'>
							Front-end developer
						</h1>
						<p className='pb-4 text-center sm:text-start'>
							<span className='text-orange'>Front-end Developer</span>{' '}
							specialized in building and designing{' '}
							<span className='text-orange'>awesome digital experiences</span>
						</p>
						<ContactIcons justification={'sm:justify-start justify-center'} />
					</div>
				</div>
			</div>

			<div className='relative overflow-hidden' id='about'>
				<picture className='absolute top-[45%] translate-y-[-50%] translate-x-[-20%] rotate-180 hidden sm:block'>
					<img src={BlobAbout} alt='' />
				</picture>

				<div className='flex flex-row justify-end mx-5 sm:mx-10'>
					<div className='sm:basis-1/2 z-[999] text-center sm:text-start'>
						<div className='mb-20'>
							<p className='font-bebas text-section-title text-orange mb-3'>
								\\About me
							</p>
							<p>
								I'm Vinicius, a developer and former art director/UI designer
								with experience crafting immersive experiences for advertising
								agencies such as ID\TBWA, AlmapBBDO and McGarryBowen. While
								working for these agencies, I had the opportunity to work with
								global clients like Unicef, Intuit, M&M's, and more. From
								shaping advertising landscapes to designing web interfaces, my
								journey is a fusion of visual artistic skills and technical
								programming knowledge.
							</p>
							<p>
								My passion lies in the transformative power of design and
								technology — a belief that's driven my career from the world of
								art direction and design to coding solutions. I've dedicated my
								craft to making people lives easier through innovative
								solutions, leaving a lasting impact on user experiences.
							</p>
						</div>

						<div className='mb-20'>
							<p className='font-bebas text-section-subtitle text-orange mb-3'>
								Experience
							</p>
							<ul className='font-bold'>
								<li>
									<span className='text-orange'>
										ID\TBWA - Senior Art Director / UI Designer |
									</span>{' '}
									2018 - 2021
								</li>
								<li>
									<span className='text-orange'>Agência3 - Art Director |</span>{' '}
									2017 - 2018
								</li>
								<li>
									<span className='text-orange'>
										Almap BBDO - Art Director |
									</span>{' '}
									2016 - 2017
								</li>
								<li>
									<span className='text-orange'>
										ID\TBWA - Art Direction Assistant / UI Designer |
									</span>{' '}
									2014 - 2016
								</li>
								<li>
									<span className='text-orange'>
										McGarryBowen - Art Direction Assistant |
									</span>{' '}
									2013 - 2014
								</li>
								<li>
									<span className='text-orange'>Kanui - Web Designer |</span>{' '}
									2013
								</li>
								<li>
									<span className='text-orange'>
										Agência Fórmula - Art Direction Intern |
									</span>{' '}
									2011 - 2013
								</li>
							</ul>
						</div>

						<div className='mb-40'>
							<p className='font-bebas text-section-subtitle text-orange mb-3'>
								Skills
							</p>

							<div className='flex flex-col sm:flex-row'>
								<ul className='sm:list-disc columns-1 sm:columns-3 sm:gap-20'>
									<li>Javascript (ES6+)</li>
									<li>React</li>
									<li>Typescript</li>
									<li>NodeJS</li>
									<li>MongoDB</li>
									<li>Express</li>
									<li>HTML</li>
									<li>CSS</li>
									<li>Tailwind</li>
									<li>Bootstrap</li>
									<li>Figma</li>
									<li>Adobe XD</li>
									<li>Photoshop</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className='mx-5 sm:mx-10 mb-40 text-center sm:text-start'
				id='projects'>
				<p className='font-bebas text-orange text-section-title mb-8'>
					\\Projects
				</p>

				<div className='flex flex-col gap-28'>
					{ProjectDescription.map((project, index) => {
						return (
							<div key={index}>
								<ProjectCard position={index} project={project} />
							</div>
						);
					})}
				</div>
			</div>

			<div
				className='flex flex-row mx-5 sm:mx-10 justify-center pb-24'
				id='contact'>
				<div className='flex flex-col sm:basis-1/2 text-center'>
					<p className='font-bebas text-orange text-section-title mb-6'>
						\\Get in touch
					</p>
					<p className='mb-6'>
						Thanks for exploring my portfolio! I'm thrilled you stopped by. Got
						questions, ideas, or just want to chat? I'd love to hear from you!
						Drop me a message—I'm just a click away. Let's make something
						awesome together!{' '}
					</p>
					<ContactIcons justification={'justify-center'} />
				</div>
			</div>
		</div>
	);
};

export default Homepage;
