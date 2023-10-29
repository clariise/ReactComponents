import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div>
        <h1>Activity 13 - React Components, Props, and useState</h1>
        <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="ReactLogo" width="300" />
      </div>

        <button  onClick={() => setCount((count) => count + 1)}> + </button>

        <button  onClick={() => setCount((count) => count - 1)}> - </button>

       <h2 >Counter is {count}</h2>
       
    
      <footer className="bg-light p-3 text-center footer at-auto">@2023 ReactComponent | All rights reserved.</footer>

    </>
  ) 
}

export default App
