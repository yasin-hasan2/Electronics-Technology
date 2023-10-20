import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/root/Root";
import Error from "../error/Error";
import Home from "../components/pages/home/Home";
import Brand from "../components/pages/shared/navbar/nevItem/brand/Brand";
import AddProduct from "../components/pages/shared/addProduct/AddProduct";
import MyProduct from "../components/pages/myProduct/myProduct";
import UpdateProduct from "../components/pages/shared/update/UpdateProduct";

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
      {
        path: "/brand",
        element: <Brand></Brand>,
      },
      {
        path: "/add",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phone/${params.id}`),
      },
      {
        path: "/myProduct",
        element: <MyProduct></MyProduct>,
        loader: () => fetch("http://localhost:5000/phone"),
      },
    ],
  },
]);

export default Router;
