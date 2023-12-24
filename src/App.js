import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Landing_page from "./Pages/Landing_page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing_page />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
