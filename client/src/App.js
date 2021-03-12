import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomeScreen from './Components/Screens/HomeScreen';
import LoginScreen from './Components/Screens/LoginScreen';

function App() {
  return(
    <Router>
      <Header />
      <main style={{ minHeight: "87vh" }}>
        <Route exact path="/" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
      </main>
      <Footer />
    </Router>
  )
}

export default App;