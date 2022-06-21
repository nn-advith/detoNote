import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ShowNote from './ShowNote';
import './App.css'
import Insert from './Insert'
import SharedLayout from './SharedLayout';
import DisplayLink from './DisplayLink';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Insert/>}/>
            <Route path="/link/:hashval" element={<DisplayLink/>} />
            <Route path="/note/:hashval" element={<ShowNote/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )

}

export default App