import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <h1>Hello, Developer to | React-DEMO</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Landing Page</NavLink>
            {/* <Link to="/person">Persons</Link> */}
            <NavLink to="/about">About</NavLink>
            {/* <a href="/home">Home</a>
            <a href="/persons">Perons</a> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
