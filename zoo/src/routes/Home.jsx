import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Link to="/animals">Animals</Link>
      <Link to="/birds">Birds</Link>
    </div>
  );
};

export default Home;
