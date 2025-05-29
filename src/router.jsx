import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home";
import Registar from "./Shared/Registar";
import SignIn from "./Shared/SignIn";
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <h2>This pages is not found</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/registar',
                element:<Registar></Registar>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            }
        ]
    },
]);

export default router;