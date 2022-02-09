import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ul className="navigation-items">
        <li>
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/About"}>
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"/Contact"}>
            Contact
          </Link>
        </li>
        <li>
          <Link className="nav-link" to={"*"}>
            Not Page
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default App;
