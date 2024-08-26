import './App.css'

import ArtProvider from '../context/ArtProvider'
import { Routes, Route, Link } from "react-router-dom"
import Dashboard from '../pages/Dashboard'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NavBar from '../pages/NavBar'
import NotFound from '../pages/ NotFound'

import ArtContainer from '../pages/ArtContainer'
import ArtSearch from '../components/ArtSearch'


function App() {
  return (
    <>
      <NavBar />
      <ArtSearch />
      <ArtContainer />
      <Routes>
        <Route path='' element={<Dashboard />} />
        <Route path='/:id' element={<Dashboard />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} /> {/* maybe we remove this line b/c the art will on the Dashboard/Main Page */}
      </Routes>
    </>
  )
}

export default App
