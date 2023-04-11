import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Routes>
          <Route path = "/header" element = {<Header></Header>}></Route>
            <Route path = "/footer" element = {<Footer></Footer>}></Route>

      
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
