import { LineGradient } from "../components/LineGradient"
import { motion } from "framer-motion"
import { BiLinkExternal } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"

export const Projects = () => {
	return (
		<section id='projects' className='py-44'>
			{/* HEADINGS */}
			<motion.div
				className='md:w-2/5 mx-auto text-center'
				initial='hidden'
				whileInView='visible'
				viewport={{ once: false, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className='font-playfair font-semibold text-4xl'>
						MY <span className='text-red'>PRO</span>JECTS
					</p>
					<div className='flex justify-center mt-5'>
						<LineGradient width='w-1/3' />
					</div>
				</div>

				<p className='mt-10 mb-10'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem non mauris auctor
					auctor. Nullam felis elit,
				</p>
			</motion.div>

			{/* PROJECTS */}
			<div>
				{/* ROW 1 */}
				<div class='max-w-md mx-auto bg-project-card rounded-lg overflow-hidden md:max-w-2xl mb-8'>
					<div class='md:flex'>
						<div class='md:shrink-0'>
							<img
								class='h-48 w-full object-cover md:h-full md:w-48'
								src='../assets/evon-gym.webp'
								alt='Project-1'
							/>
						</div>
						<div class='p-8'>
							<div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								Gym app
							</div>
							<a
								href='#'
								class='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
							>
								Incredible accommodation for your team
							</a>
							<p class='mt-2 text-slate-500'>
								Looking to take your team away on a retreat to enjoy awesome food and take in
								some sunshine? We have a list of places to do just that.
							</p>
							<div className='flex flex-row gap-x-2.5 py-2'>
								<a
									href='https://github.com/R-Villar/fitness-app'
									target='_blank'
									rel='noreferrer'
								>
									<FaGithub title='go to site' size='1.5rem' color='black' />
								</a>
								<a>
									<BiLinkExternal title='go to site' size='1.5rem' color='black' />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div class='max-w-md mx-auto bg-project-card rounded-lg shadow-md overflow-hidden md:max-w-2xl'>
					<div class='md:flex'>
						<div class='md:shrink-0'>
							<img
								class='h-48 w-full object-cover md:h-full md:w-48'
								src='../assets/project-1.jpeg'
								alt='Modern building architecture'
							/>
						</div>
						<div class='p-8'>
							<div class='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								Company retreats
							</div>
							<a
								href='#'
								class='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
							>
								Incredible accommodation for your team
							</a>
							<p class='mt-2 text-slate-500'>
								Looking to take your team away on a retreat to enjoy awesome food and take in
								some sunshine? We have a list of places to do just that.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
