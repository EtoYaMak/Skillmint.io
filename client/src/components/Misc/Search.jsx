// SearchComponent.jsx
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function SearchComponent({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the onSearch callback with the query
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="flex items-center w-full">
      <div className="searchInput flex justify-center rounded mx-2 gap-2 w-full relative">
        <input
          type="text"
          className="w-full font-Poppins rounded-[2px] border-[1px] h-14 pl-12 text-lg"
          placeholder="Search a job title"
          value={searchQuery}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-transparent flex gap-2 justify-evenly items-center text-[#333]">
          <FaSearch size={24} className="bg-transparent" />
        </span>
      </div>
    </div>
  );
}
