import React from 'react';
import Menu from '../components/Menu';
import ContactIcons from '../components/ContactIcons';
import Blob from '../images/blob.svg';
import BlobAbout from '../images/blob_about.svg';

const Homepage = () => {
	return (
		<div className='font-inter text-base text-lightBlue mx-10'>
			<div className='relative overflow-hidden mb-36'>
				<Menu />

				<div className='flex items-end h-[calc(100vh-100px)]'>
					<picture className='absolute w-[90%] z-0 top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
						<img src={Blob} alt='' />
					</picture>

					<div className='flex flex-col w-96 mb-10 z-[999]'>
						<h1 className='font-bebas text-main-title text-orange'>
							Front-end developer
						</h1>
						<p className='pb-4'>
							<span className='text-orange'>Front-end Developer</span>{' '}
							specialized in building and designing{' '}
							<span className='text-orange'>awesome digital experiences</span>
						</p>
						<ContactIcons />
					</div>
				</div>
			</div>

			<div className='relative overflow-hidden'>
				<picture className='absolute w-[80%] top-[40%] translate-y-[-50%] translate-x-[-10%] rotate-180'>
					<img src={BlobAbout} alt='' />
				</picture>

				<div className='flex flex-row justify-end'>
					<div className='basis-1/2 z-[999]'>
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

						<div className='mb-28'>
							<p className='font-bebas text-section-subtitle text-orange mb-3'>
								Skills
							</p>

							<div className='flex flex-row justify-between'>
								<ul className='list-disc'>
									<li>Javascript (ES6+)</li>
									<li>React</li>
									<li>Typescript</li>
									<li>NodeJS</li>
									<li>MongoDB</li>
								</ul>

								<ul className='list-disc'>
									<li>Express</li>
									<li>HTML</li>
									<li>CSS</li>
									<li>Tailwind</li>
									<li>Bootstrap</li>
								</ul>

								<ul className='list-disc'>
									<li>Figma</li>
									<li>Adobe XD</li>
									<li>Photoshop</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
