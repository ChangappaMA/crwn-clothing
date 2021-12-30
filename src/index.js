import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./index.css";
import App from "./App";
import exportedStoreObjects from "./redux/store";

ReactDOM.render(
  <Provider store={exportedStoreObjects.store}>
    <BrowserRouter>
      <PersistGate persistor={exportedStoreObjects.persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
