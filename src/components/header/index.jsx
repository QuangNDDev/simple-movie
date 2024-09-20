import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-center py-10 mb-5 text-white header gap-x-5">
      <NavLink to={"/"} className={"text-primary"}>
        Home
      </NavLink>
      <NavLink to={"#"}>Movies</NavLink>
    </header>
  );
}

export default Header;
