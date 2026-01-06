import React from "react";
import Review from "./Review";

export default function BookReviews() {
  return (
    <div>
      <h3 className="text-secondary text-3xl text-left font-bold my-5">
        Reviews
      </h3>
      <div className="flex gap-5 flex-wrap">
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
}
