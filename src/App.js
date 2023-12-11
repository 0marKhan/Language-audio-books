import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Book1Page1 from "./audiobooks/book1/Book1Page1";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book1/page1" element={<Book1Page1 />} />
      </Routes>
    </div>
  );
}

export default App;
