import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer, Header, Home } from './Config'
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App