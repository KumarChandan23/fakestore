import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout';
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import AllProducts from "../pages/products/all_products/AllProducts";
import SingleProduct from "../pages/products/single_product/SingleProduct";

export const myRouter = createBrowserRouter([
    {
        path:"/",
        element:<Layout />, 
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/signup",
                element: <Signup />
            },
            {
                path:"/allproducts",
                element: <AllProducts />
            },
            {
                path:"/product/:id",
                element: <SingleProduct />
            },
        ]
    }
])