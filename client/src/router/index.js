import About from "../pages/client/About";
import Blog from "../pages/client/Blog";
import Contact from "../pages/client/Contact";
import Home from "../pages/client/Home";
import Services from "../pages/client/Services";
import Root from "../pages/client/Root";
export const ROUTE = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
];
