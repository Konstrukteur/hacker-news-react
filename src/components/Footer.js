import { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = ({
  query,
  setQuery,
  setEntries,
  setIsLoading,
  currentPage,
  setCurrentPage,
  setTotalPages,
}) => {
  const navigate = useNavigate();
  const baseUrl = "https://hn.algolia.com/api/v1/";
  const initialUrl = `${baseUrl}search?tags=front_page`;

  const queryRef = useRef(null);

  const [params, setParams] = useState("search?tags=front_page");
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
      console.log("hello from useEffect");
      console.log(data);
      setTotalPages(data.nbPages);
      setEntries(data.hits);
      setIsLoading(false);
    });
  }, [apiUrl]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // console.log(query);
      // Trying to use useRef for query input
      queryRef.current = query;
      console.log(queryRef.current);
      setIsLoading(true);
      setParams("search?query=");
      setCurrentPage(0);
      setQuery(queryRef.current);
      console.log(query);
      navigate("/search");
    }
  };

  return (
    <>
      <div className='footer-container'>
        <div className='footer-nav'>
          <span class='yclinks'>
            <a href='newsguidelines.html'>Guidelines</a> |{" "}
            <a href='newsfaq.html'>FAQ</a> | <a href='lists'>Lists</a> |{" "}
            <a href='https://github.com/HackerNews/API'>API</a> |{" "}
            <a href='security.html'>Security</a> |{" "}
            <a href='https://www.ycombinator.com/legal/'>Legal</a> |{" "}
            <a href='https://www.ycombinator.com/apply/'>Apply to YC</a> |{" "}
            <a href='mailto:hn@ycombinator.com'>Contact</a>
          </span>
        </div>
        <div className='footer-search-container'>
          <NavLink to='/search'>Search:</NavLink>
          <input
            className='footer-search-input'
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
