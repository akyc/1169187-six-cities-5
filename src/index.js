import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";

const Settings = {
  PLACES_FOUND: 737
};

ReactDOM.render(
    <App
      placesFound={Settings.PLACES_FOUND}
    />,
    document.querySelector(`#root`)
);
