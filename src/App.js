
import React from 'react';
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/error"; 
import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import './index.css'
import userContext from './utils/Usercontext';
import { Provider } from 'react-redux';
import Appstore from './utils/AppStore';

const AppLayout = () => {
  return (
    <Provider store={Appstore}>
    <userContext.Provider value={userContext.name}>
      <Header />
      <Outlet />
    </userContext.Provider>
    </Provider>
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
        path:"/restaurent/:id",
        element:<Menu/>
      }
    ],
  },
]);

export default appRouter


