import './App.css';
import { Container, Divider } from "@mui/material";
import Footer from "./components/Foooter";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">

      <Container className='_wrapper' maxWidth="md" sx={{ padding: { md: "40px", } }}>
        <Header />
        <Divider sx={{ margin: "24px 0" }} />
        <Gallery />
      </Container>

      <Footer />
    </div>
  );
}

export default App;
