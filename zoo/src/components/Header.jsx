import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Zoo app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/animals">Animals</Link>
            <Link to="/birds">Birds</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
