import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home";
import Registar from "./Shared/Registar";
import SignIn from "./Shared/SignIn";
import JobDetails from "./Components/JobDetails/JobDetails";
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
            path:'jobs/:id',
            element:<JobDetails></JobDetails>,
            loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
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