import { Routes, Route } from 'react-router'

import Layout from './pages/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ContactMe from './pages/ContactMe'
import Missing from './pages/Missing'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contactMe' element={<ContactMe/>}/>

        <Route path='*' element={<Missing/>}/>
      </Route>
    </Routes>
  )
}

export default App
