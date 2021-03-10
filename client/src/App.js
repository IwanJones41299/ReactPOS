import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <Header />
      <main style={{minHeight: "83vh"}}>
        <h1> Cloud POS</h1>
      </main>
      <Footer />
    </>
  )
}

export default App;