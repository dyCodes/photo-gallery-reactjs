import { IconButton, FormControl, OutlinedInput, InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

const SearchForm = ({ searchTerm, setSearchTerm, getPhotos }) => {
    const onformSubmit = e => {
        e.preventDefault()
		getPhotos(searchTerm.trim());
    }

    return (
        <form style={{ margin: "24px 0" }} onSubmit={onformSubmit}>
            <FormControl fullWidth variant="outlined">
                <OutlinedInput
                    id="search-input"
                    placeholder="Search..."
                    size="small"
                    sx={{ p: 0, overflow: 'hidden' }}
                    required
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}

                    endAdornment={
                        <InputAdornment position="end" sx={{ m: 0 }}>
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