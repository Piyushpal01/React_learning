import { useState } from "react"


function App() {
  const [color, setColor] = useState("grey")

  // onclick function in real takes function so if you just give onclick={setColor(""} then you are giving the value to onlclick whatever setColor fn return, so better to call callback fn , pass it like onclick={() => setColor("")}
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed bottom-12 flex flex-wrap justify-center inset-x-0 px-2">
        <div className="bg-white flex flex-wrap justify-center gap-4 px-3 py-2 rounded-3xl ">
          <button className="bg-red-700 text-white px-4 py-2 rounded-full" onClick={() => setColor("red")}>Red</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-full" onClick={() => setColor("green")}>Green</button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded-full" onClick={() => setColor("blue")}>Blue</button>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full" onClick={() => setColor("pink")}>pink</button>
          <button className="bg-violet-700 text-white px-4 py-2 rounded-full" onClick={() => setColor("violet")}>violet</button>
          <button className="bg-black text-white px-4 py-2 rounded-full" onClick={() => setColor("black")}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
