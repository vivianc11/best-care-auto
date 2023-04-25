import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import FAQ from './Pages/FAQ';

function App() {

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Router>
        <Routes>
          <Route path='/' element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
