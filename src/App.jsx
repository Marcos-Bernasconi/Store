import { useState } from "react";
import { Navbar } from "./Navbar";
import { InfoList } from "./InfoList";
import { ProductList } from "./ProductList";
import { ServiceList } from "./ServiceList";
import { SpecialStore } from "./SpecialStore";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />

      <div className="overflow-x-hidden ">
        <h1 className=" my-8 pl-8 text-3xl font-bold md:py-8 md:text-5xl md:font-semibold md:leading-tight">
          Store.{" "}
          <span className=" text-neutral-500">
            The best way to buy the products you love.
          </span>
        </h1>
        <ProductList />
        <h2 className="mt-16 w-80 pl-8 text-2xl font-bold md:mt-20 md:w-1/2   ">
          The latest.{" "}
          <span className="text-neutral-500 ">
            Take a look at what’s new, right now.
          </span>
        </h2>
      </div>
      <InfoList />

      <h2 className="mt-12 w-80 pl-8  text-2xl font-bold md:mt-20 md:w-3/4 md:text-3xl md:leading-relaxed">
        The Apple experience.{" "}
        <span className="text-neutral-500">
          Do even more with Apple products and services.
        </span>
      </h2>
      <ServiceList />

      <h2 className="mt-20 w-80 pl-8  text-2xl font-bold md:mt-24 md:w-3/4 md:text-3xl md:leading-relaxed">
        Special stores.{" "}
        <span className="text-neutral-500">
          Exclusive savings for businesses, school, and more.{" "}
        </span>
      </h2>
      <SpecialStore />
    </>
  );
}

export default App;
