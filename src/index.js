import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import DesktopApp from './DesktopApp';
import MobileApp from './MobileApp';
import ErrorPage from "./components/errorPage";

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DesktopApp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/mobile",
    element: <MobileApp />,
    errorElement: <ErrorPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
