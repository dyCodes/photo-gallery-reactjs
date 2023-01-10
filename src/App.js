import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { CircularProgress, Container, Divider, Typography } from "@mui/material";
import Footer from "./components/Foooter";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Pagination from "./components/Pagination";

// API INFO
const baseURL = "https://api.unsplash.com";
const client_id = "Xhp7L8NIlvsE3R3Ue7rwbyivRAkjgi9gI1RZUV_bCkg";

const App = () => {
  const [term, setTerm] = useState("Random");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    // Fetch photos
    axios
      .get(baseURL + `/search/photos?query=random&per_page=20&page=1&client_id=${client_id}`)
      .then((res) => {
        updatePhotos(res);
      });
  }, []);

  const updatePhotos = (res, page) => {
    setPhotos(res.data.results);
    setTotalPages(res.data.total_pages);
    setCurrentPage(page ? page : 1);
    // Hide preloader after 1s
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const getPhotos = (query) => {
    setLoading(true);
    // Fetch photos
    axios
      .get(baseURL + `/search/photos?query=${query}&per_page=20&page=1&client_id=${client_id}`)
      .then((res) => {
        setTerm(query);
        updatePhotos(res);
        window.history.replaceState("", "", `/${query.toLowerCase()}?page=1`);
      });
  };

  const loadMore = (page) => {
    setLoading(true);
    window.scrollTo(0, 0);
    // Fetch photos
    axios
      .get(baseURL + `/search/photos?query=${term}&per_page=20&page=${page}&client_id=${client_id}`)
      .then((res) => {
        updatePhotos(res, page);
        window.history.replaceState("", "", `/${term.toLowerCase()}?page=${page}`);
      });
  };

  return (
    <div className="App">
      <Container className="_wrapper" maxWidth="md" sx={{ padding: { sm: "20px 40px" } }}>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} term={term} getPhotos={getPhotos} />

        <Divider sx={{ margin: "20px 0" }} />
        <Typography variant="h5" component="h2" mb={3} textTransform="capitalize" sx={{ opacity: 0.8 }}>
          {term}
        </Typography>

        {loading ? (
          <CircularProgress sx={{ m: "98px 0" }} />
        ) : (
          <>
            <Gallery photoList={photos} term={term} />
            <Pagination currentPage={currentPage} totalPages={totalPages} loadMore={loadMore} />
          </>
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default App;
