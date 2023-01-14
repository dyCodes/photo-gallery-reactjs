import { Typography } from "@mui/material";
import ButtonsTab from "./ButtonsTab";
import SearchForm from "./SearchForm";

const Header = ({ searchTerm, setSearchTerm, term, getPhotos }) => {
  return (
    <header>
      <Typography variant="h4" className="_title" component="h1" mb={3}>
        <a href="/">Photo<span>Gallery</span></a>
      </Typography>
      <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} getPhotos={getPhotos} />
      <ButtonsTab getPhotos={getPhotos} term={term} />
    </header>
  )
}

export default Header