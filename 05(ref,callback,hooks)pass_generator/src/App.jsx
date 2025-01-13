import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(true) 
  const [charAllowed, setCharAllowed] = useState(true) 
  const [pass, setPass] = useState("")
  
  // useRef hook => used to give reference of other elements
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*(){}[]-+=_`~"

    for (let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPass(pass)

  }, [length, numAllowed, charAllowed, setPass]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(pass)
    passwordRef.current?.select()
    alert("Password Copied!")
  }

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  // useEffect -> : The useEffect will correctly rerun whenever length, numAllowed, or charAllowed changes, and it will regenerate the password. If any thing changes in them(the values given in array) then rerun the fn.

  return (
    <>
      <h1 className='max-w-lg mx-auto my-14 p-2 text-3xl font-semibold text-center tracking-wide text-white border-2 border-white'>Random Password Genertaor</h1>
      <div className='w-full max-w-xl mx-auto bg-gray-600 px-6 py-4 rounded-md'>
        <div className='flex'>
          <input type="text"
          value={pass}
          className='outline-none w-full py-1 px-3 rounded-md '
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
           onClick={copyToClipboard}
           className='outline-none border-none px-4 py-2 font-semibold bg-blue-500 hover:bg-green-500 rounded-md duration-200 ml-2'>Copy</button>
        </div>
        <div className='flex mt-4 text-slate-200'>
            <div className='flex gap-x-2'>
              <input
              type="range" 
              max={50}
              min={4}
              value={length}
              className='cursor-pointer'
              id='length'
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label htmlFor="length">Length: {length}</label>
            </div>
            <div className='flex gap-x-2 ml-8'>
              <input
              type="checkbox"
              id='numbers'
              defaultChecked={numAllowed}
              onChange={(prev) => setNumAllowed((prev) => !prev)}
              />
              <label htmlFor="numbers">Numbers</label>
            </div>
            <div className='flex gap-x-2 ml-8'>
              <input
              type="checkbox"
              id='spChars'
              defaultChecked={charAllowed}
              onChange={(prev) => setCharAllowed((prev) => !prev)}
              />
              <label htmlFor="spChars">Special Characters</label>
            </div>
            {/* <div className='flex gap-x-1 ml-4'>
              <input
              type="checkbox"
              id='symbols'
              defaultChecked={numAllowed}
              // onChange={(prev) => setNumAllowed((prev) => !prev)}
              />
              <label htmlFor="symbols">Symbols</label>
            </div> */}
        </div>
      </div>
      
    </>
  )
}

export default App
