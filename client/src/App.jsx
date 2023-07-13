import './index.css'
import sqlLogo from './assets/sql-server.png'

import { useState } from 'react'

const App = () => {

  const [queryDesc, setQueryDesc] = useState('')
  const [sqlQuery, setSqlQuery] = useState('') 
  const handleQueryDescChange = (e) => {
    setQueryDesc(e.target.value)
  } 

  const handleSubmit = async (e) => {
    e.preventDefault()
    const query = await generateSqlQuery(queryDesc)
    query?setSqlQuery(query):setSqlQuery('No query generated')
  }

  const generateSqlQuery = async (queryDesc) => {
    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ queryDesc: queryDesc })
      })
      const data = await response.json()
      return data.sqlQuery.trim()
    } catch (err) {
      console.error(err)
    }
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
      <pre>{sqlQuery}</pre>
    </main>
  )
}

export default App
