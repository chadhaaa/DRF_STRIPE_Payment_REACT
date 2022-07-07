import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./App.css";
import Product from "./components/Product";
import Message from "./components/Message";

function App() {
  const [message, setMessage] = useState();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      setMessage("Order completed !");
    }

    if (query.get("cancel")) {
      setMessage("Payment wasn't successfull !!");
    }
  }, []);
  return (
    <div className="App">
      {message ? (
        <Message message={message} />
      ) : (
        <Router>
          <Routes>
            <Route path="/:product_id" element={<Product />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
