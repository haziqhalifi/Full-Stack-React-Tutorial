import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import Layout from "./Layout";
import NotFoundPage from "./pages/NotFoundpage";

const routes = [{
  path: '/',
  element: <Layout />, // Layout is a component that wraps all the pages
  errorElement: <NotFoundPage />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    }, {
      path: '/about',
      element: <AboutPage />,
    }, {
      path: '/articles',
      element: <ArticlesListPage />,
    }, {
      path: '/articles/:name', // catch all article name. E.g /articles/learn-react
      element: <ArticlePage />,
    }
  ]
}]


const router = createBrowserRouter(routes);

function App() {
  return (<><RouterProvider router={router} /></>);
}

export default App;
