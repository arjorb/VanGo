import { NavLink, Outlet } from "react-router-dom";

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} end to="/host">
          Dashboard
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="/host/income">
          Income
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="/host/hostvans">
          Vans
        </NavLink>
        <NavLink style={({ isActive }) => (isActive ? activeStyle : null)} to="/host/reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default HostLayout;
