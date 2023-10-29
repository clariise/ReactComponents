import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png" alt="ReactLogo" width="500" />
      </div>
      <p>React Components</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}> + </button>
        <button onClick={() => setCount((count) => count - 1)}> - </button>

       <p >Counter is {count}</p>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
