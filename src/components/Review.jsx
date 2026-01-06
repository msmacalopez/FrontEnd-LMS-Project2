import React from "react";

export default function Review() {
  return (
    <div>
      <div className="card w-[85vw] xl:w-[46vw] bg-base-100 card-sm shadow-sm">
        <div className="card-body border rounded-2xl">
          {/* Header */}
          <div className="flex gap-5 items-center">
            <h2 className="card-title">Caroline Robert</h2>
            <p>STARS</p>
          </div>
          {/* Review */}
          <div>This Book is Amazing.</div>
          {/* Date */}
          <div className="text-end">
            <p>25/04/2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
