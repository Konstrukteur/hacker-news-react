import { useState, useEffect } from "react";
import Pagination from "./Pagination";

const Search = ({ setEntries, setIsLoading }) => {
  const [query, setQuery] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const getData = async () => {
    const data = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${query}&page=${currentPage}`
    )
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        alert("There was an error retrieving the data");
      });
    return data;
  };

  useEffect(() => {
    setIsLoading(true);
    getData().then((data) => {
      setTotalPages(data.nbPages);
      setEntries(data.hits);
      setIsLoading(false);
    });
  }, [currentPage]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      setCurrentPage(0);
      getData().then((data) => {
        setTotalPages(data.nbPages);
        setEntries(data.hits);
        setIsLoading(false);
      });
    }
  };

  const handleClick = () => {
    setIsLoading(true);
    setCurrentPage(0);
    getData().then((data) => {
      setTotalPages(data.nbPages);
      setEntries(data.hits);
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className='search-bar'>
        <div className='search-bar-title'>Hacker News</div>
        <input
          className='search-bar-input'
          type='text'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button
          className='search-bar-button'
          type='button'
          onClick={handleClick}
        >
          search
        </button>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default Search;
