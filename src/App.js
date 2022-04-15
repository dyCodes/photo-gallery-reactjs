import { useEffect, useState } from 'react';
import './App.css';
import { Container, Divider } from "@mui/material";
import Footer from "./components/Foooter";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

const App = () => {
  const [photos, setPhotos] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [term, setTerm] = useState("Random")

  useEffect(() => {
    setPhotos([
      {
        img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
        title: "Breakfast",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
      },
      {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
      },
      {
        img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
        title: "Coffee",
        cols: 2,
      },
      {
        img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
        title: "Hats",
        cols: 2,
      },
      {
        img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
        title: "Basketball",
      },
      {
        img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
        title: "Fern",
      },
      {
        img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
        title: "Mushrooms",
        rows: 2,
        cols: 2,
      },
      {
        img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
        title: "Tomato basil",
      },
      {
        img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
        title: "Sea star",
      },
      {
        img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
        title: "Bike",
        cols: 2,
      },
    ])
  }, [])

  const getPhotos = (seacrh_term) => {
    // Term
    setTerm(seacrh_term)
    // Fetch
    setPhotos([
      {
        img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
        title: "Burger",
      },
      {
        img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
        title: "Camera",
      },
    ])
  }

  return (
    <div className="App">

      <Container className='_wrapper' maxWidth="md" sx={{ padding: { sm: "40px", } }}>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} term={term} getPhotos={getPhotos} />

        <Divider sx={{ margin: "20px 0" }} />

        <Gallery photos={photos} term={term} />
      </Container>

      <Footer />

    </div>
  );
}

export default App;
