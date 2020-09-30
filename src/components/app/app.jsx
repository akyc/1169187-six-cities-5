import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main-page/main-page";


const App = (props) => {
  const {placesFound} = props;

  return (
    <MainPage placesFound={placesFound} />
  );
};

App.propTypes = {
  placesFound: PropTypes.number.isRequired,
};

export default App;
