import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationBar = ({ page, setPage, totalPageNum }) => {
  const handleClickOnFirst = () => {
    setPage(1);
  };
  const handleClickOnPrev = () => {
    if (page > 1) setPage((num) => num - 1);
  };

  const handleClickOnLast = () => {
    setPage(totalPageNum);
  };
  const handleClickOnNext = () => {
    if (page < totalPageNum) setPage((num) => num + 1);
  };

  const handleClickOnPage = (page) => {
    setPage(page);
  };
  return (
    <Pagination className="mt-3 justify-content-center">
      <Pagination.First disabled={page === 1} onClick={handleClickOnFirst} />
      <Pagination.Prev disabled={page === 1} onClick={handleClickOnPrev} />
      <Pagination.Item
        active={page === 1}
        onClick={() => handleClickOnPage(1)}
      >
        {1}
      </Pagination.Item>
      {page > 2 && <Pagination.Ellipsis />}

      {page > 1 && page < totalPageNum && (
        <Pagination.Item active>{page}</Pagination.Item>
      )}

      {page < totalPageNum - 1 && <Pagination.Ellipsis />}
      {totalPageNum > 1 && (
        <Pagination.Item
          active={page === totalPageNum}
          onClick={() => handleClickOnPage(totalPageNum)}
        >
          {totalPageNum}
        </Pagination.Item>
      )}
      <Pagination.Next
        disabled={page === totalPageNum}
        onClick={handleClickOnNext}
      />
      <Pagination.Last
        disabled={page === totalPageNum}
        onClick={handleClickOnLast}
      />
    </Pagination>
  );
};

export default PaginationBar;