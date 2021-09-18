import React, { useState } from "react";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
import MarketPlace from "./component/MaketPlace/MarketPlace";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HeroDetail from "./component/HeroDetail/HeroDetail";

function App() {
  const [heroId, setHeroId] = useState({});
  const getHeroID = (id) => {
    setHeroId(id);
  };

  return (
    <BrowserRouter>
      <Switch>
        <div className="App">
          <div className="wrapper">
            <Route exact path="/marketplace">
              <MarketPlace getHeroID={getHeroID} />
            </Route>
            <Route path={`/hero/${heroId}`}>
              <HeroDetail heroId={heroId} />
            </Route>
            <Route exact path="/">
              <Main />
            </Route>
            <Footer />
          </div>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
