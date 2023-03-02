import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { InfoList } from "./InfoList";
import { ProductList } from "./ProductList";
import { ServiceList } from "./ServiceList";
import { SpecialStore } from "./SpecialStore";
import { SearchResult } from "./SearchResult";
import { addProducts, searchProduct } from "./data";

import "./App.css";

function App() {
  const [text, setText] = useState();
  const [searchResult, setSearchResult] = useState();
  const [firstSearch, setFistSearch] = useState(false);

  useEffect(() => {
    addProducts();
  }, []);

  function handleChange(e) {
    //console.log(e.target.value);
    setText(e.target.value);
  }

  function handleKey(e) {
    //console.log(e);
    if (e.key == "Enter") {
      handleClick();
    }
  }

  async function handleClick() {
    const result = await searchProduct(text);
    setSearchResult(result);
    console.log(result);

    if (firstSearch == false) {
      setFistSearch(true);
      console.log("Runned again");
    }
  }
  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden ">
        <h1 className="my-8 w-80 max-w-[40rem] pl-8 text-3xl font-bold md:w-4/5 md:py-8 md:text-5xl md:font-semibold md:leading-tight lg:ml-[20%]">
          Store.{" "}
          <span className=" text-neutral-500">
            The best way to buy the products you love.
          </span>
        </h1>

        <ProductList />

        <h2 className="mt-16 w-80 pl-8 text-2xl font-bold md:mt-20 md:w-1/2 md:text-3xl  lg:ml-[20%] ">
          The latest.{" "}
          <span className="text-neutral-500 ">
            Take a look at what’s new, right now.
          </span>
        </h2>

        <InfoList />

        <h2 className="mt-12 w-80 pl-8 text-2xl  font-bold md:mt-20 md:w-3/4 md:text-3xl md:leading-relaxed lg:ml-[20%]">
          The Apple experience.{" "}
          <span className="text-neutral-500">
            Do even more with Apple products and services.
          </span>
        </h2>
        <ServiceList />

        <h2 className=" mt-20 w-80 pl-8 text-2xl  font-bold md:mt-24 md:w-3/4 md:text-3xl md:leading-relaxed lg:ml-[20%]">
          Special stores.{" "}
          <span className="text-neutral-500">
            Exclusive savings for businesses, school, and more.{" "}
          </span>
        </h2>
        <SpecialStore />
      </div>

      <h2 className=" mt-20 w-80 pl-8 text-2xl  font-bold md:mt-24 md:w-3/4 md:text-3xl md:leading-relaxed lg:ml-[20%]">
        Find what you want.{" "}
        <span className="text-neutral-500">Every need satisfied </span>
      </h2>
      <div className="my-8 flex  lg:ml-[20%]">
        <input
          onKeyDown={handleKey}
          onChange={handleChange}
          autoComplete="off_disabled"
          type="text"
          className="ml-8 p-2  text-lg outline-none md:w-80  "
          placeholder="Search products"
        />
        <button onClick={handleClick} className=" bg-gray-400 px-2">
          <svg
            className="h-8 w-8 text-secondary"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5Z"
            />
          </svg>
        </button>
      </div>
      <SearchResult data={searchResult} firstSearch={firstSearch} />
    </>
  );
}

export default App;
