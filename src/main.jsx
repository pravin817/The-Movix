import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

// Import the store
import { store } from "./store/store.js";

// Import the provider. Provide the Redux Store to React components
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
