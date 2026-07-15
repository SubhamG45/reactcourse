import './App.css'
import  Home  from './Pages/Home.jsx'
import Navbar from './shared/navbar.jsx'
import Footer from './shared/Footer.jsx'
import Herosection from './shared/herosection.jsx'
import About from './pages/About.jsx'
import Login from './auth/Login.jsx'
import Register from './auth/Register.jsx'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>  
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home/>}> </Route>
      <Route path="/about" element={<About/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      <Route path="/register" element={<Register/>}> </Route>
    </Routes>

    <Footer />
    </>
  )
}

export default App;
