import React, { useState } from "react";

function SearchApp({ list }) {
  const [inputValue, setInputValue] = useState("");
  function handleInputValue(e) {
    setInputValue(e.target.value);
  }

  return (
    <div>
      <span>Search </span>
      <span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => handleInputValue(e)}
        />
      </span>
      <div>
        {list.map((item, index) => {
          return <div>{item.includes(inputValue) ? item : ""}</div>;
        })}
      </div>
    </div>
  );
}

export default SearchApp;
