import { createBrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Navbar from "./components/navbar";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
        children: [
            {
                path: '',
                element: <Home/>
            }
        ]
    }
])

export default route