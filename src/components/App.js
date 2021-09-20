import React, { useState } from 'react'
import Header from './Header'
import Profile from './Profile'
import Gallery from './Gallery'
import Modal from './Modal'

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header />
      <Profile />
      <Gallery setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} /> }
    </>
  )
}

export default App
