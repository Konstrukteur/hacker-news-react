import "../styles/pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const numberOfVisiblePages = 10;
  const center = numberOfVisiblePages / 2;
  const lowerBoundary = center + 1;
  const upperBoundary = totalPages - center;

  const createPages = () => {
    return Array.from({ length: numberOfVisiblePages }, (value, index) =>
      totalPages < numberOfVisiblePages || currentPage < center
        ? index
        : index - center + currentPage
    ).filter((value) => value < totalPages);
  };

  return (
    <div className='pagination-links'>
      {totalPages > numberOfVisiblePages && currentPage > center && (
        <div
          key={totalPages}
          className='page-link'
          onClick={() => {
            setCurrentPage(0);
          }}
        >
          1
        </div>
      )}
      {currentPage !== 0 && currentPage >= lowerBoundary && (
        <div
          key='prev'
          className='page-link'
          onClick={() => {
            setCurrentPage((curr) => curr - 1);
          }}
        >
          {"<"}
        </div>
      )}

      {createPages().map((page) => {
        return (
          <div
            key={page}
            className={`${
              page === currentPage ? "active-page-link" : "page-link"
            }`}
            id={page}
            value={page}
            onClick={() => {
              setCurrentPage(page);
            }}
          >
            {page + 1}
          </div>
        );
      })}
      {totalPages !== currentPage + 1 && currentPage <= upperBoundary && (
        <div
          key='next'
          className='page-link'
          onClick={() => {
            setCurrentPage((curr) => curr + 1);
          }}
        >
          {">"}
        </div>
      )}
      {totalPages > numberOfVisiblePages && currentPage <= upperBoundary && (
        <>
          <div
            key={totalPages}
            className='page-link'
            onClick={() => {
              setCurrentPage(totalPages - 1);
            }}
          >
            {totalPages}
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
