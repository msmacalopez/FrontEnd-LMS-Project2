import React from "react";
import BookCard2 from "../../components/BookCard2";

export default function AllBooksPage() {
  return (
    <div className="card flex flex-col items-center justify-center my-10">
      <h2 className="text-primary text-4xl font-bold mb-8">
        Books In Catalogue...
      </h2>
      {/* Search Input */}
      <label
        className="input rounded-full md:w-200 focus-within:border-gray-100
    focus-within:ring-0
    focus-within:shadow-none mb-8"
      >
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search for your favorites books (e.g. Quijote, Sherlock Holmes...)"
        />
      </label>

      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap items-center justify-center">
        <BookCard2 />
        <BookCard2 />
        <BookCard2 />
        <BookCard2 />
      </div>
    </div>
  );
}
