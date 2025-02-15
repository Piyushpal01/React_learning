import React from 'react'
import { useParams } from 'react-router-dom'
// this useParams method give access to the value that we capture from url nd stored in afterslash variable

function Myparams() {
  const {id} = useParams() // this is hook that allow to access the id var
  return (
    <div className='bg-black text-white font-semibold text-2xl tracking-wider p-6 rounded'> Hello: {id}</div>
  )
}

export default Myparams