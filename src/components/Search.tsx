import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

type SearchProps = {
  loadUser: (username: string) => Promise<void>;
};

const Search = ({ loadUser }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      loadUser(userName);
    }
  };

  return (
    <div className="search">
      <h2>Search user:</h2>
      <p>Here are the profile best repositories</p>
      <div className="search_container">
        <input
          className="search_input"
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search_button" onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
