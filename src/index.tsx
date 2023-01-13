import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { appStore } from "./store";
import { App } from "./app";

createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <App />
  </Provider>
);
