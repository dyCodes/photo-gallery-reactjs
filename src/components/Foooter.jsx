import { Stack } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedinIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
    return (
        <footer>
            <p>
                Created with React.js by{" "}
                <a
                    href="http://yusufdaudu.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Yusuf Daudu
                </a>
            </p>
            {/* Social Links */}
            <Stack
                direction="row"
                spacing={2}
                sx={{ p: "20px 6px 0", justifyContent: "center" }}
            >
                <a href="http://instagram" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon />
                </a>
                <a href="http://instagram" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                </a>
                <a href="http://instagram" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon />
                </a>
            </Stack>
        </footer>
    )
}

export default Footer