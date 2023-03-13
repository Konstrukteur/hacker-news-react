import { useState, useEffect } from "react";
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
  // useNavigate to get to Search Page on submit
  const navigate = useNavigate();
  // set baseUrl and initialUrl
  const baseUrl = "https://hn.algolia.com/api/v1/";
  const initialUrl = `${baseUrl}search?tags=front_page`;

  // set params and apiUrl for potential implementation of filters
  const [params, setParams] = useState("search?tags=front_page");
  const [apiUrl, setApiUrl] = useState(initialUrl);

  // fetch data form apiUrl
  const getData = async () => {
    const data = await fetch(apiUrl)
      .then((response) => response.json())
      .catch((error) => {
        console.log(error);
        alert("There was an error retrieving the data");
      });
    return data;
  };

  // build apiUrl on page or params change
  // params change is hook for implementing potential filters on news page
  useEffect(() => {
    setApiUrl(`${baseUrl}${params}&page=${currentPage}`);
  }, [currentPage, params]);

  // trigger getData on apiUrl change
  useEffect(() => {
    getData().then((data) => {
      setTotalPages(data.nbPages);
      setEntries(data.hits);
      setIsLoading(false);
    });
  }, [apiUrl]);

  // set isLoading, current page and navigate to Search Page
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Trying to use useRef for query input
      setIsLoading(true);
      setCurrentPage(0);
      navigate("/search");
    }
  };

  return (
    <>
      <div className='footer-container'>
        <div className='footer-nav'>
          <span className='yclinks'>
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
