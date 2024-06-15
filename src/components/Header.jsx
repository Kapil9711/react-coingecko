const Header = ({ sortInputs, setSortInputs }) => {
  const { searchInput, sortByMktCap, sortByPercentage } = sortInputs;

  return (
    <header>
      <input
        id="searchInput"
        value={searchInput}
        onChange={(e) =>
          handleInput(e.target.id, e.target.value, setSortInputs)
        }
        type="text"
        placeholder="Search By Name or Symbol"
      />
      <button
        className={sortByMktCap ? "active" : ""}
        id="sortByMktCap"
        onClick={(e) => handleInput(e.target.id, !sortByMktCap, setSortInputs)}
      >
        Sort By Mkt Cap
      </button>
      <button
        className={sortByPercentage ? "active" : ""}
        id="sortByPercentage"
        onClick={(e) =>
          handleInput(e.target.id, !sortByPercentage, setSortInputs)
        }
      >
        Sort by percentage
      </button>
    </header>
  );
};

const handleInput = (id, value, setSortInputs) => {
  if (id === "searchInput") setSortInputs((prev) => ({ ...prev, [id]: value }));
  if (id === "sortByMktCap")
    setSortInputs((prev) => ({
      ...prev,
      [id]: value,
      sortByPercentage: false,
    }));
  if (id === "sortByPercentage")
    setSortInputs((prev) => ({ ...prev, [id]: value, sortByMktCap: false }));
};

export default Header;
