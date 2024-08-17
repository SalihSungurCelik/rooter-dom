import { Route, Routes, Link, NavLink } from "react-router-dom";
import { Home } from "./pages/Home"
import { Contact } from "./pages/Contact"
import { Blog } from "./pages/Blog"

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/"}>Ana Sayfa</NavLink>
        <Link to={"/contact"}>İletişim</Link>
        <Link to={"/blog"}>Blog</Link>
      </nav>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/Blog"} element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
