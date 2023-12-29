import { productsData } from "./api/Api";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Login from "./pages/Login";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import CreatePost from "./pages/Create";
import Header from "./components/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/productsList",
        element: <ProductsList/>,
        loader: productsData,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/create",
        element: <CreatePost />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
