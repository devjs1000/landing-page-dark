import { StrictMode } from "react";
import { render } from "react-dom";
import "./index.css";
import "./global.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./reducers/store";
import { BrowserRouter } from "react-router-dom";

render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
