import { createBrowserRouter } from "react-router-dom";
import { RegisteredEntities } from "./src/routes/RegisteredEntities";
import { Register } from "./src/routes/Register";
import { RegisterEntity } from "./src/routes/RegisterEntity";

export const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/registered-entilities",
    element: <RegisteredEntities />,
  },
  {
    path: "/register-entity",
    element: <RegisterEntity />,
  },
]);
