// src/components/Pagination.js
import React from 'react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 my-4">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'} rounded-full px-3 py-1 border border-blue-500 cursor-pointer`}>
            <a onClick={() => onPageChange(number)} href="#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
