import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/Navbar/Navbar';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import FAQ from './Pages/FAQ';
import CustomerReviews from './Pages/CustomerReviews';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <div className="App">
      <div className='content-wrap'>
      <Header />
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/customerreviews" element={<CustomerReviews />} />
        </Routes>
      </Router>
      </div>
      <Footer className="Footer" />
    </div>
  );
}

export default App;
