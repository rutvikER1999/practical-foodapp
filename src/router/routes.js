import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      // },
      // {
      //   path: "/Alaram",
      //   element: <Alaram />,
      // },
      // {
      //   path: "/StopWatch",
      //   element: <StopWatch />,
      // },
    ],
  },

]);
