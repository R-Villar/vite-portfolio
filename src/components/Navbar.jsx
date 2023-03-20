import {useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Fade from "@mui/material/Fade";
import Container from "@mui/material/Container";

export const Navbar = () => {
	return (
		<AppBar position='static'>
			<Stack
				direction='row'
				justifyContent='flex-end'
				alignItems='center'
				spacing={2}
			>
				<Toolbar>
					<Tooltip
						title='GitHub profile'
						TransitionComponent={Fade}
						TransitionProps={{timeout: 200}}
					>
						<IconButton href='https://github.com/R-Villar'>
							<GitHubIcon fontSize='large' />
						</IconButton>
					</Tooltip>
					<Tooltip
						title='LinkedIn profile'
						TransitionComponent={Fade}
						TransitionProps={{timeout: 200}}
					>
						<IconButton href='https://www.linkedin.com/in/remberto-villar/'>
							<LinkedInIcon fontSize='large' />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</Stack>
		</AppBar>
	);
};
