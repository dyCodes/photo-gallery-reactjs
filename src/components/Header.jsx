import { Chip, Stack, Typography, IconButton, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const Header = () => {
    return (
        <header>
            <Typography variant="h4" className="_title" component="h1" mb={3}>
                <a href="/">Photo<span>Gallery</span></a>
            </Typography>

            <SearchForm />

            <Stack
                direction="row"
                spacing={1}
                sx={{ marginTop: "20px", p: "6px", justifyContent: "center" }}
            >
                <Chip label="Random" color="primary" />
                <Chip label="Art" variant="outlined" />
                <Chip label="Fashion" variant="outlined" />
                <Chip label="Tech" variant="outlined" />
            </Stack>

        </header>
    )
}

const SearchForm = () => {
    return (
        <form style={{ margin: "24px 0" }}>
            <FormControl fullWidth variant="outlined">
                <OutlinedInput
                    id="search-input"
                    placeholder="Search..."
                    size="small"
                    sx={{ p: 0, overflow: 'hidden' }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton type="submit"
                                sx={{
                                    width: "55px",
                                    color: "white",
                                    bgcolor: "primary.main",
                                    borderRadius: 0,
                                    ":hover": {
                                        color: "white",
                                        bgcolor: "primary.main",
                                    }
                                }}
                                aria-label="search">
                                <SearchIcon fontSize="30px" />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </form>
    )
}



export default Header