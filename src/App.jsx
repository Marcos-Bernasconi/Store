import { useState } from "react";
import { Navbar } from "./Navbar";

import { ProductList } from "./ProductList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <ProductList />
      </div>
    </>
  );
}

export default App;
