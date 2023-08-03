import { LineGradient } from "../components/LineGradient"
import { useMediaQuery } from "../hooks/useMediaQuery"
import { motion } from "framer-motion"
import { FaPython, FaGit, FaHtml5, FaReact, FaCss3Alt, FaBootstrap, FaNode } from "react-icons/fa"
import { SiJavascript, SiRubyonrails, SiRuby, SiMysql, SiMui, SiMongodb, SiFlask } from "react-icons/si"

export const MySkills = ({setSelectedPage}) => {
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
							<img alt='profile' className='z-10' src='assets/skills-image.png' />
						</div>
					) : (
						<img alt='profile' className='z-10' src='assets/skills-image.png' />
					)}
				</div>
			</div>

			{/* SKILLS */}
			<div className='md:flex md:justify-between mt-1 gap-32'>
				{/* EXPERIENCE */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>01</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Experience</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum orci ut tellus
						varius, id eleifend mi blandit. Suspendisse ut mi nec erat vehicula vulputate ac quis
						ligula. Curabitur leo augue, ultricies nec tortor quis, finibus dapibus risus. Aenean
					</p>
				</motion.div>

				{/* INNOVATIVE */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>02</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Innovative</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum orci ut tellus
						varius, id eleifend mi blandit. Suspendisse ut mi nec erat vehicula vulputate ac quis
						ligula. Curabitur leo augue, ultricies nec tortor quis, finibus dapibus risus. Aenean
						erat quam
					</p>
				</motion.div>

				{/* IMAGINATIVE */}
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>03</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>Imaginative</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum orci ut tellus
						varius, id eleifend mi blandit. Suspendisse ut mi nec erat vehicula vulputate ac quis
						ligula. Curabitur leo augue, ultricies nec tortor quis, finibus dapibus risus. Aenean
					</p>
				</motion.div>
			</div>
		</section>
	)
}
