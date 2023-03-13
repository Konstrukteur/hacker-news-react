import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
// import { link } from "react-router-dom";
import Search from "./Search";
import Entry from "./Entry";
import loading from "../images/loading.gif";
import Pagination from "./Pagination";
import "../styles/searchStyles.css";
import "../styles/searchResultsStyles.css";

function SearchLayout({ query, setQuery }) {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  const handlePagination = () => {};

  return (
    <div>
      <Search
        query={query}
        setQuery={setQuery}
        entries={entries}
        setEntries={setEntries}
        setIsLoading={setIsLoading}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setTotalPages={setTotalPages}
      />
      <div>
        {isLoading === true && <img src={loading} alt='loading'></img>}
        {entries.length > 1 &&
          entries.map((entry) => (
            <Entry
              key={entry.objectID}
              entry={entry}
              setIsLoading={setIsLoading}
            />
          ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default SearchLayout;
