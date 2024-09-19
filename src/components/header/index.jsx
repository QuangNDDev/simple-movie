import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <NavLink to={"#"} className={"text-primary"}>
        Home
      </NavLink>
      <NavLink to={"#"} className={"text-primary"}>
        Movies
      </NavLink>
    </header>
  );
}

export default Header;
