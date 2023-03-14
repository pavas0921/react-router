import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Pokemon, RickAndMorty } from "../pages";
import { RAMDetails } from "../pages";
import { PokemonDetails } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
    errorElement: <div>Error</div>,
  },

  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/rickandmorty",
    element: <RickAndMorty />,
  },
  {
    path: "/rickandmorty/:id",
    element: <RAMDetails />,
  },
  {
    path: "/pokemon/:id",
    element: <PokemonDetails />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;

export { CustomRouter };
