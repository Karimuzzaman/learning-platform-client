import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Checkout from "../../Pages/Private/Checkout/Checkout";
import Blog from "../../Pages/Shared/Blog/Blog";
import CourseDetail from "../../Pages/Shared/CourseDetail/CourseDetail";
import Courses from "../../Pages/Shared/Courses/Courses";
import FAQ from "../../Pages/Shared/FAQ/FAQ";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <CourseDetail></CourseDetail>,
                loader: ({ params }) => fetch(`https://programming-master-server.vercel.app/detail/${params.id}`)
            },
            {
                path: '/courses/:id/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({ params }) => fetch(`https://programming-master-server.vercel.app/detail/${params.id}`)

            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
        ]

    },
    {
        path: "*", element: <div>
            <p className="fs-1 fw-semibold text-center text-danger"> Error 404 <br />
                This route not found!!!!
            </p>
        </div>
    }
]);