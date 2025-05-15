import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Docs from "./components/Docs.jsx";

function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <header className="App-header">
      <nav>
        <ul className="list-Header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs">Documentation</Link>
          </li>
        </ul>
      </nav>
      {isHomePage && <h1>Tap to Visit</h1>}
    </header>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
          </Routes>
        </main>
        <footer>
          <p className="mentions">© 2025 Tap to Visit. All rights reserved.</p>
          <a href="/legal-mentions">Legal Mentions</a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
