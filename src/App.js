import { useEffect, useState } from 'react';
import './App.css';
import { Container, Divider } from "@mui/material";
import Footer from "./components/Foooter";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import axios from 'axios';

const baseURL = "https://api.unsplash.com"
const client_id = "Xhp7L8NIlvsE3R3Ue7rwbyivRAkjgi9gI1RZUV_bCkg"

const App = () => {
  const [term, setTerm] = useState("Random")
  const [searchTerm, setSearchTerm] = useState("")
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    // Fetch photos
    axios
      .get(baseURL + `/photos?page=1&per_page=20&client_id=${client_id}`)
      .then(res => {
        setPhotos(res.data)
        console.log("1st Run Axios: ")
        console.log(res.data);
      })
  }, [])

  const getPhotos = (query) => {
    // Fetch photos
    axios
      .get(baseURL + `/search/photos?query=${query}&per_page=20&client_id=${client_id}`)
      .then(res => {
        setPhotos(res.data.results)
        setTerm(query)
        console.log(res.data.results);
      })
  }

  return (
    <div className="App">

      <Container className='_wrapper' maxWidth="md" sx={{ padding: { sm: "20px 40px", } }}>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} term={term} getPhotos={getPhotos} />

        <Divider sx={{ margin: "20px 0" }} />

        <Gallery photoList={photos} term={term} />
      </Container>

      <Footer />

    </div>
  );
}

export default App;
