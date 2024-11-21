import React from "react"
import ReactDOM from "react-dom/client"
import { Header } from "./components/Header"
import { Body } from "./components/Body"
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"

import About from "./components/About"
import { Contact } from "./components/Contact"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"

const AppLayout = ()=>{
    return (
    <div className="App">
<Header></Header>
<Outlet></Outlet>
    </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body></Body>
            },
            {
                path:"/about",
                element:<About></About>
            },{
                path:"/contact",
                element:<Contact></Contact>
            },{
                path:"/restaurant/:resId",
                element: <RestaurantMenu></RestaurantMenu>
            }
        ],
        errorElement:<Error></Error>
    },
])
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>)