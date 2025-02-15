import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Docs from "./components/Docs";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="list-Header">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/docs">Documentation</a>
              </li>
            </ul>
          </nav>
          <h1>Tap to Visit</h1>
        </header>

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
