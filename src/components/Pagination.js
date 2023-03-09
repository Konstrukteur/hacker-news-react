import "../styles/pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const handleClick = (event) => {
    console.log(event.target.innerHTML - 1);
    setCurrentPage(event.target.innerHTML - 1);
  };
  return (
    <div>
      {[...Array(totalPages).keys()].map((page) => {
        if (currentPage === page) {
          return (
            <div className='activePageLink' id={page}>
              {page + 1}
            </div>
          );
        } else {
          return (
            <div
              className='pageLink'
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
      })}
    </div>
  );
};

export default Pagination;
