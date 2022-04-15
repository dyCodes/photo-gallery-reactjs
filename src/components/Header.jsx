import { Chip, Stack, Typography } from "@mui/material";
import SearchForm from "./SearchForm";

const Header = (props) => {
    return (
        <header>
            <Typography variant="h4" className="_title" component="h1" mb={3}>
                <a href="/">Photo<span>Gallery</span></a>
            </Typography>

            <SearchForm searchVal={props.searchVal} setSearchVal={props.setSearchVal} />
            <CategoryList />
        </header>
    )
}



const CategoryList = () => {
    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{ marginTop: "20px", p: "6px", justifyContent: "center" }}
        >
            <Chip label="Random" color="primary" onClick={catListOnclick} />
            <Chip label="Art" variant="outlined" onClick={catListOnclick} />
            <Chip label="Fashion" variant="outlined" onClick={catListOnclick} />
            <Chip label="Tech" variant="outlined" onClick={catListOnclick} />
        </Stack>
    )
}

const catListOnclick = (e) => {
    console.log(e.target.innerText);
}

export default Header