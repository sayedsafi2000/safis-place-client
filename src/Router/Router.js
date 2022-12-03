import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Component/Home/Home';
import Main from '../Component/Layout/Main';
import Purchase from '../Component/Purchase/Purchase';


const router = createBrowserRouter([
{
    path:"/",
    element:<Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
            loader:()=>fetch("http://localhost:5000/products")
        },
        {
            path:"/purchase/:id",
            element:<Purchase></Purchase>,
            loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
        }
    ]
}
])
export default router;
