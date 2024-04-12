import { LineGradient } from "../components/LineGradient"
import { motion } from "framer-motion"
import { BiLinkExternal } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"

export const Projects = ({ setSelectedPage }) => {
	return (
		<section id='projects' className='py-44'>
			{/* HEADINGS */}
			<motion.div
				className='md:w-2/5 mx-auto text-center'
				initial='hidden'
				whileInView='visible'
				onViewportEnter={() => setSelectedPage("projects")}
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
			</motion.div>

			{/* PROJECTS */}
			<div className='mt-10'>
				{/* Project script */}
				<div className='max-w-md mx-auto bg-project-card rounded-lg overflow-hidden md:max-w-2xl mb-8'>
					<div className='md:flex'>
						<div className='md:shrink-0'>
							<img
								className='h-48 w-full object-cover md:h-full md:w-48'
								src='../assets/organize-script.webp'
								alt='Modern building architecture'
							/>
						</div>
						<div className='p-8'>
							<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								Organize Files
							</div>
							<p className='mt-2 text-slate-500'>
								This is a simple script to organize files in a directory. It will create
								folders for each file type and move the files to their respective folders. I
								came up with this script because I wanted a simple way to organize my files.
							</p>
							<p className='block mt-1 text-md leading-tight font-medium text-black'>Python</p>
							<div className='flex flex-row gap-x-2.5 py-2'>
								<a
									href='https://github.com/R-Villar/organize-files'
									target='_blank'
									rel='noreferrer'
								>
									<FaGithub title='go to site' size='1.5rem' color='black' />
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Project shirt */}
				<div className='max-w-md mx-auto bg-project-card rounded-lg overflow-hidden md:max-w-2xl mb-8'>
					<div className='md:flex'>
						<div className='md:shrink-0'>
							<img
								className='h-48 w-full object-cover md:h-full md:w-48'
								src='../assets/shirt-app.webp'
								alt='Modern building architecture'
							/>
						</div>
						<div className='p-8'>
							<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								Customize Shirt
							</div>
							<p className='mt-2 text-slate-500'>
								A Fullstack web application using OpenAI to generate any kind of image to
								customize the shirt to your liking, you also have a color picker to change the
								color of the shirt. The outcome are limitless.
							</p>
							<p className='block mt-1 text-md leading-tight font-medium text-black'>
								Express.js, Node.js, Three.js, React, JavaScript, TailwindCSS, OpenAI
							</p>
							<div className='flex flex-row gap-x-2.5 py-2'>
								<a
									href='https://github.com/R-Villar/customize'
									target='_blank'
									rel='noreferrer'
								>
									<FaGithub title='go to site' size='1.5rem' color='black' />
								</a>
								<a
									href='https://shirt-app-3byc.onrender.com/'
									target='_blank'
									rel='noreferrer'
								>
									<BiLinkExternal title='go to site' size='1.5rem' color='black' />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* Project technotes */}
				<div className='max-w-md mx-auto bg-project-card rounded-lg overflow-hidden md:max-w-2xl mb-8'>
					<div className='md:flex'>
						<div className='md:shrink-0'>
							<img
								className='h-48 w-full object-cover md:h-full md:w-48'
								src='../assets/technotes.webp'
								alt='Modern building architecture'
							/>
						</div>
						<div className='p-8'>
							<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								TechNotes
							</div>
							<p className='mt-2 text-slate-500'>
								A Fullstack web application for a repair shop. In the application we have
								different roles ranging from employees, managers and admins. anyone regardless
								of their role can create notes, and complete them. Employees can view and edit
								the notes but only managers or admins can delete the notes. Manager and admins
								are the only ones that can access the user settings to both create new user or
								delete them.
							</p>
							<p className='block mt-1 text-md leading-tight font-medium text-black'>
								MongoDB, Express.js, Node.js, React, Redux, JavaScript
							</p>
							<div className='flex flex-row gap-x-2.5 py-2'>
								<a
									href='https://github.com/R-Villar/fitness-app'
									target='_blank'
									rel='noreferrer'
								>
									<FaGithub title='go to site' size='1.5rem' color='black' />
								</a>
								<a href='https://notes-t5qx.onrender.com/' target='_blank' rel='noreferrer'>
									<BiLinkExternal title='go to site' size='1.5rem' color='black' />
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* Project evogym */}
				<div className='max-w-md mx-auto bg-project-card rounded-lg shadow-md overflow-hidden md:max-w-2xl'>
					<div className='md:flex'>
						<div className='md:shrink-0'>
							<img
								className='h-48 w-full object-cover md:h-full md:w-48'
								src='../assets/evon-gym.webp'
								alt='Project-1'
							/>
						</div>
						<div className='p-8'>
							<div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
								EVoGym
							</div>
							<p className='mt-2 text-slate-500'>
								A complete front-end only application. This application was created with
								React, Typescript and Framer Motion. The application if fully responsive with
								both desktop and mobile view.
							</p>
							<p className='block mt-1 text-md leading-tight font-medium text-black'>
								React, Typescript, TailwindCSS
							</p>
							<div className='flex flex-row gap-x-2.5 py-2'>
								<a
									href='https://github.com/R-Villar/fitness-app'
									target='_blank'
									rel='noreferrer'
								>
									<FaGithub title='go to site' size='1.5rem' color='black' />
								</a>
								<a href='https://evogym-one.vercel.app/' target='_blank' rel='noreferrer'>
									<BiLinkExternal title='go to site' size='1.5rem' color='black' />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
