import React, { useState } from "react";

import container from "./app.module.scss";
import Footer from "./components/footer/footer";
import Layout from "./page/content.page";
import { BrowserRouter } from "react-router-dom";
const App: React.FC = () => {
  return (
    <div className={container.container}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>

      <Footer />
    </div>
  );
};

export default App;
