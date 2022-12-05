import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [data, setData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8989/api")
      const dataFromApi = await response.text()
      setData(dataFromApi);
    }

    fetchData().catch(err => console.log(err))

  }, [])
  return (
    <div className="App">
      {data}
      <h1>WOOHOO</h1>
    </div>
  )
}

export default App
