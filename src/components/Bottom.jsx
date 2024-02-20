import React from 'react'
import { useNavigate } from 'react-router-dom'

function Bottom() {
  const navigate = useNavigate()

  const manejarClick = () => {
    console.log("holllaaa pweeeeooaa")
    navigate('/details')  
  }

  return (
    <>
      <button className=" m-5 p-3 rounded-xl text-white bg-indigo-400" onClick={manejarClick}>    
       Mas Detalles
      </button>
    </>
  )
}

export default Bottom