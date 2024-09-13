"use client";

import React, { useState } from "react";
import { Card } from "flowbite-react";

export function Wintercarts(props) {
  const { image, title, description, money,image1 } = props;
  const [hovered,setHovered]=useState(false);

  const mouseEnter=()=>setHovered(true);
  const mouseLeave=()=>setHovered(false);

  return (
    <Card className="md:m-3 lg:m-5 bg-cover" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <a href="/Shop"><img src={hovered?image1:image} alt="" className="w-fit rounded-xl bg-cover z-10" /></a>
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
      <div className="flex items-center">
        {/* Assuming these are rating icons or indicators */}
        <svg
          className="h-5 w-5 text-yellow-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        {/* Repeat this SVG or modify based on your actual icons */}
      </div>
      <span className="font-semibold">{description}</span>
      <div className="flex items-center justify-between z-30">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {money}
        </span>
        <a
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </a>
      </div>

    </Card>
  );
}
