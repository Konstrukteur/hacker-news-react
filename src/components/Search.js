import * as React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Search = ({
  query,
  setQuery,
  setEntries,
  setIsLoading,
  currentPage,
  setCurrentPage,
  setTotalPages,
  searchParams,
  setSearchParams,
}) => {
  const baseUrl = "https://hn.algolia.com/api/v1/";
  const initialUrl = `${baseUrl + "search?query="}`;

  const [params, setParams] = useState("search?query=");
  const [apiUrl, setApiUrl] = useState(initialUrl);
  const [numberResults, setNumberResults] = useState();
  const [processingTime, setProcessingTime] = useState();

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
    setApiUrl(`${baseUrl}${params}${query}&page=${currentPage}`);
  }, []);

  useEffect(() => {
    setApiUrl(`${baseUrl}${params}${query}&page=${currentPage}`);
    setSearchParams(`${query}&page=${currentPage}`);
  }, [currentPage, params]);

  useEffect(() => {
    setApiUrl(`${baseUrl}${params}${query}&page=${currentPage}`);
    getData().then((data) => {
      setTotalPages(data.nbPages);
      setNumberResults(data.nbHits);
      setProcessingTime(data.processingTimeMS);
      setEntries(data.hits);
      setIsLoading(false);
    });
  }, [apiUrl]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      setQuery(query);
      setParams("search?query=");
      setCurrentPage(0);
      setApiUrl(`${baseUrl}${params}${query}&page=${currentPage}`);
      setSearchParams(`${event.target.value}&page=${currentPage}`);
      getData().then((data) => {
        setTotalPages(data.nbPages);
        setNumberResults(data.nbHits);
        setProcessingTime(data.processingTimeMS);
        setEntries(data.hits);
        setIsLoading(false);
      });
    }
  };

  const handleClick = () => {
    setIsLoading(true);
    setQuery(query);
    setParams("search?query=");
    setCurrentPage(0);
    setApiUrl(`${baseUrl}${params}${query}&page=${currentPage}`);
    setSearchParams(`${query}&page=${currentPage}`);
    getData().then((data) => {
      setTotalPages(data.nbPages);
      setNumberResults(data.nbHits);
      setProcessingTime(data.processingTimeMS);
      setEntries(data.hits);
      setIsLoading(false);
    });
  };

  return (
    <>
      <div className='search-bar'>
        <div className='search-title'>
          <a href='https://konstrukteur.github.io/hacker-news-react/'>
            <img src={require("../images/logo-hn.png")}></img>
          </a>
          <a href='/hacker-news-react'>
            <div className='search-title-label'>
              Search
              <br />
              Hacker News
            </div>
          </a>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
        <div className='search-bar-input'>
          <input
            className='search-input'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyPress}
            placeholder='Search stories by title, url or author'
          />
        </div>
        {/* <span className="SearchIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <span className="SearchIcon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span> */}

        <button
          className='search-bar-button'
          type='button'
          onClick={handleClick}
        >
          search
        </button>
        {/* </form> */}
      </div>
      <div className='search-filters-container'>
        <div className='search-filters-selectors'></div>
        <div className='search-meta-data'>
          {numberResults &&
            `${numberResults} results (${processingTime / 1000} seconds)`}
        </div>
      </div>
    </>
  );
};

export default Search;
