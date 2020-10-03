import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainPage from "../main-page/main-page";
import LoginPage from "../login-page/login-page";
import FavoritesPage from "../favorites-page/favorites-page";
import OfferPage from "../offer-page/offer-page";

const App = (props) => {
  const {placesFound} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage placesFound={placesFound} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
        <Route path="/offer/:id" exact>
          <OfferPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
};

export default App;
