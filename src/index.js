import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "*",
    element: <h5>error 404: page not found</h5>,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <h2>Soy el about </h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
