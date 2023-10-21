import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/root/Root";
import Error from "../error/Error";
import Home from "../components/pages/home/Home";
import AddProduct from "../components/pages/shared/addProduct/AddProduct";
import MyProduct from "../components/pages/myProduct/myProduct";
import UpdateProduct from "../components/pages/shared/update/UpdateProduct";
import SignUp from "../authentication/signUp/SignUp";
import SignIn from "../authentication/signin/SignIn";
import Clint from "../components/pages/users/Clint";
import PrivateRoute from "./PrivateRoute";
import Contact from "../components/pages/contact/Contact";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/product.json"),
      },

      {
        path: "/add",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phone/${params.id}`),
      },
      {
        path: "/myProduct",
        element: (
          <PrivateRoute>
            {" "}
            <MyProduct></MyProduct>{" "}
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/phone"),
      },
      {
        path: "/singUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/singIn",
        element: <SignIn></SignIn>,
      },
      {
        path: "/clint",
        element: (
          <PrivateRoute>
            <Clint></Clint>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/contact",
        element: (
          <PrivateRoute>
            <Contact></Contact>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
