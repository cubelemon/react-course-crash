import { Link } from "react-router-dom";

function Nav() {
    return(
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users/Ronaldo username">Ronaldo</Link>
          <Link to="/users/BrAgg">brAgg</Link>
        </nav>
    )

}

export default Nav;

