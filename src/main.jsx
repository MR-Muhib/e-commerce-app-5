// Import building components
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

// Import created components
import { AuthProvider } from "./contexts/Auth";
import { router } from "./router/router";
import { store } from "./app/store";

// import custom css path
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer />
      </Provider>
    </AuthProvider>
  </StrictMode>
);
