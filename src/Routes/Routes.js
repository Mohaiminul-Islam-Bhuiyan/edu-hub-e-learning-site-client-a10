import {createBrowserRouter} from 'react-router-dom'
import Blog from '../components/Blog'
import Courses from '../components/Courses'
import FAQ from '../components/FAQ'
import Home from '../components/Home'
import Login from '../components/Login/Login'
import Register from '../components/Login/Register'
import Main from '../layout/Main'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: '/FAQ',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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
                path: '/courses',
                element: <Courses></Courses>
            },
        ]
    }
])
