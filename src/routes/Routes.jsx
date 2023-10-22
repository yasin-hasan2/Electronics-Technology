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
import ProductDetails from "../components/pages/details/ProductDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://electronics-tecnology-server.vercel.app/phone"),
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
          fetch(
            `https://electronics-tecnology-server.vercel.app/phone/${params.id}`
          ),
      },
      {
        path: "/myProduct",
        element: (
          <PrivateRoute>
            {" "}
            <MyProduct></MyProduct>{" "}
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://electronics-tecnology-server.vercel.app/phone"),
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
        loader: () =>
          fetch("https://electronics-tecnology-server.vercel.app/users"),
      },
      {
        path: "/brand/:_id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://electronics-tecnology-server.vercel.app/phone/${params._id}`
          ),
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
