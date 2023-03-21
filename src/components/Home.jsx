import {Navbar} from "./Navbar";
import {About} from "./About";
import { Welcome } from "./Welcome";
import Box from "@mui/material/Box";

export const Home = () => {
	return (
		<Box>
			<Navbar />
            <Welcome />
			<h1>My portfolio</h1>
			<About />
		</Box>
	);
};
