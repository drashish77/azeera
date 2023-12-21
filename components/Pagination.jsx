import React, { useState } from "react";
import "tailwindcss/tailwind.css"; // Make sure to include Tailwind CSS in your project

const Pagination = ({
  currentPage,
  totalPages,
  pagesToShow,
  handlePageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + pagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`${
            currentPage === i ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 cursor-pointer`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </li>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center space-x-2 mt-4">
      <button
        className={`${
          currentPage === 1 ? "hidden" : "block"
        } bg-blue-500 text-white py-2 px-4 rounded-md`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>
      <ul className="flex space-x-2">{renderPageNumbers()}</ul>
      <button
        className={`${
          currentPage === totalPages ? "hidden" : "block"
        } bg-blue-500 text-white py-2 px-4 rounded-md`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
