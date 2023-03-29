import {LineGradient} from "../components/LineGradient";
import {useForm} from "react-hook-form";
import {motion} from "framer-motion";

export const Contact = () => {
	const {
		register,
		trigger,
		formState: {errors},
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<section id='contact' className='py-48'>
			{/* HEADINGS */}
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{once: false, amount: 0.5}}
				transition={{duration: 0.5}}
				variants={{
					hidden: {opacity: 0, x: -50},
					visible: {opacity: 1, x: 0},
				}}
			>
				<div>
					<p className='font-playfair font-semibold text-4xl'>
						<span className='text-yellow'>CONTACT ME</span> TO GET
						STARTED
					</p>
					<div className='flex md:justify-end my-5'>
						<LineGradient />
					</div>
				</div>
			</motion.div>
		</section>
	);
};