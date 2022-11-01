import { useState } from "react";
import {FiSearch} from "react-icons/fi"
import { useNavigate } from "react-router-dom";

const Searchbar = ()  => {

  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  }
  return(
  <form onSubmit={handleSubmit} autoComplete="off" className="p-2 text-gray-400 focus-within:text-gray-600">
    <div className="flex flex-row justify-start items-center">
      <FiSearch className="w-5 h-5 ml-4"/>
      <input type="search" placeholder="Search" 
      value={searchTerm}
      name="search-field"
      autoComplete="off"
      id="search-field"
      onChange={(e) => {setSearchTerm(e.target.value)}}
      className="flex-1 bg-transparent border-none outline-none p-4 text-white text-base placeholder-gray-500" />
    </div>
  </form>
);
}
export default Searchbar;
