import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Eventlist from "./components/event/Eventlist";
import Shoppingcart from "./components/cart/Shoppingcart";
import Confirmation from "./components/Confirmation";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Eventlist} />
      <Route exact path="/cart" component={Shoppingcart} />
      <Route exact path="/confirm" component={Confirmation} />
    </Router>
  );
}

export default App;
