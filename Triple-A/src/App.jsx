import './App.css'

import { Routes, Route } from "react-router-dom"
import Dashboard from '../components/Dashboard'
import ArtContainerAndii from '../components/ArtContainerAndii'
import NavBar from '../components/NavBar'
import About from '../components/About'
import Location from '../components/Location'
import NotFound from '../components/NotFound'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='' element={<Dashboard />} />
        <Route path='/:id' element={<ArtContainerAndii />} />
        <Route path='/about' element={<About />} />
        <Route path='/location' element={<Location />} />
        <Route path='*' element={<NotFound />} /> {/* maybe we remove this line b/c the art will on the Dashboard/Main Page */}
      </Routes>
    </>
  )
}

export default App
