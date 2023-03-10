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
      <Route path='/' element={<NewsLayout />} />
      <Route path='/news' element={<NewsLayout />} />
      <Route path='/newest' element={<NewsLayout />} />
      <Route path='/front' element={<NewsLayout />} />
      <Route path='/newcomments' element={<NewsLayout />} />
      <Route path='/ask' element={<NewsLayout />} />
      <Route path='/show' element={<NewsLayout />} />
      <Route path='/search' element={<SearchLayout />} />
    </Routes>
  );
}

export default App;
