import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route path={'/'} element={<Home />}></Route>
      <Route path={'/contact'} element={<Contact />}></Route>
      <Route path={'/about'} element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
