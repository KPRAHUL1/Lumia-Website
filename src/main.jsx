import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SearchPage from './RouteVariable/routevariable.jsx'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import CategoryRoute from './CatagoryRoute/Categoryroute.jsx';
import ShoppingRoute from './ShoppingRoute/Shoppingroute.jsx';
import AccountNav from './BottomNav/Components/AccountNav.jsx';


  const router = createBrowserRouter(
    [
    {
      path: "/",
      element: <App/>,
    },
    {
      path:"/Men",
      element:<CategoryRoute/>
    },
    {
      path:"/Shop",
      element:<ShoppingRoute/>
    },
    {
      path:"/account",
      element:<AccountNav/>
    },
    {
      path:"/home",
      element:<App/>
    },
    {
      path:"/home1",
      element:<App/>
    },
    // {
    //   path:"/Search/:id",
    //   element:<SearchPage/>
    // },
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
