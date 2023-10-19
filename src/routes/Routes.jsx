import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/root/Root";
import Error from "../error/Error";
import Home from "../components/pages/home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("product.json"),
      },
    ],
  },
]);

export default Router;
