import React from "react";

// sections for this page
import PortfolioComponent from "./sections/productscomponent";
import ContactComponent from "./sections/contactcomponent";
import BannerComponent from "./sections/bannercomponent";

const Main = () => {
  return (
    <div>
      <BannerComponent />
      <PortfolioComponent />
      <ContactComponent />
    </div>
  );
};

export default Main;
