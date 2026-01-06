import React from "react";
import { Link } from "react-router-dom";

export default function BookCard2() {
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-sm max-h-45 max-w-100">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Book Cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Book Title</h2>
          <small>Drama</small>
          <p>Best Seller written by JP...</p>
          <div className="card-actions justify-end">
            <Link to="/bookdetails" className="btn btn-primary max-h-8">
              More / Rent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
