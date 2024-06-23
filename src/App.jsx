import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About"
import Contact from "./page/Contact";
import Project from "./page/Project";


export default function App() { 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "project",
      element: <Project />
    },
    {
      path: "about",
      element: <About />
    },
    {
      path: "contact",
      element: <Contact />
    }
  ]);

  return (
    <div className=" min-h-screen w-[100vw] bg-[#A91D3A] flex flex-col items-center">
      <RouterProvider router={router} />
    </div>
  )
};