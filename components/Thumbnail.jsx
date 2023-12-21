"use client";
import React, { useEffect, useState } from "react";
import data from "./data.json";
import Pagination from "./Pagination";
const ProductPage = () => {
  const [activePic, setActivePic] = useState(1);
  const [amount, setAmount] = useState(1);
  const [value, setValue] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagesToShow = 5;

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }
    setCurrentPage(page);
  };
  useEffect(() => {
    setValue(value);
  }, [value]);
  const thPerProduct = 3;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [dataThumbNails, setdataThumbNails] = useState(arr.slice(0, -3));

  console.log({ dataThumbNails });
  const pre = () => {
    let copy = [...dataThumbNails];
    copy.pop();
    let f = copy.push(dataThumbNails[0]);
    console.log(copy.pop());
  };
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex gap-6 lg:w-2/4">
        <div className="flex flex-col justify-between h-24 gap-5">
          <button
            className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl "
            onClick={() =>
              // setActivePic((prev) => {
              //   if (prev <= 0) {
              //     return data.length - 1;
              //   } else {
              //     return prev - 1;
              //   }
              // })
              // setdataLength(data.slice())
              pre()
            }
          >
            <div className="h-5 w-5 border border-black border-b-0 border-l-0 -rotate-45 m-5"></div>
          </button>
          <div className="border">
            {data.map((img, idx) => (
              <img
                src={img}
                alt=""
                className={`w-24 h-24 rounded-md cursor-pointer ${
                  activePic === idx ? "border border-blue-600" : ""
                }`}
                onClick={() => setActivePic(idx)}
                key={idx}
              />
            ))}
          </div>
          <button
            className="bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl flex justify-center items-center"
            onClick={() =>
              setActivePic((prev) => {
                if (prev == data.length - 1) {
                  return 0;
                } else {
                  return prev + 1;
                }
              })
            }
          >
            <div className="h-5 w-5 border border-black border-t-0 border-l-0 rotate-45 m-5"></div>
          </button>
        </div>
        <div className="">
          <img
            src={data[activePic]}
            alt=""
            className={`w-full h-full aspect-square object-cover rounded-xl active-img max-w-[400px] ${
              value > 50 ? "cursor-zoom-out" : "cursor-zoom-in"
            }`}
            style={{ transform: `scale(${value / 50})` }}
            onClick={() => (value > 50 ? setValue(50) : setValue(100))}
          />
          {/* <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            pagesToShow={pagesToShow}
            handlePageChange={handlePageChange}
          /> */}
          <input
            type="range"
            // min={options.minScale}
            // max={options.maxScale}
            value={value}
            onChange={(e) => setValue(+e.target.value)}
            className={`w-full mt-10 h-1 bg-red-500`}
          />
        </div>
      </div>
      {/* ABOUT */}
    </div>
  );
};

export default ProductPage;
