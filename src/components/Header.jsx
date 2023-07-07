import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header({
  searching,
  setSearching,
  lightMode,
  setLightMode,
}) {
  const handleSearch = (event) => {
    setSearching((prev) => event.target.value);
  };

  return (
    <header
      style={{ backgroundColor: lightMode ? "white" : "rgb(30, 30, 30)" }}
    >
      <div>
        <FontAwesomeIcon
          icon="list-check"
          className="icon"
          onClick={() => setSearching((prev) => "")}
        />
        <h1 style={{ color: lightMode ? "black" : "white" }}>Todo List</h1>
      </div>
      <div>
        {" "}
        <input
          type="text"
          name="searchBar"
          id="searchBar"
          placeholder="What task do you're searching ?"
          value={searching}
          onChange={handleSearch}
        />
        {lightMode ? (
          <FontAwesomeIcon
            icon="moon"
            className="iconMoon"
            onClick={() => {
              setLightMode((prev) => false);
            }}
          />
        ) : (
          <FontAwesomeIcon
            icon="lightbulb"
            className="iconLight"
            onClick={() => {
              setLightMode((prev) => true);
            }}
          />
        )}
      </div>
    </header>
  );
}
