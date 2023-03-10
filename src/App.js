import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import HomeLayout from "./components/HomeLayout";
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
      <Route path='/' element={<HomeLayout />} />
      <Route path='/news' element={<HomeLayout />} />
      <Route path='/newest' element={<HomeLayout />} />
      <Route path='/front' element={<HomeLayout />} />
      <Route path='/newcomments' element={<HomeLayout />} />
      <Route path='/ask' element={<HomeLayout />} />
      <Route path='/show' element={<HomeLayout />} />
      <Route path='/search' element={<SearchLayout />} />
    </Routes>
  );
}

export default App;
