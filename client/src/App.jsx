import './index.css'
import sqlLogo from './assets/sql-server.png'

import { useState } from 'react'

const App = () => {

  const [queryDesc, setQueryDesc] = useState('')
  const handleQueryDescChange = (e) => {
    setQueryDesc(e.target.value)
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(queryDesc)
  }
  return (
    <main className="main">
      <img src={sqlLogo} alt="sql logo" className='icon'/>
      <h3>Generate SQL with AI</h3>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Describe your query'
          name='query-description'
          onChange={handleQueryDescChange}
        />
        <input 
          type="submit"
          value="Generate SQL Query"
        />
      </form>
    </main>
  )
}

export default App
