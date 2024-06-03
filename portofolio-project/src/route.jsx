import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Projects from "./page/Projects";
import Contact from "./page/Contact";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/projects',
        element: <Projects/>
    },
    {
        path: '/contact',
        element: <Contact/>
    }
])

export default route