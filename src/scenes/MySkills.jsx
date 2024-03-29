import { LineGradient } from "../components/LineGradient"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import { FaPython, FaGit, FaHtml5, FaReact, FaCss3Alt, FaBootstrap, FaNode } from "react-icons/fa"
import { SiJavascript, SiRubyonrails, SiRuby, SiMysql, SiMui, SiMongodb, SiFlask } from "react-icons/si"

export const MySkills = ({ setSelectedPage }) => {
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

	return (
		<section id='skills' className='pt-10 pb-24'>
			{/* HEADER AND IMAGE SECTION */}
			<div className='md:flex md:justify-between md:gap-16 mt-32'>
				<motion.div
					className='md:w-1/3'
					initial='hidden'
					whileInView='visible'
					onViewportEnter={() => setSelectedPage("skills")}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='font-playfair font-semibold text-4xl mb-5'>
						MY <span className='text-red'>SKILLS</span>
					</p>
					<LineGradient width='w-1/3' />
					<div className='flex flex-row'>
						<ul className='mt-5 mb-7 w-full'>
							<li className='flex mt-1'>
								<FaPython title='Python' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>Python</p>
							</li>
							<li className='flex mt-1'>
								<SiJavascript title='JavaScript' size='1.8em' /> &nbsp;{" "}
								<p className='text-red font-bold'>JavaScript</p>
							</li>
							<li className='flex mt-1'>
								<SiRuby title='Ruby' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>Ruby</p>
							</li>
							<li className='flex mt-1'>
								<SiRubyonrails title='Ruby on Rails' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>Rails</p>
							</li>
							<li className='flex mt-1'>
								<FaHtml5 title='HTML5' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>HTML</p>
							</li>
							<li className='flex mt-1'>
								<FaNode title='Node' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>Node.js</p>
							</li>
							<li className='flex mt-1'>
								<SiFlask title='Flask' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>Flask</p>
							</li>
						</ul>

						<ul className='mt-5 mb-7 w-full'>
							<li className='flex mt-1'>
								<SiMysql title='MySQL' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>MySQL</p>
							</li>
							<li className='flex mt-1'>
								<SiMongodb title='MongoDB' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>MongoDB</p>
							</li>

							<li className='flex mt-1'>
								<FaGit title='Git' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>Git</p>
							</li>
							<li className='flex mt-1'>
								<FaReact title='React' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>React</p>
							</li>
							<li className='flex mt-1'>
								<FaCss3Alt title='CSS' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>CSS</p>
							</li>
							<li className='flex mt-1'>
								<FaBootstrap title='Bootstrap' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>Bootstrap</p>
							</li>
							<li className='flex mt-1'>
								<SiMui title='Material ui' size='2em' /> &nbsp;{" "}
								<p className='text-red font-bold'>Material UI</p>
							</li>
						</ul>
					</div>
				</motion.div>
				<div className='mt-15 md:mt-0'>
					{isAboveMediumScreens ? (
						<div
							className='relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'
						>
							<img
								alt='profile'
								sizes='705px'
								width='705px'
								height='261px'
								className='z-10'
								src='assets/skills-image.webp'
							/>
						</div>
					) : (
						<img
							alt='profile'
							sizes='705px'
							width='705px'
							height='261px'
							className='z-10'
							src='assets/skills-image.webp'
						/>
					)}
				</div>
			</div>
		</section>
	)
}
