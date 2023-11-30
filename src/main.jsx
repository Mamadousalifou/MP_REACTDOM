import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./components/Contact";
import Apropos from "./components/Apropos";
import Footer from "./components/Footer.jsx";
import VisitezBolg from "./components/VisitezBolg.jsx";
import Article from "./components/Article.jsx";
import PageErreur from "./components/PageErreur.jsx";
import Emploi from "./components/Emploi.jsx";
import Erreur404 from "./components/Erreur404.jsx";
import Protege from "./components/Protege.jsx";
const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageErreur />,
  },
  {
    path: "/apropos",
    element: <Apropos />,
    children: [
      {
        path: "/apropos/contact/",
        element: <Contact />,
      },
      {
        path: "/apropos/emploi",
        element: <Emploi />,
      },
    ],
  },

  {
    path: "/blog",
    element: <VisitezBolg />,
  },
  {
    path: "/blog/:id/",
    element: (
      <Protege esConnecter={true}>
        <Article />
      </Protege>
    ),
    children: [
      {
        path: "/blog/:id/1",
        element: <Footer />,
      },
    ],
  },
  {
    path: "*",
    element: <Erreur404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
