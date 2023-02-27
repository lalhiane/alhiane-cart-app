import { Route, Routes } from "react-router-dom";

import AppNavbar from "./components/AppNavbar";

import Cart from "./components/Cart";

import Products from "./components/Products";

import "./App.css";

function App() {

  return (<>
    
    <AppNavbar />

    <Routes>

      <Route path="/" element={<Products />} />
      
      <Route path="/cart" element={<Cart />} />
      
    </Routes>

  </>);

}

export default App;
