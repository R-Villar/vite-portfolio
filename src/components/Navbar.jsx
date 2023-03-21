import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Fade from "@mui/material/Fade";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import Grid from "@mui/material/Grid";

export const Navbar = () => {
	return (
		<AppBar>
			<Grid
				container
				display='flex'
				direction='row'
				justifyContent='space-between'
			>
				<IconButton href='/'>
					<LogoDevIcon fontSize='large' />
				</IconButton>

				<Box>
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
				</Box>
			</Grid>
		</AppBar>
	);
};
