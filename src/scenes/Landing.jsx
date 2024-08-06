import { SocialMediaIcons } from "../components/SocialMediaIcons"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { motion } from "framer-motion"

export const Landing = () => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

	return (
		<section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10'>
			{/* IMAGE SECTION */}
			<div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
				{isAboveMediumScreens ? (
					<div
						className='relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                            before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full
                            before:border-2 before:border-blue before:z-[-1]'
					>
						<img
							alt='profile'
							sizes='2300px'
							width='2300px'
							height='3000px'
							className='transition duration-300 ease-in-out hover:scale-105 z-10 w-full 
                                max-w-[400px] md:max-w-[600px]'
							src='assets/Remy.webp'
						/>
					</div>
				) : (
					<img
						alt='profile'
						sizes='2300px'
						width='2300px'
						height='3000px'
						className='transition duration-300 ease-in-out hover:scale-105 z-10 w-full
                            max-w-[400px] md:max-w-[600px]'
						src='assets/Remy.webp'
					/>
				)}
			</div>

			{/* MAIN SECTION */}
			<div className='md:flex-1 z-30 basis-3.5/5 mt-12 md:mt-32'>
				{/* HEADINGS */}
				<motion.div
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='text-6xl font-playfair z-9 text-center md:text-start'>
						Remberto {""}
						<span
							className='xs:relative xs:text-deep-blue xs:font-semibold z-20
                                xs:before:content-brush before:absolute before:-left-[25px]
                                before:-top-[70px] before:z-[-1]'
						>
							Villar
						</span>
					</p>

					<p className='mt-10 mb-7 text-sm text-center md:text-start'>
						Hello, and welcome to my portfolio! I'm a NYC-based software engineer with a versatile
						skill set, proficient in languages such as Python, JavaScript, and Ruby. I enjoy
						leveraging my experience with frameworks and libraries like React, Node.js, and Ruby
						on Rails to build everything from responsive web applications to efficient backend
						systems. I'm passionate about using my skills to create technology that matters. My
						journey began with the thrill of building my first computer as a teenager – a moment
						that sparked a lifelong fascination with technology. Despite facing challenges along
						the way, including navigating the COVID-19 pandemic and going to school full-time
						while working overnight, my resilience and determination only grew stronger. I'm a
						proud graduate of Flatiron School and hold an associate's degree in Computer
						Information Systems. I'm eager to collaborate with a team to create innovative
						solutions that benefit the community.
					</p>
				</motion.div>

				{/* CALL TO ACTIONS */}
				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<a
						className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                            hover:bg-blue hover:text-white transition duration-500'
						href='mailto:rembertovillar@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						Contact Me
					</a>
					<a
						className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
						href='./assets/Remberto_Villar_Resume.pdf'
						target='_blank'
						rel='noreferrer'
					>
						<div
							className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center
                                justify-center font-playfair px-10'
						>
							Resume
						</div>
					</a>
				</motion.div>

				<motion.div
					className='flex mt-5 justify-center md:justify-start'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<SocialMediaIcons />
				</motion.div>
			</div>
		</section>
	)
}
