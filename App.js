import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import PlayerDetails from "./src/components/PlayerDetails";
import AddPlayerData from "./src/components/AddPlayerData";
import EditPlayerDetails from "./src/components/EditPlayerDetails";
import ErrorPage from "./src/components/ErrorPage";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";



const AppLayout = () =>{
    
    // props-properties that you pass to your component as objects (basically data )
    return (
    <> 
        <Navbar/>
        <Outlet/>
        <Footer/> 
    </>
    );
}


// getting started with browser router
// you can create a router object which is an array of route objects with each object consisting of a path and a hierarchy of components 
// it will render on being redirected to that path or route 


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:< ErrorPage />,
        children:[
            {
                path:"/",
                element:<PlayerDetails/>,

            },
            {
                path:"/addplayer/:newId",
                element: <AddPlayerData />,
            },
            {
                path:"/editPlayer/:id",
                element: <EditPlayerDetails />,
            }
           
        ]
    },
    
    
])


//browseer router code

const rootelement = document.getElementById('root');
const root = ReactDOM.createRoot(rootelement);

root.render(<RouterProvider router={appRouter}/>);