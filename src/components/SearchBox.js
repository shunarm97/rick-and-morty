import React, { useState } from "react";
import Results from '../components/Results'
import ResidentContainer from "../components/ResindentContainer";
import LocationContainer from "../components/LocationContainer";
import './searchbox.css'

const random = Math.floor(Math.random() * 126) + 1

const SearchBox = () => {

  // Estado para mostrar ubicacion al azar
  // y enviar la url por axios a los demas componentes

  const [url, setUrl] = useState(`https://rickandmortyapi.com/api/location/${random}`)
  const [search, setSearch] = useState("")
  const handleSearch = (url) => {
    setSearch("");
    setUrl(url);
  }
  return (

    <div className="search-box">
      <div className="searchbar">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      </div>
      {search !== "" && (
        <Results
          url={`https://rickandmortyapi.com/api/location/?name=${search}`}
          handle={handleSearch}
        />
      )}

      <LocationContainer url={url} />
      <ResidentContainer url={url} />
    </div>
  );
};

export default SearchBox;