
import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/error"; // Correct the import name to Error
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import Grocery from "./components/grocery";
import './index.css'



const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about", // Corrected path
        element: <About />,
      },
      {
        path: "/contact", // Corrected path
        element: <Contact />,
      },
      {
        path: "/cart", // Corrected path
        element: <Cart />,
      },
      {
        path: "/grocery", // Corrected path
        element: <Grocery/>,
      },
      {
        path:"/restaurent/:id",
        element:<Menu/>
      }
    ],
  },
]);

export default appRouter


