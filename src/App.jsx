import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
