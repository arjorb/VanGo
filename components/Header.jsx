import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        VanGo
      </Link>
      <nav>
        <NavLink to="/host" style={({ isActive }) => (isActive ? activeStyle : null)}>
          Host
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : null)}>
          About
        </NavLink>
        <NavLink to="/vans" style={({ isActive }) => (isActive ? activeStyle : null)}>
          Vans
        </NavLink>
        <Link to="login" className="login-link">
          <img src="../assets/images/avatar-icon.png" className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
};

export default Header;
