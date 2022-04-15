import { IconButton, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const SearchForm = ({ searchVal }) => {
    const formOnSubmit = (e) => {
        e.preventDefault()
        console.log(searchVal);
    }

    return (
        <form style={{ margin: "24px 0" }} onSubmit={formOnSubmit}>
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



export default SearchForm