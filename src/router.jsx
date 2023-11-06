// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CharacterPage from "./pages/CharacterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about/',
        element: <AboutPage />
      },
      {
        path: 'character-page/',
        element: <CharacterPage />
      }
    ],
  },
]);

export default router;