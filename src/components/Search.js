import { useState, useEffect } from "react";

const Search = ({
  setEntries,
  setIsLoading,
  currentPage,
  setCurrentPage,
  setTotalPages,
}) => {
  const baseUrl = "https://hn.algolia.com/api/v1/";
  const initialUrl = `${baseUrl}search?tags=front_page`;

  const [params, setParams] = useState("search?tags=front_page");
  const [query, setQuery] = useState();
  const [apiUrl, setApiUrl] = useState(initialUrl);

  const getData = async () => {
    const data = await fetch(apiUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        alert("There was an error retrieving the data");
      });
    return data;
  };

  // All stories matching foo
  // http://hn.algolia.com/api/v1/search?query=foo&tags=story
  // All comments matching bar
  // http://hn.algolia.com/api/v1/search?query=bar&tags=comment
  // All URLs matching bar
  // http://hn.algolia.com/api/v1/search?query=bar&restrictSearchableAttributes=url
  // All stories that are on the front/home page right now
  // http://hn.algolia.com/api/v1/search?tags=front_page
  // Last stories
  // http://hn.algolia.com/api/v1/search_by_date?tags=story
  // Last stories OR polls
  // http://hn.algolia.com/api/v1/search_by_date?tags=(story,poll)
  // Comments since timestamp X (in second)
  // http://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i>X
  // Stories between timestamp X and timestamp Y (in second)
  // http://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i>X,created_at_i<Y
  // Stories of pg
  // http://hn.algolia.com/api/v1/search?tags=story,author_pg
  // Comments of story X
  // http://hn.algolia.com/api/v1/search?tags=comment,story_X

  useEffect(() => {
    query
      ? setApiUrl(`${baseUrl}${params}${query}&page=${currentPage}`)
      : setApiUrl(`${baseUrl}${params}&page=${currentPage}`);
  }, [currentPage, params]);

  useEffect(() => {
    console.log(apiUrl);
    getData().then((data) => {
      console.log("hello from 1. useEffec");
      setTotalPages(data.nbPages);
      setEntries(data.hits);
      setIsLoading(false);
    });
  }, [apiUrl]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log(query);
      setIsLoading(true);
      setParams("search?query=");
      setCurrentPage(0);
      getData().then((data) => {
        setTotalPages(data.nbPages);
        setEntries(data.hits);
        setIsLoading(false);
      });
    }
  };

  const handleClick = () => {
    console.log(query);
    setIsLoading(true);
    setParams("search?query=");
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
    </>
  );
};

export default Search;
