import React, { useEffect } from "react";
import layout from "./content.module.scss";
import Search from "../components/search/search";
import { Link, Route, Switch } from "react-router-dom";
import Collection from "../components/collection/collection";
const Layout: React.FC = () => {
  return (
    <section className={layout.section}>
      <header>
        <nav>
          <Link to="/">My collections</Link>
          <Link to="/search">Search photos</Link>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Collection} />
          <Route path="/search" component={Search} />
        </Switch>
      </main>
    </section>
  );
};

export default Layout;
