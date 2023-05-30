import { createBrowserRouter } from "react-router-dom";
import { RegisteredEntities } from "./src/routes/RegisteredEntities";
import { Register } from "./src/routes/Register";
import { RegisterEntity } from "./src/routes/RegisterEntity";
import { RegisterField } from "./src/routes/RegisterField";
import { RegistrationDone } from "./src/routes/RegistrationDone";

export const router = createBrowserRouter([
  {
    path: "/",
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
  {
    path: "/register-field",
    element: <RegisterField />,
  },
  {
    path: "/registration-done",
    element: <RegistrationDone />,
  },
]);
