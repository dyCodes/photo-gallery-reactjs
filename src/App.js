import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { CircularProgress, Container, Divider, Typography } from "@mui/material";
import Footer from "./components/Foooter";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

// API INFO
const baseURL = "https://api.unsplash.com"
const client_id = "Xhp7L8NIlvsE3R3Ue7rwbyivRAkjgi9gI1RZUV_bCkg"

const App = () => {
  const [term, setTerm] = useState("Random")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    // Fetch photos
    axios
      .get(baseURL + `/photos?page=1&per_page=20&client_id=${client_id}`)
      .then(res => {
        setPhotos(res.data)
        // Hide preloader after 1s
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      })
  }, [])

  const getPhotos = (query) => {
    // Fetch photos
    setLoading(true)
    axios
      .get(baseURL + `/search/photos?query=${query}&per_page=20&client_id=${client_id}`)
      .then(res => {
        setPhotos(res.data.results)
        setTerm(query)
        // Hide preloader after 1s
        setTimeout(() => {
          setLoading(false)
        }, 1000);
      })
  }

  return (
    <div className="App">

      <Container className='_wrapper' maxWidth="md" sx={{ padding: { sm: "20px 40px", } }}>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} term={term} getPhotos={getPhotos} />

        <Divider sx={{ margin: "20px 0" }} />
        <Typography variant="h5" component="h2" mb={3} textTransform="capitalize" sx={{ opacity: .8 }}>
          {term}
        </Typography>

        {loading ? (
          <CircularProgress sx={{ m: '98px 0' }} />
        ) : (
          <Gallery photoList={photos} term={term} />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
