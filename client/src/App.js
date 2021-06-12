import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MenuBar from "./components/Menubar";
import Marquee from "./components/Marquee";
import Cart from "./pages/order/Cart";
import SignIn from "./components/SignIn/index";
import SignUp from "./components/SignUp";
import Home from "./pages/common/Home";
import Quick from "./pages/Quick";
import Preference from "./pages/Preference";
import Product from "./pages/common/Product";
import aboutUs from "./pages/aboutUs";
import menu from "./pages/menu";
import Footer from "./components/Footer/index.js";
import Products from "./pages/common/Products";
import PastOrder from "./pages/order/PastOrder";
import ReviewOrder from "./pages/order/ReviewOrder";
import ShippingAddress from "./pages/order/ShippingAddress";
// import Product_Details from "./pages/Product_Details";

// const stripePromise = loadStripe("pk_test_51H2jAhF6rrHNM5skrWeDa7Ug2AjxFHAhKeuw8Dv1m2OGNI7WEWf1zebIu8zW5MLhYYygTV7WcfG5L7TOSCtwpfWX00nxZ8LW4t");

function App(props) {
  const [user, setLogin] = useState();
  console.log(user);

  return (
    // <Elements stripe={stripePromise}>
    <Router>
      <MenuBar setLogin={setLogin} user={user} {...props} />
      {/* <Marquee/> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Quick Delivery" component={Quick} />
        <Route exact path="/preference" component={Preference} />
        <Route
          exact
          path="/cart"
          render={(props) => <Cart user={user} {...props} />}
        />
        <Route exact path="/products" component={Products} />
        <Route
          exact
          path="/product/:ProductId"
          render={(props) => <Product user={user} {...props} />}
        />
        <Route
          exact
          path={"/login"}
          render={(props) => <SignIn setLogin={setLogin} {...props} />}
        />
        <Route
          exact
          path="/pastorder"
          render={(props) => <PastOrder user={user} {...props} />}
        />
        <Route
          exact
          path="/revieworder"
          render={(props) => <ReviewOrder user={user} {...props} />}
        />
        <Route
          exact
          path="/shippingaddress"
          render={(props) => <ShippingAddress user={user} {...props} />}
        />
        <Route exact path="/signup" component={() => <SignUp />} />
        <Route exact path="/logout" />
        <Route exact path="/aboutUs" component={aboutUs} />
        <Route exact path="/menu" component={menu} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
