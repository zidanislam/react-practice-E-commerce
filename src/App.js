import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import CartPage from "./Components/CartPage/CartPage";
import CheckOut from "./Components/CheckOut/CheckOut";
import Main from "./Components/Layout/Main";
import Shop from "./Components/Shop/Shop";
import ThankYou from "./Components/Thankyou/ThankYou";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      loader: async () => fetch("products.JSON"),
      element: <Main />,
      children: [
        {
          path: "/",
          loader: async () => fetch("products.JSON"),
          element: <Shop />,
        },
        {
          path: "/home",
          loader: async () => fetch("products.JSON"),
          element: <Shop />,
        },
        {
          path: "/shop",
          loader: async () => fetch("products.JSON"),
          element: <Shop />,
        },
        {
          path: "/cart",
          element: <CartPage />,
        },
        {
          path: "/check-out",
          element: <CheckOut />,
        },
        {
          path: "/thank-you",
          element: <ThankYou />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
