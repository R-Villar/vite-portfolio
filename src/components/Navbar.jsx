import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Fade from "@mui/material/Fade";
import CssBaseline from "@mui/material/CssBaseline";
import {createTheme, ThemeProvider} from "@mui/material/styles";



export const Navbar = () => {

	return (
		<Box sx={{display: "flex"}}>
			<CssBaseline />
			<AppBar component='nav' position='fixed'>
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
		</Box>
	);
};
