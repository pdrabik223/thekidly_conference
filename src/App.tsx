
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'
import { MainPage } from './MainPage'

function App() {



  return <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="*" element={<MainPage />} />
      </Routes>
      <Footer></Footer>
    </Router>

  </>

}

export default App



