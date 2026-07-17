import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Navbar from './shared/navbar/Navbar.jsx'
import Footer from './shared/footer/Footer.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './auth/login.jsx'
import Register from './auth/Register.jsx'
import DashBorad from './Dashboard/DashBoard.jsx'
import AdminProfile from './Dashboard/AdminProfile.jsx'
import Protected from './shared/ProtectedFile.jsx'
import NotFound from './shared/404/NotFound.jsx'
import Contact from "./Pages/Contact.jsx"
import Service from "./Pages/service.jsx"

function App() {

  return (
    <>
      {/* fragment is used to define the element inside jsx */}
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />

        <Route element={<Protected />}>
          <Route path='/dashboard' element={<DashBorad />} />
          <Route path='/adminprofile' element={<AdminProfile />} />
        </Route>
        
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
