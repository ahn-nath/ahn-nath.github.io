// components/Pagination.jsx
import React from 'react';

const Pagination = () => (
  <nav>
    <ul className="pagination pagination-lg justify-content-center">
      <li className="page-item">
        <a className="page-link" aria-label="Previous" href="#">
          <span aria-hidden="true">«</span>
        </a>
      </li>
      {[1, 2, 3].map((page) => (
        <li key={page} className="page-item">
          <a className="page-link" href="#">{page}</a>
        </li>
      ))}
      <li className="page-item">
        <a className="page-link" aria-label="Next" href="#">
          <span aria-hidden="true">»</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Pagination;