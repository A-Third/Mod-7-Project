import { useState } from "react"
import { handleFetch } from "../utils"
import { useContext } from "react";
import ArtContext from "../context/ArtContext";

function ArtSearch() {
  const { searchData, setSearchData } = useContext(ArtContext);
  console.log('TEST: ', searchData)

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const [data, error] = await handleFetch(`https://api.artic.edu/api/v1/artworks/search?q=${inputValue}`);
    if (data) setSearchData(data.data);
    if (error) console.error(error);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input type="text" className="form-control" id="searchInput" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit" className="btn btn-success">Search</button>
    </form>
  )
}

export default ArtSearch
