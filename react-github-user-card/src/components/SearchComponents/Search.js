import React from "react";

const Search = props => {
  const { handleSearchSubmit, handleChange, search } = props;
  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="search"
        name="search"
        id="search"
        onChange={handleChange}
        value={search}
        placeholder="Search for a user..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
