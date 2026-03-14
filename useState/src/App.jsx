import React from 'react'
import Increase from './Components/Increase'
import ChangeUser from './Components/ChangeUser'
import AddUser from './Components/AddUser'

const App = () => {
  return (
    <>
      {/* Increase And Decrease Component */}
      <Increase/>

      {/* Usestate With Object */}
      <ChangeUser/>
      
      {/* Usestate With array */}
      <AddUser/>
    </>
  )
}

export default App