import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";
import axios from "axios";

import "./App.css";
import MainBoard from "./shared/components/MainBoard/MainBoard";
import MainNav from "./shared/components/Nav Bar/MainNav";
import Wishlist from "./shared/components/Places/Wishlist";
import LoginForm from "./shared/components/Places/Login";
import data from "./shared/components/MainBoard/Data";
import NewOutfit from "./shared/components/Places/NewOutfit";

function App() {
  const { products } = data;
  
  const [pinnedItems, setPinnedItems] = useState([]);
  const onAdd = (product) => {
    const exist = pinnedItems.find((x) => x.id === product.id);
    if (!exist) { // if the item is not in the wishlist already, add it (no duplicates)
      setPinnedItems([...pinnedItems, { ...product }]);
    }
    const addPin = {
      name: product.name,
      image: product.image,
      description: product.description
    }
    
    localStorage.setItem("Name", JSON.stringify(product.name));
    localStorage.setItem("Image", JSON.stringify(product.image));
    localStorage.setItem("Description", JSON.stringify(product.description));
    
    
    axios.post('http://localhost:4000/makepinned', addPin);
    console.log("Saved in local Storage");
  };
  
  const onRemove = (product) => {
    setPinnedItems(pinnedItems.filter((x) => x.id !== product.id));
  }

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <MainNav />
            <MainBoard onAdd = {onAdd} products={products}  onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  product={isHovering && products.name}/>
          </Route>
          <Route path="/wishlist">
            <Wishlist onRemove={onRemove} pinnedItems={pinnedItems} products={products} />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path = "/newoutfit">
            <NewOutfit/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
