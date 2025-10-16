import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Login from "../pages/SignIn/Login";
import Register from "../pages/SignIn/Register";
import Destinations from "../pages/Destinations/Destinations";
import Blog from "../pages/Blog/Blog";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import PrivetRoutes from "./PrivetRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/destinations',
                element: <PrivetRoutes><Destinations /></PrivetRoutes>
            },
            {
                path: '/blog',
                element: <PrivetRoutes><Blog /></PrivetRoutes>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
        ]
    }
])