import { createBrowserRouter } from "react-router-dom";
import Book from "../components/Book/Book";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layouts/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('http://localhost:5000/room-categories')
                },
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/book/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/book/${params.id}`)
                },
                element: <PrivateRoute><Book></Book></PrivateRoute>
            },
            {
                path: '*',
                element: <div>This Route Doesn't Found</div>
            }
        ]
    },
])