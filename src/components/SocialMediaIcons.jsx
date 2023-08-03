import { FaLinkedin, FaGithub } from "react-icons/fa"

export const SocialMediaIcons = () => {
	return (
		<div className='flex justify-center md:justify-start my-10 gap-7'>
			<a
				className='hover:opacity-50 transition duration-500'
				href='https://www.linkedin.com/in/remberto-villar/'
				target='_blank'
				rel='noreferrer'
			>
				<FaLinkedin title='LinkedIn Link' size='2em' />
			</a>
			<a
				className='hover:opacity-50 transition duration-500'
				href='https://github.com/R-Villar'
				target='_blank'
				rel='noreferrer'
			>
				<FaGithub title='Github Link' size='2em' />
			</a>
		</div>
	)
}
