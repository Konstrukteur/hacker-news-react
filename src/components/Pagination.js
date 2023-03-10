import "../styles/pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pages = [...Array(totalPages).keys()];

  const handleClick = (event) => {
    console.log(event.target.innerHTML - 1);
    setCurrentPage(event.target.innerHTML - 1);
  };

  // if pages.length <= 11 map over pages and build navigation
  // if pages.length > 12 && currentPage == 1 map over current

  // display currentPage - 5 & currentPage + 5 & first page & last page
  // [firstPage] [-5] [-4] [-3] [-2] [-1] [currentPage] [1] [2] [3] [4] [5] [lastPage]
  // always display last and next five pages, if present
  // if not on first || last page > display [firstPage] || [lastPage]

  return (
    <div className='pagination-links'>
      {pages.map((page) => {
        if (pages.length <= 11) {
          if (currentPage === page) {
            return (
              <div className='active-page-link' id={page}>
                {page + 1}
              </div>
            );
          } else {
            return (
              <div
                className='page-link'
                id={page}
                value={page}
                onClick={(event) => {
                  handleClick(event);
                }}
              >
                {page + 1}
              </div>
            );
          }
        } else {
        }
      })}
    </div>
  );
};

export default Pagination;
