import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";

import "./server";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import HostVanInfo from "./pages/Host/HostVanInfo";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} errorElement={<Error />} loader={vansLoader}></Route>
      <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route
          loader={async () => {
            return null;
          }}
          path="income"
          element={<Income />}
        />
        <Route
          loader={async () => {
            return null;
          }}
          path="reviews"
          element={<Reviews />}
        />
        <Route loader={hostVansLoader} path="hostvans" element={<HostVans />} />
        <Route
          loader={async () => {
            return null;
          }}
          path="hostvans/:id"
          element={<HostVanDetail />}
        >
          <Route
            loader={async () => {
              return null;
            }}
            index
            element={<HostVanInfo />}
          />
          <Route
            loader={async () => {
              return null;
            }}
            path="pricing"
            element={<HostVanPricing />}
          />
          <Route
            loader={async () => {
              return null;
            }}
            path="photos"
            element={<HostVanPhotos />}
          />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
