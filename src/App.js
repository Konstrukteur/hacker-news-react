import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import NewsLayout from "./components/NewsLayout";
import SearchLayout from "./components/SearchLayout";
import Search from "./components/Search";
import Entry from "./components/Entry";
import loading from "./images/loading.gif";
import Pagination from "./components/Pagination";

function App() {
  const [query, setQuery] = useState();
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
      <Route
        path='/'
        element={<NewsLayout query={query} setQuery={setQuery} />}
      />
      <Route
        path='/news'
        element={<NewsLayout query={query} setQuery={setQuery} />}
      />
      <Route
        path='/newest'
        element={<NewsLayout query={query} setQuery={setQuery} />}
      />
      <Route
        path='/front'
        element={<NewsLayout query={query} setQuery={setQuery} />}
      />
      <Route
        path='/newcomments'
        element={<NewsLayout query={query} setQuery={setQuery} />}
      />
      <Route
        path='/ask'
        element={<NewsLayout query={query} setQuery={setQuery} />}
      />
      <Route
        path='/show'
        element={<NewsLayout query={query} setQuery={setQuery} />}
      />
      <Route
        path='/search'
        element={<SearchLayout query={query} setQuery={setQuery} />}
      />
    </Routes>
  );
}

export default App;
