import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return(
    <Router>
      <Header />
      <main style={{minHeight: "87vh"}}>
        <h1> Cloud POS </h1>
      </main>
      <Footer />
    </Router>
  )
}

export default App;