import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <Header type={location.pathname === "/hotels" ? "list" : ""} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
