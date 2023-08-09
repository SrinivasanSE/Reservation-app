import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import { Layout } from "./components/Layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="hotels" element={<List />} />
      <Route path="hotels/:id" element={<Hotel />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
