import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsLayout from "./components/NewsLayout";
import SearchLayout from "./components/SearchLayout";
import Search from "./components/Search";
import Entry from "./components/Entry";
import loading from "./images/loading.gif";
import Pagination from "./components/Pagination";

function App() {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    setIsLoading(false);
  }, [entries]);

  const handlePagination = () => {};

  return (
    <Routes>
      <Route path='/hacker-news-react' element={<NewsLayout />} />
      <Route path='/hacker-news-react/news' element={<NewsLayout />} />
      <Route path='/hacker-news-react/newest' element={<NewsLayout />} />
      <Route path='/hacker-news-react/front' element={<NewsLayout />} />
      <Route path='/hacker-news-react/newcomments' element={<NewsLayout />} />
      <Route path='/hacker-news-react/ask' element={<NewsLayout />} />
      <Route path='/hacker-news-react/show' element={<NewsLayout />} />
      <Route path='/hacker-news-react/search' element={<SearchLayout />} />
    </Routes>
  );
}

export default App;
