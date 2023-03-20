import {Navbar} from "./Navbar";
import {About} from "./About";
import Box from "@mui/material/Box";

export const Home = () => {
	return (
		<Box  sx={{p: 5, m: 5}}>
			<Navbar />
			<h1>My portfolio</h1>
			<About />
		</Box>
	);
};
