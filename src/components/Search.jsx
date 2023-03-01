import React from 'react'
import { useState } from 'react'

function Search(props) {
    const [query, setQuery] = useState("")

    const handleSelect = (e) => {
        setQuery(e.target.value)
        props.searchFood(e.target.value)
    }
  return (
    <div>
    <h2>Search</h2>
    <form>
        <label htmlFor='name'></label>
        <input type="text" name='name' value={query} onChange={(e) => handleSelect(e)} />
    </form>

    </div>
  )
}

export default Search