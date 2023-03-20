import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
export const About = () => {
	return (
		<Stack direction='row' spacing={6} sx={{display: "flex-end"}}>
			<Box sx={{width: "100%", maxWidth: 500}}>
				<p>About me</p>
				<Typography variant='body1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Nunc nec tellus vitae libero pellentesque fermentum at nec
					elit. Quisque convallis tellus sed leo maximus mattis.
					Quisque ultricies nec urna a pretium. Praesent sollicitudin
					odio ut orci lacinia, id auctor urna blandit. Fusce sem
					ante, sodales vitae metus sit amet, ultrices fringilla nibh.
					Integer tincidunt urna et finibus consectetur. Aliquam eu
					turpis eget est feugiat tristique sed eget ante. Ut blandit
					pharetra mattis. Vestibulum venenatis, ipsum pellentesque
					porttitor aliquam, lacus ante efficitur nibh, eget elementum
					nisi odio at ex. Pellentesque habitant morbi tristique
					senectus et netus et malesuada fames ac turpis egestas. Cras
					aliquam metus blandit quam dignissim, vel dapibus odio
					dapibus. Vestibulum iaculis risus ut dapibus feugiat.
					Vestibulum ante ipsum primis in faucibus orci luctus et
					ultrices posuere cubilia curae; Nunc eget mattis sapien.
					Aliquam interdum egestas nunc, eget mollis metus dignissim
					sed.
				</Typography>
			</Box>
			<Box sx={{width: "100%", maxWidth: 500, display: "center"}}>
				<Card sx={{maxWidth: 500}}>
					<CardMedia
						component='img'
						image='src/assets/images/Remy.jpg'
						alt='Remy'
					/>
				</Card>
			</Box>
		</Stack>
	);
};
