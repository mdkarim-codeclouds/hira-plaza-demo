import React from "react";

// sections for this page
import ProductsComponent from "./sections/productscomponent";
import ContactComponent from "./sections/contactcomponent";
import BannerComponent from "./sections/bannercomponent";

const Main = () => {
  return (
    <div>
      <BannerComponent />
      <ProductsComponent />
      <ContactComponent />
    </div>
  );
};

export default Main;
