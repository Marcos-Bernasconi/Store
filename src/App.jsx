import { useState } from "react";
import { Navbar } from "./Navbar";
import { InfoList } from "./InfoList";
import { ProductList } from "./ProductList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden ">
        <h1 className="text-3xl font-bold my-8 pl-8">
          Store.{" "}
          <span className=" text-neutral-500">
            The best way to buy the products you love.
          </span>
        </h1>
        <ProductList />
        <h2 className="pl-8  text-2xl font-semibold w-80 mt-12 ">
          The latest.{" "}
          <span className="text-neutral-500 ">
            Take a look at what’s new, right now.
          </span>
        </h2>
      </div>
      <InfoList />
    </>
  );
}

export default App;
