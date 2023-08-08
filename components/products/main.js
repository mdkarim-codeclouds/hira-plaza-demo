import React from "react";

// sections for this page
import HeaderComponent from "./sections/headercomponent";
import ProductsComponent from "./sections/productscomponent";

const Main = () => {
  return (
    <div>
      <HeaderComponent />
      <ProductsComponent />
    </div>
  );
};

export default Main;
