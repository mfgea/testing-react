import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

import { TestPage } from "./Pages/TestPage";
import { HomePage } from "./Pages/HomePage";

import './App.scss';

function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <Routes>
          <Route path="/test" element={<TestPage />} />
          <Route path="/" element={<HomePage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;