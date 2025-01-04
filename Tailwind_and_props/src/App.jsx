import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
let myObj = {
  username:"Buddy Talk",
  domain:".com",
}
let myArr = {
  username:"Buddy Talk Array",
  domain:".com",
}
  return (
    <>
      <h1 className='text-green-500'>Tailwind Test</h1>
      {/*
        Creating a COMPONENT of this so we can reuse it as many times as we want !!
      <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
        <div>
          <img
            src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
            alt="test"
            width="300"
            height="300"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold text-lg ">Bored ape nft accidental</h1>
            <h1 className="font-bold font-RubikBold text-lg ">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div> */}

      {/* Loading Card Component */}
      <Card name="Adios" value="Value" />
      {/* whatever value passed in components, will show in props, but cannot pass array nd object directly, for this use variable */}
      {/* <Card name="Bon apetit" someArr={myArr} someObj={myObj} /> */}
      <Card name="Bon apetit" value="Price Tag"/>
    </>
  )
}

export default App
