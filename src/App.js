import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import DisplayUser from './components/DisplayUser'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/display' element={<DisplayUser/>}/>
      </Routes>
    </>
  )
}

export default App