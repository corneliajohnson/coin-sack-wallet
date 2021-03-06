import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SendHome from "./components/send/SendHome";

function App() {
  return (
    <div className="container ">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/send" element={<SendHome />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
